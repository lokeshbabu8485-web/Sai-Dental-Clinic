import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, isPlaceholder, clinicConfig } from '../config/clinicData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const isWhatsAppConfigured = !isPlaceholder(clinicConfig.contact.whatsapp);

  const handleClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex items-center">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1f2937] text-xs font-bold px-4 py-2.5 rounded-xl shadow-md border border-slate-100 mr-3">
          <span>Need dental guidance? Chat with us</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target={isWhatsAppConfigured ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={handleClick}
        id="floating-whatsapp-btn"
        aria-label="Contact Sai Dental Care on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white flex items-center justify-center shadow-lg shadow-teal-900/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-200"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
