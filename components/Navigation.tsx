import React, { useState } from 'react';
import { Page } from '../types';
import { Home, BarChart3, TrendingUp, MessageSquare, Phone, Menu, X, Info } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'الرئيسية', icon: <Home size={20} /> },
    { id: Page.ABOUT, label: 'عن المركز', icon: <Info size={20} /> },
    { id: Page.ANALYSIS, label: 'تحليل السوق', icon: <BarChart3 size={20} /> },
    { id: Page.STRATEGY, label: 'الاستراتيجية', icon: <TrendingUp size={20} /> },
    { id: Page.CHAT, label: 'المساعد الذكي', icon: <MessageSquare size={20} /> },
    { id: Page.CONTACT, label: 'تواصل معنا', icon: <Phone size={20} /> },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick(Page.HOME)}>
             {/* Simulating the 'M' logo from PDF */}
             <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-2">
               M
             </div>
             <span className="text-2xl font-bold text-gray-800 mr-2">New Sense</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                <span className="ml-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-3 py-4 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                <span className="ml-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
