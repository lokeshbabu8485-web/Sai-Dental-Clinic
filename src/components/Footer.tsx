import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck,
  Clock,
  ExternalLink
} from 'lucide-react';
import { clinicConfig, getWhatsAppUrl, getPhoneUrl } from '../config/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Treatments & Procedures', href: '#treatments' },
    { name: '10X Safety & Sterilization', href: '#safety-sterilization' },
    { name: 'Treatment Price Guide', href: '#pricing-guide' },
    { name: 'Dental Surgeons', href: '#doctors' },
    { name: 'Clinic Tour & Amenities', href: '#clinic-tour' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Location & Google Map', href: '#location' },
  ];

  const popularTreatments = [
    'Root Canal Treatment (RCT)',
    'Dental Implants',
    'Invisible Aligners & Braces',
    'Teeth Cleaning & Polishing',
    'Ceramic Crowns & Bridges',
    'Wisdom Tooth Extraction',
  ];

  return (
    <footer className="bg-[#002833] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Branding & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#004a5c] to-[#0d9488] text-white flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 2.5 11 .5 1.8 2 3 3.5 3s3-1.2 3.5-3c1-3.5 2.5-7.5 2.5-11 0-3.5-2.5-6-6-6zm0 17c-.8 0-1.8-.8-2.2-2.2-.8-2.8-2.3-6.8-2.3-8.8 0-2.5 1.8-4.5 4.5-4.5s4.5 2 4.5 4.5c0 2-1.5 6-2.3 8.8-.4 1.4-1.4 2.2-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  {clinicConfig.name}
                </span>
                <span className="text-xs text-orange-300 font-semibold">
                  Bengaluru East Clinic
                </span>
              </div>
            </div>

            <p className="text-teal-200/90 text-sm font-medium italic">
              &ldquo;{clinicConfig.tagline}&rdquo;
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Providing hospital-standard sterilization, painless dental treatments, and transparent pricing for individuals and families in Bengaluru East, Karnataka.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Autoclaved & Sealed Instrument Protocols</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Treatments (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">
              Key Treatments
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {popularTreatments.map((item, idx) => (
                <li key={idx}>
                  <a href="#treatments" className="hover:text-teal-300 transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">
              Clinic Contact & Hours
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {clinicConfig.address.street}, {clinicConfig.address.locality}, {clinicConfig.address.state}, {clinicConfig.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea580c] shrink-0" />
                <a href={getPhoneUrl()} className="text-white font-bold hover:text-orange-300 transition-colors">
                  +91 9886713878
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span className="text-slate-400">
                  Mon - Sun: 10:00 AM - 8:00 PM
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={clinicConfig.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200"
                >
                  <span>Google Maps Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {clinicConfig.name}. All rights reserved. • Bengaluru East, Karnataka
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
