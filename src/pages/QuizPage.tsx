import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { quizTopics } from "../main/quiz";
import QuizQuestion from "../components/QuizQuestion";
import QuizTimer from "../components/QuizTimer";
import ScoreBoard from "../components/ScoreBoard";
import AdSenseBlock from "../components/AdSenseBlock";
import { useTimer } from "../contexts/TimerContext";

interface GameState {
  currentQuestionIndex: number;
  score: number;
  correctAnswers: number;
  selectedOption: number | null;
  showResult: boolean;
  timerActive: boolean;
  resetTimer: boolean;
}

const POINTS_PER_CORRECT = 10;

const QuizPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { timerDuration } = useTimer();

  const topic = quizTopics.find((t) => t.id === topicId);

  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    selectedOption: null,
    showResult: false,
    timerActive: true,
    resetTimer: true,
  });

  const currentQuestion = topic?.questions[gameState.currentQuestionIndex];
  const adRefreshKey = `${topicId}-${gameState.currentQuestionIndex}`;

  useEffect(() => {
    if (!topic) {
      navigate("/topics");
    }
  }, [topic, navigate]);

  const handleAnswer = (selectedOption: number, isCorrect: boolean) => {
    setGameState((prev) => ({
      ...prev,
      selectedOption,
      showResult: true,
      timerActive: false,
      score: isCorrect ? prev.score + POINTS_PER_CORRECT : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));

    // Auto advance after showing result
    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleTimeUp = useCallback(() => {
    if (gameState.selectedOption === null && !gameState.showResult) {
      setGameState((prev) => ({
        ...prev,
        selectedOption: -1,
        showResult: true,
        timerActive: false,
      }));

      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    }
  }, [gameState.selectedOption, gameState.showResult]);

  const handleNextQuestion = () => {
    if (!topic) return;

    const nextIndex = gameState.currentQuestionIndex + 1;

    if (nextIndex >= topic.questions.length) {
      // Navigate to results page
      navigate(`/results/${topicId}`, {
        state: {
          score: gameState.score,
          correctAnswers: gameState.correctAnswers,
          totalQuestions: topic.questions.length,
          topicName: topic.name,
        },
      });
    } else {
      setGameState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedOption: null,
        showResult: false,
        timerActive: true,
        resetTimer: true,
      }));
    }
  };

  // Reset timer flag after it's been used
  useEffect(() => {
    if (gameState.resetTimer) {
      setTimeout(() => {
        setGameState((prev) => ({
          ...prev,
          resetTimer: false,
        }));
      }, 100);
    }
  }, [gameState.resetTimer]);

  if (!topic) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/topics")}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              {topic.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {topic.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Quiz Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timer and Progress */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Question {gameState.currentQuestionIndex + 1} of{" "}
                {topic.questions.length}
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Score: {gameState.score}
              </div>
            </div>

            <QuizTimer
              duration={timerDuration}
              onTimeUp={handleTimeUp}
              isActive={gameState.timerActive}
              onReset={gameState.resetTimer}
            />
          </div>

          {/* Question */}
          {currentQuestion && (
            <QuizQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showResult={gameState.showResult}
              selectedOption={gameState.selectedOption}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Score Board */}
          <ScoreBoard
            currentScore={gameState.score}
            totalQuestions={topic.questions.length}
            currentQuestionIndex={gameState.currentQuestionIndex}
            correctAnswers={gameState.correctAnswers}
          />

          {/* Sidebar Ad */}
          <AdSenseBlock placement="sidebar" refreshKey={adRefreshKey} />

          {/* Progress Indicator */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Quiz Progress
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Completed
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {gameState.currentQuestionIndex}/{topic.questions.length}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (gameState.currentQuestionIndex /
                        topic.questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
