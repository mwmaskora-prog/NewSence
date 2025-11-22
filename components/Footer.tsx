import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">New Sense</h3>
            <p className="text-gray-400 max-w-xs">
              وجهتك الأولى للراحة والاسترخاء في الزقازيق. نجمع بين الفخامة والخدمة الاحترافية.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="ml-2 text-orange-500" />
                <span dir="ltr">+20 155 704 3014</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="ml-2 text-orange-500" />
                <span>info@newsense.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">تابعنا</h4>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} New Sense. All rights reserved. Developed for Marketing Strategy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
