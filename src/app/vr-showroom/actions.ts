'use server';

import { generateVideo } from '@/ai/flows/generate-video';

type State = {
  videoDataUri?: string | null;
  error?: string | null;
};

export async function generateVideoFromPrompt(prompt: string): Promise<State> {
  if (!prompt) {
    return { error: 'Prompt cannot be empty.' };
  }

  try {
    const result = await generateVideo(prompt);
    if (!result || !result.videoDataUri) {
      throw new Error('Video generation failed to return data.');
    }
    return { videoDataUri: result.videoDataUri };
  } catch (e: any) {
    console.error('Error generating video:', e);
    // Provide a more user-friendly error message
    const errorMessage = e.message?.includes('rate limit')
      ? 'Video generation is currently busy. Please try again in a few moments.'
      : 'An unexpected error occurred during video generation.';
    return { error: errorMessage };
  }
}
