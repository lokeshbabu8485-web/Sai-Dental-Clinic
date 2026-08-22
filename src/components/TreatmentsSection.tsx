import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Scissors, 
  Crown, 
  Anchor, 
  SunMedium, 
  Layers, 
  HeartPulse, 
  Info, 
  Calendar, 
  X, 
  Check, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { proposedTreatments, confirmedTreatments } from '../config/clinicData';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Preventive Care', 'Restorative Care', 'Surgical Care', 'Prosthodontics', 'Orthodontics'];

  // Check if we have verified confirmed treatments
  const hasConfirmed = confirmedTreatments.length > 0;
  
  // Treatments to display: If confirmed treatments exist, display them; otherwise display proposed treatments with explicit informative transparency.
  const displayList = hasConfirmed ? confirmedTreatments : proposedTreatments;

  const filteredTreatments = filterCategory === 'all' 
    ? displayList 
    : displayList.filter(t => t.category === filterCategory);

  const getTreatmentIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#0d9488]" };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Anchor': return <Anchor {...props} />;
      case 'SunMedium': return <SunMedium {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      default: return <Stethoscope {...props} />;
    }
  };

  return (
    <section id="treatments" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Oral Health Services</span>
          </div>
          
          <h2 
            id="treatments-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Dental Care for <span className="text-[#004a5c]">Your Oral Health</span>
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Explore common dental care areas and procedures. Individual treatment plans are formulated following a clinical assessment at our Bengaluru clinic.
          </p>

          {/* Non-Fabrication Status Notice */}
          {!hasConfirmed && (
            <div 
              id="treatments-status-notice"
              className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-left text-xs sm:text-sm text-slate-600 flex items-start gap-3 shadow-xs"
            >
              <Info className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">Treatment Confirmation Notice: </span>
                <span>
                  The clinic&apos;s verified treatment list is currently being finalized. The dental categories below reflect common clinical care areas available for consultation. Specific procedure feasibility will be determined during your in-clinic assessment.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 ${
                filterCategory === cat
                  ? 'bg-[#004a5c] text-white shadow-md shadow-[#004a5c22]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Care Areas' : cat}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0fdfa] border border-teal-100 flex items-center justify-center">
                    {getTreatmentIcon(treatment.iconName)}
                  </div>
                  {treatment.category && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {treatment.category}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-[#004a5c] text-lg mb-2">
                  {treatment.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {treatment.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="text-xs font-bold text-[#004a5c] hover:text-[#0d9488] inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                  id={`learn-more-${treatment.id}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(treatment.name)}
                  className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#f0fdfa] hover:bg-teal-100 text-[#0d9488] border border-teal-100 transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            * Dental care is tailored to every patient&apos;s oral anatomy. Treatment requirements, duration, and recommendations are finalized only after direct clinical consultation.
          </p>
        </div>

      </div>

      {/* Treatment Details Modal */}
      {selectedTreatment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="treatment-modal-title"
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            id="treatment-detail-modal"
          >
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close treatment modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#f0fdfa] border border-teal-100 flex items-center justify-center">
                {getTreatmentIcon(selectedTreatment.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                  {selectedTreatment.category || 'Dental Care Area'}
                </span>
                <h3 id="treatment-modal-title" className="font-bold text-xl text-[#1f2937]">
                  {selectedTreatment.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-6 text-slate-600 text-sm leading-relaxed">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Procedure Overview
                </h4>
                <p className="text-slate-500">{selectedTreatment.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Focus Areas
                </h4>
                <ul className="space-y-2">
                  {selectedTreatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-[#0d9488] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                <HelpCircle className="w-4 h-4 text-slate-400 inline mr-1 -mt-0.5" />
                Note: Exact procedure steps, materials, and follow-ups will be explained during your consultation.
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  const name = selectedTreatment.name;
                  setSelectedTreatment(null);
                  onOpenBooking(name);
                }}
                className="flex-1 bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg shadow-[#004a5c22] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Consultation</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 px-4 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
