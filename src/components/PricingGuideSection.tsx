import React, { useState } from 'react';
import { 
  BadgePercent, 
  Check, 
  CreditCard, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { pricingGuideItems } from '../config/clinicData';

interface PricingGuideSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingGuideSection: React.FC<PricingGuideSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'Preventive Care', name: 'Preventive & Cleaning' },
    { id: 'Restorative Care', name: 'Root Canal & Fillings' },
    { id: 'Prosthodontics', name: 'Crowns & Bridges' },
    { id: 'Implantology', name: 'Dental Implants' },
    { id: 'Orthodontics', name: 'Braces & Aligners' },
    { id: 'Cosmetic Dentistry', name: 'Teeth Whitening' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? pricingGuideItems
    : pricingGuideItems.filter(item => item.category === selectedCategory);

  return (
    <section id="pricing-guide" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs font-bold tracking-wider uppercase mb-3">
            <BadgePercent className="w-4 h-4 text-[#ea580c]" />
            <span>100% Honest & Upfront</span>
          </div>

          <h2 
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Transparent Treatment <span className="text-[#ea580c]">Pricing Guide</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We believe in complete pricing transparency. No surprise costs or hidden fees — your personalized treatment estimate is clearly explained before initiating any clinical procedure.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#004a5c] text-white shadow-md shadow-[#004a5c22]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between relative bg-white ${
                item.isPopular 
                  ? 'border-teal-400 shadow-md ring-2 ring-teal-400/20' 
                  : 'border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {item.isPopular && (
                <span className="absolute -top-3 right-5 bg-[#0d9488] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Most Requested
                </span>
              )}

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug min-h-[44px]">
                  {item.treatmentName}
                </h3>

                <div className="mb-4 pb-3 border-b border-slate-100">
                  <div className="text-2xl font-extrabold text-[#ea580c] tracking-tight">
                    {item.startingPrice}
                  </div>
                  <span className="text-[11px] text-slate-400">Indicative estimate</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-slate-600 text-xs mb-4">
                  <strong className="text-slate-700 block text-[11px] mb-0.5">Recommended for:</strong>
                  <span>{item.recommendedFor}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(item.treatmentName)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#004a5c] text-slate-700 hover:text-white font-semibold text-xs border border-slate-200 hover:border-transparent transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          ))}
        </div>

        {/* Payment and Consultation Assurance Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center shrink-0 border border-teal-100">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#004a5c] text-base mb-1">
                Flexible & Contactless Payment Methods
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                We accept UPI (Google Pay, PhonePe, Paytm), all major Credit/Debit Cards, Net Banking, and Cash. Detailed digital invoices are provided for tax & dental reimbursement.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="w-full md:w-auto shrink-0 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
