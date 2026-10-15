import React from 'react';
import { motion } from 'motion/react';
import { testimonialsHeading, testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#F6F9FC] border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Client Experiences"
          title={testimonialsHeading.title}
          subtitle={testimonialsHeading.subtitle}
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
                staggerChildren: 0.12,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </motion.div>

        {/* Quiet disclaimer */}
        <p className="text-[11px] text-[#637083] text-center mt-8">
          *Ratings and feedback are based on direct homeowner and business customer submissions in Gwalior.
        </p>
      </div>
    </section>
  );
};
