import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight } from 'lucide-react';
import { contactData } from '../../data/siteContent';

export const ContactInformation: React.FC = () => {
  const whatsappUrl = `https://wa.me/917610119697?text=${encodeURIComponent(
    'Hello VNSH SunTech, I would like to enquire about solar panel installation in Gwalior.'
  )}`;

  return (
    <div className="space-y-4">
      {/* 1. Meet Us */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3EAF2] hover:border-[#1557A6]/40 hover:shadow-md transition-all duration-300 group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#EAF3FC] text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
          <MapPin className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1557A6] mb-1">
            Meet Us
          </h3>
          <p className="text-base font-bold text-[#0B2545]">{contactData.businessName}</p>
          <p className="text-sm text-[#172B45] mt-0.5">{contactData.address}</p>
          <p className="text-xs text-[#637083] mt-0.5">{contactData.locationCity}</p>
          {contactData.addressNote && (
            <p className="text-[11px] text-[#637083]/80 italic mt-2 border-t border-[#E3EAF2]/60 pt-2">
              Note: {contactData.addressNote}
            </p>
          )}
        </div>
      </motion.div>

      {/* 2. Call Us */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3EAF2] hover:border-[#1557A6]/40 hover:shadow-md transition-all duration-300 group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#EAF3FC] text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
          <Phone className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1557A6] mb-1">
            Call Us
          </h3>
          <a
            href={`tel:${contactData.phoneRaw}`}
            className="text-lg font-bold text-[#0B2545] hover:text-[#1557A6] transition-colors inline-block font-mono"
            aria-label={`Call ${contactData.phoneDisplay}`}
          >
            {contactData.phoneDisplay}
          </a>
          <p className="text-xs text-[#637083] mt-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#1557A6]" />
            {contactData.workingHours}
          </p>

          <div className="mt-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp Directly →
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* 3. Email Us */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3EAF2] hover:border-[#1557A6]/40 hover:shadow-md transition-all duration-300 group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#EAF3FC] text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
          <Mail className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1557A6] mb-1">
            Email Us
          </h3>
          <a
            href={`mailto:${contactData.email}`}
            className="text-base font-bold text-[#0B2545] hover:text-[#1557A6] transition-colors inline-block"
            aria-label={`Send email to ${contactData.email}`}
          >
            {contactData.email}
          </a>
          <p className="text-xs text-[#637083] mt-1">
            General solar inquiries, partnerships & quotations.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
