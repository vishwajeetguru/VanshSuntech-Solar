import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, CalendarCheck } from 'lucide-react';
import { navigationLinks } from '../../data/siteContent';
import { BrandLogo } from '../ui/BrandLogo';
import { MobileNavigation } from './MobileNavigation';

interface HeaderProps {
  onBookConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'shadow-sm border-b border-[#E3EAF2]'
            : 'border-b border-[#E3EAF2]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 md:gap-8 h-20">
            {/* Zone 1: Brand Wordmark */}
            <div className="shrink-0">
              <BrandLogo />
            </div>

            {/* Zone 2: Desktop Navigation Links with animated hover underline */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#172B45]">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-1 px-1 whitespace-nowrap transition-colors hover:text-[#1557A6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6] rounded group"
                >
                  <span>{link.label}</span>
                  {/* Subtle animated underline indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1557A6] rounded-full transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={onBookConsultation}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm text-white bg-[#1557A6] hover:bg-[#104687] transition-all shadow-sm shadow-[#1557A6]/20 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1557A6] focus-visible:ring-offset-2 group overflow-hidden"
              >
                <CalendarCheck className="w-4 h-4 text-[#F5B82E] transition-transform duration-300 group-hover:rotate-12" />
                <span>Book Free Consultation</span>
              </motion.button>
            </div>

            {/* Mobile Actions: Hamburger + Compact CTA */}
            <div className="flex sm:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center px-3 py-1.5 rounded-lg font-bold text-xs text-white bg-[#1557A6] hover:bg-[#104687] whitespace-nowrap shadow-sm"
              >
                Consult
              </motion.button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl text-[#0B2545] hover:bg-[#F6F9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6] transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Tablet Menu Trigger */}
            <div className="hidden sm:flex lg:hidden items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#1557A6] hover:bg-[#104687] whitespace-nowrap shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>Book Consultation</span>
              </motion.button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl text-[#0B2545] hover:bg-[#F6F9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6] transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onCtaClick={onBookConsultation}
      />
    </>
  );
};
