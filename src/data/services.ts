import { ServiceItem } from '../types';

export const servicesHeading = {
  title: 'Our Products and Services',
  subtitle: 'Explore solar solutions designed to meet different energy needs.',
};

export const solarServices: ServiceItem[] = [
  {
    id: 'on-grid',
    title: 'ON GRID SOLAR',
    badge: 'Grid-Connected',
    description:
      'VNSH SunTech provides on-grid solar systems connected to the electricity board.',
    suitableFor: 'Urban homes, commercial complexes, and institutions with reliable grid power.',
    benefits: [
      'Connected directly with local electricity board / DISCOM',
      'Net-metering support for feeding excess solar electricity back',
      'Cost-effective with no requirement for expensive battery storage',
    ],
    iconName: 'Grid',
  },
  {
    id: 'off-grid',
    title: 'OFF GRID SOLAR',
    badge: 'Independent Power',
    description:
      'Off-grid solar systems work without any connection to the electricity board.',
    suitableFor: 'Remote properties, farmhouses, and areas with frequent power outages.',
    benefits: [
      'Complete power independence from grid outages',
      'High-capacity solar battery bank for round-the-clock backup',
      'Continuous electricity supply during daytime and night',
    ],
    iconName: 'BatteryCharging',
  },
  {
    id: 'hybrid-solar',
    title: 'HYBRID SOLAR',
    badge: 'Best of Both Worlds',
    description:
      'Hybrid solar systems combine the benefits of on-grid and off-grid solar solutions.',
    suitableFor: 'Properties needing both net-metering benefits and critical power backup.',
    benefits: [
      'Dual advantage of grid export and battery backup storage',
      'Intelligent power switching between solar, battery, and grid',
      'Uninterrupted power during scheduled and unscheduled cuts',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'solar-water-pump',
    title: 'SOLAR WATER PUMP',
    badge: 'Agriculture & Irrigation',
    description:
      'Solar water pumps run directly on solar energy, with water pumping solutions for irrigation and other applications.',
    suitableFor: 'Agricultural fields, farm lands, tube-wells, and rural community water supply.',
    benefits: [
      'Operates independently without relying on diesel fuel or rural grid',
      'High-durability submersible or surface pumps with MPPT controller',
      'Consistent daytime irrigation matching crop watering schedules',
    ],
    iconName: 'Droplet',
  },
  {
    id: 'solar-water-heater',
    title: 'Solar Water Heater',
    badge: 'Domestic & Commercial Heating',
    description:
      'Solar water heaters use sunlight to heat water for daily use and help reduce electricity consumption.',
    suitableFor: 'Residential bungalows, apartments, hotels, hostels, and hospitals.',
    benefits: [
      'Utilizes thermal sunlight to heat water year-round',
      'Reduces heavy winter geyser electricity bills significantly',
      'Corrosion-resistant insulated storage tanks for hot water retention',
    ],
    iconName: 'Flame',
  },
  {
    id: 'all-solar-products',
    title: 'All Solar Products',
    badge: 'Comprehensive Range',
    description:
      'Explore solar panels, solar lights, solar inverters, solar lamps, and other solar-powered products.',
    suitableFor: 'Custom solar setups, solar lighting, upgrades, and component replacements.',
    benefits: [
      'Mono and poly-crystalline high-efficiency solar modules',
      'Reliable solar inverters, MPPT charge controllers & cabling',
      'Energy-saving outdoor solar streetlights and emergency lanterns',
    ],
    iconName: 'Sun',
  },
];
