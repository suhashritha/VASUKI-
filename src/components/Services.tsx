/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Gem, Flame, Users, Briefcase, Scissors, X, Calendar, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="text-[#C9A86A] dark:text-amber-200" size={26} />,
  Gem: <Gem className="text-[#C9A86A] dark:text-amber-200" size={26} />,
  Flame: <Flame className="text-[#C9A86A] dark:text-amber-200" size={26} />,
  Users: <Users className="text-[#C9A86A] dark:text-amber-200" size={26} />,
  Briefcase: <Briefcase className="text-[#C9A86A] dark:text-amber-200" size={26} />,
  Scissors: <Scissors className="text-[#C9A86A] dark:text-amber-200" size={26} />,
};

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services-section"
      className="py-24 bg-gradient-to-b from-[#FFF5F2]/50 via-[#FFFDF7] to-[#FFFDF7] dark:from-[#120D16] dark:via-[#191222] dark:to-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Tailor-made Luxury
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Our Elite Services
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => (
            <motion.div
              key={srv.id}
              id={`service-card-${srv.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#FFFDF7] dark:bg-[#1E1726] border border-amber-200/20 dark:border-purple-900/30 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Elegant Circle Icon */}
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-purple-950 flex items-center justify-center border border-amber-200/25 dark:border-purple-900/40 shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[srv.icon] || <Sparkles size={24} />}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E2F1E] dark:text-amber-50 mb-3 group-hover:text-[#C9A86A] dark:group-hover:text-amber-200 transition-colors">
                  {srv.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-amber-100/30 dark:border-purple-900/20 pt-4">
                <button
                  id={`learn-more-${srv.id}`}
                  onClick={() => setSelectedService(srv)}
                  className="font-sans text-xs tracking-widest font-bold uppercase text-[#C9A86A] hover:text-[#967C4A] dark:hover:text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <span className="text-[10px] uppercase font-sans tracking-wider text-neutral-400 dark:text-neutral-500 bg-amber-50/50 dark:bg-purple-950/30 px-3 py-1 rounded-full border border-amber-100/10">
                  Exclusive
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Services Dialog Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            id="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              id="service-modal-container"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF7] dark:bg-[#1E1726] border border-amber-200/30 dark:border-purple-900/60 p-6 sm:p-8 rounded-3xl max-w-xl w-full shadow-2xl relative transition-all duration-500"
            >
              {/* Close Button */}
              <button
                id="service-modal-close"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-amber-100/30 dark:hover:bg-[#281E32] text-neutral-400 hover:text-neutral-700 dark:hover:text-amber-100 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-[#2B1D38] border border-amber-200/25 dark:border-purple-900/60 flex items-center justify-center">
                  {iconMap[selectedService.icon]}
                </div>
                <div>
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase font-bold sm:leading-none">
                    Vasuki Signature service
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E2F1E] dark:text-amber-100 mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="font-sans text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-8 border-b border-amber-100/40 dark:border-purple-900/20 pb-6">
                <p className="font-serif italic text-neutral-800 dark:text-amber-200 mb-4 text-base font-semibold leading-relaxed">
                  "{selectedService.description}"
                </p>
                <p className="leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Action Blocks */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  id="modal-close-service"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 rounded-full border border-amber-200 text-neutral-600 dark:border-purple-904/30 dark:text-neutral-400 font-sans text-xs uppercase tracking-widest font-bold hover:bg-neutral-50 dark:hover:bg-purple-950/20 transition-all cursor-pointer"
                >
                  Close details
                </button>
                
                <button
                  id="modal-inquire-service"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-950 font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <Calendar size={14} />
                  Book Booking Slot
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
