/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, Search, HelpCircle, Sparkles, X } from 'lucide-react';
import { INSTAGRAM_GALLERY_DATA } from '../data';

export default function FashionGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter(item => item !== id));
    } else {
      setLikedIds([...likedIds, id]);
    }
  };

  return (
    <section
      id="fashion-gallery-section"
      className="py-24 bg-[#FFFDF7] dark:bg-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Social Lookbooks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight flex items-center justify-center gap-2">
            <Instagram className="text-[#C9A86A] animate-pulse" size={26} />
            Vasuki Fashion Feed
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
          <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            Follow our styling journey at <span className="font-bold text-amber-600 dark:text-amber-200">@Vasuki_Ethnic</span> and use our tag <span className="italic font-serif">#CelebrateVasuki</span> to be featured.
          </p>
        </div>

        {/* 15-Item Grid layout styled gracefully */}
        <div id="fashion-instagram-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {INSTAGRAM_GALLERY_DATA.map((pic) => {
            const isLiked = likedIds.includes(pic.id);
            return (
              <motion.div
                key={pic.id}
                id={`gallery-item-${pic.id}`}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxUrl(pic.url)}
                onMouseEnter={() => setHoveredId(pic.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative aspect-square overflow-hidden rounded-3xl border border-amber-200/10 shadow-sm cursor-pointer group bg-neutral-100 dark:bg-purple-950/20"
              >
                {/* Visual Image */}
                <img
                  src={pic.url}
                  alt={pic.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Aesthetic Hover Overlay panel */}
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  
                  {/* Top Row: Category */}
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] uppercase tracking-widest font-extrabold bg-[#C9A86A]/80 px-2 py-0.5 rounded-md">
                      {pic.category}
                    </span>
                    <button
                      id={`like-btn-${pic.id}`}
                      onClick={(e) => toggleLike(e, pic.id)}
                      className="p-1 rounded-full bg-black/25 text-white hover:scale-110 active:scale-90 transition-transform"
                    >
                      <Heart size={14} className={isLiked ? 'fill-rose-500 text-rose-500' : ''} />
                    </button>
                  </div>

                  {/* Center Look trigger */}
                  <div className="self-center p-2 rounded-full bg-white/20 backdrop-blur-md scale-90 group-hover:scale-100 transition-transform">
                    <Search size={16} />
                  </div>

                  {/* Bottom details */}
                  <div className="text-left">
                    <h4 className="font-serif text-xs font-bold text-amber-50 truncate">
                      {pic.title}
                    </h4>
                    <p className="font-sans text-[8px] uppercase tracking-wider text-neutral-300 mt-0.5 flex items-center gap-1">
                      <Instagram size={8} /> @vasuki_ethnic
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox for quick gallery viewing */}
      <AnimatePresence>
        {lightboxUrl && (
          <motion.div
            id="gallery-zoom-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxUrl(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[85vh] overflow-hidden rounded-2xl border border-white/10"
            >
              <button
                id="gallery-zoom-close"
                onClick={() => setLightboxUrl(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
              
              <img
                src={lightboxUrl}
                alt="Enlarged looks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-neutral-900 rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
