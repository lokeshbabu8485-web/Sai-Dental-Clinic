import React from 'react';
import { CalendarCheck, Stethoscope, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { patientJourneySteps } from '../config/clinicData';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#0d9488]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-[#0d9488]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0d9488]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0d9488]" />;
      default:
        return <CalendarCheck className="w-5 h-5 text-[#0d9488]" />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <span>Simple 4-Step Process</span>
          </div>

          <h2 
            id="journey-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Your Dental Care <span className="text-[#0d9488]">Journey</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            What to expect from your initial consultation through your personalized smile care plan.
          </p>
        </div>

        {/* 4 Steps Horizontal / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {patientJourneySteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`journey-step-${step.stepNumber}`}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-[#0d9488] transition-all duration-200"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-700/70 border border-slate-600 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-500">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#0d9488] uppercase tracking-wider mb-1">
                  Step {step.stepNumber}
                </div>

                <h3 className="font-bold text-white text-xl mb-1">
                  {step.title}
                </h3>

                <h4 className="text-xs font-medium text-slate-400 mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
                <span>Phase {idx + 1} of Care</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Bottom */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            id="journey-book-now-btn"
            className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-teal-950/50 transition-all duration-200 active:scale-95"
          >
            <span>Start With Step 01: Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
