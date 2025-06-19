import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Introduction</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                At QuizMaster, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our quiz platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Device information (browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, quiz performance)</li>
                    <li>IP address and general location information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Quiz responses and scores</li>
                    <li>Feedback and communications</li>
                    <li>Theme preferences (stored locally)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>To provide and maintain our quiz platform</li>
                <li>To improve user experience and platform functionality</li>
                <li>To analyze usage patterns and optimize content</li>
                <li>To display relevant advertisements through Google AdSense</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Third-Party Services</h2>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Google AdSense</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  We use Google AdSense to display advertisements. Google may use cookies and other tracking 
                  technologies to serve ads based on your interests. You can learn more about Google's privacy 
                  practices at <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Google Privacy Policy</a>.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Data Security</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us 
                through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;