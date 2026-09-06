import React from 'react';
import { 
  Building2, 
  Armchair, 
  ScanLine, 
  ShieldAlert, 
  Wind, 
  CreditCard, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { clinicAmenities, clinicConfig } from '../config/clinicData';

export const ClinicTourSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Armchair':
        return <Armchair className="w-5 h-5 text-[#0d9488]" />;
      case 'ScanLine':
        return <ScanLine className="w-5 h-5 text-[#0d9488]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#0d9488]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#0d9488]" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#0d9488]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#0d9488]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0d9488]" />;
    }
  };

  return (
    <section id="clinic-tour" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Building2 className="w-4 h-4 text-[#0d9488]" />
            <span>Modern Infrastructure</span>
          </div>

          <h2 
            id="clinic-tour-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Clinic Tour & <span className="text-[#ea580c]">Patient Amenities</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Designed for patient relaxation, clinical precision, and stringent hygiene. Take a look inside our Bengaluru East dental facility.
          </p>
        </div>

        {/* Visual Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clinicAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-teal-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getAmenityIcon(amenity.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-[#0d9488] border border-teal-100">
                    {amenity.featureBadge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#004a5c] transition-colors">
                  {amenity.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Facility Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Convenience Banner */}
        <div className="bg-[#004a5c] text-white rounded-2xl p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Visit Sai Dental Care in Bengaluru East
            </h3>
            <p className="text-teal-100/90 text-sm max-w-2xl leading-relaxed">
              Located at 85, 7th Cross Road. We have comfortable waiting spaces, ground-floor accessibility, and hassle-free scheduling all 7 days a week.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={clinicConfig.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-[#004a5c] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#ea580c]" />
              <span>Get Driving Route</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
