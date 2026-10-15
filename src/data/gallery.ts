import { GalleryItem } from '../types';

export const galleryHeading = {
  title: 'Our Happy Customers',
  subtitle:
    'Representative solar rooftop, water heating, and pump installations across residential and commercial sites.',
  disclaimer:
    'Visual references represent actual system installation formats and configurations implemented by our solar engineering team.',
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Residential Rooftop Grid-Tied Solar System',
    category: 'Residential',
    description: 'Elevated galvanized structure with mono-crystalline solar panels optimized for shadow-free terrace generation.',
    altText: 'Residential rooftop solar panels on modern Indian home terrace with elevated frame',
    systemSize: '5 kW Capacity',
  },
  {
    id: 'gallery-2',
    title: 'Commercial Facility Solar Rooftop Installation',
    category: 'Commercial',
    description: 'High-output commercial solar PV array installed on industrial metal sheet roof reducing daytime grid dependency.',
    altText: 'Industrial warehouse rooftop solar panel installation with net metering',
    systemSize: '25 kW Commercial Array',
  },
  {
    id: 'gallery-3',
    title: 'Agricultural Solar Water Pumping System',
    category: 'Agriculture',
    description: 'High-efficiency submersible solar pump with MPPT controller delivering uninterrupted field irrigation.',
    altText: 'Solar powered submersible water pump in green agricultural field',
    systemSize: '5 HP Solar Pump',
  },
  {
    id: 'gallery-4',
    title: 'Domestic Solar Water Heater System',
    category: 'Residential',
    description: 'Pressurized evacuated tube solar water heating system mounted with insulated storage tank on residential terrace.',
    altText: 'Solar water heater installation with evacuated glass tubes and hot water tank',
    systemSize: '200 LPD Heating Capacity',
  },
  {
    id: 'gallery-5',
    title: 'Hybrid Solar Setup with Battery Backup',
    category: 'Residential',
    description: 'Complete hybrid solar system with automated changeover inverter and lithium battery storage cabinet.',
    altText: 'Hybrid solar inverter and battery backup unit installation inside utility room',
    systemSize: '7.5 kVA Hybrid System',
  },
  {
    id: 'gallery-6',
    title: 'Institutional Rooftop Solar Array',
    category: 'Commercial',
    description: 'Multi-string solar array with walk-way access, lightning arrestor, and generation monitoring dashboard.',
    altText: 'Institutional school and hospital rooftop solar PV array with cable tray management',
    systemSize: '15 kW Institutional Setup',
  },
];
