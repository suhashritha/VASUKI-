/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Sparkles, Gem, ShieldCheck, Heart, Clock, Compass, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  bgGrad: string;
}

const features: FeatureItem[] = [
  {
    id: 'f_1',
    title: 'Handcrafted Excellence',
    desc: 'Woven entirely by generational master weavers keeping century-old techniques alive.',
    bgGrad: 'from-pink-50/40 to-amber-50/20 dark:from-purple-950/20 dark:to-transparent',
  },
  {
    id: 'f_2',
    title: 'Premium Fabrics',
    desc: 'Only the finest raw mulberry silks, organic linen blends, and authentic gold zari threads.',
    bgGrad: 'from-amber-50/40 to-peach-50/20 dark:from-amber-950/10 dark:to-transparent',
  },
  {
    id: 'f_3',
    title: 'Unique Ethnic Designs',
    desc: 'Each dress represents customized signature edits—original, distinctive, and head-turning.',
    bgGrad: 'from-purple-50/40 to-pink-50/20 dark:from-purple-900/10 dark:to-transparent',
  },
  {
    id: 'f_4',
    title: 'Customized Orders',
    desc: 'Seamless boutique fittings, specialized measurements, and customizable embellishments.',
    bgGrad: 'from-emerald-50/30 to-amber-50/10 dark:from-emerald-950/10 dark:to-transparent',
  },
  {
    id: 'f_5',
    title: 'Affordable Luxury',
    desc: 'Direct-from-weaver prices, cutting middlemen out, allowing luxurious threads at reasonable rates.',
    bgGrad: 'from-amber-50/40 to-rose-50/10 dark:from-amber-950/10 dark:to-transparent',
  },
  {
    id: 'f_6',
    title: 'Experienced Designers',
    desc: '1-to-1 styling consulting through detailed remote fittings or in-office boutique panels.',
    bgGrad: 'from-orange-50/30 to-amber-50/10 dark:from-amber-900/10 dark:to-transparent',
  },
  {
    id: 'f_7',
    title: 'Trusted Quality',
    desc: 'Rigorous multi-point quality inspection and dry-cleaned rolled packing.',
    bgGrad: 'from-blue-50/30 to-purple-50/10 dark:from-indigo-950/10 dark:to-transparent',
  },
  {
    id: 'f_8',
    title: 'Fast Track Delivery',
    desc: 'Insured express logistics covering anywhere across India and overnight international lanes.',
    bgGrad: 'from-teal-50/30 to-emerald-50/10 dark:from-emerald-950/10 dark:to-transparent',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-section"
      className="py-24 bg-gradient-to-b from-[#FFFDF7] to-[#FFF5F2]/40 dark:from-[#13111C] dark:to-[#120D16] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            The Vasuki Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Why Discerning Buyers Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.id}
              id={`why-choose-card-${feat.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden bg-gradient-to-tr ${feat.bgGrad} bg-white/40 dark:bg-[#1E1726]/30 border border-amber-100/40 dark:border-purple-950/50 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Check Icon with refined styling */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EBCFC4]/40 dark:bg-purple-950/60 border border-amber-400/20 flex items-center justify-center text-[#7A5B35] dark:text-amber-200">
                  <Check size={16} strokeWidth={3} />
                </div>
                
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#3E2F1E] dark:text-amber-100">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-1 lines-clamp-3 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive trust label below the cards */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:p-8 bg-white/60 dark:bg-[#1E1726]/40 border border-amber-200/20 rounded-3xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-100/50 dark:bg-[#2B1D38] flex items-center justify-center text-[#C9A86A]">
              <ShieldCheck size={24} />
            </div>
            <div className="text-left">
              <h4 className="font-serif text-xs sm:text-sm font-bold text-neutral-800 dark:text-amber-100">
                100% Genuine Handloom Certification
              </h4>
              <p className="font-sans text-[10px] text-neutral-400">Authenticity Certificate accompanies every purchase</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-amber-200/25 dark:bg-purple-950" />
          <p className="font-serif text-xs italic text-[#7C6641] dark:text-amber-200 max-w-sm text-center sm:text-left leading-relaxed">
            "We honor ancient subcontinental weaving traditions, delivering the absolute premium to your wardrobes."
          </p>
        </div>

      </div>
    </section>
  );
}
