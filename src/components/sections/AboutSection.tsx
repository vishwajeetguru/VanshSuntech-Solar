import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { aboutContent } from '../../data/siteContent';
import { SolarIllustration } from '../ui/SolarIllustration';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const handleScrollToContact = () => {
    if (onContactClick) {
      onContactClick();
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Inspection Graphic / Illustration with Slide-In */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#E3EAF2] shadow-xl bg-[#F6F9FC] aspect-[4/3] group">
              <SolarIllustration
                type="technician"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Verified Gwalior Badge with subtle float */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E3EAF2] shadow-md flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FC] text-[#1557A6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B2545]">Based in Gwalior</p>
                    <p className="text-[11px] text-[#637083]">Hospital Road, Madhya Pradesh</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Full Scope
                  </span>
                  <span className="text-[10px] text-[#637083]">Inspection to Commissioning</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Highlights with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] mb-2 inline-block">
                {aboutContent.supportingLine}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B2545] leading-tight">
                {aboutContent.heading}
              </h2>
            </div>

            <p className="text-base text-[#637083] leading-relaxed">
              {aboutContent.description}
            </p>

            {/* Structured Highlight List */}
            <div className="space-y-4 pt-2">
              {aboutContent.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.35 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EAF3FC] text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2545]">{item.title}</h3>
                    <p className="text-xs text-[#637083] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA with Motion Press */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1557A6] hover:bg-[#104687] shadow-md shadow-[#1557A6]/20 transition-all focus-visible:ring-2 focus-visible:ring-[#1557A6] group"
              >
                <span>{aboutContent.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
