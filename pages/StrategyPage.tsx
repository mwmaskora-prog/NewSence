import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, Target, DollarSign, Video, MessageCircle } from 'lucide-react';

const StrategyPage: React.FC = () => {
  const budgetData = [
    { name: 'رسائل ومبيعات (Messages)', value: 70, color: '#EA580C' }, // Orange-600
    { name: 'تفاعل ومتابعين (Engagement)', value: 30, color: '#FB923C' }, // Orange-400
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">الاستراتيجية وخطط التنفيذ</h2>
        <p className="mt-4 text-xl text-gray-500">كيف سنحقق النمو والانتشار في الأشهر القادمة.</p>
      </div>

      {/* Goals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { title: 'زيادة المتابعين', desc: 'زيادة متابعي فيسبوك بنسبة 25% خلال 6 أشهر.', icon: <UsersIcon /> },
          { title: 'تعزيز الولاء', desc: 'إطلاق برامج ولاء وعروض خاصة لمتابعي السوشيال.', icon: <HeartIcon /> },
          { title: 'زيادة التفاعل', desc: 'رفع معدل التفاعل بنسبة 30% خلال 3 أشهر.', icon: <TrendingUpIcon /> },
        ].map((goal, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 flex flex-col items-center text-center">
            <div className="mb-4">{goal.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{goal.title}</h3>
            <p className="text-gray-600">{goal.desc}</p>
          </div>
        ))}
      </div>

      {/* Content Plan */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
        <div className="bg-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold flex items-center">
            <Video className="ml-3" />
            خطة المحتوى (Content Plan)
          </h3>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-orange-600">أنواع المحتوى</h4>
            <ul className="space-y-3">
              <ListItem text="فيديوهات تعليمية قصيرة (Reels) عن العناية بالبشرة." />
              <ListItem text="لقطات 'وراء الكواليس' لإظهار النظافة والاحترافية." />
              <ListItem text="تجارب عملاء وقصص قبل/بعد (بموافقة العميل)." />
              <ListItem text="مسابقات وتحديات أسبوعية لزيادة التفاعل." />
            </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-xl font-bold text-orange-600">أفكار إبداعية</h4>
             <ul className="space-y-3">
               <ListItem text="تحدي 'دقيقة جمال': روتين سريع في دقيقة." />
               <ListItem text="يوم 'المفاجآت': هدايا سرية للزوار." />
               <ListItem text="فيديوهات ASMR للاسترخاء داخل المركز." />
               <ListItem text="لوحة العملاء الذهبيين للأكثر زيارة." />
             </ul>
          </div>
        </div>
      </div>

      {/* Budget Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-6 md:p-8">
           <div className="flex items-center justify-between flex-wrap mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <DollarSign className="ml-2 text-green-600" />
                    الميزانية المقترحة (الخطة الأساسية)
                </h3>
                <p className="text-gray-500 mt-2">إجمالي الميزانية الشهرية: <span className="font-bold text-gray-900">9,000 جنيه مصري</span></p>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Chart */}
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Details */}
              <div className="space-y-6">
                 <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <MessageCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="mr-4">
                        <h4 className="text-lg font-bold text-gray-900">حملات الرسائل (70%)</h4>
                        <p className="text-gray-600">6,300 جنيه</p>
                        <p className="text-sm text-gray-500 mt-1">الهدف: تدفق عالي من الاستفسارات والحجوزات المباشرة.</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <Target className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="mr-4">
                        <h4 className="text-lg font-bold text-gray-900">حملات التفاعل والانتشار (30%)</h4>
                        <p className="text-gray-600">2,700 جنيه</p>
                        <p className="text-sm text-gray-500 mt-1">الهدف: زيادة المتابعين وبناء الثقة في العلامة التجارية.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icons
const UsersIcon = () => <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const HeartIcon = () => <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const TrendingUpIcon = () => <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

const ListItem: React.FC<{text: string}> = ({ text }) => (
    <li className="flex items-start">
        <CheckCircle className="w-5 h-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
        <span className="text-gray-700">{text}</span>
    </li>
);

export default StrategyPage;
