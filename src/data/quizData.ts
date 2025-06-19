// Quiz data structure with organized topics and questions
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
  icon: string;
  description: string;
  questions: QuizQuestion[];
}

// Sample questions - easily expandable
const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and largest city of France."
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to its reddish appearance."
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Basic addition: 2 + 2 equals 4."
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the famous Mona Lisa."
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean is the largest ocean on Earth."
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
  },
  {
    id: 7,
    question: "Which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    explanation: "World War II ended in 1945 with the surrender of Japan."
  },
  {
    id: 8,
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is approximately 300,000 kilometers per second."
  },
  {
    id: 9,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    explanation: "William Shakespeare wrote the famous tragedy 'Romeo and Juliet'."
  },
  {
    id: 10,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation: "2 is the smallest prime number and the only even prime number."
  }
];

// Generate questions for each topic (easily customizable)
const generateQuestionsForTopic = (topicId: string, baseQuestions: QuizQuestion[], count: number): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const baseQuestion = baseQuestions[i % baseQuestions.length];
    questions.push({
      ...baseQuestion,
      id: i + 1,
      question: `${baseQuestion.question} (${topicId.replace('-', ' ')} - Q${i + 1})`
    });
  }
  return questions;
};

// Quiz topics - easily add new topics here
export const quizTopics: QuizTopic[] = [
  // Science & Technology
  {
    id: 'general-science',
    name: 'General Science',
    category: 'Science & Technology',
    icon: 'Atom',
    description: 'Basic scientific principles and facts',
    questions: generateQuestionsForTopic('general-science', sampleQuestions, 25)
  },
  {
    id: 'physics',
    name: 'Physics',
    category: 'Science & Technology',
    icon: 'Zap',
    description: 'Laws of motion, energy, and matter',
    questions: generateQuestionsForTopic('physics', sampleQuestions, 30)
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'Science & Technology',
    icon: 'TestTube',
    description: 'Elements, compounds, and reactions',
    questions: generateQuestionsForTopic('chemistry', sampleQuestions, 28)
  },
  {
    id: 'biology',
    name: 'Biology',
    category: 'Science & Technology',
    icon: 'Dna',
    description: 'Living organisms and life processes',
    questions: generateQuestionsForTopic('biology', sampleQuestions, 35)
  },
  {
    id: 'technology',
    name: 'Technology',
    category: 'Science & Technology',
    icon: 'Laptop',
    description: 'Modern tech and innovations',
    questions: generateQuestionsForTopic('technology', sampleQuestions, 22)
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    category: 'Science & Technology',
    icon: 'Monitor',
    description: 'Programming and computing concepts',
    questions: generateQuestionsForTopic('computer-science', sampleQuestions, 40)
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    category: 'Science & Technology',
    icon: 'Calculator',
    description: 'Numbers, algebra, and geometry',
    questions: generateQuestionsForTopic('mathematics', sampleQuestions, 45)
  },
  {
    id: 'engineering',
    name: 'Engineering',
    category: 'Science & Technology',
    icon: 'Cog',
    description: 'Design and construction principles',
    questions: generateQuestionsForTopic('engineering', sampleQuestions, 32)
  },

  // History & Geography
  {
    id: 'world-history',
    name: 'World History',
    category: 'History & Geography',
    icon: 'Clock',
    description: 'Major historical events and periods',
    questions: generateQuestionsForTopic('world-history', sampleQuestions, 50)
  },
  {
    id: 'geography',
    name: 'Geography',
    category: 'History & Geography',
    icon: 'MapPin',
    description: 'Countries, capitals, and landmarks',
    questions: generateQuestionsForTopic('geography', sampleQuestions, 38)
  },
  {
    id: 'ancient-civilizations',
    name: 'Ancient Civilizations',
    category: 'History & Geography',
    icon: 'Building',
    description: 'Early human societies and cultures',
    questions: generateQuestionsForTopic('ancient-civilizations', sampleQuestions, 27)
  },
  {
    id: 'modern-history',
    name: 'Modern History',
    category: 'History & Geography',
    icon: 'Calendar',
    description: '20th and 21st century events',
    questions: generateQuestionsForTopic('modern-history', sampleQuestions, 33)
  },

  // Arts & Literature
  {
    id: 'literature',
    name: 'Literature',
    category: 'Arts & Literature',
    icon: 'Book',
    description: 'Famous books and authors',
    questions: generateQuestionsForTopic('literature', sampleQuestions, 29)
  },
  {
    id: 'art-history',
    name: 'Art History',
    category: 'Arts & Literature',
    icon: 'Palette',
    description: 'Famous artists and artworks',
    questions: generateQuestionsForTopic('art-history', sampleQuestions, 24)
  },
  {
    id: 'music',
    name: 'Music',
    category: 'Arts & Literature',
    icon: 'Music',
    description: 'Musical theory and famous composers',
    questions: generateQuestionsForTopic('music', sampleQuestions, 31)
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    category: 'Arts & Literature',
    icon: 'Brain',
    description: 'Philosophical concepts and thinkers',
    questions: generateQuestionsForTopic('philosophy', sampleQuestions, 26)
  },

  // Sports & Entertainment
  {
    id: 'sports',
    name: 'Sports',
    category: 'Sports & Entertainment',
    icon: 'Trophy',
    description: 'Various sports and athletic achievements',
    questions: generateQuestionsForTopic('sports', sampleQuestions, 42)
  },
  {
    id: 'movies',
    name: 'Movies',
    category: 'Sports & Entertainment',
    icon: 'Film',
    description: 'Cinema history and famous films',
    questions: generateQuestionsForTopic('movies', sampleQuestions, 36)
  },
  {
    id: 'gaming',
    name: 'Gaming',
    category: 'Sports & Entertainment',
    icon: 'Gamepad2',
    description: 'Video games and gaming culture',
    questions: generateQuestionsForTopic('gaming', sampleQuestions, 28)
  },

  // Nature & Animals
  {
    id: 'animals',
    name: 'Animals',
    category: 'Nature & Animals',
    icon: 'Rabbit',
    description: 'Wildlife and animal behavior',
    questions: generateQuestionsForTopic('animals', sampleQuestions, 34)
  },
  {
    id: 'environment',
    name: 'Environment',
    category: 'Nature & Animals',
    icon: 'TreePine',
    description: 'Ecology and environmental science',
    questions: generateQuestionsForTopic('environment', sampleQuestions, 30)
  },
  {
    id: 'space',
    name: 'Space',
    category: 'Nature & Animals',
    icon: 'Rocket',
    description: 'Astronomy and space exploration',
    questions: generateQuestionsForTopic('space', sampleQuestions, 37)
  },

  // Food & Culture
  {
    id: 'food',
    name: 'Food & Cooking',
    category: 'Food & Culture',
    icon: 'ChefHat',
    description: 'Culinary arts and cuisine',
    questions: generateQuestionsForTopic('food', sampleQuestions, 25)
  },
  {
    id: 'world-cultures',
    name: 'World Cultures',
    category: 'Food & Culture',
    icon: 'Globe',
    description: 'Cultural traditions and customs',
    questions: generateQuestionsForTopic('world-cultures', sampleQuestions, 39)
  },

  // Business & Economics
  {
    id: 'business',
    name: 'Business',
    category: 'Business & Economics',
    icon: 'Briefcase',
    description: 'Business concepts and entrepreneurship',
    questions: generateQuestionsForTopic('business', sampleQuestions, 33)
  },
  {
    id: 'economics',
    name: 'Economics',
    category: 'Business & Economics',
    icon: 'TrendingUp',
    description: 'Economic principles and markets',
    questions: generateQuestionsForTopic('economics', sampleQuestions, 28)
  },

  // Health & Lifestyle
  {
    id: 'health',
    name: 'Health & Medicine',
    category: 'Health & Lifestyle',
    icon: 'Heart',
    description: 'Medical knowledge and health facts',
    questions: generateQuestionsForTopic('health', sampleQuestions, 41)
  },
  {
    id: 'fitness',
    name: 'Fitness',
    category: 'Health & Lifestyle',
    icon: 'Dumbbell',
    description: 'Exercise and physical wellness',
    questions: generateQuestionsForTopic('fitness', sampleQuestions, 23)
  },

  // Miscellaneous
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    category: 'Miscellaneous',
    icon: 'Lightbulb',
    description: 'Mixed topics and trivia',
    questions: generateQuestionsForTopic('general-knowledge', sampleQuestions, 50)
  },
  {
    id: 'current-events',
    name: 'Current Events',
    category: 'Miscellaneous',
    icon: 'Newspaper',
    description: 'Recent news and happenings',
    questions: generateQuestionsForTopic('current-events', sampleQuestions, 20)
  }
];

export const getTopicsByCategory = () => {
  const categories: { [key: string]: QuizTopic[] } = {};
  quizTopics.forEach(topic => {
    if (!categories[topic.category]) {
      categories[topic.category] = [];
    }
    categories[topic.category].push(topic);
  });
  return categories;
};