import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactInformation } from './ContactInformation';

export const ContactSection: React.FC = () => {
  const gwaliorMapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Hospital Road, Gwalior, Madhya Pradesh, India'
  )}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Reach Our Team"
          title="Get In Touch"
          subtitle="Visit our office on Hospital Road, Gwalior, or reach out via phone, WhatsApp, or email."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards with Slide-In */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ContactInformation />
          </motion.div>

          {/* Right Column: Google Maps Embed with Slide-In */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F6F9FC] rounded-2xl border border-[#E3EAF2] p-4 sm:p-5 shadow-sm hover:border-[#1557A6]/30 transition-colors">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1557A6]" />
                  <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                    Service Hub: Hospital Road, Gwalior (M.P.)
                  </span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={gwaliorMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1557A6] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </motion.a>
              </div>

              {/* Responsive Map Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E3EAF2] bg-[#E2E8F0]">
                <iframe
                  title="VNSH SunTech Gwalior Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.551893816656!2d78.16982928574345!3d26.22472289658252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c697858c56c5%3A0xe5eb6c891c34a2e8!2sHospital%20Rd%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 p-3 bg-white rounded-xl border border-[#E3EAF2] flex items-center justify-between text-xs text-[#637083]">
                <span>Coverage: Entire Gwalior urban, Murar, Thatipur, Lashkar & rural Chambal</span>
                <span className="font-semibold text-emerald-600">Site Visits Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
