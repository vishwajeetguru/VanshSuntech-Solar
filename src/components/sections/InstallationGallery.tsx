import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Zap, Eye } from 'lucide-react';
import { galleryHeading, galleryItems } from '../../data/gallery';
import { SectionHeading } from '../ui/SectionHeading';
import { LightboxModal } from '../ui/LightboxModal';
import { SolarIllustration } from '../ui/SolarIllustration';

export const InstallationGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Agriculture'>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handleNavigate = (newIndex: number) => {
    setActiveItemIndex(newIndex);
  };

  const getIllustrationType = (category: string, idx: number) => {
    if (category === 'Agriculture') return 'water-pump';
    if (category === 'Commercial') return 'hero';
    return idx % 2 === 0 ? 'on-grid' : 'hybrid';
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-[#E3EAF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Real Project Showcases"
          title={galleryHeading.title}
          subtitle={galleryHeading.subtitle}
          align="center"
        />

        {/* Category Filter Tabs with Smooth Tap Transition */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {(['All', 'Residential', 'Commercial', 'Agriculture'] as const).map((cat) => (
            <motion.button
              whileTap={{ scale: 0.96 }}
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A6] ${
                selectedCategory === cat
                  ? 'bg-[#1557A6] text-white shadow-sm'
                  : 'bg-[#F6F9FC] text-[#637083] hover:text-[#0B2545] border border-[#E3EAF2]'
              }`}
            >
              {cat === 'All' ? 'All Installations' : `${cat} Solar`}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid with Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredItems.map((item, idx) => {
            const illustrationType = getIllustrationType(item.category, idx);

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#E3EAF2] hover:border-[#1557A6]/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                {/* Media Container with Hover Action */}
                <div className="relative aspect-[4/3] w-full bg-[#F6F9FC] overflow-hidden border-b border-[#E3EAF2]">
                  <SolarIllustration
                    type={illustrationType}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-[#0B2545] border border-[#E3EAF2] shadow-xs backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => handleOpenLightbox(idx)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1557A6] hover:bg-[#104687] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200"
                      aria-label={`View details for ${item.title}`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </motion.button>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-[#0B2545] tracking-tight group-hover:text-[#1557A6] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#637083] leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E3EAF2] flex items-center justify-between text-xs">
                    {item.systemSize ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-[#1557A6] bg-[#EAF3FC] px-2 py-0.5 rounded">
                        <Zap className="w-3 h-3 text-[#F5B82E]" />
                        {item.systemSize}
                      </span>
                    ) : (
                      <span className="text-[#637083]">Custom Sizing</span>
                    )}

                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(idx)}
                      className="text-xs font-semibold text-[#637083] hover:text-[#1557A6] flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Specs</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-[#637083] mt-8 max-w-xl mx-auto">
          {galleryHeading.disclaimer}
        </p>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeItemIndex !== null}
        item={activeItem}
        items={filteredItems}
        currentIndex={activeItemIndex || 0}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
