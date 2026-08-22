import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowUp, ShieldCheck } from 'lucide-react';
import { clinicConfig, isPlaceholder, getWhatsAppUrl, getPhoneUrl } from '../config/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Patient Journey', href: '#journey' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#002f3b] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Branding & Positioning (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004a5c] text-white flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 2.5 11 .5 1.8 2 3 3.5 3s3-1.2 3.5-3c1-3.5 2.5-7.5 2.5-11 0-3.5-2.5-6-6-6zm0 17c-.8 0-1.8-.8-2.2-2.2-.8-2.8-2.3-6.8-2.3-8.8 0-2.5 1.8-4.5 4.5-4.5s4.5 2 4.5 4.5c0 2-1.5 6-2.3 8.8-.4 1.4-1.4 2.2-2.2 2.2z" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                {clinicConfig.name}
              </span>
            </div>

            <p className="text-[#0d9488] text-sm font-bold">
              &ldquo;{clinicConfig.tagline}&rdquo;
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              A modern, patient-focused dental practice dedicated to comfortable, personalized oral care for patients and families in Bengaluru East, Karnataka.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#0d9488]" />
              <span>Dedicated consultations by appointment</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">
              Clinic Location
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0d9488] shrink-0 mt-1" />
                <span>
                  {clinicConfig.address.street},<br />
                  {clinicConfig.address.locality},<br />
                  {clinicConfig.address.state}, {clinicConfig.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>
                  {isPlaceholder(clinicConfig.contact.phone) ? (
                    <span className="text-slate-500 italic">Phone: Pending clinic confirmation</span>
                  ) : (
                    <a href={getPhoneUrl()} className="hover:text-white">
                      {clinicConfig.contact.phone}
                    </a>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isPlaceholder(clinicConfig.contact.whatsapp) ? (
                    <span className="text-slate-500 italic">WhatsApp: Pending clinic confirmation</span>
                  ) : (
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                      {clinicConfig.contact.whatsapp}
                    </a>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>
                  {isPlaceholder(clinicConfig.contact.email) ? (
                    <span className="text-slate-500 italic">Email: Pending clinic confirmation</span>
                  ) : (
                    <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-white">
                      {clinicConfig.contact.email}
                    </a>
                  )}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d9488] hover:underline"
              >
                <span>Navigate on Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <p className="max-w-2xl leading-relaxed text-center md:text-left">
            <strong>Medical Disclaimer:</strong> Information on this website is provided for general informational purposes and does not replace professional dental advice. Treatment feasibility and suitability are determined exclusively through direct clinical examination.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span>© 2026 Sai Dental Care. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
