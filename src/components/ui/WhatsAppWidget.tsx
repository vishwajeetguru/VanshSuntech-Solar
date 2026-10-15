import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { contactData } from '../../data/siteContent';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '917610119697',
  defaultMessage = 'Hello VNSH SunTech! I have a question about solar panel installation in Gwalior.',
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-display tooltip after 1.5s if not previously dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsOpen(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsDismissed(true);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* 1. Chat Prompt Popup Card (Matches provided UI) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[310px] sm:w-[350px] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#E3EAF2] relative text-left"
            role="dialog"
            aria-label="WhatsApp quick chat"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 rounded-lg text-[#94A3B8] hover:text-[#0B2545] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Close chat prompt"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3.5 pr-4">
              {/* Mint Green Circle with Speech Bubble Icon */}
              <div className="w-11 h-11 rounded-full bg-[#DCFCE7] text-[#00A884] flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>

              {/* Text & Action */}
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-bold text-[#0B2545] leading-snug">
                  Have a quick question?
                </h4>
                <p className="text-xs text-[#637083] mt-0.5 leading-relaxed">
                  Chat with our senior solar engineer on WhatsApp now!
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A884] hover:text-[#059669] transition-colors mt-2.5 group"
                >
                  <span>Start Chat</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Circular WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={handleToggle}
        className="relative w-14 h-14 rounded-full bg-[#00D95A] hover:bg-[#00C250] text-white shadow-xl shadow-[#00D95A]/35 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D95A] focus-visible:ring-offset-2"
        aria-label="Open WhatsApp chat with VNSH SunTech"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#00D95A] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Speech Bubble Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-none stroke-current stroke-[2.2] relative z-10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </motion.button>
    </div>
  );
};
