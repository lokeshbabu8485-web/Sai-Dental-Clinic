import React from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Stethoscope, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { clinicConfig, isPlaceholder } from '../config/clinicData';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  const isDocPlaceholder = isPlaceholder(clinicConfig.doctor.name);

  return (
    <section id="doctors" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Stethoscope className="w-4 h-4 text-[#0d9488]" />
            <span>Clinical Specialists</span>
          </div>

          <h2 
            id="doctor-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Meet Our <span className="text-[#ea580c]">Dental Surgeons</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Compassionate, qualified dental professionals dedicated to painless treatment and healthy long-term smiles at our Bengaluru East clinic.
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="max-w-4xl mx-auto">
          <div 
            id="doctor-profile-card"
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Doctor Avatar / Clinic Emblem */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-[#004a5c] to-[#0d9488] text-white flex flex-col items-center justify-center p-4 shadow-md shadow-[#004a5c22] mb-4">
                  <User className="w-16 h-16 text-teal-100 mb-1" />
                  <span className="text-[11px] font-bold text-teal-100 tracking-wide">
                    Sai Dental Care
                  </span>
                </div>
                
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-[#0d9488] border border-teal-100">
                  Senior Dental Practitioner
                </span>
                
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span>Bengaluru East Clinic</span>
                </div>
              </div>

              {/* Doctor Credentials & Bio */}
              <div className="md:col-span-8 space-y-4 text-left">
                
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Dental Surgeon & Consultant
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      Active Practice
                    </span>
                  </div>

                  <h3 className="font-extrabold text-2xl text-[#004a5c]">
                    {isDocPlaceholder ? 'Lead Dental Surgeon (BDS, MDS)' : clinicConfig.doctor.name}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mt-1">
                    Specialized in Painless Endodontics, Restorations & Smile Rehabilitation
                  </p>
                </div>

                {/* Key Doctor Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <GraduationCap className="w-4 h-4 text-[#004a5c] shrink-0" />
                    <span>Certified Dental Graduate (BDS, MDS)</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Award className="w-4 h-4 text-[#ea580c] shrink-0" />
                    <span>Painless Rotary RCT Specialist</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-[#0d9488] shrink-0" />
                    <span>Sterilization & Safety Officer</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Available Mon - Sun (10 AM - 8 PM)</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  Dedicated to making every dental appointment stress-free and pleasant. We take the time to explain diagnoses clearly with digital intraoral visuals, discussing every treatment option before starting.
                </p>

                {/* Action CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Doctor</span>
                  </button>
                  <span className="text-xs text-slate-400">
                    Prior appointment recommended for zero wait time
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
