/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Sparkles, CheckCircle, MessageSquare, Clock } from 'lucide-react';

// Live custom section modules
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import FashionGallery from './components/FashionGallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import { Product } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  // Consulation form state
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('11:00');
  const [bookingStyle, setBookingStyle] = useState('bridal');
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  // Sync Dark Mode state class on root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInquireProduct = (product: Product) => {
    setInquiryProduct(product);
  };

  const handleClearInquiryProduct = () => {
    setInquiryProduct(null);
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
    setIsBookingSuccess(false);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setBookingErrors({});
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!bookingName.trim()) errors.name = 'Please enter your name';
    if (!bookingPhone.trim()) {
      errors.phone = 'Please provide your contact number';
    } else if (!/^[0-9+\s-]{10,15}$/.test(bookingPhone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!bookingDate) errors.date = 'Please pick a consultation date';

    if (Object.keys(errors).length > 0) {
      setBookingErrors(errors);
      return;
    }

    setBookingErrors({});
    setIsBookingSubmitting(true);

    // Simulate scheduling booking slot
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setIsBookingSuccess(true);
      setBookingName('');
      setBookingPhone('');
      setBookingDate('');
    }, 1200);
  };

  return (
    <div
      id="vasuki-root-wrapper"
      className={`min-h-screen text-neutral-800 dark:text-neutral-200 transition-colors duration-500 font-sans ${
        isDarkMode ? 'dark bg-[#120D16]' : 'bg-[#FFFDF2]/30'
      }`}
    >
      {/* 1. Animated Loader Page Overlay */}
      <Loader />

      {/* 2. Premium Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={handleToggleDarkMode}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 3. Hero Section Area */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 4. Heritage & Story Section Area */}
      <About />

      {/* 5. Custom Services Details Area */}
      <Services onOpenConsultation={handleOpenConsultation} />

      {/* 6. Curated Collections Area */}
      <Collections onInquireProduct={handleInquireProduct} />

      {/* 7. Why Choose Us Standard highlights */}
      <WhyChooseUs />

      {/* 8. Lookbook Portfolio Area */}
      <Portfolio />

      {/* 9. Verified Testimonials Slider */}
      <Testimonials />

      {/* 10. Core Stat Panels */}
      <Stats />

      {/* 11. Instagram Live Grid Showcase */}
      <FashionGallery />

      {/* 12. Accordion FAQs */}
      <FAQ />

      {/* 13. Rich Contact, Map & Lead form */}
      <Contact
        inquiryProduct={inquiryProduct}
        clearInquiryProduct={handleClearInquiryProduct}
      />

      {/* 14. Family Newsletter Box */}
      <Newsletter />

      {/* 15. Standard Footer Link Hub */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* 16. Floating WhatsApp designer consultant */}
      <WhatsAppButton />

      {/* 17. Virtual Consultation Booking Modal Overlay */}
      <AnimatePresence>
        {isConsultationOpen && (
          <motion.div
            id="consultation-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={handleCloseConsultation}
          >
            <motion.div
              id="consultation-modal-container"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF7] dark:bg-[#1E1726] border border-amber-200/30 dark:border-purple-900/60 p-6 sm:p-8 rounded-[2rem] max-w-lg w-full shadow-2xl relative transition-all duration-500 overflow-hidden text-left"
            >
              {/* Modal Success Overlay */}
              <AnimatePresence>
                {isBookingSuccess && (
                  <motion.div
                    id="booking-success-overlay"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#FFFDF7] dark:bg-[#1E1726] p-8 z-30 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-6">
                      <CheckCircle size={32} />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#3E2F1E] dark:text-amber-100 mb-2">
                      Slot Booked!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed mb-8">
                      Pranam! Your virtual styling appointment has been successfully scheduled. We have sent a confirmation packet with styling cards to your contact details. Our representative designer will connect over video call.
                    </p>

                    <button
                      id="close-success-booking-btn"
                      onClick={handleCloseConsultation}
                      className="px-6 py-3 bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-950 text-xs font-bold font-sans uppercase tracking-widest rounded-full transition-transform"
                    >
                      Return to Website
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <button
                id="consultation-modal-close"
                onClick={handleCloseConsultation}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-[#281E32] text-neutral-400 hover:text-neutral-700 dark:hover:text-amber-100 transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-purple-950/60 border border-amber-200/20 flex items-center justify-center text-[#C9A86A]">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#C9A86A] font-extrabold block">Boutique Appointment</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-amber-100 mt-0.5">
                    Book Royal Consultation
                  </h3>
                </div>
              </div>

              {/* Booking form */}
              <form id="booking-consultation-form" onSubmit={handleBookingSubmit} className="space-y-4 font-sans">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="bookingName" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="bookingName"
                    type="text"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="e.g., Deepika Padukone"
                    className={`px-4 py-2.5 rounded-xl border text-sm bg-amber-50/10 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors ${
                      bookingErrors.name ? 'border-red-400' : 'border-amber-200/20'
                    }`}
                  />
                  {bookingErrors.name && <span className="text-[9px] text-red-500 mt-1">{bookingErrors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="bookingPhone" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="bookingPhone"
                    type="tel"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="e.g., +91 98765 43210"
                    className={`px-4 py-2.5 rounded-xl border text-sm bg-amber-50/10 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors ${
                      bookingErrors.phone ? 'border-red-400' : 'border-amber-200/20'
                    }`}
                  />
                  {bookingErrors.phone && <span className="text-[9px] text-red-500 mt-1">{bookingErrors.phone}</span>}
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="flex flex-col">
                    <label htmlFor="bookingDate" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="bookingDate"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`px-4 py-2.5 rounded-xl border text-sm bg-amber-50/10 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-150 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] ${
                        bookingErrors.date ? 'border-red-400' : 'border-amber-200/20'
                      }`}
                    />
                    {bookingErrors.date && <span className="text-[9px] text-red-500 mt-1">{bookingErrors.date}</span>}
                  </div>

                  {/* Time slots selection */}
                  <div className="flex flex-col">
                    <label htmlFor="bookingTime" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                      Fittings Slot
                    </label>
                    <select
                      id="bookingTime"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-amber-200/20 text-sm bg-white dark:bg-neutral-900/40 text-neutral-800 dark:text-[#EBCFC4] focus:outline-none focus:ring-1 focus:ring-[#C9A86A]"
                    >
                      <option value="10:00">10:00 AM - Morning Slot</option>
                      <option value="11:30">11:30 AM - Boutique Slot</option>
                      <option value="14:00">02:00 PM - Afternoon Slot</option>
                      <option value="15:30">03:30 PM - Designer Slot</option>
                      <option value="17:00">05:00 PM - Evening Slot</option>
                    </select>
                  </div>
                </div>

                {/* Styling Selection */}
                <div className="flex flex-col">
                  <label htmlFor="bookingStyle" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                    Styling Category
                  </label>
                  <select
                    id="bookingStyle"
                    value={bookingStyle}
                    onChange={(e) => setBookingStyle(e.target.value)}
                    className="px-4 py-2.5 rounded-xl border border-amber-200/20 text-sm bg-white dark:bg-neutral-900/40 text-neutral-800 dark:text-[#EBCFC4] focus:outline-none focus:ring-1 focus:ring-[#C9A86A]"
                  >
                    <option value="bridal">Bespoke Bridal Lehenga / Saree fit</option>
                    <option value="festive">Festive Wear & Occasions Styling</option>
                    <option value="blouse">Direct Blouse / Stitching Orders</option>
                    <option value="family">Coordinated Family Sizing</option>
                  </select>
                </div>

                {/* Submit actions */}
                <div className="pt-4 flex justify-between items-center gap-4">
                  <span className="text-[9px] text-[#C9A86A] flex items-center gap-1">
                    <Clock size={11} /> 100% Free Virtual Session
                  </span>

                  <button
                    id="booking-submit-btn"
                    type="submit"
                    disabled={isBookingSubmitting}
                    className="px-6 py-3 bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-950 text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-md"
                  >
                    {isBookingSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white dark:border-neutral-950/40 dark:border-t-neutral-950 rounded-full animate-spin" />
                        <span>Reserving...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={13} className="animate-pulse" />
                        <span>Confirm Slot</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
