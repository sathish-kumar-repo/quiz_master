import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../data/quizData';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (selectedOption: number, isCorrect: boolean) => void;
  showResult: boolean;
  selectedOption: number | null;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  showResult,
  selectedOption
}) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
    return () => setAnimateIn(false);
  }, [question.id]);

  const handleOptionClick = (optionIndex: number) => {
    if (showResult || selectedOption !== null) return;
    
    const isCorrect = optionIndex === question.correctAnswer;
    onAnswer(optionIndex, isCorrect);
  };

  const getOptionStyle = (optionIndex: number) => {
    const baseStyle = "w-full text-left p-4 rounded-xl border-2 transition-all duration-300 font-medium";
    
    if (!showResult && selectedOption === null) {
      return `${baseStyle} border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:scale-[1.02] cursor-pointer`;
    }
    
    if (optionIndex === question.correctAnswer) {
      return `${baseStyle} border-green-500 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200`;
    }
    
    if (optionIndex === selectedOption && optionIndex !== question.correctAnswer) {
      return `${baseStyle} border-red-500 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200`;
    }
    
    return `${baseStyle} border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400`;
  };

  const getOptionIcon = (optionIndex: number) => {
    if (!showResult) return null;
    
    if (optionIndex === question.correctAnswer) {
      return <CheckCircle className="w-6 h-6 text-green-600" />;
    }
    
    if (optionIndex === selectedOption && optionIndex !== question.correctAnswer) {
      return <XCircle className="w-6 h-6 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className={`space-y-6 transition-all duration-500 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">
          {question.question}
        </h2>
        
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={getOptionStyle(index)}
              disabled={showResult || selectedOption !== null}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-base md:text-lg">{option}</span>
                </div>
                {getOptionIcon(index)}
              </div>
            </button>
          ))}
        </div>
        
        {showResult && question.explanation && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-2">
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                <span className="font-semibold">Explanation: </span>
                {question.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;