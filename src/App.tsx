import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { TreatmentsSection } from './components/TreatmentsSection';
import { SafetySterilizationSection } from './components/SafetySterilizationSection';
import { PricingGuideSection } from './components/PricingGuideSection';
import { ClinicTourSection } from './components/ClinicTourSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoctorSection } from './components/DoctorSection';
import { PatientJourney } from './components/PatientJourney';
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
      
      {/* 1. Top Announcement Ribbon & Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        
        {/* 2. Hero Section (Clove Dental Style: Breadcrumbs, USPs, Direct Call, Interactive Hero Booking Form) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Credibility & Numbers Strip (5,000+ Smiles, 100% Sterilized, 15+ Yrs Exp, 4.9★, 7 Days Open) */}
        <TrustStrip />

        {/* 4. Treatments & Procedures Grid with Starting Estimates */}
        <TreatmentsSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 5. Signature 10X Safety & 4-Step Sterilization Protocol */}
        <SafetySterilizationSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Transparent Treatment Price Guide */}
        <PricingGuideSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 7. Clinic Tour & Patient Amenities */}
        <ClinicTourSection />

        {/* 8. Why Choose Us (Hospital-grade Safety, Painless Dentistry, Zero Waiting) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Qualified Dental Surgeons & Specialists */}
        <DoctorSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. 4-Step Patient Consultation & Treatment Journey */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Patient Reviews & Google Rating Verification */}
        <TestimonialsSection />

        {/* 12. Searchable FAQs */}
        <FAQSection />

        {/* 13. Location, Driving Route, Timings & Quick Appointment Desk */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* 14. Action Call-To-Action Ribbon */}
        <CTASection onOpenBooking={() => handleOpenBooking()} />

      </main>

      {/* 15. Comprehensive Footer with Navigation & Contacts */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking('WhatsApp Enquiry Consultation')} />

      {/* Sticky Mobile Action Bar (Call / WhatsApp / Book) */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Global Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />

    </div>
  );
}
