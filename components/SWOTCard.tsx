import React from 'react';
import { SWOTItem } from '../types';
import { ShieldCheck, AlertTriangle, Zap, TrendingDown } from 'lucide-react';

interface SWOTCardProps {
  item: SWOTItem;
}

const SWOTCard: React.FC<SWOTCardProps> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'strength': return <ShieldCheck className="w-8 h-8 text-green-600" />;
      case 'weakness': return <AlertTriangle className="w-8 h-8 text-red-500" />;
      case 'opportunity': return <Zap className="w-8 h-8 text-yellow-500" />;
      case 'threat': return <TrendingDown className="w-8 h-8 text-orange-700" />;
    }
  };

  const getColorClass = () => {
    switch (item.type) {
      case 'strength': return 'border-green-200 bg-green-50';
      case 'weakness': return 'border-red-200 bg-red-50';
      case 'opportunity': return 'border-yellow-200 bg-yellow-50';
      case 'threat': return 'border-orange-200 bg-orange-50';
    }
  };

  return (
    <div className={`p-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-shadow ${getColorClass()}`}>
      <div className="flex items-center mb-4">
        <div className="p-2 bg-white rounded-full shadow-sm ml-3">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
      </div>
      <ul className="space-y-2">
        {item.items.map((point, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="ml-2 mt-1.5 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0 opacity-60"></span>
            <span className="text-sm md:text-base font-medium leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SWOTCard;
