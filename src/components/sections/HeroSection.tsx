import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Wrench,
  Building2,
  PhoneCall,
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Sun,
  Zap,
} from 'lucide-react';
import { siteMetadata, contactData } from '../../data/siteContent';
import { ConsultationForm } from '../forms/ConsultationForm';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-20 border-b border-[#E3EAF2]"
    >
      {/* 1. Tasteful Solar-Themed Background Accents */}
      {/* Technical dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1557A6_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Radiant Sun Glow & Floating Decorative Solar Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 pointer-events-none select-none animate-float-subtle">
        {/* Soft Radial Ambient Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EAF3FC] via-[#F5B82E]/10 to-transparent blur-3xl opacity-75" />

        {/* Elegant Animated Sunburst SVG */}
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full opacity-40 animate-solar-slow text-[#1557A6]/20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="150"
              y1="30"
              x2="150"
              y2="60"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 150 150)`}
            />
          ))}
          <circle cx="150" cy="150" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="150" cy="150" r="45" className="fill-[#F5B82E]/20 stroke-[#F5B82E]/50" strokeWidth="2" />
        </svg>
      </div>

      {/* Secondary gentle floating solar ray particle on left side */}
      <div className="absolute top-1/2 -left-16 w-48 h-48 pointer-events-none select-none opacity-30 animate-float-subtle" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1557A6]/10 to-[#F5B82E]/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          {/* Left Column: Headline, Copy & Value Proposition with Staggered Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
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
            className="w-full lg:col-span-7 space-y-6 max-w-full"
          >
            {/* Eyebrow with solar badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FC] border border-[#1557A6]/15 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B82E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B82E]" />
              </span>
              <span className="text-xs font-bold tracking-wider text-[#1557A6] uppercase">
                {siteMetadata.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline with balanced typography */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#0B2545] leading-[1.15] text-balance"
            >
              VNSH SunTech:{' '}
              <span className="relative inline-block text-[#1557A6]">
                Gwalior's Most Trusted
                {/* Subtle animated solar glow underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#F5B82E]/70"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 4 Q 50 8, 100 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Solar Company
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="text-base sm:text-lg text-[#637083] leading-relaxed max-w-2xl text-pretty"
            >
              {siteMetadata.supportingText}
            </motion.p>

            {/* Trust Highlights (Section 5) with micro hover lifts */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="pt-2 pb-2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E3EAF2] transition-all duration-300 hover:border-[#1557A6]/30 hover:bg-white hover:shadow-xs group">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FC] text-[#1557A6] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0B2545] leading-snug">
                    Residential & Commercial Solutions
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E3EAF2] transition-all duration-300 hover:border-[#1557A6]/30 hover:bg-white hover:shadow-xs group">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FC] text-[#1557A6] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0B2545] leading-snug">
                    Professional Installation
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E3EAF2] transition-all duration-300 hover:border-[#1557A6]/30 hover:bg-white hover:shadow-xs group">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FC] text-[#1557A6] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0B2545] leading-snug">
                    End-to-End Support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons with Interactive Micro-Animations */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#consultation"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1557A6] hover:bg-[#104687] shadow-md shadow-[#1557A6]/20 transition-all focus-visible:ring-2 focus-visible:ring-[#1557A6] group"
              >
                <span>{siteMetadata.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#F5B82E] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#solutions"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0B2545] bg-[#F6F9FC] hover:bg-[#EAF3FC] border border-[#E3EAF2] transition-colors focus-visible:ring-2 focus-visible:ring-[#1557A6] group"
              >
                <span>{siteMetadata.secondaryCtaText}</span>
                <ArrowDown className="w-4 h-4 text-[#1557A6] transition-transform duration-300 group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Quick Contact & Location Marker */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.4, duration: 0.4 } },
              }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#637083] border-t border-[#E3EAF2]"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#172B45]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Serving Gwalior & Chambal Division
              </span>
              <a
                href={`tel:${contactData.phoneRaw}`}
                className="flex items-center gap-1.5 text-[#1557A6] font-semibold hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Direct Helpline: {contactData.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Free Solar Consultation Form (prioritized on mobile) */}
          <motion.div
            id="consultation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-full lg:col-span-5 scroll-mt-24"
          >
            <ConsultationForm sourceContext="Hero Form" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
