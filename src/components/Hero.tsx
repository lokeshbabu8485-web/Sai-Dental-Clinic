import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import { clinicConfig } from '../config/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-slate-50 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Content Column (7 cols on lg) */}
          <section className="lg:col-span-7 pt-4 flex flex-col items-start text-left">
            
            {/* Location Pill */}
            <div 
              id="hero-location-pill"
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0fdfa] rounded-full mb-6 border border-teal-100/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0d9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                Bengaluru, Karnataka
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-[1.1] mb-6 tracking-tight"
            >
              Healthy Smiles Start <br className="hidden sm:inline" />
              With the Right <span className="text-[#004a5c]">Dental Care</span>
            </h1>

            {/* Subheadline */}
            <p 
              id="hero-subheadline"
              className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed font-normal"
            >
              {clinicConfig.name} provides personalized dental care focused on your oral health, comfort, and long-term smile.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta-btn"
                className="bg-[#004a5c] hover:bg-[#003846] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#004a5c33] transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-secondary-cta-btn"
                className="bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-[#004a5c]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Value Highlights Line */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Patient-Centered</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Individualized Care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Comfort-Focused</span>
              </div>
            </div>

          </section>

          {/* Right Visual / Appointment Preview Card (5 cols on lg) */}
          <section className="lg:col-span-5 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
            {/* Top-Right Decorative Curve */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0fdfa] rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-slate-800">Appointment Request</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#f0fdfa] text-[#0d9488] border border-teal-100">
                  Bengaluru East
                </span>
              </div>
              
              <p className="text-sm text-slate-400 mb-6">Select your preferred slot</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="h-12 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 flex items-center px-4 text-slate-500 text-sm transition-colors text-left"
                  >
                    <Calendar className="w-4 h-4 mr-2 text-[#0d9488]" />
                    <span>Select Date</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="h-12 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 flex items-center px-4 text-slate-500 text-sm transition-colors text-left"
                  >
                    <Clock className="w-4 h-4 mr-2 text-[#0d9488]" />
                    <span>Time Slot</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full h-12 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 flex items-center px-4 text-slate-500 text-sm transition-colors text-left"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-[#0d9488]" />
                  <span>General Dental Consultation</span>
                </button>

                <div 
                  onClick={onOpenBooking}
                  className="h-20 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 p-4 text-slate-400 text-sm cursor-pointer transition-colors"
                >
                  Patient Message (Optional)...
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  id="hero-card-submit-btn"
                  className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold rounded-xl shadow-lg shadow-[#0d948833] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </div>

              <p className="mt-4 text-[11px] text-center text-slate-400 italic">
                The clinic will contact you to confirm availability.
              </p>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};
