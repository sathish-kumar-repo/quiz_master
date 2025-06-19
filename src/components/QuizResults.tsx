import React from "react";
import { Trophy, Star, RefreshCcw, Home } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onHome: () => void;
  topicName: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  onRestart,
  onHome,
  topicName,
}) => {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const grade =
    accuracy >= 90
      ? "Excellent!"
      : accuracy >= 75
      ? "Great!"
      : accuracy >= 60
      ? "Good!"
      : "Keep Practicing!";
  const gradeColor =
    accuracy >= 90
      ? "text-green-600"
      : accuracy >= 75
      ? "text-blue-600"
      : accuracy >= 60
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 max-w-md w-full border border-slate-200 dark:border-slate-700">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            Quiz Complete!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{topicName}</p>

          <div className={`text-2xl font-bold mb-6 ${gradeColor}`}>{grade}</div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {score}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Score
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Correct
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {accuracy}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Accuracy
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <RefreshCcw className="w-5 h-5" />
              <span>Try Again</span>
            </button>

            <button
              onClick={onHome}
              className="w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-3 px-6 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Choose New Topic</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
