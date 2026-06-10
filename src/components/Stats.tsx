/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { STATS_DATA } from '../data';
import { Sparkles, Award, Heart, ShieldCheck } from 'lucide-react';

const icons = [
  <Heart className="text-[#C9A86A]" size={20} />,
  <Sparkles className="text-[#C9A86A]" size={20} />,
  <Award className="text-[#C9A86A]" size={20} />,
  <ShieldCheck className="text-[#C9A86A]" size={20} />,
];

export default function Stats() {
  return (
    <section
      id="stats-section"
      className="py-16 bg-gradient-to-r from-[#FFF5F2]/80 via-[#FFFDF7] to-[#FFF5F2]/80 dark:from-[#1A1322] dark:via-[#13111C] dark:to-[#1A1322] border-b border-amber-200/20 dark:border-purple-900/10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((item, idx) => (
            <motion.div
              key={item.label}
              id={`stat-box-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center p-6 bg-white/40 dark:bg-[#1E1726]/20 border border-amber-200/15 rounded-3xl backdrop-blur-sm shadow-xs hover:border-[#C9A86A]/40 transition-colors"
            >
              {/* Micro Icon */}
              <div className="w-10 h-10 rounded-full bg-amber-50/50 dark:bg-purple-950/60 flex items-center justify-center border border-amber-100/30 dark:border-purple-900/20 mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                {icons[idx] || icons[0]}
              </div>

              {/* Counter Number */}
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2">
                {item.value}
              </span>

              {/* Counter Label */}
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#7C6641] dark:text-amber-200 font-extrabold mt-1.5">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
