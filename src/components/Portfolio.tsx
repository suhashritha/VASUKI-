/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';

const categories = [
  { id: 'all', label: 'All Portfolio' },
  { id: 'Bridal Collection', label: 'Bridal Edit' },
  { id: 'Festive Collection', label: 'Festive Look' },
  { id: 'Saree Collection', label: 'Loom Sarees' },
  { id: 'Designer Wear', label: 'Designer Cuts' },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (itemId: string) => {
    const idx = PORTFOLIO_DATA.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PORTFOLIO_DATA.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
    }
  };

  return (
    <section
      id="portfolio-section"
      className="py-24 bg-gradient-to-b from-[#FFF5F2]/40 via-[#FFFDF7] to-[#FFFDF7] dark:from-[#120D16] dark:via-[#191222] dark:to-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            The Studio Lookbook
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Portfolio Showcase
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-amber-100/30 dark:border-purple-900/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`portfolio-tab-${cat.id.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-sans text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-amber-100 dark:bg-purple-950 text-[#C9A86A] dark:text-amber-200 shadow-xs border border-amber-300/30'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-amber-200 h-9'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry-style Grid */}
        <motion.div
          layout
          id="portfolio-masonry"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                id={`portfolio-card-${item.id}`}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(item.id)}
                className="relative bg-white dark:bg-[#1E1726]/40 border border-amber-100/30 dark:border-purple-950/45 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer aspect-square sm:aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s]"
                />

                {/* Glassy Metadata Blur bar */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-1 bg-[#C9A86A]/80 self-start px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-extrabold mb-2">
                    <Sparkles size={8} />
                    {item.category}
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold mt-0.5 tracking-wide text-amber-50">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-neutral-200 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-3 mt-4 text-[10px] uppercase font-sans text-neutral-300 tracking-wider">
                    <span>Year: {item.year || '2026'}</span>
                    <span className="flex items-center gap-1 font-bold text-amber-300">
                      Enlarge <Maximize2 size={10} />
                    </span>
                  </div>
                </div>

                {/* Little Expand Tag on high right */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md opacity-100 group-hover:opacity-0 transition-opacity">
                  <Maximize2 size={12} className="text-neutral-800 dark:text-neutral-100" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Immersive Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="portfolio-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-4 bg-neutral-950/95 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Close / Indicator Bar */}
            <div className="flex justify-between items-center text-white p-4">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-extrabold">
                  {PORTFOLIO_DATA[lightboxIndex].category}
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-amber-50 leading-relaxed mt-0.5">
                  {PORTFOLIO_DATA[lightboxIndex].title}
                </span>
              </div>
              
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                className="p-3 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage with carousel controls */}
            <div className="flex-grow flex items-center justify-between relative max-w-4xl mx-auto w-full">
              
              {/* Prev Button */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white/80 hover:text-white transition-all transform hover:scale-105 active:scale-90 absolute left-4 z-10"
                title="Previous"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Lightbox Image stage */}
              <div
                className="w-full h-[60vh] flex items-center justify-center p-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: .7, scale: .98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={PORTFOLIO_DATA[lightboxIndex].image}
                  alt={PORTFOLIO_DATA[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5"
                />
              </div>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white/80 hover:text-white transition-all transform hover:scale-105 active:scale-90 absolute right-4 z-10"
                title="Next"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="p-6 text-center text-white/80 max-w-2xl mx-auto font-sans text-xs sm:text-sm leading-relaxed border-t border-white/5 w-full">
              <p>{PORTFOLIO_DATA[lightboxIndex].description}</p>
              <div className="mt-2 text-neutral-400 text-[10px] uppercase tracking-widest">
                Image {lightboxIndex + 1} of {PORTFOLIO_DATA.length} • Lookbook Volume VI
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
