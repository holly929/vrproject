'use server';

/**
 * @fileOverview Adapts the difficulty of VR modules based on student performance.
 *
 * - adaptModuleDifficulty - A function that adjusts the VR module difficulty.
 * - AdaptModuleDifficultyInput - The input type for the adaptModuleDifficulty function.
 * - AdaptModuleDifficultyOutput - The return type for the adaptModuleDifficulty function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptModuleDifficultyInputSchema = z.object({
  moduleName: z.string().describe('The name of the VR module.'),
  studentId: z.string().describe('The ID of the student using the module.'),
  performanceData: z
    .object({
      score: z.number().describe("The student's score on the module."),
      timeTaken: z.number().describe('The time taken to complete the module.'),
      feedback: z.string().optional().describe('Optional feedback from the student.'),
    })
    .describe('Data about the student\'s performance on the module.'),
});

export type AdaptModuleDifficultyInput = z.infer<typeof AdaptModuleDifficultyInputSchema>;

const AdaptModuleDifficultyOutputSchema = z.object({
  adjustedDifficulty: z.string().describe('The adjusted difficulty level of the module (e.g., Easy, Medium, Hard).'),
  reason: z.string().describe('Explanation of why the difficulty was adjusted.'),
});

export type AdaptModuleDifficultyOutput = z.infer<typeof AdaptModuleDifficultyOutputSchema>;

export async function adaptModuleDifficulty(
  input: AdaptModuleDifficultyInput
): Promise<AdaptModuleDifficultyOutput> {
  return adaptModuleDifficultyFlow(input);
}

const adaptModuleDifficultyPrompt = ai.definePrompt({
  name: 'adaptModuleDifficultyPrompt',
  input: {schema: AdaptModuleDifficultyInputSchema},
  output: {schema: AdaptModuleDifficultyOutputSchema},
  prompt: `You are an AI that adjusts the difficulty of VR modules based on student performance.

  You will receive the module name, student ID, and performance data, and output the adjusted difficulty level and the reason for the adjustment.

  Here are the guidelines for adjusting the difficulty:
  - If the student's score is above 90% and the time taken is less than half the average time, the difficulty should be increased to Hard.
  - If the student's score is above 75% and the time taken is less than the average time, the difficulty should be increased to Medium.
  - If the student's score is below 50%, the difficulty should be decreased to Easy.
  - If the student's score is between 50% and 75%, the difficulty should remain the same.

  Module Name: {{{moduleName}}}
  Student ID: {{{studentId}}}
  Performance Data: {{{JSON.stringify performanceData}}}

  Based on the above information, the adjusted difficulty level should be:`,
});

const adaptModuleDifficultyFlow = ai.defineFlow(
  {
    name: 'adaptModuleDifficultyFlow',
    inputSchema: AdaptModuleDifficultyInputSchema,
    outputSchema: AdaptModuleDifficultyOutputSchema,
  },
  async input => {
    const {output} = await adaptModuleDifficultyPrompt(input);
    return output!;
  }
);
