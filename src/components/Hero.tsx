import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  ChevronRight,
  Star,
  User,
  MessageCircle,
  Stethoscope
} from 'lucide-react';
import { clinicConfig, getPhoneUrl, getWhatsAppUrl } from '../config/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Root Canal Treatment (RCT)');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10 AM - 1 PM)');
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const servicesList = [
    'General Dental Consultation',
    'Root Canal Treatment (RCT)',
    'Dental Implants',
    'Braces & Clear Aligners',
    'Teeth Cleaning & Scaling',
    'Dental Crowns & Bridges',
    'Tooth-Colored Fillings',
    'Wisdom Tooth Pain / Extraction',
    'Teeth Whitening',
    'Kids / Pediatric Care',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Appointment Request - Sai Dental Care*\n\n` +
      `*Patient Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Treatment:* ${service}\n` +
      `*Preferred Date:* ${preferredDate || 'Earliest Available'}\n` +
      `*Time Slot:* ${timeSlot}\n` +
      `*Location:* Bengaluru East Clinic\n\n` +
      `Please confirm my appointment slot. Thank you!`;
    return getWhatsAppUrl(text);
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50/60 pt-6 pb-16 md:pt-8 md:pb-20 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clove Dental Style Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 overflow-x-auto pb-1" aria-label="Breadcrumb">
          <a href="#home" className="hover:text-[#004a5c] transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="hover:text-[#004a5c]">Dentists Near Me</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="hover:text-[#004a5c]">Bengaluru</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-[#004a5c] font-semibold truncate">Bengaluru East (Sai Dental Care)</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Content Column (7 cols) */}
          <section className="lg:col-span-7 flex flex-col items-start text-left pt-2">
            
            {/* Trust & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div 
                id="hero-rating-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-200/80 text-amber-800 text-xs font-semibold shadow-2xs"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>4.9 / 5 Google Rating</span>
              </div>

              <div 
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 rounded-full border border-teal-200/80 text-[#0d9488] text-xs font-semibold shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Sterilization Guarantee</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-main-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004a5c] tracking-tight leading-[1.18] mb-4"
            >
              Best Dental Clinic in <br className="hidden sm:inline" />
              <span className="text-[#ea580c]">Bengaluru East</span>
            </h1>

            {/* Address with Map link */}
            <div className="flex items-center gap-2 text-slate-600 text-sm sm:text-base font-medium mb-6">
              <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span className="font-semibold text-slate-800">85, 7th Cross Road, Bengaluru East, Karnataka 560016</span>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Experience gentle, world-class dental care at <strong className="text-slate-800">Sai Dental Care</strong>. From painless root canals and dental implants to routine smile cleanings, we provide advanced treatments with strict hospital-grade sterilization.
            </p>

            {/* Clove-style Key USPs / Checkmark List */}
            <div className="w-full bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-slate-200/80 mb-8 shadow-2xs">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Why Patients Choose Sai Dental Care:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Painless Procedures</strong> with advanced equipment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Strict 4-Step / 10X Sterilization</strong> standards</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Experienced Specialists</strong> (BDS, MDS)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Zero Waiting Time</strong> with prior appointments</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing</strong> with no hidden costs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                  <span><strong>Open All 7 Days</strong>: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={getPhoneUrl()}
                id="hero-call-clinic-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-95 text-base"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Clinic: +91 9886713878</span>
              </a>

              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-xl font-semibold border border-slate-200 shadow-2xs transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-[#004a5c]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Safe & Sanitized Strip */}
            <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>Mon - Sun: 10 AM - 8 PM</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>Zero Infection Safety Guarantee</span>
              </div>
            </div>

          </section>

          {/* Right Column: Clove Dental Instant Appointment Card (5 cols) */}
          <section className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 sm:p-7 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 className="text-xl font-bold text-[#004a5c] tracking-tight">
                    Book an Appointment
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-[#ea580c] text-[11px] font-bold uppercase tracking-wider border border-orange-100">
                    Instant Call Back
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Consult our dental specialists at Bengaluru East clinic
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="hero-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#004a5c] focus:ring-2 focus:ring-[#004a5c]/20 text-sm text-slate-900 transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-xs font-semibold text-slate-500 border-r border-slate-300 pr-2">
                        +91
                      </div>
                      <input
                        id="hero-phone"
                        type="tel"
                        required
                        placeholder="98867 13878"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (phoneError) setPhoneError('');
                        }}
                        className="w-full h-11 px-3.5 pl-14 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#004a5c] focus:ring-2 focus:ring-[#004a5c]/20 text-sm text-slate-900 transition-all"
                      />
                    </div>
                    {phoneError && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{phoneError}</p>
                    )}
                  </div>

                  {/* Treatment / Reason */}
                  <div>
                    <label htmlFor="hero-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Dental Concern / Treatment
                    </label>
                    <div className="relative">
                      <select
                        id="hero-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#004a5c] focus:ring-2 focus:ring-[#004a5c]/20 text-sm text-slate-900 transition-all appearance-none cursor-pointer"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                      <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="hero-date"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full h-11 px-3 pl-9 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#004a5c] text-xs text-slate-800 transition-all"
                        />
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-time" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Slot
                      </label>
                      <div className="relative">
                        <select
                          id="hero-time"
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="w-full h-11 px-3 pl-9 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#004a5c] text-xs text-slate-800 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                          <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                          <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                        </select>
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="hero-book-submit-btn"
                    className="w-full py-3.5 px-4 bg-[#004a5c] hover:bg-[#003846] text-white font-bold rounded-xl shadow-lg shadow-[#004a5c33] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 text-base mt-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Appointment Request</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero spam • Clinic reception will call you back to confirm timing.
                  </p>
                </form>
              ) : (
                /* Submission Success State with Instant WhatsApp & Call Options */
                <div className="py-4 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Request Submitted Successfully!
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                      Thank you, <span className="font-semibold text-slate-700">{fullName}</span>. Our reception at Bengaluru East has received your appointment request for <strong>{service}</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact:</span>
                      <span className="font-medium text-slate-800">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Slot:</span>
                      <span className="font-medium text-slate-800">{timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clinic Contact:</span>
                      <span className="font-bold text-[#004a5c]">+91 9886713878</span>
                    </div>
                  </div>

                  {/* Immediate WhatsApp and Call Buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Details to WhatsApp Now</span>
                    </a>

                    <a
                      href={getPhoneUrl()}
                      className="w-full flex items-center justify-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Clinic Directly (+91 9886713878)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-700 underline pt-1 block mx-auto"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </section>

        </div>
      </div>
    </section>
  );
};
