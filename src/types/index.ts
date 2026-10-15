export type MonthlyBillRange =
  | 'Less than ₹1,500'
  | '₹1,500–₹3,000'
  | '₹3,000–₹5,000'
  | 'More than ₹5,000';

export interface ConsultationFormData {
  fullName: string;
  whatsappNumber: string;
  monthlyBill: MonthlyBillRange | '';
  pincode: string;
  serviceInterest?: string;
}

export interface ConsultationSubmissionResult {
  success: boolean;
  message: string;
  leadId?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  suitableFor: string;
  benefits: string[];
  iconName: 'Sun' | 'BatteryCharging' | 'Cpu' | 'Droplet' | 'Flame' | 'Grid';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: 'ClipboardList' | 'PhoneCall' | 'Compass' | 'ShieldCheck';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'PiggyBank' | 'CheckCircle2' | 'ShieldAlert' | 'Wrench';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Agriculture';
  description: string;
  altText: string;
  systemSize?: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  businessName: string;
  locationCity: string;
  address: string;
  addressNote?: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  workingHours: string;
}
