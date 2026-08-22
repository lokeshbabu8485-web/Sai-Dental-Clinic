import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { clinicConfig, isPlaceholder, getPhoneUrl, getWhatsAppUrl } from '../config/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const isPhoneConfigured = !isPlaceholder(clinicConfig.contact.phone);
  const isWhatsAppConfigured = !isPlaceholder(clinicConfig.contact.whatsapp);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!isPhoneConfigured) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <div 
      id="mobile-fixed-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 px-3 py-2 sm:hidden shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={getPhoneUrl()}
          onClick={handlePhoneClick}
          id="mobile-bottom-call-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 active:bg-slate-100 text-[#1f2937] text-[11px] font-bold transition-colors min-h-[44px] border border-slate-100"
        >
          <Phone className="w-4 h-4 text-[#004a5c] mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target={isWhatsAppConfigured ? '_blank' : '_self'}
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          id="mobile-bottom-whatsapp-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f0fdfa] active:bg-teal-100 text-[#0d9488] text-[11px] font-bold border border-teal-100 transition-colors min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 text-[#0d9488] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          id="mobile-bottom-book-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#004a5c] active:bg-[#003846] text-white text-[11px] font-bold shadow-md shadow-[#004a5c22] transition-colors min-h-[44px]"
        >
          <Calendar className="w-4 h-4 text-teal-200 mb-0.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
