import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Calendar, 
  Clock,
  Phone,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { clinicConfig, getPhoneUrl, getWhatsAppUrl } from '../config/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Safety & Sterilization', href: '#safety-sterilization' },
    { name: 'Price Guide', href: '#pricing-guide' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Clinic Tour', href: '#clinic-tour' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Map', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Clove-style Notification / Contact Ribbon */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-2xs">
        <div className="bg-[#004a5c] text-white text-xs py-2 px-4 border-b border-teal-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-teal-100">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span className="truncate">85, 7th Cross Road, Bengaluru East, Karnataka 560016</span>
              </div>
              <span className="hidden sm:inline text-teal-300">•</span>
              <div className="hidden sm:flex items-center gap-1.5 text-teal-100">
                <Clock className="w-3.5 h-3.5 text-teal-300" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-white font-medium">
              <a 
                href={getPhoneUrl()}
                className="flex items-center gap-1.5 text-white hover:text-orange-200 transition-colors"
                id="top-bar-phone-link"
              >
                <Phone className="w-3.5 h-3.5 text-[#ea580c] fill-current" />
                <span>Call: +91 9886713878</span>
              </a>

              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a 
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:inline text-orange-200 hover:text-white font-semibold transition-colors text-xs"
                id="top-bar-directions-link"
              >
                Get Directions →
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004a5c] rounded-lg p-1"
              id="navbar-brand-logo"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-[#004a5c] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-[#004a5c22] group-hover:scale-105 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 2.5 11 .5 1.8 2 3 3.5 3s3-1.2 3.5-3c1-3.5 2.5-7.5 2.5-11 0-3.5-2.5-6-6-6z"/>
                  <path d="M9 8c.5 1.5 1.5 2.5 3 2.5s2.5-1 3-2.5"/>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-[#004a5c]">
                    {clinicConfig.name}
                  </span>
                  <span className="hidden xl:inline-block px-2 py-0.5 rounded-full bg-orange-50 text-[#ea580c] text-[10px] font-bold border border-orange-200">
                    Bengaluru East
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Complete Family Dental Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#ea580c] transition-colors py-1 relative font-semibold text-xs xl:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-1.5 text-xs font-bold text-[#004a5c] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ea580c] fill-current" />
                <span>+91 9886713878</span>
              </a>

              <button
                onClick={onOpenBooking}
                id="navbar-book-appointment-btn"
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold shadow-md shadow-orange-500/25 transition-all duration-200 active:scale-95 flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-orange-50 text-[#ea580c] border border-orange-200"
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4 fill-current" />
              </a>

              <button
                onClick={onOpenBooking}
                id="mobile-quick-book-btn"
                className="inline-flex items-center gap-1.5 bg-[#ea580c] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer" 
            className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl transition-all"
          >
            <div className="space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#ea580c] hover:bg-orange-50/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={getPhoneUrl()}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ea580c] fill-current" />
                <span>Call Clinic: +91 9886713878</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-drawer-book-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#ea580c] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/25 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold py-2.5 px-4 rounded-xl border border-slate-200 text-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#004a5c]" />
                <span>View Google Map & Directions</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
