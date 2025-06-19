import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isActive: boolean;
  onReset?: boolean;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ duration, onTimeUp, isActive, onReset }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (onReset) {
      setTimeLeft(duration);
    }
  }, [onReset, duration]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  const isUrgent = timeLeft <= 2;

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <Clock className={`w-5 h-5 ${isUrgent ? 'text-red-500' : 'text-blue-600 dark:text-blue-400'}`} />
        <span className={`font-bold text-lg ${isUrgent ? 'text-red-500' : 'text-slate-700 dark:text-slate-300'}`}>
          {timeLeft}s
        </span>
      </div>
      
      <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${
            isUrgent ? 'bg-red-500' : 'bg-blue-500'
          } ${isUrgent ? 'animate-pulse' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizTimer;