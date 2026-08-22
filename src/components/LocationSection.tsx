import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Compass, 
  Calendar, 
  ExternalLink,
  Building2
} from 'lucide-react';
import { clinicConfig, isPlaceholder, getWhatsAppUrl, getPhoneUrl } from '../config/clinicData';
import { AppointmentSection } from './AppointmentSection';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Clinic Location & Contact</span>
          </div>

          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Ready to Take Care of <span className="text-[#004a5c]">Your Smile?</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Visit our clinic in Bengaluru East or send us an appointment enquiry today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Contact Details & Map (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] text-[#0d9488] border border-teal-100 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1f2937] text-base mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {clinicConfig.address.street},<br />
                    {clinicConfig.address.locality},<br />
                    {clinicConfig.address.state}, {clinicConfig.address.country}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-slate-400">
                    Lat: {clinicConfig.address.coordinates.latitude}, Lng: {clinicConfig.address.coordinates.longitude}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <a
                    href={clinicConfig.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0d9488] hover:text-[#004a5c] inline-flex items-center gap-1.5"
                    id="contact-directions-link"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Consultation Timings Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] text-[#0d9488] border border-teal-100 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1f2937] text-base mb-1">
                    Opening Hours
                  </h3>
                  <div className="text-sm text-slate-500 space-y-1">
                    {isPlaceholder(clinicConfig.contact.hours) ? (
                      <div>
                        <p className="font-bold text-[#1f2937]">By Appointment</p>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Consultation schedules are organized prior to your visit. Please submit a request to confirm timing.
                        </p>
                      </div>
                    ) : (
                      <p>{clinicConfig.contact.hours}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-slate-400">
                    Prior appointment recommended
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] text-[#0d9488] border border-teal-100 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1f2937] text-base mb-1">
                    Phone Consultation
                  </h3>
                  <div className="text-sm text-slate-500">
                    {isPlaceholder(clinicConfig.contact.phone) ? (
                      <p className="text-xs text-slate-400 italic">
                        Official contact number will be updated shortly
                      </p>
                    ) : (
                      <a href={getPhoneUrl()} className="font-bold text-slate-800 hover:text-[#004a5c]">
                        {clinicConfig.contact.phone}
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  {isPlaceholder(clinicConfig.contact.phone) ? (
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-[#0d9488] hover:text-[#004a5c]"
                    >
                      Request Callback →
                    </button>
                  ) : (
                    <a href={getPhoneUrl()} className="text-xs font-bold text-[#0d9488] hover:text-[#004a5c]">
                      Call Now →
                    </a>
                  )}
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] text-[#0d9488] border border-teal-100 flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1f2937] text-base mb-1">
                    WhatsApp Enquiry
                  </h3>
                  <div className="text-sm text-slate-500">
                    {isPlaceholder(clinicConfig.contact.whatsapp) ? (
                      <p className="text-xs text-slate-400 italic">
                        WhatsApp enquiry channel will be activated shortly
                      </p>
                    ) : (
                      <a 
                        href={getWhatsAppUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-800 hover:text-emerald-700"
                      >
                        {clinicConfig.contact.whatsapp}
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <a
                    href={getWhatsAppUrl()}
                    target={isPlaceholder(clinicConfig.contact.whatsapp) ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0d9488] hover:text-[#004a5c]"
                  >
                    Open WhatsApp Chat →
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-get-directions-btn"
                className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#004a5c22] transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target={isPlaceholder(clinicConfig.contact.whatsapp) ? '_self' : '_blank'}
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-teal-900/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiries</span>
              </a>

              <button
                onClick={onOpenBooking}
                id="contact-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#0d9488]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Interactive Location Map Container */}
            <div 
              id="clinic-map-container"
              className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm bg-slate-100 relative h-72 sm:h-80"
            >
              <iframe
                title="Sai Dental Care Location Map"
                src={clinicConfig.address.embedMapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                aria-label="Map showing Sai Dental Care in Bengaluru East"
              />
              
              {/* Map Floating Card */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-100 shadow-md text-xs z-10 max-w-xs">
                <div className="font-bold text-[#1f2937] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
                  <span>Sai Dental Care</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">
                  85, 7th Cross Road, Bengaluru East
                </div>
                <a
                  href={clinicConfig.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-[11px] font-bold text-[#0d9488] hover:underline"
                >
                  View full map & directions →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form Component (5 cols on lg) */}
          <div className="lg:col-span-5">
            <AppointmentSection />
          </div>

        </div>

      </div>
    </section>
  );
};
