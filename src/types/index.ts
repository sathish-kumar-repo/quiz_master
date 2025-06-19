export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  category: string;
  icon: string; // Lucide
  description: string;
  questions: QuizQuestion[];
}
