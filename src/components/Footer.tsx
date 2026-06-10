/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Heart, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollSection = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      id="vasuki-footer"
      className="bg-[#FFF8F5] dark:bg-[#100B14] border-t border-amber-200/20 dark:border-purple-950 pt-16 pb-8 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-amber-200/20 dark:border-purple-900/10 pb-12 mb-10 text-left">
          
          {/* Column 1: Brand & Bio description */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-[#3E2F1E] dark:text-amber-100">
                VASUKI
              </span>
              <span className="text-[10px] font-sans tracking-[0.35em] text-[#C9A86A] uppercase font-bold">
                Timeless Ethnic Elegance
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
              Vasuki is a premium ethnic wear clothing brand offering beautifully crafted traditional and contemporary Indian apparel. Celebrating heritage through handcrafted excellence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-white dark:bg-[#1E1726] border border-amber-250/20 rounded-full text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-[#1E1726] border border-amber-250/20 rounded-full text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-[#1E1726] border border-amber-250/20 rounded-full text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Company links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#3E2F1E] dark:text-amber-150">
              Company
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans text-neutral-500 dark:text-neutral-400">
              <button onClick={() => scrollSection('#about-section')} className="hover:text-[#C9A86A] transition-colors text-left">About Us</button>
              <button onClick={() => scrollSection('#about-section')} className="hover:text-[#C9A86A] transition-colors text-left font-semibold">Our Story</button>
              <a href="#" className="hover:text-[#C9A86A] transition-colors">Careers</a>
              <button onClick={() => scrollSection('#why-choose-section')} className="hover:text-[#C9A86A] transition-colors text-left">The Vasuki Standard</button>
              <button onClick={() => scrollSection('#stats-section')} className="hover:text-[#C9A86A] transition-colors text-left">Milestones</button>
            </div>
          </div>

          {/* Column 3: Quick Collections categories */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#3E2F1E] dark:text-amber-150">
              Collections
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans text-neutral-500 dark:text-neutral-400">
              <button onClick={() => scrollSection('#collections-section')} className="hover:text-[#C9A86A] transition-colors text-left">Sarees</button>
              <button onClick={() => scrollSection('#collections-section')} className="hover:text-[#C9A86A] transition-colors text-left">Lehengas</button>
              <button onClick={() => scrollSection('#collections-section')} className="hover:text-[#C9A86A] transition-colors text-left">Kurtis</button>
              <button onClick={() => scrollSection('#collections-section')} className="hover:text-[#C9A86A] transition-colors text-left">Salwar Suits</button>
              <button onClick={() => scrollSection('#collections-section')} className="hover:text-[#C9A86A] transition-colors text-left font-semibold">Bridal Wear</button>
            </div>
          </div>

          {/* Column 4: Quick Support links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#3E2F1E] dark:text-amber-150">
              Support
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans text-neutral-500 dark:text-neutral-400">
              <button onClick={() => scrollSection('#contact-section')} className="hover:text-[#C9A86A] transition-colors text-left">Contact Us</button>
              <a href="#" className="hover:text-[#C9A86A] transition-colors">Shipping Info</a>
              <a href="#" className="hover:text-[#C9A86A] transition-colors">Returns & Alteration policy</a>
              <button onClick={() => scrollSection('#faq-section')} className="hover:text-[#C9A86A] transition-colors text-left">FAQs</button>
              
              <button
                id="footer-book-slot-btn"
                onClick={onOpenConsultation}
                className="mt-2 text-left text-[11px] font-bold text-[#C9A86A] hover:underline flex items-center gap-1"
              >
                <Calendar size={12} /> Book Priority Fitting
              </button>
            </div>
          </div>

        </div>

        {/* Footnote Segment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-neutral-500 dark:text-neutral-400 text-xs sm:text-xs">
          <p>© {new Date().getFullYear()} Vasuki Ethnic Wear. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Celebrating traditional craft and slow fashion with <Heart size={12} className="fill-red-400 text-red-400 animate-pulse" /> anywhere from India.
          </p>
        </div>
      </div>
    </footer>
  );
}
