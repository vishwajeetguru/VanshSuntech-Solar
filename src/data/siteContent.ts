import { ContactInfo, ProcessStep, BenefitItem } from '../types';

export const siteMetadata = {
  brandName: 'VNSH SunTech',
  tagline: "Gwalior's Most Trusted Solar Company",
  eyebrow: 'POWER YOUR FUTURE WITH SOLAR',
  headline: "VNSH SunTech: Gwalior's Most Trusted Solar Company",
  supportingText:
    'VNSH SunTech is a leading solar company in Gwalior, offering high-quality solar panel installation services for residential and commercial properties.',
  primaryCtaText: 'Book a Free Solar Consultation',
  secondaryCtaText: 'Explore Solar Solutions',
  trustHighlights: [
    'Residential & Commercial Solutions',
    'Professional Installation',
    'End-to-End Support',
  ],
};

export const aboutContent = {
  heading: 'Introducing VNSH SunTech',
  supportingLine: 'Get Your Free Solar Consultation Today',
  description:
    'Discover solar solutions for your home or business with a team focused on installation, guidance, and customer support. We evaluate your rooftop conditions, design an efficient photovoltaic system, and assist you at every step of your solar transition.',
  ctaText: 'Contact for Details',
  highlights: [
    {
      title: 'Site Evaluation & Planning',
      description: 'Comprehensive assessment of roof orientation, shadow-free area, and load profile.',
    },
    {
      title: 'Quality Equipment Standards',
      description: 'Durable solar modules, Tier-1 inverters, and precision-engineered mounting structures.',
    },
    {
      title: 'Dedicated Local Team',
      description: 'Prompt on-ground technical assistance and maintenance support in Gwalior region.',
    },
  ],
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Share Your Requirements',
    description: 'Tell us about your property, electricity consumption, and solar requirements.',
    iconName: 'ClipboardList',
  },
  {
    step: 2,
    title: 'Get a Solar Consultation',
    description: 'Our team discusses your energy needs and helps you explore suitable solar solutions.',
    iconName: 'PhoneCall',
  },
  {
    step: 3,
    title: 'Installation Planning',
    description: 'Review the proposed solution, installation requirements, and applicable project details before proceeding.',
    iconName: 'Compass',
  },
  {
    step: 4,
    title: 'Installation & Support',
    description: 'Proceed with installation and receive support according to the agreed project scope.',
    iconName: 'ShieldCheck',
  },
];

export const whyChooseUs: {
  heading: string;
  intro: string;
  benefits: BenefitItem[];
} = {
  heading: 'Why Choose VNSH SunTech?',
  intro:
    'At VNSH SunTech, we focus on providing a complete solar experience — from consultation and installation to ongoing support.',
  benefits: [
    {
      id: 'savings',
      title: 'Assurance of Savings',
      description:
        'Our team handles the installation process and provides support related to your solar system, helping make the transition to solar smoother.',
      iconName: 'PiggyBank',
    },
    {
      id: 'easy-process',
      title: 'An Easy Process',
      description:
        'With an end-to-end approach, we aim to simplify the process from consultation and planning to installation and support.',
      iconName: 'CheckCircle2',
    },
    {
      id: 'storm-proof',
      title: 'Storm-proof Structure',
      description:
        'VNSH SunTech focuses on providing a complete solar experience rather than simply installing solar panels and leaving you on your own.',
      iconName: 'ShieldAlert',
    },
    {
      id: 'after-sales',
      title: 'Reliable After-sales Service',
      description:
        'Our relationship does not end after installation. We aim to provide after-sales assistance and maintenance support according to the agreed project scope.',
      iconName: 'Wrench',
    },
  ],
};

export const contactData: ContactInfo = {
  businessName: 'VNSH SunTech',
  locationCity: 'Gwalior, Madhya Pradesh, India',
  address: 'Hospital Road, Gwalior, Madhya Pradesh',
  addressNote: 'Please verify the complete physical office address with the client before official contract signing.',
  phoneDisplay: '+91 76101 19697',
  phoneRaw: '+917610119697',
  email: 'support@vnshsuntech.com',
  workingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM (IST)',
};

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solar Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
