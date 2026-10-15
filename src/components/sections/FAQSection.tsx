import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck, MessageSquare } from 'lucide-react';
import { faqsHeading, faqsList } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import { FAQItem } from './FAQItem';

export const FAQSection: React.FC = () => {
  // First item open by default, single-item accordion behavior
  const [openId, setOpenId] = useState<string | null>(faqsList[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F6F9FC] border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Got Questions?"
          title={faqsHeading.title}
          subtitle={faqsHeading.subtitle}
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
          className="space-y-3.5"
        >
          {faqsList.map((faq) => (
            <motion.div
              key={faq.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E3EAF2] shadow-xs"
        >
          <p className="text-sm font-semibold text-[#0B2545]">
            Have a project-specific enquiry not answered above?
          </p>
          <p className="text-xs text-[#637083] mt-1">
            Call our Gwalior office directly or book a free on-site consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#consultation"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1557A6] hover:bg-[#104687] transition-colors shadow-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Book Free Consultation</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+917610119697"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-[#0B2545] bg-[#F6F9FC] border border-[#E3EAF2] hover:bg-[#EAF3FC] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1557A6]" />
              <span>Call +91 76101 19697</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
