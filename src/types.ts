export interface ClinicConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    full: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    googleMapsDirectionsUrl: string;
    embedMapUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    emergencyNote?: string;
  };
  doctor: {
    name: string;
    qualification: string;
    experience: string;
    specialization: string;
    bio: string;
    photoUrl?: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    googleMaps?: string;
  };
}

export interface Treatment {
  id: string;
  name: string;
  category?: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  isConfirmed: boolean;
  iconName: string;
  startingPrice?: string;
  estimatedDuration?: string;
  badge?: string;
}

export interface SterilizationStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface PricingGuideItem {
  treatmentName: string;
  category: string;
  startingPrice: string;
  description: string;
  recommendedFor: string;
  isPopular?: boolean;
}

export interface ClinicAmenity {
  title: string;
  description: string;
  featureBadge: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  review: string;
  date: string;
  source: string;
  verified: boolean;
  rating?: number;
  treatment?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'Appointments' | 'First Visit' | 'Treatments' | 'General';
}

export interface TrustCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  message: string;
}
