'use client';

import { motion } from 'framer-motion';
import AboutCompanySection from '@/components/sections/AboutCompanySection';
import AboutJohnSection from '@/components/sections/AboutJohnSection';
import CTASection from '@/components/sections/CTASection';

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Page header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-primary-800 to-primary-600 py-20 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-header-grid)" />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
          >
            About Garfield Financial
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl text-white/90 text-center max-w-3xl mx-auto"
          >
            Building trusted relationships and securing financial futures for over three decades
          </motion.p>
        </div>
      </motion.div>
      
      <AboutCompanySection />
      <AboutJohnSection />
      <CTASection />
    </div>
  );
}