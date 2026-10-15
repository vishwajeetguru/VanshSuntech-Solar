import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { ProcessStep as ProcessStepType } from '../../types';

interface ProcessStepProps {
  step: ProcessStepType;
  isLast: boolean;
  index: number;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, isLast, index }) => {
  const getIcon = () => {
    switch (step.iconName) {
      case 'ClipboardList':
        return <ClipboardList className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
      case 'PhoneCall':
        return <MessageSquare className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#1557A6] transition-transform duration-500 group-hover:rotate-45" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#1557A6] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#10B981]" />;
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
      className="relative flex flex-col items-center text-center group z-10"
    >
      {/* Step Number Badge & Icon Circle */}
      <div className="relative mb-5">
        <motion.div
          whileHover={{ y: -4, scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-16 h-16 rounded-2xl bg-white border-2 border-[#1557A6]/25 group-hover:border-[#1557A6] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#1557A6]/15"
        >
          {getIcon()}
        </motion.div>

        {/* Number Badge with Solar Accent Border */}
        <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#1557A6] group-hover:bg-[#0B2545] text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs border-2 border-white transition-colors">
          0{step.step}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-2 tracking-tight group-hover:text-[#1557A6] transition-colors">
        {step.title}
      </h3>

      <p className="text-xs sm:text-sm text-[#637083] leading-relaxed max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
};
