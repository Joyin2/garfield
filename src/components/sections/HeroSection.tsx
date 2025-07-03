'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '../ParticleBackground';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
          className="absolute top-10 sm:top-20 md:top-40 -right-10 sm:-right-20 md:-right-40 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 rounded-full bg-primary-100/50 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-5 sm:-bottom-10 md:-bottom-20 -left-5 sm:-left-10 md:-left-20 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 rounded-full bg-primary-200/50 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center h-full py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center w-full max-w-7xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left w-full max-w-2xl lg:max-w-none"
          >
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary-50 text-primary-700 rounded-full font-medium text-xs sm:text-sm shadow-sm"
              >
                Trusted Financial Guidance
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-br from-primary-700 via-primary-500 to-primary-800 bg-clip-text text-transparent">Secure Your </span>
                <span className="bg-gradient-to-br from-primary-700 via-primary-500 to-primary-800 bg-clip-text text-transparent">Financial </span>
                <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-primary-700 bg-clip-text text-transparent animate-gradient">Future</span>
              </motion.h1>
             
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
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
              >
                With over three decades of experience, John Garfield provides expert retirement and estate planning services to help you achieve your financial goals.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="/contact" 
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center flex items-center justify-center group text-sm sm:text-base"
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 pt-4"
            >
              {/* Client avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {['/images/avatar1.jpg', '/images/avatar2.jpg', '/images/avatar3.jpg'].map((avatar, i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm text-gray-500">Trusted by</p>
                  <p className="font-medium text-sm sm:text-base text-gray-800">500+ Clients</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-50 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          
          {/* Right Section - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          >
            <div className="relative">
              {/* Main video without any filters or overlays */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <div className="transform transition-transform duration-700 hover:scale-105">
                  <video 
                    key="hero-video"
                    src="https://fwqnoyiphzdsuohcanmk.supabase.co/storage/v1/object/public/assets//Untitled%20design%20(7).mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-primary-50 rounded-full opacity-80 blur-md z-0" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 md:w-40 md:h-40 bg-primary-100 rounded-full opacity-80 blur-md z-0" />
              
              {/* Floating badge 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-10 top-1/4 bg-white rounded-lg shadow-xl p-3 z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Trusted Advisor</p>
                    <p className="text-xs text-gray-500">Since 1990</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-5 bottom-1/3 bg-white rounded-lg shadow-xl p-3 z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Financial Expert</p>
                    <p className="text-xs text-gray-500">Personalized Plans</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
}