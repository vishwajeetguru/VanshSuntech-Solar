import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItemData } from '../../types';

interface FAQItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'bg-white border-[#1557A6]/50 shadow-md ring-1 ring-[#1557A6]/10'
          : 'bg-white border-[#E3EAF2] hover:border-[#1557A6]/30 hover:bg-[#F6F9FC]'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6]"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
          id={`faq-btn-${faq.id}`}
        >
          <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0B2545] tracking-tight">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isOpen ? 'bg-[#1557A6]' : 'bg-[#F5B82E]'
              }`}
            />
            {faq.question}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'bg-[#1557A6] text-white rotate-180'
                : 'bg-[#EAF3FC] text-[#1557A6]'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#637083] leading-relaxed border-t border-[#E3EAF2]/60">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
