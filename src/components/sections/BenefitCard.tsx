import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, Sparkles, ShieldCheck, Headset } from 'lucide-react';
import { BenefitItem } from '../../types';

interface BenefitCardProps {
  benefit: BenefitItem;
  index: number;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const getIcon = () => {
    switch (benefit.id) {
      case 'savings':
        return <PiggyBank className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F5B82E]" />;
      case 'easy-process':
        return <Sparkles className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />;
      case 'storm-proof':
        return <ShieldCheck className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#10B981]" />;
      case 'after-sales':
      default:
        return <Headset className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF2] hover:border-[#1557A6]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#EAF3FC] group-hover:bg-[#1557A6]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
            {getIcon()}
          </div>
          <span className="text-xs font-mono font-bold text-[#637083]/60 group-hover:text-[#1557A6] transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0B2545] tracking-tight mb-3 group-hover:text-[#1557A6] transition-colors">
          {benefit.title}
        </h3>

        <p className="text-sm text-[#637083] leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};
