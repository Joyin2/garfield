'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '../ParticleBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
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
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 lg:pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary-50 text-primary-700 rounded-full font-medium text-xs md:text-sm"
              >
                Trusted Financial Guidance
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-900">Secure Your </span>
                <span className="bg-gradient-to-br from-primary-700 via-primary-500 to-primary-800 bg-clip-text text-transparent">Financial </span>
                <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-primary-700 bg-clip-text text-transparent animate-gradient">Future</span>
              </motion.h1>
              // Add this to your globals.css or at the bottom of the component
              <style jsx>{`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  background-size: 200% 200%;
                  animation: gradient 4s ease infinite;
                }
              `}</style>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl"
              >
                With over three decades of experience, John Garfield provides expert retirement and estate planning services to help you achieve your financial goals.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link 
                href="/contact" 
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center text-sm md:text-base"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-6 md:px-8 py-3 md:py-4 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center flex items-center justify-center group text-sm md:text-base"
              >
                <span>Our Services</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4"
            >
              {/* Client avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {['/images/avatar1.jpg', '/images/avatar2.jpg', '/images/avatar3.jpg'].map((avatar, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-white flex items-center justify-center overflow-hidden">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-xs sm:text-sm text-gray-500">Trusted by</p>
                  <p className="font-medium text-sm sm:text-base text-gray-800">500+ Clients</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                  <p className="font-medium text-sm sm:text-base text-gray-800">30+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Financial Illustration - Now visible on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* Financial graphics - Responsive sizing */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] bg-white/80 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center">
                    <div className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]">
                      {/* Placeholder for 3D model or image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shadow-inner">
                          <div className="w-32 sm:w-36 md:w-42 lg:w-48 h-32 sm:h-36 md:h-42 lg:h-48 rounded-full bg-gradient-to-br from-primary-50 to-white flex items-center justify-center relative overflow-hidden">
                            {/* Financial icons */}
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
                              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            
                            {/* Financial growth icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                              <div className="relative w-full h-full flex items-center justify-center">
                                {/* Animated background gradient - Changed from gold to blue */}
                                <motion.div 
                                  className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300"
                                  animate={{ 
                                    background: [
                                      'linear-gradient(135deg, var(--primary-100) 0%, var(--primary-300) 100%)',
                                      'linear-gradient(225deg, var(--primary-100) 0%, var(--primary-300) 100%)',
                                      'linear-gradient(315deg, var(--primary-100) 0%, var(--primary-300) 100%)',
                                      'linear-gradient(45deg, var(--primary-100) 0%, var(--primary-300) 100%)'
                                    ]
                                  }}
                                  transition={{ 
                                    duration: 8, 
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                                
                                {/* Animated growth chart */}
                                <div className="relative z-10 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16">
                                  <svg viewBox="0 0 24 24" className="w-full h-full">
                                    <motion.path
                                      d="M3 12h.01M7 12h.01M11 12h.01M15 12h.01M19 12h.01"
                                      stroke="rgba(2, 132, 199, 0.3)"
                                      strokeWidth="1"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <motion.path
                                      d="M3 16h.01M7 16h.01M11 16h.01M15 16h.01M19 16h.01"
                                      stroke="rgba(2, 132, 199, 0.3)"
                                      strokeWidth="1"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <motion.path
                                      d="M3 8h.01M7 8h.01M11 8h.01M15 8h.01M19 8h.01"
                                      stroke="rgba(2, 132, 199, 0.3)"
                                      strokeWidth="1"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    
                                    {/* Animated growth line */}
                                    <motion.path
                                      d="M3 16L7 13L11 14L15 9L19 4"
                                      stroke="#0284c7"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ 
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 1
                                      }}
                                    />
                                    
                                    {/* Animated dots on the chart - Changed from gold to blue */}
                                    <motion.circle
                                      cx="3"
                                      cy="16"
                                      r="1.5"
                                      fill="#0369a1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [0, 1.2, 1] }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 0.2,
                                        repeat: Infinity,
                                        repeatDelay: 2.5
                                      }}
                                    />
                                    <motion.circle
                                      cx="7"
                                      cy="13"
                                      r="1.5"
                                      fill="#0369a1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [0, 1.2, 1] }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 0.6,
                                        repeat: Infinity,
                                        repeatDelay: 2.5
                                      }}
                                    />
                                    <motion.circle
                                      cx="11"
                                      cy="14"
                                      r="1.5"
                                      fill="#0369a1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [0, 1.2, 1] }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 1.0,
                                        repeat: Infinity,
                                        repeatDelay: 2.5
                                      }}
                                    />
                                    <motion.circle
                                      cx="15"
                                      cy="9"
                                      r="1.5"
                                      fill="#0369a1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [0, 1.2, 1] }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 1.4,
                                        repeat: Infinity,
                                        repeatDelay: 2.5
                                      }}
                                    />
                                    <motion.circle
                                      cx="19"
                                      cy="4"
                                      r="1.5"
                                      fill="#0369a1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [0, 1.2, 1] }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 1.8,
                                        repeat: Infinity,
                                        repeatDelay: 2.5
                                      }}
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating elements - Responsive positioning */}
                      <motion.div 
                        animate={{ 
                          y: [0, -10, 0],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3,
                          ease: "easeInOut" 
                        }}
                        className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 bg-white p-2 sm:p-3 rounded-xl shadow-lg"
                      >
                        <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                      
                      <motion.div 
                        animate={{ 
                          y: [0, 10, 0],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-6 sm:left-8 md:left-10 bg-white p-2 sm:p-3 rounded-xl shadow-lg"
                      >
                        <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12 sm:h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
}