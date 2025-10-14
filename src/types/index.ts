export interface Module {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  videoUrl?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  learningObjectives: string[];
  content: {
    type: 'video' | 'simulation' | 'quiz';
    title: string;
    duration: number; // in minutes
  }[];
}
