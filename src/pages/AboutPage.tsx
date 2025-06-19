import React from 'react';
import { Brain, Target, Users, Award, Clock, Globe, Heart, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">About QuizMaster</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Empowering minds through interactive learning and knowledge assessment. We believe that learning 
          should be engaging, accessible, and fun for everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Our Mission</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To democratize knowledge assessment and make learning accessible to everyone, everywhere. 
            We strive to create an engaging platform that challenges minds, builds confidence, and 
            fosters a love for continuous learning across diverse subjects and skill levels.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Our Vision</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To become the world's leading platform for interactive knowledge assessment, where learners 
            of all ages can discover their potential, track their progress, and achieve their educational 
            goals through gamified learning experiences.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Diverse Topics</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              30+ carefully curated quiz categories covering science, history, arts, sports, and more.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Timed Challenges</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Customizable timer settings to test your quick thinking and knowledge recall abilities.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Progress Tracking</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Detailed performance analytics to help you identify strengths and areas for improvement.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Community Driven</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Join thousands of learners worldwide in the pursuit of knowledge and personal growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              QuizMaster was born from a simple belief: learning should be engaging, accessible, and enjoyable. 
              Founded in 2024, we started with a vision to transform how people interact with knowledge and 
              assess their understanding across various subjects.
            </p>
            <p>
              Our team of educators, developers, and learning enthusiasts came together to create a platform 
              that goes beyond traditional testing methods. We wanted to build something that would challenge 
              minds, celebrate achievements, and make learning a rewarding experience for people of all ages.
            </p>
            <p>
              Today, QuizMaster serves thousands of learners worldwide, offering carefully crafted questions 
              across diverse topics. From students preparing for exams to professionals looking to expand 
              their knowledge, our platform adapts to different learning styles and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Passion for Learning</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We believe that curiosity and the desire to learn are fundamental human traits that should be nurtured and celebrated.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Inclusivity</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our platform is designed to be accessible to learners from all backgrounds, ensuring everyone has the opportunity to grow.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Excellence</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We are committed to providing high-quality content and continuously improving our platform based on user feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join our community of knowledge seekers and discover what you're capable of achieving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/topics"
            className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <span>Explore Quiz Topics</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;