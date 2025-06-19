import { quizTopics } from "../main/quiz";
import { QuizQuestion, QuizTopic } from "../types";

export const generateQuestionsForTopic = (
  topicId: string,
  baseQuestions: QuizQuestion[],
  count: number
): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const baseQuestion = baseQuestions[i % baseQuestions.length];
    questions.push({
      ...baseQuestion,
      id: i + 1,
      question: `${baseQuestion.question} (${topicId.replace("-", " ")} - Q${
        i + 1
      })`,
    });
  }
  return questions;
};

export const getTopicsByCategory = () => {
  const categories: { [key: string]: QuizTopic[] } = {};
  quizTopics.forEach((topic) => {
    if (!categories[topic.category]) {
      categories[topic.category] = [];
    }
    categories[topic.category].push(topic);
  });
  return categories;
};
