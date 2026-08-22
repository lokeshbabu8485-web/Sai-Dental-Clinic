import React from 'react';
import { HeartHandshake, Sparkles, Smile, MapPin } from 'lucide-react';
import { trustCards } from '../config/clinicData';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#0d9488]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0d9488]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#0d9488]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#0d9488]" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-[#0d9488]" />;
    }
  };

  return (
    <section 
      id="trust-strip-section"
      className="py-12 bg-slate-50 px-4 sm:px-6 lg:px-12"
      aria-label="Core values and commitments"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => (
            <div
              key={card.id}
              id={`trust-card-${idx + 1}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-[#f0fdfa] rounded-full flex items-center justify-center mb-4">
                {getIcon(card.iconName)}
              </div>
              <h3 className="font-bold text-[#004a5c] text-sm sm:text-base mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
