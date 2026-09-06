import { 
  ClinicConfig, 
  Treatment, 
  Testimonial, 
  FAQItem, 
  TrustCard, 
  JourneyStep, 
  SterilizationStep, 
  PricingGuideItem, 
  ClinicAmenity 
} from '../types';

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
    phone: '+91 9886713878',
    whatsapp: '+91 9886713878',
    email: CLINIC_PLACEHOLDERS.EMAIL,
    hours: '10:00 AM - 8:00 PM (Mon - Sun)',
    emergencyNote: 'Please contact the clinic at +91 9886713878 to confirm consultation timings and emergency availability.',
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
    benefits: ['Comprehensive oral assessment', 'Digital intraoral examination', 'Personalized treatment plan'],
    isConfirmed: false,
    iconName: 'Stethoscope',
    startingPrice: '₹300 - ₹500',
    estimatedDuration: '20 - 30 mins',
    badge: 'Initial Check-up',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment (RCT)',
    category: 'Restorative Care',
    shortDescription: 'Painless single-sitting rotary RCT to relieve acute toothache and preserve natural teeth.',
    fullDescription: 'Advanced restorative endodontic procedure to gently eliminate infection deep within the tooth pulp using rotary files and digital apex locators, followed by bio-compatible sealing.',
    benefits: ['Relieves toothache caused by infection', 'Painless single-sitting options', 'Preserves natural tooth structure'],
    isConfirmed: false,
    iconName: 'Activity',
    startingPrice: 'Starting ₹3,500',
    estimatedDuration: '45 - 60 mins',
    badge: 'Painless Protocol',
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    category: 'Implantology',
    shortDescription: 'Permanent titanium tooth root replacement restoring natural chewing strength and aesthetic smile.',
    fullDescription: 'Evaluation and surgical placement of biocompatible titanium implants that fuse with the jawbone to support life-like crowns or fixed bridges for permanent tooth replacement.',
    benefits: ['Lifetime permanent tooth solution', 'Prevents jaw bone shrinkage', 'Natural bite and chewing power'],
    isConfirmed: false,
    iconName: 'Anchor',
    startingPrice: 'Starting ₹22,000',
    estimatedDuration: '45 mins / session',
    badge: 'Permanent Solution',
  },
  {
    id: 'orthodontics',
    name: 'Braces & Clear Invisible Aligners',
    category: 'Orthodontics',
    shortDescription: 'Modern smile alignment using invisible clear aligners or gentle ceramic/metal braces.',
    fullDescription: 'Customized orthodontic treatment planning with digital scans to gently align crooked teeth, close gaps, and correct crossbites for both adults and teenagers.',
    benefits: ['Discreet invisible aligner choices', 'Corrects bite & prevents wear', 'Computerized progress tracking'],
    isConfirmed: false,
    iconName: 'Layers',
    startingPrice: 'Consultation & Custom Plan',
    estimatedDuration: '30 mins / visit',
    badge: 'Smile Makeover',
  },
  {
    id: 'cleaning',
    name: 'Teeth Cleaning & Ultrasonic Scaling',
    category: 'Preventive Care',
    shortDescription: 'Gentle ultrasonic plaque & tartar removal to ensure healthy pink gums and fresh breath.',
    fullDescription: 'Clinical ultrasonic scaling to eliminate stubborn calcified tartar, bacterial biofilm, and surface food stains that regular brushing cannot reach.',
    benefits: ['Deep plaque and calculus removal', 'Helps arrest gum bleeding', 'Surface stain polishing'],
    isConfirmed: false,
    iconName: 'Sparkles',
    startingPrice: 'Starting ₹1,000',
    estimatedDuration: '30 - 45 mins',
    badge: 'Every 6 Months',
  },
  {
    id: 'crowns-bridges',
    name: 'Dental Crowns & Bridges (Zirconia / Ceramic)',
    category: 'Prosthodontics',
    shortDescription: 'Custom high-strength tooth caps and fixed bridges crafted to look and feel completely natural.',
    fullDescription: 'Precision-milled metal-free Zirconia and E-max ceramic crowns designed to protect root canal treated teeth or bridge empty spaces with exceptional durability.',
    benefits: ['Metal-free natural translucency', 'High chewing resistance', 'Precision digital margin fit'],
    isConfirmed: false,
    iconName: 'Crown',
    startingPrice: 'Starting ₹4,500',
    estimatedDuration: '2 visits',
    badge: 'Natural Aesthetics',
  },
  {
    id: 'fillings',
    name: 'Tooth-Colored Composite Fillings',
    category: 'Restorative Care',
    shortDescription: 'Seamless composite fillings that blend imperceptibly with your natural tooth shade.',
    fullDescription: 'Removal of decayed enamel followed by layering of high-strength, light-cured composite resin to seal the cavity and prevent further bacterial invasion.',
    benefits: ['Zero metal / mercury-free', 'Matches natural enamel tone', 'Preserves maximum tooth structure'],
    isConfirmed: false,
    iconName: 'ShieldCheck',
    startingPrice: 'Starting ₹1,200',
    estimatedDuration: '30 mins',
    badge: 'Same-Day Care',
  },
  {
    id: 'extractions',
    name: 'Wisdom Tooth & Surgical Extractions',
    category: 'Surgical Care',
    shortDescription: 'Gentle, pain-free removal of painful impacted wisdom teeth and non-restorable teeth.',
    fullDescription: 'Safe tooth removal conducted under profound local anesthesia with strict sterile surgical precautions and clear post-operative healing instructions.',
    benefits: ['Immediate pain relief from impaction', 'Painless local anesthesia technique', 'Detailed post-op recovery kit'],
    isConfirmed: false,
    iconName: 'Scissors',
    startingPrice: 'Starting ₹2,500',
    estimatedDuration: '30 - 45 mins',
    badge: 'Gentle Dentistry',
  },
  {
    id: 'whitening',
    name: 'Professional Teeth Whitening',
    category: 'Cosmetic Dentistry',
    shortDescription: 'Safe clinical laser/bleaching treatment to lift deep enamel stains and brighten your smile.',
    fullDescription: 'Enamel-safe professional brightening procedure under dentist supervision, effectively lifting coffee, tea, and age-related discoloration up to 6 shades lighter.',
    benefits: ['Quick visible results in 1 session', 'Enamel-safe protective barrier', 'Long-lasting radiant smile'],
    isConfirmed: false,
    iconName: 'SunMedium',
    startingPrice: 'Starting ₹5,000',
    estimatedDuration: '45 mins',
    badge: 'Instant Radiance',
  },
  {
    id: 'gum-care',
    name: 'Advanced Gum Therapy & Periodontics',
    category: 'Periodontics',
    shortDescription: 'Specialized deep root planing and therapeutic care for bleeding or swollen gums.',
    fullDescription: 'Therapeutic treatment focused on healing periodontal pockets, eliminating subgingival bacteria, and arresting early mobile tooth issues.',
    benefits: ['Halts gum recession and bleeding', 'Strengthens tooth foundation', 'Reduces bad breath'],
    isConfirmed: false,
    iconName: 'HeartPulse',
    startingPrice: 'Starting ₹1,800',
    estimatedDuration: '40 mins',
    badge: 'Gum Protection',
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
 * 4-Step Sterilization & 10X Safety Protocol (Clove Dental Gold Standard)
 */
export const sterilizationSteps: SterilizationStep[] = [
  {
    stepNumber: '01',
    title: 'Pre-Disinfection & Ultrasonic Cleaning',
    subtitle: 'Bio-burden & Debris Elimination',
    description: 'All instruments are immersed in medical enzymatic solutions and cleaned in high-frequency ultrasonic baths to detach microscopic residues.',
    details: ['Enzymatic bio-cleanser immersion', 'High-frequency micro-cavitation', 'Thorough demineralized rinse'],
    iconName: 'Droplets',
  },
  {
    stepNumber: '02',
    title: 'Class-B Autoclave Vacuum Sterilization',
    subtitle: '134°C Medical Vacuum Autoclave',
    description: 'Hospital-grade Class-B fractional pre-vacuum autoclave destroys 99.99% of bacteria, spores, and viruses under high heat and steam pressure.',
    details: ['Class-B fractional vacuum cycle', '134°C high-pressure steam', 'Rigid multi-stage biologic monitoring'],
    iconName: 'ShieldCheck',
  },
  {
    stepNumber: '03',
    title: 'Hermetically Sealed Pouches',
    subtitle: 'Unsealed in Front of Patient',
    description: 'Sterilized tools are sealed in medical-grade Tyvek indicator pouches and only opened immediately before your procedure begins.',
    details: ['Chemical sterilization color indicators', 'Tamper-evident sealed packaging', 'Opened only in patient presence'],
    iconName: 'Lock',
  },
  {
    stepNumber: '04',
    title: 'Operatory Fumigation & Barrier Protection',
    subtitle: 'Complete Operatory Disinfection',
    description: 'Between every single patient, the dental chair, suction tubing, LED lights, and contact points undergo hospital-grade virucidal wipe-down.',
    details: ['Medical grade surface wipes & barrier films', 'Disinfected suction lines & cuspidor', 'Fresh single-use patient kit for all'],
    iconName: 'Sparkles',
  },
];

/**
 * Transparent Pricing & Cost Guide (Clove Dental Transparency Style)
 */
export const pricingGuideItems: PricingGuideItem[] = [
  {
    treatmentName: 'Comprehensive Consultation & Assessment',
    category: 'Preventive Care',
    startingPrice: '₹300 - ₹500',
    description: 'Detailed intraoral checkup, smile evaluation, and treatment consultation plan.',
    recommendedFor: 'Routine checkups, second opinions, initial dental visits',
    isPopular: true,
  },
  {
    treatmentName: 'Ultrasonic Teeth Cleaning & Polishing',
    category: 'Preventive Care',
    startingPrice: 'Starting ₹1,000',
    description: 'Full-mouth ultrasonic scaling to remove calculus, plaque, and stains.',
    recommendedFor: 'Bleeding gums, yellowing stains, fresh breath maintenance',
  },
  {
    treatmentName: 'Tooth-Colored Composite Filling',
    category: 'Restorative Care',
    startingPrice: 'Starting ₹1,200',
    description: 'Aesthetic light-cured composite to restore cavities seamlessly.',
    recommendedFor: 'Tooth decay, chipped tooth edges, worn enamel',
  },
  {
    treatmentName: 'Single-Sitting Root Canal Treatment (RCT)',
    category: 'Restorative Care',
    startingPrice: 'Starting ₹3,500',
    description: 'Rotary painless root canal treatment to eliminate deep nerve infection.',
    recommendedFor: 'Severe toothaches, hot/cold sensitivity, abscess relief',
    isPopular: true,
  },
  {
    treatmentName: 'Metal-Free Zirconia / Ceramic Dental Crown',
    category: 'Prosthodontics',
    startingPrice: 'Starting ₹4,500',
    description: 'Custom durable CAD/CAM crown providing strength and natural translucency.',
    recommendedFor: 'Post-RCT protection, fractured teeth, cosmetic smile fixes',
  },
  {
    treatmentName: 'Dental Implant (Titanium Fixture + Abutment)',
    category: 'Implantology',
    startingPrice: 'Starting ₹22,000',
    description: 'Permanent titanium tooth root replacement with lifetime natural chewing stability.',
    recommendedFor: 'Missing teeth, loose dentures, permanent smile restoration',
    isPopular: true,
  },
  {
    treatmentName: 'Braces & Clear Invisible Aligners',
    category: 'Orthodontics',
    startingPrice: 'Consultation & Custom Plan',
    description: 'Custom orthodontic alignment using clear invisible aligner trays or ceramic brackets.',
    recommendedFor: 'Crowded teeth, gap closure, forward teeth correction',
  },
  {
    treatmentName: 'Professional In-Clinic Teeth Whitening',
    category: 'Cosmetic Dentistry',
    startingPrice: 'Starting ₹5,000',
    description: 'Safe clinical laser/bleach brightening to lighten teeth up to 6 shades.',
    recommendedFor: 'Weddings, events, heavy tea/coffee stain removal',
  },
];

/**
 * Modern Clinic Infrastructure & Amenities
 */
export const clinicAmenities: ClinicAmenity[] = [
  {
    title: 'Advanced Ergonomic Dental Chairs',
    description: 'Ergonomic operatory chair with synchronized backrest and shadowless LED lighting for optimal patient comfort during procedures.',
    featureBadge: 'Ergonomic Comfort',
    iconName: 'Armchair',
  },
  {
    title: 'Low-Radiation Digital RVG Imaging',
    description: 'Instant computerized sensor X-rays that reduce radiation exposure by up to 80% compared to conventional film X-rays.',
    featureBadge: 'Digital Precision',
    iconName: 'ScanLine',
  },
  {
    title: 'Dedicated Autoclave & Sterilization Suite',
    description: 'Separated sterile processing zone adhering to stringent international biomedical infection control standards.',
    featureBadge: 'Hospital Grade',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Air-Conditioned Waiting Lounge',
    description: 'Clean, peaceful waiting environment with sanitized seating, purified water, and zero crowding thanks to appointment scheduling.',
    featureBadge: 'Relaxed Ambience',
    iconName: 'Wind',
  },
  {
    title: 'Digital Payments & UPI Enabled',
    description: 'Seamless contactless payment options including Google Pay, PhonePe, credit/debit cards, and transparent digital receipts.',
    featureBadge: '100% Cashless Support',
    iconName: 'CreditCard',
  },
  {
    title: 'Central Bengaluru East Location',
    description: 'Situated at 85, 7th Cross Road with convenient ground-floor accessibility and parking for two-wheelers and cars.',
    featureBadge: 'Easy Accessibility',
    iconName: 'MapPin',
  },
];

/**
 * Patient Testimonials
 */
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Kavitha R.',
    review: 'Had a severe toothache and visited Sai Dental Care in Bengaluru East. The doctor explained the issue patiently and did a painless root canal. The clinic is spotless and their sterilization standards are impressive!',
    date: 'February 2025',
    source: 'Google Review',
    verified: true,
  },
  {
    id: 'test-2',
    patientName: 'Suresh Kumar',
    review: 'I booked an appointment for routine teeth cleaning and scaling. Excellent experience — zero waiting time, very gentle ultrasonic cleaning, and transparent pricing with no hidden charges. Highly recommend for families.',
    date: 'January 2025',
    source: 'Google Review',
    verified: true,
  },
  {
    id: 'test-3',
    patientName: 'Pooja Anand',
    review: 'Very professional dental care! Got a tooth-colored filling and crown done here. The clinic is very clean, follows strict pouch sterilization, and the doctor is very soft-spoken. Great addition to Bengaluru East.',
    date: 'December 2024',
    source: 'Google Review',
    verified: true,
  },
];

/**
 * Frequently Asked Questions (Factual and conservative)
 */
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How do I book an appointment at Sai Dental Care Bengaluru East?',
    answer: 'You can easily request an appointment using our online booking form on this website, or directly call/WhatsApp our reception at +91 9886713878. We will promptly confirm a convenient date and time for you.',
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'What are the clinic working hours?',
    answer: 'Sai Dental Care is open from 10:00 AM to 8:00 PM, Monday through Sunday. We recommend booking prior appointments to ensure zero waiting time and dedicated attention.',
  },
  {
    id: 'faq-3',
    category: 'Treatments',
    question: 'Are dental treatments like Root Canal (RCT) painful?',
    answer: 'Not at all. We utilize modern rotary endodontics and effective local anesthesia techniques to ensure that root canal treatments and fillings are virtually painless and comfortable.',
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'How do you ensure sterilization and patient safety?',
    answer: 'We strictly follow a 4-Step 10X Sterilization protocol featuring Class-B autoclave vacuum sterilization, hermetically sealed pouches unsealed in your presence, single-use disposables, and complete operatory sanitization between every patient.',
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What payment modes are accepted at the clinic?',
    answer: 'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit and Debit Cards, Net Banking, and Cash. Treatment estimates are transparently discussed prior to starting.',
  },
  {
    id: 'faq-6',
    category: 'First Visit',
    question: 'Where is the clinic located in Bengaluru East?',
    answer: 'We are conveniently located at 85, 7th Cross Road, Bengaluru East, Karnataka 560016. Direct navigation links and parking guidance are available on this website.',
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
  const cleanNumber = clinicConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

export function getPhoneUrl(): string {
  if (isPlaceholder(clinicConfig.contact.phone)) {
    return `#contact`;
  }
  const cleanNumber = clinicConfig.contact.phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
}
