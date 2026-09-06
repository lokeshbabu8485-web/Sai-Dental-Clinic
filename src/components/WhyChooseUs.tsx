import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  BadgePercent, 
  Award,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const reasons = [
    {
      title: 'Hospital-Grade 10X Sterilization',
      description: 'Class-B medical autoclave, chemical biological indicators, and individual sterile pouches opened right before your eyes.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0d9488]" />,
      highlight: 'Zero Infection Risk',
    },
    {
      title: 'Painless Gentle Dentistry',
      description: 'Advanced rotary endodontics, ultra-fine computer-assisted injections, and empathetic dental doctors ensuring a stress-free experience.',
      icon: <Sparkles className="w-6 h-6 text-[#ea580c]" />,
      highlight: 'Comfort First',
    },
    {
      title: 'Qualified Dental Specialists (BDS, MDS)',
      description: 'Certified doctors covering specialized fields including Endodontics, Implantology, Orthodontics, and Aesthetic Smile Makeovers.',
      icon: <Award className="w-6 h-6 text-[#004a5c]" />,
      highlight: 'Specialized Expertise',
    },
    {
      title: 'Transparent & Honest Pricing',
      description: 'Clear written treatment estimates provided up front with no hidden fees, plus easy digital UPI, card, and EMI payment options.',
      icon: <BadgePercent className="w-6 h-6 text-emerald-600" />,
      highlight: 'No Hidden Costs',
    },
    {
      title: 'Zero Waiting Time Scheduling',
      description: 'Strict appointment-based workflow to guarantee you are seen on time without long hours sitting in a crowded waiting lounge.',
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      highlight: 'Respect for Your Time',
    },
    {
      title: 'All 7 Days Open (10 AM - 8 PM)',
      description: 'Convenient weekday and weekend availability to accommodate working professionals, school children, and family appointments.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      highlight: 'Patient Convenience',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4 text-[#ea580c]" />
            <span>The Sai Dental Care Difference</span>
          </div>

          <h2 
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Why Families in Bengaluru East <span className="text-[#ea580c]">Trust Us</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We hold ourselves to modern clinical standards that prioritize your comfort, long-term oral health, and complete peace of mind.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-[#004a5c] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Standard at Bengaluru East Clinic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Reassurance */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#004a5c22] transition-all duration-200 active:scale-95 text-sm"
          >
            <Calendar className="w-4 h-4 text-orange-300" />
            <span>Schedule Your Consultation Today</span>
          </button>
        </div>

      </div>
    </section>
  );
};
