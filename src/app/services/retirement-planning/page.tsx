'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function RetirementPlanningPage() {
  const heroRef = useRef(null);
  const [heroInView, setHeroInView] = useState(true);

  // Scroll animation for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Check if hero is in view
  useEffect(() => {
    setHeroInView(true);
  }, []);

  // Retirement planning service features
  const retirementFeatures = [
    {
      title: "Income Strategy",
      description: "We create sustainable withdrawal strategies to provide reliable income throughout your retirement years.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Tax Optimization",
      description: "We implement tax-efficient withdrawal strategies to minimize your tax burden during retirement.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      )
    },
    {
      title: "Healthcare Planning",
      description: "We incorporate healthcare costs and long-term care needs into your retirement strategy.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Legacy Planning",
      description: "We help you create a meaningful legacy that reflects your values and supports future generations.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Retirement Planning</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Building your path to a fulfilling retirement
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#strategy"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Our Strategy
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-200 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Get Started
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
          <a href="#vision" className="flex flex-col items-center cursor-pointer">
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

      {/* Main content */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Retirement Vision</h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Retirement is not an end point—it's a new beginning. With decades of retirement to plan
              for, our approach is both strategic and deeply personal. We design forward-thinking plans
              that aim to maximize growth, ensure tax-efficient income streams, and preserve wealth for
              future generations. The result? A retirement lifestyle that reflects your vision, supported by
              a plan built to last.
            </p>
          </motion.div>

          {/* Retirement Planning Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {retirementFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex"
              >
                <div className="mr-5 flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Retirement Phases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Phases of Retirement Planning</h2>
              <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Our comprehensive approach addresses each stage of your retirement journey
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

              {[
                {
                  title: "Accumulation Phase",
                  description: "Building wealth through strategic saving and investing to create a strong foundation for retirement.",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Pre-Retirement Phase",
                  description: "Fine-tuning your strategy in the years leading up to retirement to ensure readiness for the transition.",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Early Retirement Phase",
                  description: "Managing the transition into retirement with strategies for income, healthcare, and lifestyle adjustments.",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Middle Retirement Phase",
                  description: "Balancing growth and income while adjusting for changing health needs and lifestyle preferences.",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )
                },
                {
                  title: "Legacy Planning Phase",
                  description: "Ensuring your wealth transfers efficiently to heirs and charitable causes according to your wishes.",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 ${index % 2 === 0 ? 'text-right pr-12 md:pr-0 md:ml-auto md:mr-auto md:pl-16' : 'pl-12 md:pl-0 md:ml-auto md:mr-auto md:pr-16'} md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center z-10">
                    {phase.icon}
                  </div>

                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Retirement Planning Strategy</h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              We create personalized retirement plans that address your unique needs and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Income Planning",
                description: "Creating sustainable withdrawal strategies from various income sources to support your lifestyle.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Investment Strategy",
                description: "Balancing growth, income, and capital preservation based on your time horizon and risk tolerance.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )
              },
              {
                title: "Tax Planning",
                description: "Minimizing tax impact through strategic withdrawals and tax-efficient investment positioning.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                )
              },
              {
                title: "Healthcare Planning",
                description: "Preparing for healthcare costs including Medicare, supplemental insurance, and long-term care.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Social Security Optimization",
                description: "Maximizing Social Security benefits through strategic claiming strategies.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Estate & Legacy Planning",
                description: "Ensuring your assets transfer efficiently to heirs and charitable causes according to your wishes.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-700">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Retirement Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-primary-100 p-10 rounded-2xl shadow-lg"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Are You Retirement Ready?</h2>
              <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Retirement readiness isn't just about having enough money—it's about having a comprehensive plan that addresses all aspects of your future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Readiness",
                  questions: [
                    "Do you know how much income you'll need in retirement?",
                    "Have you assessed the impact of inflation on your retirement savings?",
                    "Do you have a tax-efficient withdrawal strategy?",
                    "Have you stress-tested your portfolio against market downturns?"
                  ]
                },
                {
                  title: "Lifestyle Readiness",
                  questions: [
                    "Have you envisioned how you'll spend your time in retirement?",
                    "Have you considered where you'll live during different retirement phases?",
                    "Have you planned for healthcare costs and insurance needs?",
                    "Have you discussed your retirement vision with your spouse/partner?"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{question}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Your Retirement Readiness Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Hear from clients who have achieved their retirement dreams with our guidance"
        backgroundClass="bg-white"
      />

      {/* CTA Section with ID for navigation */}
      <section id="contact">
        <CTASection 
          title="Ready to Plan Your Ideal Retirement?"
          description="Schedule a consultation with our retirement planning experts to create a personalized strategy for your future."
          buttonText="Schedule a Consultation"
          buttonLink="/contact"
          backgroundClass="bg-primary-900"
        />
      </section>
    </div>
  );
}