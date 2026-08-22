import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialReason?: string;
  onSuccessCallback?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ 
  initialReason = '',
  onSuccessCallback 
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reasonForVisit: initialReason || 'General Dental Consultation',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate minimum selectable date (today)
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (!/^[0-9+()-\s]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid contact phone number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date for your visit';
    }

    if (!formData.reasonForVisit.trim()) {
      newErrors.reasonForVisit = 'Please select or specify the reason for visit';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic static submission delay (does not persist sensitive medical records to localStorage)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      reasonForVisit: 'General Dental Consultation',
      message: '',
    });
    setErrors({});
  };

  return (
    <div id="appointment-form-container" className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 sm:p-8">
      {isSubmitted ? (
        <div id="appointment-success-message" className="text-center py-8 px-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-bold text-2xl text-[#1f2937] mb-3">
            Request Received
          </h3>

          <div className="max-w-md mx-auto p-4 bg-[#f0fdfa] border border-teal-100 rounded-xl text-teal-950 text-sm sm:text-base leading-relaxed mb-6">
            <p className="font-bold text-[#004a5c] mb-1">
              Thank you, {formData.fullName}.
            </p>
            <p className="text-slate-600">
              Your appointment request has been received. The clinic will contact you at <strong className="font-bold text-[#004a5c]">{formData.phone}</strong> to confirm schedule availability.
            </p>
          </div>

          <div className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
            * Please note that this is an appointment request. Confirmed timing will be shared directly by our clinic team.
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate id="appointment-booking-form">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[#0d9488] text-xs font-bold uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Consultation Booking</span>
            </div>
            <h3 className="font-bold text-2xl text-[#1f2937]">
              Request an Appointment
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Fill out your preferred visit details. Our clinic will reach out to confirm your slot.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Phone & Email (2 columns on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all ${
                      errors.email ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Date & Time (2 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all ${
                      errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="Any Available Time">Any Available Time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div>
              <label htmlFor="reasonForVisit" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Reason for Visit <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  id="reasonForVisit"
                  name="reasonForVisit"
                  required
                  value={formData.reasonForVisit}
                  onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all"
                >
                  <option value="General Dental Consultation">General Dental Consultation</option>
                  <option value="Routine Check-up & Cleaning">Routine Check-up & Cleaning</option>
                  <option value="Tooth Pain / Discomfort">Tooth Pain / Discomfort</option>
                  <option value="Cavity / Dental Filling">Cavity / Dental Filling</option>
                  <option value="Crown / Bridge Assessment">Crown / Bridge Assessment</option>
                  <option value="Gum Bleeding / Sensitivity">Gum Bleeding / Sensitivity</option>
                  <option value="Alignment / Braces Discussion">Alignment / Braces Discussion</option>
                  <option value="Other Dental Concern">Other Dental Concern</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Briefly describe any specific concern (e.g., sensitivity to cold water, chipped tooth)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-all"
              />
            </div>

            {/* Privacy notice */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#0d9488] shrink-0" />
              <span>Your contact details are used strictly to coordinate your appointment.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                id="appointment-submit-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#004a5c] hover:bg-[#003846] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-[#004a5c22] transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#004a5c]"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Appointment Request'}</span>
              </button>
            </div>

          </div>
        </form>
      )}
    </div>
  );
};
