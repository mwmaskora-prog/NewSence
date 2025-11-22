import React from 'react';
import { ArrowRight, Sparkles, Users, Clock } from 'lucide-react';
import { Page } from '../types';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-[#FDFBF7] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[80vh] flex flex-col justify-center">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">مرحباً بكم في</span>{' '}
                  <span className="block text-orange-600 xl:inline">New Sense</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  مركز متكامل للعناية والاسترخاء في قلب الزقازيق. نقدم تجربة فريدة للعناية بالجسم والبشرة بأيدي خبراء محترفين.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => onNavigate(Page.ABOUT)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg transition-colors"
                    >
                      تعرف علينا
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => onNavigate(Page.CHAT)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg transition-colors"
                    >
                      اسأل المساعد الذكي
                      <Sparkles className="mr-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 bg-orange-100 flex items-center justify-center overflow-hidden">
           {/* Placeholder for a spa image */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://picsum.photos/800/1000?grayscale"
            alt="Spa Relax"
          />
          <div className="absolute inset-0 bg-orange-900 mix-blend-multiply opacity-20"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">خدماتنا</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              كل ما تحتاجه للراحة والجمال
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">تنوع الخدمات</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  سبا، مساج، حمام مغربي، تنظيف بشرة، هيدرافيشال، والمزيد.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">خصوصية تامة</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  أقسام خاصة للرجال وأقسام خاصة للنساء (Private Room) لضمان الراحة والخصوصية.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">خبراء محترفون</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  فريق عمل ذو خبرة عالية لتقديم أفضل تجربة استرخاء وعناية.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
