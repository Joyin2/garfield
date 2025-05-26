'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesPage() {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  // Refs for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - scrollY * 0.002;
      const newScale = 1 - scrollY * 0.0005;
      
      setOpacity(newOpacity > 0 ? newOpacity : 0);
      setScale(newScale > 0.8 ? newScale : 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data
  const services = [
    {
      id: 'financial-planning',
      title: 'Financial Planning',
      description: 'Your financial journey starts with understanding where you are, where you want to go, and how to bridge the gap. Financial planning is more than just numbers—it's a dynamic, lifelong process designed to adapt as your life evolves.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/financial-planning',
      image: '/images/services/financial-planning.jpg'
    },
    {
      id: 'wealth-planning',
      title: 'Wealth Planning',
      description: 'Wealth planning is about seeing the full picture—and making the most of it. Whether you're focused on growing your assets, protecting what you've built, or creating a legacy, we tailor strategies that reflect your values and priorities.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/services/wealth-planning',
      image: '/images/services/wealth-planning.jpg'
    },
    {
      id: 'retirement-planning',
      title: 'Retirement Planning',
      description: 'Retirement is not an end point—it's a new beginning. With decades of retirement to plan for, our approach is both strategic and deeply personal. We design forward-thinking plans that aim to maximize growth and ensure tax-efficient income streams.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/retirement-planning',
      image: '/images/services/retirement-planning.jpg'
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Our Services</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Comprehensive financial solutions tailored to your unique needs and goals
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#services" className="flex flex-col items-center cursor-pointer">
            <span className="text-primary-600 text-sm mb-2 text-center">Explore our services</span>
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

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Tailored Financial Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of services designed to address every aspect of your financial life
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute ${index % 2 === 0 ? '-top-4 -left-4' : '-top-4 -right-4'} w-full h-full bg-primary-100 rounded-2xl`}></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <div className="aspect-w-16 aspect-h-9">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          width={800} 
                          height={450} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-primary-600 rounded-full opacity-20 blur-xl`}></div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-600">Personalized strategies tailored to your unique situation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-600">Ongoing support and adjustments as your life evolves</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="