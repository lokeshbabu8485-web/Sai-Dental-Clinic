import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { sterilizationSteps } from '../config/clinicData';

interface SafetySterilizationSectionProps {
  onOpenBooking: () => void;
}

export const SafetySterilizationSection: React.FC<SafetySterilizationSectionProps> = ({ onOpenBooking }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#0d9488]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0d9488]" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#0d9488]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0d9488]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0d9488]" />;
    }
  };

  return (
    <section id="safety-sterilization" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>10X Safety & Infection Control</span>
          </div>

          <h2 
            id="safety-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Our 4-Step <span className="text-[#ea580c]">Sterilization Protocol</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At Sai Dental Care Bengaluru East, your safety is non-negotiable. We adhere to rigorous biomedical sterilization standards so you and your family receive safe, zero-infection dental care.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {sterilizationSteps.map((step) => (
            <div
              key={step.stepNumber}
              id={`sterilization-step-${step.stepNumber}`}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-teal-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#0d9488] transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="font-bold text-[#004a5c] text-lg mb-1">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#0d9488] uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Bullet details */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Safety Guarantees Bar (Clove Dental hallmark) */}
        <div className="bg-gradient-to-r from-teal-50/80 via-white to-orange-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#004a5c] text-sm mb-1">
                  100% Single-Use Disposables
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Gloves, masks, patient bibs, suction tips, and cup glasses are strictly single-use and discarded immediately after each visit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#004a5c] text-sm mb-1">
                  RO Purified Dental Waterlines
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All dental units deliver multi-stage reverse-osmosis purified water to prevent microbial biofilm in coolant sprays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#004a5c] text-sm mb-1">
                  Pouches Opened in Your Sight
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Autoclaved instruments are sealed in sterile indicator pouches and opened directly in front of you on the treatment tray.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
