import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { processSteps } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { ProcessStep } from './ProcessStep';

interface HowItWorksSectionProps {
  onStartJourney?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartJourney }) => {
  const handleScrollToConsultation = () => {
    if (onStartJourney) {
      onStartJourney();
    }
    const formElement = document.getElementById('consultation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Simplified Workflow"
          title="How It Works"
          subtitle="Going solar is simple with VNSH SunTech."
          align="center"
        />

        {/* 4-Step Process Grid with Connecting Line */}
        <div className="relative mt-10 mb-14">
          {/* Desktop Connecting Line with animated energy pulse */}
          <div
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-1 bg-[#E3EAF2] z-0 overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none">
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#1557A6"
                strokeWidth="2"
                className="animate-energy-dash"
              />
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
          >
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={step.step}
                step={step}
                index={idx}
                isLast={idx === processSteps.length - 1}
              />
            ))}
          </motion.div>
        </div>

        {/* Single Clear CTA with interactive hover and tap physics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleScrollToConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1557A6] hover:bg-[#104687] transition-all shadow-md shadow-[#1557A6]/20 group"
          >
            <span>Start Your Solar Journey</span>
            <ArrowRight className="w-4 h-4 text-[#F5B82E] transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
