import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Zap, Compass, ArrowRight, Sparkles } from 'lucide-react';

interface SolarCalculatorProps {
  onApplyEstimate?: (systemSize: string, billRange: string) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onApplyEstimate }) => {
  const [billAmount, setBillAmount] = useState<number>(3500);

  // Sizing formula for Central India / Madhya Pradesh solar insolation:
  // Average residential tariff ~ ₹7.5 / kWh unit.
  // 1 kW rooftop solar system generates ~120 - 130 kWh units per month.
  // Required kW = (Monthly Bill / 7.5) / 125
  const estimatedUnits = Math.round(billAmount / 7.5);
  const rawKw = estimatedUnits / 125;
  const recommendedKw = Math.max(1, Math.round(rawKw * 10) / 10);
  const roofAreaSqFt = Math.round(recommendedKw * 100);
  const monthlyUnitsGen = Math.round(recommendedKw * 125);

  const getBillRangeLabel = (amount: number): string => {
    if (amount < 1500) return 'Less than ₹1,500';
    if (amount <= 3000) return '₹1,500–₹3,000';
    if (amount <= 5000) return '₹3,000–₹5,000';
    return 'More than ₹5,000';
  };

  const handleApply = () => {
    const range = getBillRangeLabel(billAmount);
    if (onApplyEstimate) {
      onApplyEstimate(`${recommendedKw} kW`, range);
    }
    const formElement = document.getElementById('consultation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-gradient-to-br from-[#0B2545] via-[#0E3360] to-[#1557A6] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden"
    >
      {/* Decorative ambient sunbeam in background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F5B82E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B82E] mb-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Sizing Estimator
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Estimate Your Rooftop Solar Capacity
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#EAF3FC]/80 max-w-xl mx-auto">
            Adjust your monthly electricity expense to see estimated capacity, generation, and required terrace space in Gwalior.
          </p>
        </div>

        {/* Bill Slider & Quick Buttons */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/15 shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <label htmlFor="bill-range" className="text-sm font-medium text-[#EAF3FC]">
              Average Monthly Electricity Bill:
            </label>
            <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-extrabold text-[#F5B82E] font-mono">
              <span>₹</span>
              <span>{billAmount.toLocaleString('en-IN')}</span>
              <span className="text-xs text-[#EAF3FC]/70 font-normal ml-1">/ month</span>
            </div>
          </div>

          <input
            id="bill-range"
            type="range"
            min="1000"
            max="12000"
            step="500"
            value={billAmount}
            onChange={(e) => setBillAmount(Number(e.target.value))}
            className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F5B82E] transition-all"
            aria-label="Monthly electricity bill range slider"
          />

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
            {[1500, 2500, 4000, 6000, 10000].map((preset) => (
              <motion.button
                key={preset}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setBillAmount(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  billAmount === preset
                    ? 'bg-[#F5B82E] text-[#0B2545] font-bold shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ₹{preset.toLocaleString('en-IN')}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Calculation Output Cards with Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 text-center transition-colors hover:border-[#F5B82E]/40"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 text-[#F5B82E] flex items-center justify-center mx-auto mb-3">
              <Sun className="w-5 h-5 animate-spin" style={{ animationDuration: '24s' }} />
            </div>
            <p className="text-xs text-[#EAF3FC]/70 uppercase tracking-wider font-semibold">
              Recommended Solar
            </p>
            <p className="text-2xl font-extrabold text-white mt-1 font-mono">
              {recommendedKw} <span className="text-sm font-medium">kW</span>
            </p>
            <p className="text-[11px] text-[#EAF3FC]/60 mt-1">Grid or Hybrid System</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 text-center transition-colors hover:border-[#F5B82E]/40"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 text-[#F5B82E] flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <p className="text-xs text-[#EAF3FC]/70 uppercase tracking-wider font-semibold">
              Est. Monthly Generation
            </p>
            <p className="text-2xl font-extrabold text-white mt-1 font-mono">
              ~{monthlyUnitsGen} <span className="text-sm font-medium">Units</span>
            </p>
            <p className="text-[11px] text-[#EAF3FC]/60 mt-1">Based on MP sunlight data</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 text-center transition-colors hover:border-[#F5B82E]/40"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 text-[#F5B82E] flex items-center justify-center mx-auto mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <p className="text-xs text-[#EAF3FC]/70 uppercase tracking-wider font-semibold">
              Required Roof Area
            </p>
            <p className="text-2xl font-extrabold text-white mt-1 font-mono">
              ~{roofAreaSqFt} <span className="text-sm font-medium">sq.ft.</span>
            </p>
            <p className="text-[11px] text-[#EAF3FC]/60 mt-1">Shadow-free terrace space</p>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleApply}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#F5B82E] text-[#0B2545] hover:bg-[#DE9F1D] transition-all shadow-lg shadow-black/20 group"
          >
            <span>Proceed with {recommendedKw} kW Estimate</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <p className="text-xs text-[#EAF3FC]/60 mt-2.5">
            *Final capacity is determined after on-site physical roof survey and Discom net-metering feasibility check.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
