import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AnalysisPage from './pages/AnalysisPage';
import StrategyPage from './pages/StrategyPage';
import ChatPage from './pages/ChatPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={setCurrentPage} />;
      case Page.ABOUT:
        return <AboutPage />;
      case Page.ANALYSIS:
        return <AnalysisPage />;
      case Page.STRATEGY:
        return <StrategyPage />;
      case Page.CHAT:
        return <ChatPage />;
      case Page.CONTACT:
        // Contact info is in footer, but we can render a placeholder or scroll to footer
        // For simplicity, we render home but scroll to bottom effect could be added
        // Or we can just have a simple view.
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
                <p className="text-xl text-gray-600 mb-8">نحن هنا لخدمتكم في أي وقت.</p>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 shadow-sm max-w-md w-full">
                    <p className="text-lg font-semibold mb-2">خدمة العملاء</p>
                    <p className="text-2xl font-bold text-orange-600" dir="ltr">+20 155 704 3014</p>
                    <p className="mt-4 text-gray-500">الزقازيق، مصر</p>
                </div>
            </div>
        );
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow fade-in">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
