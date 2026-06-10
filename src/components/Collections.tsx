/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, Tag, Eye } from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { Product } from '../types';

interface CollectionsProps {
  onInquireProduct: (product: Product) => void;
}

const categories = [
  { id: 'all', label: 'All Collections' },
  { id: 'Sarees', label: 'Sarees' },
  { id: 'Lehengas', label: 'Lehengas' },
  { id: 'Kurtis', label: 'Kurtis' },
  { id: 'Salwar Suits', label: 'Salwar Suits' },
  { id: 'Wedding Collection', label: 'Wedding Edit' },
];

export default function Collections({ onInquireProduct }: CollectionsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section
      id="collections-section"
      className="py-24 bg-[#FFFDF7] dark:bg-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Curated Heirloom edits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Featured Collections
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Elegant Centered Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-bold transition-all duration-300 relative ${
                selectedCategory === cat.id
                  ? 'bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-900 shadow-md scale-102 font-extrabold'
                  : 'bg-amber-100/30 dark:bg-purple-950/30 text-neutral-600 dark:text-amber-100/70 hover:bg-[#FAD6BF]/20 dark:hover:bg-purple-900/40'
              }`}
            >
              {cat.label}
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryDot"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#C9A86A] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid of Products */}
        <motion.div
          layout
          id="collections-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={prod.id}
                id={`product-item-${prod.id}`}
                className="bg-white/50 dark:bg-[#1E1726]/40 border border-amber-100/40 dark:border-purple-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100/50 dark:bg-[#13111C]/50">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-[1.5s]"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {prod.isNew && (
                      <span className="flex items-center gap-1 bg-emerald-600 text-white text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-md animate-pulse">
                        <Sparkles size={10} />
                        New Edit
                      </span>
                    )}
                    {prod.isBestSeller && (
                      <span className="flex items-center gap-1 bg-amber-600 text-white text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-md">
                        <Tag size={10} />
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* Dark Glass Overlay hover interaction */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      id={`inquire-btn-${prod.id}`}
                      onClick={() => onInquireProduct(prod)}
                      className="px-5 py-2.5 rounded-full bg-white text-neutral-900 font-sans text-xs tracking-wider uppercase font-bold flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg cursor-pointer"
                    >
                      <MessageSquare size={13} className="text-[#C9A86A]" />
                      Inquire Style
                    </button>
                  </div>
                </div>

                {/* Product details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#C9A86A] font-extrabold">
                      {prod.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-800 dark:text-amber-100 mt-1 line-clamp-1 group-hover:text-[#C9A86A] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-amber-100/20 dark:border-purple-900/10 pt-4 mt-5">
                    {/* Price segment */}
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-neutral-400">Estimated Price</span>
                      <span className="font-serif text-base sm:text-lg font-bold text-[#3E2F1E] dark:text-amber-200">
                        {prod.price}
                      </span>
                    </div>

                    {/* Desktop micro query */}
                    <button
                      id={`card-inquire-direct-${prod.id}`}
                      onClick={() => onInquireProduct(prod)}
                      className="p-2.5 rounded-full bg-amber-50 dark:bg-purple-950 text-neutral-800 dark:text-amber-100 hover:bg-[#C9A86A] hover:text-white dark:hover:bg-amber-300 dark:hover:text-[#120D16] transition-all transform active:scale-90 cursor-pointer"
                      title="Quick Inquiry"
                    >
                      <MessageSquare size={16} />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Small dynamic hint block */}
        <div className="mt-12 text-center bg-[#FAD6BF]/5 dark:bg-[#1E1726]/30 border border-dashed border-amber-300/20 rounded-2xl py-4 px-6 max-w-xl mx-auto">
          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
            ✨ Looking for custom embroidery or sizing? Any featured ensemble can be tailored to your absolute requirements. Click on <b className="text-neutral-700 dark:text-amber-200">Inquire Style</b> to message our boutique team.
          </p>
        </div>

      </div>
    </section>
  );
}
