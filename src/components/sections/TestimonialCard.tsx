import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
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
      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF2] hover:border-[#1557A6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Top: Stars & Decorative Quote */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#F5B82E]" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#F5B82E] transition-transform duration-300 group-hover:scale-110"
                style={{ transitionDelay: `${i * 40}ms` }}
              />
            ))}
          </div>
          <Quote className="w-6 h-6 text-[#1557A6]/15 group-hover:text-[#1557A6]/30 transition-colors" />
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm sm:text-base text-[#172B45] italic leading-relaxed mb-6">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Footer with Avatar Micro-hover */}
      <div className="pt-4 border-t border-[#E3EAF2] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#EAF3FC] text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white flex items-center justify-center font-bold text-sm shrink-0 transition-colors duration-300">
          {testimonial.name.slice(0, 1)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#1557A6] transition-colors">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#637083]">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};
