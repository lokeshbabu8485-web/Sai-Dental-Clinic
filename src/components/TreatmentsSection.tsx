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
  Clock,
  Zap
} from 'lucide-react';
import { proposedTreatments, confirmedTreatments } from '../config/clinicData';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'Restorative Care', label: 'Root Canal & Fillings' },
    { id: 'Implantology', label: 'Dental Implants' },
    { id: 'Orthodontics', label: 'Braces & Aligners' },
    { id: 'Preventive Care', label: 'Cleaning & Check-ups' },
    { id: 'Prosthodontics', label: 'Crowns & Bridges' },
    { id: 'Surgical Care', label: 'Wisdom Tooth' },
    { id: 'Cosmetic Dentistry', label: 'Teeth Whitening' },
  ];

  const hasConfirmed = confirmedTreatments.length > 0;
  const displayList = hasConfirmed ? confirmedTreatments : proposedTreatments;

  const filteredTreatments = filterCategory === 'all' 
    ? displayList 
    : displayList.filter(t => t.category === filterCategory);

  const getTreatmentIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#004a5c]" };
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0d9488]" />
            <span>Comprehensive Clinical Care</span>
          </div>
          
          <h2 
            id="treatments-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Dental Treatments at <span className="text-[#ea580c]">Sai Dental Care</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From pain relief and preventive care to full-mouth restorations and invisible braces, explore our comprehensive range of specialized dental treatments in Bengaluru East.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#004a5c] text-white shadow-md shadow-[#004a5c22]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTreatmentIcon(treatment.iconName)}
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    {treatment.badge && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#ea580c] border border-orange-200 uppercase tracking-wider">
                        {treatment.badge}
                      </span>
                    )}
                    {treatment.estimatedDuration && (
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{treatment.estimatedDuration}</span>
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#004a5c] transition-colors">
                  {treatment.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {treatment.shortDescription}
                </p>

                {/* Key Benefits */}
                <div className="space-y-1.5 mb-5">
                  {treatment.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Price Display */}
                {treatment.startingPrice && (
                  <div className="mb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Estimated Cost:</span>
                    <span className="font-bold text-[#ea580c] text-sm">{treatment.startingPrice}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1"
                  id={`learn-more-${treatment.id}`}
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(treatment.name)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 text-center p-5 bg-white rounded-2xl border border-slate-200 max-w-2xl mx-auto text-xs text-slate-500 shadow-2xs">
          <p>
            <strong>Note on Clinical Feasibility:</strong> Treatment plans and specific procedure suitability are personalized following your in-clinic consultation and diagnostic examination at our Bengaluru East clinic.
          </p>
        </div>

      </div>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                {getTreatmentIcon(selectedTreatment.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                  {selectedTreatment.category}
                </span>
                <h3 className="text-xl font-bold text-[#004a5c]">
                  {selectedTreatment.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-6 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Clinical Overview</h4>
                <p className="leading-relaxed">{selectedTreatment.fullDescription}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Key Clinical Benefits</h4>
                <div className="space-y-1.5">
                  {selectedTreatment.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedTreatment.startingPrice && (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Estimated Investment:</span>
                  <span className="text-base font-bold text-[#ea580c]">{selectedTreatment.startingPrice}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const treatmentName = selectedTreatment.name;
                  setSelectedTreatment(null);
                  onOpenBooking(treatmentName);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
