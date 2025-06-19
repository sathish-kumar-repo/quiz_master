import { QuizQuestion } from "../types";

export const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and largest city of France.",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to its reddish appearance.",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Basic addition: 2 + 2 equals 4.",
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the famous Mona Lisa.",
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean is the largest ocean on Earth.",
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation:
      "Au is the chemical symbol for gold, derived from the Latin word 'aurum'.",
  },
  {
    id: 7,
    question: "Which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    explanation: "World War II ended in 1945 with the surrender of Japan.",
  },
  {
    id: 8,
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
    explanation:
      "The speed of light in vacuum is approximately 300,000 kilometers per second.",
  },
  {
    id: 9,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: 1,
    explanation:
      "William Shakespeare wrote the famous tragedy 'Romeo and Juliet'.",
  },
  {
    id: 10,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation:
      "2 is the smallest prime number and the only even prime number.",
  },
];
