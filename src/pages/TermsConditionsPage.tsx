import React from 'react';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">Terms & Conditions</h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Agreement to Terms</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By accessing and using QuizMaster, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Use License</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Permission is granted to temporarily use QuizMaster for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">User Conduct</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                You agree to use QuizMaster only for lawful purposes and in a way that does not infringe the rights of, 
                restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>Harassing or advocating harassment of another person</li>
                <li>Transmitting obscene or offensive content</li>
                <li>Attempting to gain unauthorized access to the service</li>
                <li>Interfering with or disrupting the service or servers</li>
                <li>Using automated systems to access the service</li>
              </ul>
            </section>

            {/* Quiz Content */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Quiz Content</h2>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  All quiz questions, answers, and explanations are provided for educational purposes. While we strive for accuracy, 
                  we do not guarantee that all information is completely accurate or up-to-date. Users should verify important 
                  information from authoritative sources.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Disclaimer</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The materials on QuizMaster are provided on an 'as is' basis. QuizMaster makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions 
                of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Limitations</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                In no event shall QuizMaster or its suppliers be liable for any damages (including, without limitation, damages for 
                loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                on QuizMaster, even if QuizMaster or an authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Revisions and Errata</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                QuizMaster may revise these terms of service at any time without notice. By using this website, you are agreeing 
                to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us through our 
                <a href="/contact" className="text-purple-600 hover:underline ml-1">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;