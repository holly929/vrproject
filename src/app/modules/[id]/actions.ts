'use server';

import { adaptModuleDifficulty } from '@/ai/flows/adapt-module-difficulty';
import { z } from 'zod';
import type { AdaptModuleDifficultyOutput } from '@/ai/flows/adapt-module-difficulty';

const FormSchema = z.object({
  score: z.coerce
    .number({ invalid_type_error: 'Please enter a number.' })
    .min(0, 'Score must be at least 0.')
    .max(100, 'Score cannot be more than 100.'),
  timeTaken: z.coerce
    .number({ invalid_type_error: 'Please enter a number.' })
    .min(1, 'Time taken must be at least 1 minute.'),
  feedback: z.string().optional(),
  moduleName: z.string(),
});

type State = {
  message: string | null;
  errors?: {
    score?: string[];
    timeTaken?: string[];
    feedback?: string[];
  };
  data?: AdaptModuleDifficultyOutput | null;
};

export async function getAdaptedDifficulty(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await adaptModuleDifficulty({
      moduleName: validatedFields.data.moduleName,
      studentId: 'student-123', // Hardcoded for demonstration
      performanceData: {
        score: validatedFields.data.score,
        timeTaken: validatedFields.data.timeTaken,
        feedback: validatedFields.data.feedback,
      },
    });

    return {
      message: 'Successfully adapted difficulty!',
      data: result,
    };
  } catch (error) {
    console.error('Error adapting difficulty:', error);
    return { message: 'An unexpected error occurred. Please try again.', data: null };
  }
}
