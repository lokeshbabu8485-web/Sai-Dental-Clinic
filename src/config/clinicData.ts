import { ClinicConfig, Treatment, Testimonial, FAQItem, TrustCard, JourneyStep } from '../types';

/**
 * CONFIGURATION FOR SAI DENTAL CARE
 * 
 * IMPORTANT ACCURACY RULE:
 * Unconfirmed items have explicit placeholder values (e.g. '[TO BE CONFIRMED]').
 * The UI automatically detects these and displays a respectful, professional
 * "To be confirmed / Contact clinic" notice instead of exposing raw internal placeholders.
 * 
 * Replace these values as official clinic details become available.
 */

export const CLINIC_PLACEHOLDERS = {
  PHONE: '[TO BE CONFIRMED]',
  WHATSAPP: '[TO BE CONFIRMED]',
  EMAIL: '[TO BE CONFIRMED]',
  HOURS: '[TO BE CONFIRMED]',
  DOCTOR_NAME: '[TO BE CONFIRMED]',
  DOCTOR_QUALIFICATION: '[TO BE CONFIRMED]',
  DOCTOR_EXPERIENCE: '[TO BE CONFIRMED]',
  DOCTOR_SPECIALIZATION: '[TO BE CONFIRMED]',
  DOCTOR_BIO: '[TO BE CONFIRMED]',
  CLINIC_PHOTO: null,
};

export const clinicConfig: ClinicConfig = {
  name: 'Sai Dental Care',
  tagline: 'Personalized Dental Care for Healthy, Confident Smiles',
  shortDescription: 'Sai Dental Care provides personalized dental care focused on your oral health, comfort, and long-term smile in Bengaluru East, Karnataka.',
  
  address: {
    street: '85, 7th Cross Road',
    locality: 'Bengaluru East',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    full: '85, 7th Cross Road, Bengaluru East, Karnataka, India',
    coordinates: {
      latitude: 13.014114,
      longitude: 77.704109,
    },
    // Direct Google Maps navigation link based on exact coordinates
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=13.014114,77.704109',
    // Embeddable OpenStreetMap view centered on exact coordinates
    embedMapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=77.694109%2C13.004114%2C77.714109%2C13.024114&layer=mapnik&marker=13.014114%2C77.704109',
  },

  contact: {
    phone: CLINIC_PLACEHOLDERS.PHONE,
    whatsapp: CLINIC_PLACEHOLDERS.WHATSAPP,
    email: CLINIC_PLACEHOLDERS.EMAIL,
    hours: CLINIC_PLACEHOLDERS.HOURS,
    emergencyNote: 'Please contact the clinic to confirm consultation timings and emergency availability.',
  },

  doctor: {
    name: CLINIC_PLACEHOLDERS.DOCTOR_NAME,
    qualification: CLINIC_PLACEHOLDERS.DOCTOR_QUALIFICATION,
    experience: CLINIC_PLACEHOLDERS.DOCTOR_EXPERIENCE,
    specialization: CLINIC_PLACEHOLDERS.DOCTOR_SPECIALIZATION,
    bio: CLINIC_PLACEHOLDERS.DOCTOR_BIO,
  },

  socials: {
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=13.014114,77.704109',
  },
};

/**
 * Trust and Value Cards
 */
export const trustCards: TrustCard[] = [
  {
    id: 'trust-1',
    title: 'Patient-Centered Care',
    description: 'Listening closely to your oral concerns and prioritizing your personal comfort at every step.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'trust-2',
    title: 'Personalized Treatment',
    description: 'Customized dental recommendations tailored to your specific dental condition and goals.',
    iconName: 'Sparkles',
  },
  {
    id: 'trust-3',
    title: 'Comfort-Focused Approach',
    description: 'A calm, welcoming clinic environment designed to make your dental visits stress-free.',
    iconName: 'Smile',
  },
  {
    id: 'trust-4',
    title: 'Convenient Bengaluru Location',
    description: 'Easily accessible at 85, 7th Cross Road, Bengaluru East with straightforward route access.',
    iconName: 'MapPin',
  },
];

/**
 * Treatments configuration
 * `isConfirmed`: true will display the treatment in the confirmed treatment list.
 * Set to `false` until verified with the clinic.
 */
export const proposedTreatments: Treatment[] = [
  {
    id: 'consultation',
    name: 'Dental Consultation & Assessment',
    category: 'Preventive Care',
    shortDescription: 'Comprehensive examination of teeth, gums, and oral cavity with personalized treatment advice.',
    fullDescription: 'A thorough clinical examination evaluating overall oral hygiene, identifying early issues like enamel wear, cavities, or gum sensitivity, and discussing preventative steps tailored for you.',
    benefits: ['Comprehensive oral assessment', 'Preventative guidance', 'Personalized treatment plan'],
    isConfirmed: false,
    iconName: 'Stethoscope',
  },
  {
    id: 'cleaning',
    name: 'Teeth Cleaning & Scaling',
    category: 'Preventive Care',
    shortDescription: 'Professional plaque and tartar removal to maintain gum health and freshen breath.',
    fullDescription: 'Gentle cleaning to remove calcified plaque and stains that cannot be removed by daily brushing alone, promoting healthier gums and long-term tooth preservation.',
    benefits: ['Plaque and tartar removal', 'Supports gum health', 'Helps prevent periodontal concerns'],
    isConfirmed: false,
    iconName: 'Sparkles',
  },
  {
    id: 'fillings',
    name: 'Dental Fillings',
    category: 'Restorative Care',
    shortDescription: 'Restoring teeth damaged by decay with tooth-colored composite restorations.',
    fullDescription: 'Cleaning decayed tooth structures and filling the cavity with durable, aesthetic composite materials that match your natural tooth shade.',
    benefits: ['Prevents further decay', 'Restores chewing function', 'Tooth-matching appearance'],
    isConfirmed: false,
    iconName: 'ShieldCheck',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    category: 'Restorative Care',
    shortDescription: 'Careful removal of infected dental pulp to relieve discomfort and save natural teeth.',
    fullDescription: 'A restorative procedure to treat infection deep within the tooth pulp, followed by cleaning, disinfecting, and sealing the root canals to preserve your natural tooth structure.',
    benefits: ['Relieves toothache caused by infection', 'Preserves natural tooth structure', 'Protects surrounding bone'],
    isConfirmed: false,
    iconName: 'Activity',
  },
  {
    id: 'extractions',
    name: 'Tooth Extraction',
    category: 'Surgical Care',
    shortDescription: 'Safe and careful removal of severely damaged, impacted, or non-restorable teeth.',
    fullDescription: 'Performed when a tooth cannot be saved through conservative restoration, or to relieve overcrowding and prevent adjacent tooth damage under local anesthesia.',
    benefits: ['Relieves severe distress', 'Prevents spread of infection', 'Preparation for prosthetic restoration'],
    isConfirmed: false,
    iconName: 'Scissors',
  },
  {
    id: 'crowns-bridges',
    name: 'Crowns & Bridges',
    category: 'Prosthodontics',
    shortDescription: 'Custom caps and fixed bridges to strengthen compromised teeth or replace missing ones.',
    fullDescription: 'Custom-fitted restorations that encase damaged teeth for strength or bridge spaces where teeth are missing, restoring natural chewing capability and alignment.',
    benefits: ['Reinforces weakened teeth', 'Restores bite harmony', 'Durable, natural finish'],
    isConfirmed: false,
    iconName: 'Crown',
  },
  {
    id: 'implants',
    name: 'Dental Implants Consultation',
    category: 'Implantology',
    shortDescription: 'Evaluation for permanent titanium tooth roots to support artificial replacement teeth.',
    fullDescription: 'Assessment of jaw bone density and gum anatomy to determine eligibility for dental implant placement for long-term tooth replacement.',
    benefits: ['Long-lasting tooth replacement', 'Preserves jaw bone structure', 'Natural chewing sensation'],
    isConfirmed: false,
    iconName: 'Anchor',
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Safe, professional shade brightening to reduce discoloration and stains.',
    fullDescription: 'Clinical-grade lightening treatments to lift external staining from coffee, tea, or age, helping brighten your natural smile safely.',
    benefits: ['Noticeable shade improvement', 'Clinically supervised safety', 'Customized to sensitivity levels'],
    isConfirmed: false,
    iconName: 'SunMedium',
  },
  {
    id: 'orthodontics',
    name: 'Braces & Alignment Consultation',
    category: 'Orthodontics',
    shortDescription: 'Guidance and evaluation for correcting misaligned teeth and bite issues.',
    fullDescription: 'Consultation to assess malocclusion, spacing, or crowding in children and adults, exploring conventional braces or clear aligner options.',
    benefits: ['Improves bite functionality', 'Enhances dental aesthetics', 'Facilitates easier oral hygiene'],
    isConfirmed: false,
    iconName: 'Layers',
  },
  {
    id: 'gum-care',
    name: 'Gum Care & Periodontics',
    category: 'Periodontics',
    shortDescription: 'Targeted assessment and treatment for bleeding, sensitive, or inflamed gums.',
    fullDescription: 'Comprehensive management of gingivitis and periodontal conditions through deep cleaning and tailored home-care maintenance regimes.',
    benefits: ['Reduces bleeding and swelling', 'Prevents bone loss', 'Freshens breath'],
    isConfirmed: false,
    iconName: 'HeartPulse',
  },
];

/**
 * Filtered list of confirmed treatments only.
 * If empty, the website shows a clear and honest notice explaining that the
 * verified treatment list will be updated upon confirmation from the clinic.
 */
export const confirmedTreatments: Treatment[] = proposedTreatments.filter((t) => t.isConfirmed);

/**
 * Patient Journey Steps
 */
export const patientJourneySteps: JourneyStep[] = [
  {
    stepNumber: '01',
    title: 'Book',
    subtitle: 'Schedule Your Visit',
    description: 'Request an appointment online or get in touch with our Bengaluru clinic to select a convenient date and time.',
    iconName: 'CalendarCheck',
  },
  {
    stepNumber: '02',
    title: 'Consultation',
    subtitle: 'Comprehensive Assessment',
    description: 'Meet your dentist, discuss any oral concerns or discomfort, and undergo a gentle, thorough dental examination.',
    iconName: 'Stethoscope',
  },
  {
    stepNumber: '03',
    title: 'Treatment Plan',
    subtitle: 'Clear Recommendations',
    description: 'Receive an easy-to-understand explanation of your oral health status, recommended treatments, and care options.',
    iconName: 'FileText',
  },
  {
    stepNumber: '04',
    title: 'Follow-up',
    subtitle: 'Long-Term Smile Care',
    description: 'Continue recommended home oral hygiene practices and attend scheduled follow-ups to maintain healthy teeth and gums.',
    iconName: 'ShieldCheck',
  },
];

/**
 * Why Choose Us Feature Cards
 */
export const whyChooseUsFeatures = [
  {
    id: 'feat-1',
    title: 'Personalized Care',
    description: 'Treatment recommendations based on your individual dental needs.',
    iconName: 'UserCheck',
  },
  {
    id: 'feat-2',
    title: 'Clear Communication',
    description: 'Understand your dental condition and available treatment options.',
    iconName: 'MessageSquare',
  },
  {
    id: 'feat-3',
    title: 'Comfortable Experience',
    description: 'A calm, patient-focused approach throughout your visit.',
    iconName: 'Coffee',
  },
  {
    id: 'feat-4',
    title: 'Long-Term Oral Health',
    description: 'Focus on maintaining healthy teeth and gums, not just treating immediate problems.',
    iconName: 'Heart',
  },
];

/**
 * Patient Testimonials
 * Note: Per accuracy rules, do NOT invent reviews or fake ratings.
 * Real verified patient feedback will be populated here.
 */
export const testimonials: Testimonial[] = [];

/**
 * Frequently Asked Questions (Factual and conservative)
 */
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How do I book an appointment?',
    answer: 'You can submit an appointment request using the online form on this website, or reach out to the clinic directly via phone or WhatsApp once numbers are confirmed. Our team will get back to you to confirm time availability.',
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'Do I need an appointment before visiting?',
    answer: 'Prior appointments are recommended to minimize waiting time and ensure dedicated one-on-one attention for your dental consultation. Please contact the clinic to check walk-in availability.',
  },
  {
    id: 'faq-3',
    category: 'First Visit',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, details of any ongoing medications or general medical history, and any recent dental records or X-rays if available.',
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'How often should I visit a dentist?',
    answer: 'For most individuals, a routine dental check-up and cleaning is generally advised every 6 months to detect any early signs of cavities or gum concerns before they progress.',
  },
  {
    id: 'faq-5',
    category: 'Treatments',
    question: 'Do you treat children?',
    answer: 'Please contact Sai Dental Care directly to confirm the availability of pediatric dental services and consultations for young children.',
  },
  {
    id: 'faq-6',
    category: 'Treatments',
    question: 'Do you provide emergency dental care?',
    answer: 'Please contact Sai Dental Care to confirm emergency availability and protocols for urgent dental situations such as acute toothaches or dental trauma.',
  },
];

/**
 * Helper utilities for placeholder handling
 */
export function isPlaceholder(val?: string | null): boolean {
  if (!val) return true;
  const trimmed = val.trim();
  return (
    trimmed === '' ||
    trimmed.includes('[TO BE CONFIRMED]') ||
    trimmed.toUpperCase().includes('PLACEHOLDER')
  );
}

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || 'Hello Sai Dental Care, I would like to enquire about booking a dental appointment.'
  );
  if (isPlaceholder(clinicConfig.contact.whatsapp)) {
    return `#contact`;
  }
  const cleanNumber = clinicConfig.contact.whatsapp.replace(/[^0-9+]/g, '');
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

export function getPhoneUrl(): string {
  if (isPlaceholder(clinicConfig.contact.phone)) {
    return `#contact`;
  }
  const cleanNumber = clinicConfig.contact.phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
}
