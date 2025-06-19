import React from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { Trophy, Star, RefreshCcw, Home, Target, ArrowRight } from 'lucide-react';
import { quizTopics } from '../data/quizData';
import AdSenseBlock from '../components/AdSenseBlock';

interface ResultsState {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  topicName: string;
}

const ResultsPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as ResultsState;
  const topic = quizTopics.find(t => t.id === topicId);

  // Redirect if no state or topic
  if (!state || !topic) {
    navigate('/topics');
    return null;
  }

  const { score, correctAnswers, totalQuestions, topicName } = state;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const grade = accuracy >= 90 ? 'Excellent!' : accuracy >= 75 ? 'Great!' : accuracy >= 60 ? 'Good!' : 'Keep Practicing!';
  const gradeColor = accuracy >= 90 ? 'text-green-600' : accuracy >= 75 ? 'text-blue-600' : accuracy >= 60 ? 'text-yellow-600' : 'text-red-600';

  const handleRestart = () => {
    navigate(`/quiz/${topicId}`);
  };

  // Get other topics for recommendations
  const otherTopics = quizTopics.filter(t => t.id !== topicId).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Results */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">Quiz Complete!</h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">{topicName}</p>
              
              <div className={`text-3xl font-bold mb-8 ${gradeColor}`}>
                {grade}
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">{score}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Total Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">{correctAnswers}/{totalQuestions}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Correct Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">{accuracy}%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={handleRestart}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <RefreshCcw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>
                
                <Link
                  to="/topics"
                  className="w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-4 px-6 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Target className="w-5 h-5" />
                  <span>Choose New Topic</span>
                </Link>
                
                <Link
                  to="/"
                  className="w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Performance Analysis */}
          <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Performance Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Questions Answered</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{totalQuestions}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Average Time per Question</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">~5 seconds</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Points per Correct Answer</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">10 points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sidebar Ad */}
          <AdSenseBlock 
            placement="sidebar"
            refreshKey={`results-${topicId}`}
          />

          {/* Recommended Topics */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Try These Topics Next</h3>
            <div className="space-y-3">
              {otherTopics.map(topic => (
                <Link
                  key={topic.id}
                  to={`/quiz/${topic.id}`}
                  className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {topic.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {topic.questions.length} questions
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;