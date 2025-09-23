'use server';

import { generateVideo } from '@/ai/flows/generate-video';

type State = {
  videoDataUri?: string | null;
  error?: string | null;
};

export async function generateVideoFromPrompt(
  prevState: State,
  prompt: string
): Promise<State> {
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
    console.error('Error generating video in action:', e);
    // Pass the specific error message to the client
    return { error: e.message };
  }
}
