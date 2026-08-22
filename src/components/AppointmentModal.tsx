import React from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-appointment-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full relative shadow-2xl border border-slate-100 my-8 overflow-hidden"
        id="appointment-modal-dialog"
      >
        <button
          onClick={onClose}
          id="close-appointment-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-1 sm:p-2 max-h-[85vh] overflow-y-auto">
          <AppointmentSection 
            initialReason={initialService} 
          />
        </div>
      </div>
    </div>
  );
};
