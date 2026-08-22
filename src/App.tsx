import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PatientJourney } from './components/PatientJourney';
import { DoctorSection } from './components/DoctorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || 'General Dental Consultation');
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust & Values Strip */}
        <TrustStrip />

        {/* 3. About Section with Clinic Philosophy & Care Team Highlights */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Treatments Section (Categorized with non-fabrication transparency) */}
        <TreatmentsSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Patient Journey 4-Step Process */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Doctor & Clinical Team Section */}
        <DoctorSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Testimonials / Patient Experience Section */}
        <TestimonialsSection />

        {/* 9. Interactive FAQ Section */}
        <FAQSection />

        {/* 10. Location, Hours, Coordinates & Interactive Booking Area */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* 11. High Conversion Call-To-Action Banner */}
        <CTASection onOpenBooking={() => handleOpenBooking()} />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking('WhatsApp Enquiry Consultation')} />

      {/* Sticky Mobile Bottom Bar (Call / WhatsApp / Book) */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />

    </div>
  );
}
