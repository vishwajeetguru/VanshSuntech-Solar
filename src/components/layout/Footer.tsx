import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowUp, Sun } from 'lucide-react';
import { siteMetadata, contactData, navigationLinks } from '../../data/siteContent';
import { solarServices } from '../../data/services';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2545] text-white border-t border-[#1557A6]/20 relative overflow-hidden">
      {/* Subtle ambient solar radial highlight in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#1557A6]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-[#EAF3FC]/75 leading-relaxed max-w-sm">
              {siteMetadata.supportingText}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#EAF3FC]/80 transition-colors hover:bg-white/10">
                <Sun className="w-3.5 h-3.5 text-[#F5B82E]" />
                Clean Energy for Gwalior & Madhya Pradesh
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#EAF3FC]/80 hover:text-white hover:underline transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solar Solutions Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Solar Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {solarServices.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#solutions"
                    className="text-[#EAF3FC]/80 hover:text-white hover:underline transition-colors inline-block"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Gwalior Office
            </h3>
            <p className="text-xs text-[#EAF3FC]/80 flex items-start gap-2.5 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
              <span>{contactData.address}, {contactData.locationCity}</span>
            </p>
            <p className="text-xs text-[#EAF3FC]/80 flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#F5B82E] shrink-0" />
              <a
                href={`tel:${contactData.phoneRaw}`}
                className="hover:text-white font-mono font-semibold transition-colors"
              >
                {contactData.phoneDisplay}
              </a>
            </p>
            <p className="text-xs text-[#EAF3FC]/80 flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F5B82E] shrink-0" />
              <a
                href={`mailto:${contactData.email}`}
                className="hover:text-white transition-colors"
              >
                {contactData.email}
              </a>
            </p>

            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#consultation"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B2545] bg-[#F5B82E] hover:bg-[#DE9F1D] transition-colors shadow-sm"
              >
                Book Free Consultation
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF3FC]/60">
          <p>© {currentYear} {siteMetadata.brandName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="http://vishwajeet.guru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAF3FC]/70 hover:text-[#F5B82E] transition-colors hover:underline"
            >
              Developed by Vishwajeet Guru
            </a>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#EAF3FC]/80 hover:text-white transition-colors group"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
