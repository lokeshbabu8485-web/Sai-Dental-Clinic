import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Calendar, 
  Clock
} from 'lucide-react';
import { clinicConfig, isPlaceholder } from '../config/clinicData';

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Journey', href: '#journey' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
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
      {/* Top Notification / Info Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0d9488] shrink-0" />
              <span className="truncate">85, 7th Cross Road, Bengaluru East, Karnataka</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>
                  {isPlaceholder(clinicConfig.contact.hours) 
                    ? 'Timings: Contact clinic for consultation schedule' 
                    : clinicConfig.contact.hours}
                </span>
              </div>
              <a 
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0d9488] hover:text-teal-300 font-medium transition-colors"
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
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004a5c] rounded-lg p-1"
              id="navbar-brand-logo"
            >
              <div className="w-10 h-10 bg-[#004a5c] rounded-lg flex items-center justify-center shadow-md shadow-[#004a5c22] group-hover:scale-105 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 12a1 1 0 0 0-1-1h-1.3a1 1 0 0 1-.8-.4l-1.3-1.8a1 1 0 0 0-.8-.4H8.7a1 1 0 0 0-.8.4L6.6 10.6a1 1 0 0 1-.8.4H4.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.3c.3 0 .6.1.8.4l1.3 1.8c.2.3.5.4.8.4h6.6c.3 0 .6-.1.8-.4l1.3-1.8c.2-.3.5-.4.8-.4h.3a1 1 0 0 0 1-1v-2Z"/>
                  <path d="M11 11h.01"/>
                  <path d="M13 11h.01"/>
                  <path d="M10 15h4"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#004a5c]">
                  {clinicConfig.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Bengaluru East • Karnataka
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-600 hover:text-[#004a5c] transition-colors py-1 relative font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                id="navbar-book-appointment-btn"
                className="bg-[#004a5c] hover:bg-[#003846] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#004a5c33] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004a5c]"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                id="mobile-quick-book-btn"
                className="inline-flex items-center gap-1.5 bg-[#004a5c] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm"
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
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#004a5c] transition-colors"
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
            className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl transition-all"
          >
            <div className="space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-[#004a5c] hover:bg-[#f0fdfa] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-drawer-book-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#004a5c] text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-[#004a5c33]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={clinicConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#004a5c]" />
                <span>Get Clinic Directions</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
