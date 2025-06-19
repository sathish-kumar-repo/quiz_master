import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, X, Settings } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { getTopicsByCategory, QuizTopic } from '../data/quizData';
import TimerSettings from '../components/TimerSettings';
import { useTimer } from '../contexts/TimerContext';

const TopicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showTimerSettings, setShowTimerSettings] = useState(false);
  const { timerDuration } = useTimer();
  const topicsByCategory = getTopicsByCategory();
  const categories = ['All', ...Object.keys(topicsByCategory)];

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <LucideIcons.HelpCircle className="w-6 h-6" />;
  };

  const filteredTopics = () => {
    let allTopics: QuizTopic[] = [];
    
    if (selectedCategory === 'All') {
      allTopics = Object.values(topicsByCategory).flat();
    } else {
      allTopics = topicsByCategory[selectedCategory] || [];
    }

    if (searchTerm) {
      allTopics = allTopics.filter(topic =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allTopics;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'All';
  const topics = filteredTopics();

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Choose Your Quiz Topic
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Explore our comprehensive collection of quiz topics. Each topic contains carefully crafted questions 
          designed to test and expand your knowledge.
        </p>
      </div>

      {/* Timer Settings & Search/Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Timer Settings */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowTimerSettings(true)}
              className="flex items-center space-x-2 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Timer: {timerDuration}s</span>
            </button>
          </div>

          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 dark:text-slate-200"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 dark:text-slate-200 min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="text-sm font-medium">Clear</span>
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {searchTerm && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                <span>Search: "{searchTerm}"</span>
                <button onClick={() => setSearchTerm('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                <span>Category: {selectedCategory}</span>
                <button onClick={() => setSelectedCategory('All')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Topics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/quiz/${topic.id}`}
            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                {getIcon(topic.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {topic.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{topic.category}</p>
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
              {topic.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {topic.questions.length} Questions
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {topics.length === 0 && (
        <div className="text-center py-16">
          <div className="text-slate-400 dark:text-slate-500 mb-4">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No topics found</h3>
            <p>Try adjusting your search terms or category filter.</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Timer Settings Modal */}
      <TimerSettings 
        isOpen={showTimerSettings} 
        onClose={() => setShowTimerSettings(false)} 
      />
    </div>
  );
};

export default TopicsPage;