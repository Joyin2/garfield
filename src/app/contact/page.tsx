'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);
  
  // Scroll animation for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with enhanced animations */}
      <motion.div
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white z-0"></div>

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary-100 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary-200 blur-3xl"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { width: "4rem", height: "4rem", opacity: 0.1, x: "10%", y: "20%" },
            { width: "6rem", height: "6rem", opacity: 0.08, x: "30%", y: "70%" },
            { width: "3rem", height: "3rem", opacity: 0.15, x: "70%", y: "15%" },
            { width: "5rem", height: "5rem", opacity: 0.12, x: "85%", y: "60%" },
            { width: "7rem", height: "7rem", opacity: 0.07, x: "20%", y: "40%" },
            { width: "4.5rem", height: "4.5rem", opacity: 0.14, x: "60%", y: "80%" },
            { width: "3.5rem", height: "3.5rem", opacity: 0.09, x: "40%", y: "30%" },
            { width: "5.5rem", height: "5.5rem", opacity: 0.11, x: "75%", y: "50%" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: item.width,
                height: item.height,
                opacity: item.opacity,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
              initial={{
                x: item.x,
                y: item.y,
              }}
              animate={{
                x: [`${item.x}`, `${parseInt(item.x) + 10}%`],
                y: [`${item.y}`, `${parseInt(item.y) + 10}%`],
              }}
              transition={{
                duration: 10 + (i * 2),
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Contact Us</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                We're here to answer your questions and help you achieve your financial goals
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#contact-form"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Form
                </a>
                <a
                  href="tel:+18005551234"
                  className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-200 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#contact-form" className="flex flex-col items-center cursor-pointer">
            <span className="text-primary-600 text-sm mb-2 text-center">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary-300 flex items-center justify-center mx-auto">
              <motion.div
                className="w-1.5 h-3 bg-primary-500 rounded-full"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Contact form section with ID for scroll navigation */}
      <div id="contact-form">
        <ContactSection />
      </div>
      
      <CTASection />
    </div>
  );
}