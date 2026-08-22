import React from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Stethoscope, 
  FileText,
  ShieldAlert
} from 'lucide-react';
import { clinicConfig, isPlaceholder } from '../config/clinicData';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  const isDocPlaceholder = isPlaceholder(clinicConfig.doctor.name);

  return (
    <section id="doctor" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Clinical Team</span>
          </div>

          <h2 
            id="doctor-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Meet Your <span className="text-[#004a5c]">Dental Care Team</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Professional and attentive dental consultations provided with care for your personal oral wellness.
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="max-w-3xl mx-auto">
          <div 
            id="doctor-profile-card"
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Doctor Avatar / Clinic Emblem */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-[#004a5c] to-[#0d9488] text-white flex flex-col items-center justify-center p-4 shadow-md shadow-[#004a5c22] mb-4">
                  <User className="w-14 h-14 text-teal-100 mb-1" />
                  <span className="text-[11px] font-bold text-teal-100 tracking-wide">
                    Sai Dental Care
                  </span>
                </div>
                
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f0fdfa] text-[#0d9488] border border-teal-100">
                  Dental Practitioner
                </span>
                
                <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
                  <span>Bengaluru East</span>
                </div>
              </div>

              {/* Doctor Credentials & Bio */}
              <div className="md:col-span-8 space-y-4 text-left">
                
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Dentist & Consultant
                  </span>
                  <h3 className="font-bold text-2xl text-[#1f2937]">
                    {isDocPlaceholder ? (
                      <span className="text-slate-800">
                        Lead Dental Surgeon
                      </span>
                    ) : (
                      clinicConfig.doctor.name
                    )}
                  </h3>
                  <p className="text-sm text-[#004a5c] font-semibold mt-0.5">
                    {isPlaceholder(clinicConfig.doctor.specialization) 
                      ? 'General & Preventive Dental Care' 
                      : clinicConfig.doctor.specialization}
                  </p>
                </div>

                {/* Accuracy Status Notice if pending confirmation */}
                {isDocPlaceholder && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Doctor biography, specific academic credentials, and years of experience will be updated once officially confirmed by the clinic administration.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                      <GraduationCap className="w-4 h-4 text-[#0d9488]" />
                      <span>Qualification</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {isPlaceholder(clinicConfig.doctor.qualification)
                        ? 'Certified Dental Surgeon (BDS)'
                        : clinicConfig.doctor.qualification}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                      <Briefcase className="w-4 h-4 text-[#0d9488]" />
                      <span>Clinical Experience</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {isPlaceholder(clinicConfig.doctor.experience)
                        ? 'Dedicated Clinical Practice'
                        : clinicConfig.doctor.experience}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                    <FileText className="w-4 h-4 text-[#0d9488]" />
                    <span>Philosophy of Care</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {isPlaceholder(clinicConfig.doctor.bio)
                      ? 'Dedicated to providing clear oral health assessments, preventative patient education, and comfortable dental consultations at our Bengaluru East clinic.'
                      : clinicConfig.doctor.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#004a5c22] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dental Team</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
