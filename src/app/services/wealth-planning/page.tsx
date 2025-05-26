'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function WealthPlanningPage() {
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

  // Wealth planning service features
  const wealthFeatures = [
    {
      title: "Asset Optimization",
      description: "We analyze your portfolio to maximize returns while aligning with your risk tolerance and time horizon.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Wealth Preservation",
      description: "We implement strategies to protect your assets from market volatility, inflation, and other risks.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Tax-Efficient Planning",
      description: "We develop strategies to minimize tax impact and maximize after-tax returns across your portfolio.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Wealth Planning</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Optimizing your assets to create lasting prosperity
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#approach"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Our Approach
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
          <a href="#overview" className="flex flex-col items-center cursor-pointer">
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
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Wealth Management</h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wealth planning is about seeing the full picture—and making the most of it. Whether
              you're focused on growing your assets, protecting what you've built, or creating a legacy,
              we tailor strategies that reflect your values and priorities. Our role is to simplify the
              complex, so you can focus on what matters while knowing your wealth is working
              intelligently for you.
            </p>
          </motion.div>

          {/* Wealth Planning Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {wealthFeatures.map((feature, index) => (
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

          {/* Wealth Management Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Pillars of Wealth Management</h2>
              <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Our comprehensive approach addresses every aspect of your wealth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Investment Management",
                  description: "Strategic asset allocation and portfolio construction designed to achieve your financial goals.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )
                },
                {
                  title: "Estate Planning",
                  description: "Strategies to efficiently transfer wealth according to your wishes while minimizing tax implications.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  title: "Tax Planning",
                  description: "Proactive strategies to minimize tax burden and maximize after-tax returns on your investments.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Retirement Planning",
                  description: "Comprehensive strategies to ensure financial security and lifestyle maintenance throughout retirement.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: "Risk Management",
                  description: "Protection strategies to safeguard your wealth against market volatility and unforeseen events.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Charitable Planning",
                  description: "Strategies to maximize the impact of your philanthropic goals while optimizing tax benefits.",
                  icon: (
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-700">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Wealth Planning Approach</h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              We follow a disciplined process to create and implement your personalized wealth plan
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                title: "Discovery",
                description: "We begin by understanding your current financial situation, goals, values, and risk tolerance through in-depth conversations.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Analysis & Strategy Development",
                description: "We analyze your complete financial picture and develop customized strategies aligned with your goals and risk tolerance.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Implementation",
                description: "We execute your wealth plan with precision, coordinating with other professionals as needed to ensure seamless integration.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Ongoing Management & Review",
                description: "We continuously monitor your plan, making adjustments as markets change and your life evolves to keep you on track toward your goals.",
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-100">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-grow bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-primary-100 p-10 rounded-2xl shadow-lg mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Benefits of Professional Wealth Planning</h2>
              <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprehensive Oversight",
                  description: "Gain a holistic view of your entire financial picture with coordinated management.",
                  icon: "🔍"
                },
                {
                  title: "Tailored Strategies",
                  description: "Benefit from customized solutions designed specifically for your unique situation.",
                  icon: "🎯"
                },
                {
                  title: "Tax Optimization",
                  description: "Minimize tax liabilities through strategic planning and investment positioning.",
                  icon: "💰"
                },
                {
                  title: "Risk Mitigation",
                  description: "Protect your wealth from market volatility and unforeseen circumstances.",
                  icon: "🛡️"
                },
                {
                  title: "Simplified Complexity",
                  description: "Navigate complex financial decisions with clear guidance and expertise.",
                  icon: "🧩"
                },
                {
                  title: "Generational Impact",
                  description: "Create a meaningful legacy that reflects your values and supports your heirs.",
                  icon: "🌱"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Hear from clients who have transformed their financial future with our wealth planning services"
        backgroundClass="bg-gray-50"
      />

      {/* CTA Section with ID for navigation */}
      {/* CTA Section with ID for navigation */}
      <section id="contact">
        <CTASection
          title="Ready to Optimize Your Wealth Strategy?"
          description="Schedule a consultation with our wealth planning experts to create a plan tailored to your unique situation."
          buttonText="Schedule a Consultation"
          buttonLink="/contact"
          backgroundClass="bg-primary-900"
        />
      </section>
    </div>
  );
}