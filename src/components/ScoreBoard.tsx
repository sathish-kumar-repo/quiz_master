import React from "react";
import { Trophy, Target, TrendingUp, Clock } from "lucide-react";

interface ScoreBoardProps {
  currentScore: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  correctAnswers: number;
  averageTime?: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  currentScore,
  totalQuestions,
  currentQuestionIndex,
  correctAnswers,
}) => {
  const accuracy =
    currentQuestionIndex > 0
      ? Math.round((correctAnswers / currentQuestionIndex) * 100)
      : 0;
  const progress = Math.round((currentQuestionIndex / totalQuestions) * 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-3 mx-auto">
            <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            {currentScore}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Score
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 mx-auto">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            {accuracy}%
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Accuracy
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-3 mx-auto">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            {progress}%
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Progress
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3 mx-auto">
            <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            {currentQuestionIndex + 1}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            of {totalQuestions}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Overall Progress
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {currentQuestionIndex}/{totalQuestions}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
