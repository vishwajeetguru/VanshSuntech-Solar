import React from 'react';
import { motion } from 'motion/react';
import { whyChooseUs } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { BenefitCard } from './BenefitCard';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-[#F6F9FC] border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The SunTech Difference"
          title={whyChooseUs.heading}
          subtitle={whyChooseUs.intro}
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChooseUs.benefits.map((benefit, idx) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
