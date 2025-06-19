import React, { createContext, useContext, useEffect, useState } from 'react';

interface TimerContextType {
  timerDuration: number;
  setTimerDuration: (duration: number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

interface TimerProviderProps {
  children: React.ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [timerDuration, setTimerDurationState] = useState<number>(() => {
    const savedDuration = localStorage.getItem('quiz-timer-duration');
    return savedDuration ? parseInt(savedDuration, 10) : 5;
  });

  useEffect(() => {
    localStorage.setItem('quiz-timer-duration', timerDuration.toString());
  }, [timerDuration]);

  const setTimerDuration = (duration: number) => {
    if (duration >= 3 && duration <= 30) {
      setTimerDurationState(duration);
    }
  };

  return (
    <TimerContext.Provider value={{ timerDuration, setTimerDuration }}>
      {children}
    </TimerContext.Provider>
  );
};