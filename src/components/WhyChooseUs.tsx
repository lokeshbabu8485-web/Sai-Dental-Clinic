import React from 'react';
import { UserCheck, MessageSquare, Coffee, Heart, Sparkles } from 'lucide-react';
import { whyChooseUsFeatures } from '../config/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#0d9488]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#0d9488]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#0d9488]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#0d9488]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#0d9488]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Approach</span>
          </div>

          <h2 
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Dental Care Built <span className="text-[#004a5c]">Around You</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            We focus on honest patient relationships, open communication, and attentive care for individuals and families in Bengaluru East.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              id={`why-card-${idx + 1}`}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0fdfa] border border-teal-100 flex items-center justify-center mb-5">
                  {getIcon(feature.iconName)}
                </div>

                <h3 className="font-bold text-[#004a5c] text-lg mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[#0d9488] text-xs font-bold">
                <span>Sai Dental Care Principle</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
