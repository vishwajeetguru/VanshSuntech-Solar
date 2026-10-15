import React from 'react';
import { motion } from 'motion/react';
import { Grid, BatteryCharging, Cpu, Droplet, Flame, Sun, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../../types';
import { SolarIllustration } from '../ui/SolarIllustration';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  onSelectService?: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0, onSelectService }) => {
  const getIllustrationType = (id: string) => {
    switch (id) {
      case 'on-grid':
        return 'on-grid';
      case 'off-grid':
        return 'off-grid';
      case 'hybrid-solar':
        return 'hybrid';
      case 'solar-water-pump':
        return 'water-pump';
      case 'solar-water-heater':
        return 'water-heater';
      default:
        return 'products';
    }
  };

  const getIcon = () => {
    switch (service.iconName) {
      case 'Grid':
        return <Grid className="w-5 h-5 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F5B82E]" />;
      case 'Sun':
      default:
        return <Sun className="w-5 h-5 text-[#1557A6] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />;
    }
  };

  const handleEnquire = () => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const formElement = document.getElementById('consultation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const spriteCoordinates: Record<string, string> = {
    'on-grid': '0% 0%',
    'off-grid': '50% 0%',
    'hybrid-solar': '100% 0%',
    'solar-water-pump': '0% 100%',
    'solar-water-heater': '50% 100%',
    'all-solar-products': '100% 100%',
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="flex flex-col bg-white rounded-2xl border border-[#E3EAF2] hover:border-[#1557A6]/50 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
    >
      {/* Visual Header Graphic with CSS Sprite from Showcase Collage */}
      <div className="h-44 w-full bg-[#0B2545] relative overflow-hidden border-b border-[#E3EAF2]">
        {/* Underlay Fallback */}
        <div className="absolute inset-0">
          <SolarIllustration
            type={getIllustrationType(service.id)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Primary CSS Sprite Layer */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 solar-showcase-sprite sprite-${service.id}`}
          style={{
            backgroundPosition: spriteCoordinates[service.id] || '0% 0%',
          }}
        >
          {/* Ambient Subtle Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Category Pill Tag */}
        {service.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-[#0B2545] shadow-xs backdrop-blur-xs border border-[#E3EAF2] z-10">
            {service.badge}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-[#EAF3FC] group-hover:bg-[#1557A6]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
            {getIcon()}
          </div>
          <h3 className="text-lg font-bold text-[#0B2545] tracking-tight group-hover:text-[#1557A6] transition-colors">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-[#637083] leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Key Points */}
        <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E3EAF2]/80">
          <p className="text-[11px] font-bold text-[#1557A6] uppercase tracking-wider mb-2">
            Key Highlights:
          </p>
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#172B45]">
              <Check className="w-3.5 h-3.5 text-[#F5B82E] shrink-0 mt-0.5" />
              <span className="leading-tight">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button with interactive arrow micro-animation */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={handleEnquire}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#1557A6] bg-[#EAF3FC] hover:bg-[#1557A6] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6] group/btn"
          aria-label={`Enquire about ${service.title}`}
        >
          <span>Enquire for {service.title}</span>
          <ArrowRight className="w-3.5 h-3.5 text-current transition-transform duration-200 group-hover/btn:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};
