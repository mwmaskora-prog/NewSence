import React from 'react';
import SWOTCard from '../components/SWOTCard';
import { SWOTItem } from '../types';
import { Target, Crosshair, Users } from 'lucide-react';

const AnalysisPage: React.FC = () => {
  const swotData: SWOTItem[] = [
    {
      title: 'نقاط القوة (Strengths)',
      type: 'strength',
      items: [
        'فريق عمل محترف وخبرة واضحة في تقديم الخدمات.',
        'أسعار تنافسية وعروض افتتاحية قوية.',
        'تنوع الخدمات (مساج، سبا، حمام مغربي، بشرة).',
        'موقع مميز في قلب مدينة الزقازيق وسهولة الوصول.',
        'احترام خصوصية العميل ووجود أقسام منفصلة.'
      ]
    },
    {
      title: 'نقاط الضعف (Weaknesses)',
      type: 'weakness',
      items: [
        'ضعف الحملات الإعلانية المدفوعة حالياً.',
        'عدم وجود خطة موحدة للنشر وضعف المحتوى.',
        'معدل تفاعل ضعيف بسبب عدم فهم اهتمامات الجمهور.',
        'عدم وجود هوية بصرية موحدة.',
        'عدم المتابعة والاستمرارية مع العملاء.'
      ]
    },
    {
      title: 'الفرص (Opportunities)',
      type: 'opportunity',
      items: [
        'استغلال المواسم (رمضان، الأعياد، رأس السنة).',
        'التعاون مع الميكب ارتيست وقاعات الأفراح (للعرائس).',
        'التعاون مع مؤثرين محليين لزيادة الانتشار.',
        'استغلال فترة الدراسة لعمل عروض للطلاب.'
      ]
    },
    {
      title: 'التهديدات (Threats)',
      type: 'threat',
      items: [
        'منافسة عالية في سوق الزقازيق (مثل كليوباترا سبا).',
        'تكرار منشورات ضعيفة قد يعطي انطباعاً سيئاً.',
        'سرقة أفكار أو صور الخدمات من المنافسين.',
        'الحملات السلبية المنظمة أو التعليقات الوهمية.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">تحليل السوق والموقف الحالي</h2>
        <p className="mt-4 text-xl text-gray-500">نظرة شاملة على نقاط القوة والضعف والفرص المتاحة لـ New Sense.</p>
      </div>

      {/* Audience Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
        <div className="p-8 sm:p-10">
          <div className="flex items-center mb-6">
             <div className="bg-orange-100 p-3 rounded-full ml-4">
                <Users className="text-orange-600 w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900">الجمهور المستهدف</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">النوع</p>
              <p className="text-2xl font-bold text-gray-800">80% نساء</p>
              <p className="text-xl font-medium text-gray-600 mt-1">20% رجال</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">العمر</p>
              <p className="text-2xl font-bold text-gray-800">18 - 45 سنة</p>
              <p className="text-gray-600 mt-2 text-sm">شباب، طلاب، مقبلين على الزواج</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">الاهتمامات</p>
              <p className="text-lg font-bold text-gray-800">العناية بالبشرة، الرفاهية، الراحة</p>
              <p className="text-gray-600 mt-2 text-sm">يبحثون عن تجارب موثوقة وجودة عالية</p>
            </div>
          </div>
        </div>
      </div>

      {/* SWOT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {swotData.map((item, index) => (
          <SWOTCard key={index} item={item} />
        ))}
      </div>

      {/* Competitor Analysis Brief */}
      <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
        <div className="flex items-center mb-6">
          <Crosshair className="w-8 h-8 text-orange-600 ml-3" />
          <h3 className="text-2xl font-bold text-gray-900">المنافس الرئيسي: حمام الملوك</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-green-700 mb-2">نقاط قوتهم:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>خبرة كبيرة في الحمام المغربي للعرائس.</li>
              <li>مساحة واسعة وتجهيزات حديثة (ساونا، جاكوزي).</li>
              <li>تواجد قوي على السوشيال ميديا.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-700 mb-2">نقاط ضعفهم:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>منافسة شرسة من مراكز أخرى.</li>
              <li>الأسعار قد تعتبر مرتفعة للبعض.</li>
              <li>الاعتماد الكبير على العرائس فقط.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
