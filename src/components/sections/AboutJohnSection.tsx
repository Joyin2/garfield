'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function AboutJohnSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const achievements = [
    "Life Underwriting Training Council Fellow (LUTCF)",
    "Million Dollar Round Table (MDRT) - Lifetime Member",
    "Court of the Table Member - Five Times",
    "National Association of Insurance Financial Advisors (NAIFA)"
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"
        style={{ 
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle Background Pattern with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 opacity-30 z-0"
        style={{ y }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="advisor-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e0e7ff" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="advisor-fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#advisor-grid)" />
          <rect width="100%" height="100%" fill="url(#advisor-fadeGradient)" style={{mixBlendMode: 'overlay'}} />
        </svg>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 0.15, x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-primary-200 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 0.1, x: 0, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gold-300 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 rounded-full mb-3"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Meet Your Advisor
            </span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
              About John Garfield
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mx-auto rounded-full mb-4"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image with modern effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-70 z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-100 rounded-full opacity-70 z-10"></div>
              
              {/* Image container with glass morphism frame */}
              <div className="absolute inset-4 rounded-xl overflow-hidden border border-white/20 shadow-inner z-20">
                <Image 
                  src="/images/garfield.jpg"
                  alt="John Garfield"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
              
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-primary-200 z-0"
                animate={{ 
                  boxShadow: ['0 0 20px 5px rgba(79, 70, 229, 0.2)', '0 0 30px 10px rgba(79, 70, 229, 0.3)', '0 0 20px 5px rgba(79, 70, 229, 0.2)']
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />
              
              {/* Experience badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-primary-100 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Experience</p>
                    <p className="text-lg font-bold text-primary-800">30+ Years</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Certification badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-primary-100 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Certified</p>
                    <p className="text-lg font-bold text-primary-800">LUTCF</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content with animated entrance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-800 border-b border-primary-100 pb-3">Professional Journey</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  John entered the financial services industry in 1989 after graduating from Embry-Riddle Aeronautical University. 
                  Over the last three decades, John has been considered an expert at retirement and estate planning, helping hundreds of clients secure their financial futures.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-800 border-b border-primary-100 pb-3">Education & Achievements</h3>
                <ul className="space-y-4 text-gray-700">
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-base">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <span>Schedule a Consultation</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            
            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-lg border border-primary-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "John's expertise and personalized approach to financial planning has been transformative for our retirement strategy. His guidance has given us confidence in our financial future."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <p className="font-semibold text-primary-800">Michael & Sarah Thompson</p>
                      <p className="text-xs text-gray-500">Clients since 2005</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}