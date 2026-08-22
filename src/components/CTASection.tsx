import React from 'react';
import { Calendar, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../config/clinicData';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="cta-banner" className="py-16 bg-[#004a5c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d9488]/40 border border-teal-400/30 text-teal-100 text-xs font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Dental Care</span>
            </div>
            
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
              Take the First Step Toward a Healthier Smile
            </h2>
            
            <p className="text-teal-100 text-base sm:text-lg leading-relaxed">
              Visit Sai Dental Care at 85, 7th Cross Road, Bengaluru East. Schedule your consultation to discuss your personal oral care goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              id="cta-section-book-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#004a5c] font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-5 h-5 text-[#004a5c]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#004a5c]" />
            </button>

            <a
              href={clinicConfig.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-section-directions-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 transition-colors"
            >
              <Compass className="w-5 h-5 text-teal-200" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
