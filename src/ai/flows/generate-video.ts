'use server';

/**
 * @fileOverview A Genkit flow for generating video from a text prompt using Veo.
 *
 * - generateVideo - Generates a video based on a user's text description.
 * - GenerateVideoOutput - The return type for the generateVideo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Note: Video generation with Veo is a long-running operation.
// The initial `ai.generate` call returns an `operation` object.
// We then need to poll `ai.checkOperation` until the video is ready.
// This flow encapsulates that polling logic.

const GenerateVideoOutputSchema = z.object({
  videoDataUri: z.string().describe('The generated video as a data URI.'),
});

export type GenerateVideoOutput = z.infer<typeof GenerateVideoOutputSchema>;

export async function generateVideo(prompt: string): Promise<GenerateVideoOutput> {
  return generateVideoFlow(prompt);
}

const generateVideoFlow = ai.defineFlow(
  {
    name: 'generateVideoFlow',
    inputSchema: z.string(),
    outputSchema: GenerateVideoOutputSchema,
  },
  async (prompt) => {
    console.log(`Starting video generation for prompt: "${prompt}"`);

    let { operation } = await ai.generate({
      model: 'googleai/veo-2.0-generate-001',
      prompt,
      config: {
        durationSeconds: 5,
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation.');
    }

    console.log('Video generation operation started. Polling for completion...');

    // Poll for completion, waiting 5 seconds between checks.
    while (!operation.done) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log('Checking operation status...');
      operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
      console.error('Video generation failed:', operation.error);
      throw new Error(`Failed to generate video: ${operation.error.message}`);
    }

    // Find the media part in the final response.
    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video || !video.media?.url) {
      throw new Error('Failed to find the generated video in the operation result.');
    }
    
    console.log('Video generation complete.');

    // The URL from Veo is temporary and needs the API key.
    // We fetch it and convert to a data URI to make it permanent for the client.
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set.');
    }
    
    const videoDownloadUrl = `${video.media.url}&key=${apiKey}`;

    const response = await fetch(videoDownloadUrl);
    if (!response.ok) {
        throw new Error(`Failed to download video: ${response.statusText}`);
    }

    const videoBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'video/mp4';
    const base64Data = Buffer.from(videoBuffer).toString('base64');
    const videoDataUri = `data:${contentType};base64,${base64Data}`;

    return {
      videoDataUri,
    };
  }
);
