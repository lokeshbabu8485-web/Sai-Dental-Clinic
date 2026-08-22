import React from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  User, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { clinicConfig, isPlaceholder } from '../config/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Philosophy and Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Sai Dental Care</span>
            </div>

            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight leading-tight"
            >
              Your Smile Deserves <br className="hidden sm:block" />
              <span className="text-[#004a5c]">
                Personal Attention
              </span>
            </h2>

            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed">
              <p>
                At <strong className="text-[#1f2937] font-semibold">{clinicConfig.name}</strong>, we believe dental care should be comfortable, clear, and personalized to each patient's needs.
              </p>
              <p>
                From routine oral care to more involved dental treatments, our goal is to help patients understand their dental health and make informed decisions about their treatment.
              </p>
              <p>
                Visit us at our Bengaluru clinic for a personalized dental consultation.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Honest & open diagnosis</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Clear treatment options</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Gentle patient care</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Convenient location in East Bengaluru</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="about-book-consultation-btn"
                className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#004a5c33] transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-200 transition-colors"
              >
                <span>View Treatment Categories</span>
              </a>
            </div>

          </div>

          {/* Right Column: Doctor & Clinical Team Data Card */}
          <div className="lg:col-span-5">
            <div 
              id="about-doctor-card"
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                <div className="flex items-center gap-2.5">
                  <User className="w-5 h-5 text-[#004a5c]" />
                  <span className="font-bold text-[#1f2937] text-base">
                    Clinical Care Team
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f0fdfa] text-[#0d9488] border border-teal-100">
                  Sai Dental Care
                </span>
              </div>

              {/* Doctor Details or Explicit Editable Placeholder */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Lead Practitioner
                  </label>
                  <div className="text-lg font-bold text-[#1f2937]">
                    {isPlaceholder(clinicConfig.doctor.name) ? (
                      <span className="text-slate-600 font-medium italic">
                        Practitioner details will be updated shortly
                      </span>
                    ) : (
                      clinicConfig.doctor.name
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                      <GraduationCap className="w-4 h-4 text-[#0d9488]" />
                      <span>Qualification</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                      {isPlaceholder(clinicConfig.doctor.qualification)
                        ? 'Qualified Dental Surgeon'
                        : clinicConfig.doctor.qualification}
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                      <Briefcase className="w-4 h-4 text-[#0d9488]" />
                      <span>Experience</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                      {isPlaceholder(clinicConfig.doctor.experience)
                        ? 'Clinical Consultation'
                        : clinicConfig.doctor.experience}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1.5">
                    <FileText className="w-4 h-4 text-[#0d9488]" />
                    <span>Practice Focus</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {isPlaceholder(clinicConfig.doctor.bio)
                      ? 'Focused on preventive dentistry, restorative oral health, and personalized patient consultations at 85, 7th Cross Road, Bengaluru East.'
                      : clinicConfig.doctor.bio}
                  </p>
                </div>

                <div className="p-3.5 bg-[#f0fdfa] rounded-xl border border-teal-100 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#004a5c] leading-relaxed font-medium">
                    Consultations are scheduled at our Bengaluru East clinic. Please book in advance to confirm timing.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
