import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Calendar, 
  ExternalLink,
  Building2,
  Navigation,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { clinicConfig, getWhatsAppUrl, getPhoneUrl } from '../config/clinicData';
import { AppointmentSection } from './AppointmentSection';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Clinic Location & Easy Access</span>
          </div>

          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            Visit Sai Dental Care in <span className="text-[#ea580c]">Bengaluru East</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conveniently located for residents of Bengaluru East and neighboring communities. Walk in or reserve your slot in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact cards & map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 3 Contact Quick-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Phone Contact
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Call directly for urgent pain relief or booking
                  </p>
                </div>
                <a
                  href={getPhoneUrl()}
                  className="font-bold text-[#ea580c] hover:text-[#c2410c] text-xs flex items-center gap-1"
                >
                  <span>+91 9886713878</span>
                </a>
              </div>

              {/* Hours Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0d9488] flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-xs text-slate-700 font-semibold mb-1">
                    10:00 AM - 8:00 PM
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Open all 7 Days (Mon - Sun)
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 mt-2">
                  • Available Today
                </span>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Instant appointment booking & enquiries
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 text-xs flex items-center gap-1"
                >
                  <span>Message Now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Address & Google Maps Visual Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#004a5c] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Sai Dental Care, Bengaluru East
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      85, 7th Cross Road, Bengaluru East, Karnataka 560016
                    </p>
                  </div>
                </div>

                <a
                  href={clinicConfig.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs shrink-0"
                  id="google-maps-action-btn"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate in Google Maps</span>
                </a>
              </div>

              {/* Visual Map Interactive Placeholder Frame */}
              <div className="relative w-full h-64 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 flex items-center justify-center group">
                <iframe
                  title="Sai Dental Care Location Map"
                  src="https://maps.google.com/maps?q=12.9856,77.6256&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-3 right-3">
                  <a
                    href={clinicConfig.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 hover:bg-white text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md border border-slate-200 flex items-center gap-1.5 transition-all"
                  >
                    <span>Open in Maps App</span>
                    <ExternalLink className="w-3 h-3 text-[#ea580c]" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ground Floor Accessible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Two-Wheeler & Car Parking Nearby</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0d9488]" />
                  <span>Sanitized Clinical Environment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form (5 cols) */}
          <div className="lg:col-span-5" id="contact">
            <AppointmentSection />
          </div>

        </div>

      </div>
    </section>
  );
};
