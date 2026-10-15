import React from 'react';
import { motion } from 'motion/react';
import { servicesHeading, solarServices } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-[#F6F9FC] border-b border-[#E3EAF2] relative overflow-hidden">
      {/* Subtle background solar pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#1557A6_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Solar Solutions Portfolio"
          title={servicesHeading.title}
          subtitle={servicesHeading.subtitle}
          align="center"
        />

        {/* Staggered cards reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solarServices.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              onSelectService={onSelectService}
            />
          ))}
        </motion.div>

        {/* Bottom Helper Note with subtle hover transition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E3EAF2] max-w-2xl mx-auto shadow-xs hover:border-[#1557A6]/30 transition-colors"
        >
          <p className="text-sm font-semibold text-[#0B2545]">
            Unsure which solar configuration suits your roof or load?
          </p>
          <p className="text-xs text-[#637083] mt-1">
            Our engineering team conducts site visits across Gwalior to calculate your exact kilowatt needs.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1557A6] hover:underline mt-3 group"
          >
            <span>Schedule a site consultation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
