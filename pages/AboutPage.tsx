import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">من نحن</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          About Brand New Sense
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-80"
              src="https://picsum.photos/600/800?spa"
              alt="New Sense Interior"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">المركز المتكامل</div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              New Sense هو مركز متكامل للعناية والاسترخاء في الزقازيق. يقدم مجموعة واسعة من الخدمات المصممة خصيصاً لراحتك وجمالك.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              نتميز بتقديم خدمات متنوعة تشمل: السبا، المساج بأنواعه، الحمام المغربي الأصلي، تنظيف البشرة العادي والعميق، هيدرافيشال، إكستنشن، وديرمابلانينج.
            </p>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border-r-4 border-orange-500">
               <p className="font-bold text-gray-800">
                 يوجد برايفت روم (Private Room) للنساء وقسم خاص للرجال لضمان أعلى درجات الخصوصية.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
