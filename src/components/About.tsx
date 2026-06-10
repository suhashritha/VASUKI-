/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Feather, Heart, Award, Leaf, Calendar, History, ArrowRight } from 'lucide-react';
import { VALUES_DATA } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="text-[#C9A86A]" size={22} />,
  Feather: <Feather className="text-[#C9A86A]" size={22} />,
  Heart: <Heart className="text-[#C9A86A]" size={22} />,
  Award: <Award className="text-[#C9A86A]" size={22} />,
  Leaf: <Leaf className="text-[#C9A86A]" size={22} />,
};

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const timelineData: Milestone[] = [
  {
    year: '2015',
    title: 'The Single Loom Foundation',
    description: 'Began in Varanasi as a small, focused team of heritage silk drapers working with three local weaver households.',
  },
  {
    year: '2018',
    title: 'Festive Ready-To-Wear Collection',
    description: 'Launched customized designer kurtis and salwar suites, expanding our footprint to major Indian boutique markets.',
  },
  {
    year: '2021',
    title: 'Signature Bridal Chamber',
    description: 'Inaugurated our dedicated bespoke bridal customization center, catering to custom-designed zari and hand-drawn patterns.',
  },
  {
    year: '2026',
    title: '100% Sustainable Weave Cluster',
    description: 'Recognized as an ethical fashion employer, adopting clean organic dye-baths and supporting over 200 skilled artisan households.',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<'heritage' | 'mission' | 'values'>('heritage');
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  return (
    <section
      id="about-section"
      className="py-24 bg-[#FFFDF7] dark:bg-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Beautiful Preservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Our Heritage & Story
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Story Tab Layout & Core Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Tab view controls or narrative presentation */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Elegant Tab Headers */}
            <div id="heritage-tabs" className="flex border-b border-amber-100 dark:border-purple-900/40 mb-8 space-x-6">
              {(['heritage', 'mission', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 font-sans text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative capitalize ${
                    activeTab === tab
                      ? 'text-[#C9A86A] dark:text-amber-200'
                      : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600'
                  }`}
                >
                  {tab === 'heritage' ? 'Our Story' : tab === 'mission' ? 'Mission & Vision' : 'Our Brand Values'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="heritageActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A86A]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                {activeTab === 'heritage' && (
                  <motion.div
                    key="heritage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed"
                  >
                    <p className="font-serif text-lg text-neutral-800 dark:text-amber-100 italic">
                      "Vasuki was born from a desire to safeguard the exquisite, dying handloom traditions of the subcontinent while giving them a contemporary voice."
                    </p>
                    <p>
                      Founded by a team of second-generation weavers and textile curators, we bridge ancestral master loom secrets with elegant modern styles. We believe that ethnic clothing shouldn't merely sit in drawers. They represent living wearable art.
                    </p>
                    <p>
                      By directly sustaining organic hand-loom hubs in Banaras, Jaipur, and Mysore, Vasuki bypasses mass producers, ensuring your lehenga or saree is a single-edition heirloom piece detailed directly under our vision.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'mission' && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div id="heritage-mission" className="bg-amber-50/50 dark:bg-purple-950/20 p-5 rounded-2xl border border-amber-200/20">
                      <h4 className="font-serif text-base font-extrabold text-[#7C6641] dark:text-amber-200 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles size={16} /> Our Mission
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm font-sans mt-2 leading-relaxed">
                        To create elegant, sustainable ethnic wear that celebrates Indian culture, empowers handloom weaving clusters, and boosts raw confidence for women global wide.
                      </p>
                    </div>

                    <div id="heritage-vision" className="bg-amber-50/50 dark:bg-purple-950/20 p-5 rounded-2xl border border-amber-200/20">
                      <h4 className="font-serif text-base font-extrabold text-[#7C6641] dark:text-amber-200 uppercase tracking-wider flex items-center gap-2">
                        <Award size={16} /> Our Vision
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm font-sans mt-2 leading-relaxed">
                        To become an acclaimed global benchmark in premium sustainable ethnic fashion, where ancestral luxury craftsmanship meets contemporary wearability.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {VALUES_DATA.map((val) => (
                      <div
                        key={val.id}
                        id={`brand-value-${val.id}`}
                        className="p-4 rounded-xl border border-amber-200/10 bg-white/40 dark:bg-[#1E1726]/40 hover:bg-[#FAD6BF]/10 dark:hover:bg-[#4A3254]/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-100/40 dark:bg-purple-950/60 shadow-sm">
                            {iconMap[val.icon] || <Sparkles size={18} />}
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-amber-100 font-sans uppercase tracking-wider">
                            {val.title}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-2 leading-normal">
                          {val.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right panel: Timeline & Weave Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5F4E36] dark:text-amber-100 mb-6 flex items-center gap-2">
              <History size={20} className="text-[#C9A86A]" />
              The Journey Timeline
            </h3>

            {/* Micro horizontal timeline steps */}
            <div className="relative border-l-2 border-amber-200/30 dark:border-purple-900/30 pl-6 space-y-8">
              {timelineData.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  onMouseEnter={() => setActiveMilestone(idx)}
                  className="relative group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  {/* Timeline bullet status pointer */}
                  <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeMilestone === idx
                      ? 'bg-[#C9A86A] border-white dark:border-[#13111C] scale-125 shadow-md shadow-amber-300'
                      : 'bg-[#FFFDF7] dark:bg-[#13111C] border-amber-200 dark:border-purple-900'
                  }`} />
                  
                  <div className={`p-4 rounded-2xl transition-all duration-300 border ${
                    activeMilestone === idx
                      ? 'bg-[#FAD6BF]/10 dark:bg-[#341F3D]/25 border-amber-300/40 dark:border-purple-900/60 shadow-sm'
                      : 'border-transparent text-neutral-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-extrabold text-[#C9A86A] dark:text-amber-200 text-sm">
                        {milestone.year}
                      </span>
                      <span className="w-1.5 h-1.5 bg-amber-400/50 rounded-full" />
                      <h4 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wide text-neutral-800 dark:text-amber-100">
                        {milestone.title}
                      </h4>
                    </div>
                    {(activeMilestone === idx || window.innerWidth > 768) && (
                      <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 mt-1 lines-clamp-3 leading-relaxed">
                        {milestone.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#FFFDF7] dark:bg-[#1E1726] border border-amber-200/20 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-pink-100/40 dark:bg-purple-950/60 text-[#C9A86A]">
                  <Leaf size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-sans text-neutral-800 dark:text-amber-100 uppercase tracking-widest leading-none">
                    Sustainable Commitment
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-1">Certified Handloom Mark Artisans</p>
                </div>
              </div>
              <span className="text-[10px] font-sans font-bold text-[#C9A86A] tracking-wider uppercase bg-amber-100/50 dark:bg-purple-950/60 px-2.5 py-1 rounded-full">
                Eco-Friendly
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
