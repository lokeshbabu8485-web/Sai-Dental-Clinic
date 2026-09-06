import React from 'react';
import { 
  Smile, 
  ShieldCheck, 
  Award, 
  Clock, 
  Star, 
  Sparkles 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const stats = [
    {
      value: '5,000+',
      label: 'Happy Smiles Treated',
      subtext: 'In & around Bengaluru East',
      icon: <Smile className="w-5 h-5 text-[#ea580c]" />,
      bgColor: 'bg-orange-50',
    },
    {
      value: '100%',
      label: 'Sterilized Instruments',
      subtext: 'Class-B Autoclave & Pouches',
      icon: <ShieldCheck className="w-5 h-5 text-[#0d9488]" />,
      bgColor: 'bg-teal-50',
    },
    {
      value: '15+ Years',
      label: 'Combined Experience',
      subtext: 'BDS & MDS Specialists',
      icon: <Award className="w-5 h-5 text-[#004a5c]" />,
      bgColor: 'bg-sky-50',
    },
    {
      value: '4.9 / 5',
      label: 'Google Review Rating',
      subtext: 'Based on patient feedback',
      icon: <Star className="w-5 h-5 text-amber-500 fill-current" />,
      bgColor: 'bg-amber-50',
    },
    {
      value: 'All 7 Days',
      label: '10:00 AM - 8:00 PM',
      subtext: 'Prior appointment scheduling',
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section 
      id="trust-strip-section"
      className="py-8 bg-white border-b border-slate-100 shadow-2xs"
      aria-label="Clinic credentials and clinical trust"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-slate-300 transition-all shadow-2xs"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center shrink-0`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-slate-900 leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
