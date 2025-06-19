import {
  ancientCivilizationsTopic,
  animalsTopic,
  artHistoryTopic,
  biologyTopic,
  businessTopic,
  chemistryTopic,
  computerScienceTopic,
  currentEventsTopic,
  economicsTopic,
  engineeringTopic,
  environmentTopic,
  fitnessTopic,
  foodTopic,
  gamingTopic,
  generalKnowledgeTopic,
  generalScienceTopic,
  geographyTopic,
  healthTopic,
  literatureTopic,
  mathematicsTopic,
  modernHistoryTopic,
  moviesTopic,
  musicTopic,
  philosophyTopic,
  physicsTopic,
  spaceTopic,
  sportsTopic,
  technologyTopic,
  worldCulturesTopic,
  worldHistoryTopic,
} from "../data/sample";
import { QuizTopic } from "../types";

// Quiz topics - easily add new topics here
export const quizTopics: QuizTopic[] = [
  // Science & Technology
  generalScienceTopic,
  physicsTopic,
  chemistryTopic,
  biologyTopic,
  technologyTopic,
  computerScienceTopic,
  mathematicsTopic,
  engineeringTopic,

  // History & Geography
  worldHistoryTopic,
  geographyTopic,
  ancientCivilizationsTopic,
  modernHistoryTopic,

  // Arts & Literature
  literatureTopic,
  artHistoryTopic,
  musicTopic,
  philosophyTopic,

  // Sports & Entertainment
  sportsTopic,
  moviesTopic,
  gamingTopic,

  // Nature & Animals
  animalsTopic,
  environmentTopic,
  spaceTopic,

  // Food & Culture
  foodTopic,
  worldCulturesTopic,

  // Business & Economics
  businessTopic,
  economicsTopic,

  // Health & Lifestyle
  healthTopic,
  fitnessTopic,

  // Miscellaneous
  generalKnowledgeTopic,
  currentEventsTopic,
];
