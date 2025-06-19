import React, { useState } from 'react';
import { Clock, Settings, Check, X } from 'lucide-react';
import { useTimer } from '../contexts/TimerContext';

interface TimerSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TimerSettings: React.FC<TimerSettingsProps> = ({ isOpen, onClose }) => {
  const { timerDuration, setTimerDuration } = useTimer();
  const [tempDuration, setTempDuration] = useState(timerDuration);

  const handleSave = () => {
    setTimerDuration(tempDuration);
    onClose();
  };

  const handleCancel = () => {
    setTempDuration(timerDuration);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-md">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Timer Settings</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Question Timer Duration
            </label>
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-slate-400" />
              <input
                type="range"
                min="3"
                max="30"
                value={tempDuration}
                onChange={(e) => setTempDuration(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex items-center justify-center w-12 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {tempDuration}s
                </span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span>3s (Fast)</span>
              <span>30s (Relaxed)</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
            <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Timer Recommendations</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• <strong>3-5s:</strong> Quick recall, competitive mode</li>
              <li>• <strong>5-10s:</strong> Standard difficulty (recommended)</li>
              <li>• <strong>10-20s:</strong> Learning mode, complex questions</li>
              <li>• <strong>20-30s:</strong> Relaxed pace, detailed thinking</li>
            </ul>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleCancel}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              <Check className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;