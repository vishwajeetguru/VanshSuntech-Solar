import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, ArrowRight, Sun, ChevronRight } from 'lucide-react';
import { navigationLinks, contactData } from '../../data/siteContent';
import { BrandLogo } from '../ui/BrandLogo';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onCtaClick,
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Drawer panel with smooth spring slide */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 border-l border-[#E3EAF2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E3EAF2]">
                <BrandLogo onClick={onClose} />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-[#637083] hover:text-[#0B2545] hover:bg-[#F6F9FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Links with staggered entrance */}
              <nav className="py-6 space-y-1">
                {navigationLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-[#172B45] hover:text-[#1557A6] hover:bg-[#EAF3FC]/50 transition-all group"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#637083] group-hover:text-[#1557A6] group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E3EAF2] space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => {
                  onClose();
                  onCtaClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#1557A6] hover:bg-[#104687] shadow-md shadow-[#1557A6]/20 transition-all group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href={`tel:${contactData.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#E3EAF2] text-[#0B2545] font-semibold text-sm hover:bg-[#F6F9FC] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1557A6]" />
                <span>Call: {contactData.phoneDisplay}</span>
              </a>

              <div className="pt-2 text-center">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#637083]">
                  <Sun className="w-3.5 h-3.5 text-[#F5B82E]" />
                  Gwalior & Madhya Pradesh Solar Specialists
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
