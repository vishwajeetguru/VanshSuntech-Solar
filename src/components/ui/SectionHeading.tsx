import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider mb-2.5 ${
            light ? 'text-[#F5B82E]' : 'text-[#1557A6]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B82E]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-balance ${
          light ? 'text-white' : 'text-[#0B2545]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty ${
            light ? 'text-[#EAF3FC]/80' : 'text-[#637083]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Tasteful subtle solar accent line */}
      <div
        className={`mt-4 flex items-center gap-1.5 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
        aria-hidden="true"
      >
        <span className="w-8 h-1 rounded-full bg-[#1557A6]" />
        <span className="w-2.5 h-1 rounded-full bg-[#F5B82E]" />
      </div>
    </motion.div>
  );
};
