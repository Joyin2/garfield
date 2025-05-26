'use client';

import { motion } from 'framer-motion';
import AboutCompanySection from '@/components/sections/AboutCompanySection';
import AboutJohnSection from '@/components/sections/AboutJohnSection';
import CTASection from '@/components/sections/CTASection';

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero section with light theme and blue gradient */}
      <div className="relative min-h-[80vh] bg-gradient-to-b from-white to-gray-50 flex items-center justify-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 md:top-40 -right-20 md:-right-40 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary-100/50 blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-56 md:w-80 h-56 md:h-80 rounded-full bg-primary-200/50 blur-3xl"
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-50/30 backdrop-blur-sm"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                y: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
            />
          ))}
        </div>
        
        {/* 3D card with blue gradient */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 25, rotateY: -15, z: -100 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0, z: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full mx-8 md:mx-auto bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary-100 transform-style-3d"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="block">About</span>
              <span className="bg-gradient-to-br from-primary-700 via-primary-500 to-primary-800 bg-clip-text text-transparent">Garfield Financial</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Building trusted relationships and securing financial futures for over three decades
            </p>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
      
      {/* Content section with staggered animations */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">Financial Expertise</h3>
                <p className="text-gray-600">Decades of experience in wealth management and financial planning for individuals and businesses.</p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">Client Trust</h3>
                <p className="text-gray-600">Building relationships based on transparency, integrity, and personalized service for every client.</p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">Growth Strategies</h3>
                <p className="text-gray-600">Innovative approaches to wealth building and retirement planning tailored to your financial goals.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <AboutCompanySection />
      <AboutJohnSection />
      <CTASection />
    </div>
  );
}