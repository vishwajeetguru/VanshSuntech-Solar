import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Zap, Info } from 'lucide-react';
import { GalleryItem } from '../../types';
import { SolarIllustration } from './SolarIllustration';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  // CSS sprite position in solar-solutions-collage.png (3 cols x 2 rows), keyed by item id.
  const solutionsSpriteCoordinates: Record<string, string> = {
    'gallery-1': '0% 0%',
    'gallery-2': '50% 0%',
    'gallery-3': '100% 0%',
    'gallery-4': '0% 100%',
    'gallery-5': '50% 100%',
    'gallery-6': '100% 100%',
  };

  const illustrationType =
    item?.category === 'Agriculture'
      ? 'water-pump'
      : item?.category === 'Commercial'
      ? 'hero'
      : currentIndex % 2 === 0
      ? 'on-grid'
      : 'hybrid';

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Container with Scale and Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Control Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3EAF2] bg-[#F6F9FC]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
                  {item.category} Installation
                </span>
                <span className="text-[#637083] text-xs">·</span>
                <span className="text-xs font-mono text-[#637083]">
                  {currentIndex + 1} of {items.length}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#637083] hover:text-[#0B2545] hover:bg-[#E3EAF2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Frame */}
            <div className="relative aspect-video w-full bg-[#0B2545] overflow-hidden flex items-center justify-center">
              {/* Underlay Fallback */}
              <div className="absolute inset-0" aria-hidden="true">
                <SolarIllustration type={illustrationType} className="w-full h-full object-cover" />
              </div>

              {/* Primary CSS Sprite Layer */}
              <div
                role="img"
                aria-label={item.altText || item.title}
                className="absolute inset-0 w-full h-full solar-solutions-sprite"
                style={{
                  backgroundPosition: solutionsSpriteCoordinates[item.id] || '0% 0%',
                }}
              />

              {/* Navigation Arrows with Press Physics */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-[#0B2545] hover:bg-white shadow-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#1557A6]"
                aria-label="Previous installation"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-[#0B2545] hover:bg-white shadow-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#1557A6]"
                aria-label="Next installation"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Caption & Specs */}
            <div className="p-6 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-bold text-[#0B2545]">{item.title}</h3>
                {item.systemSize && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF3FC] text-[#1557A6] self-start sm:self-auto">
                    <Zap className="w-3.5 h-3.5 text-[#F5B82E]" />
                    {item.systemSize}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#637083] leading-relaxed mb-4">{item.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-[#E3EAF2] text-xs text-[#637083]">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#1557A6]" />
                  Gwalior & Madhya Pradesh Project Scope
                </span>
                <a
                  href="#consultation"
                  onClick={onClose}
                  className="text-[#1557A6] font-semibold hover:underline"
                >
                  Enquire about similar setup →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
