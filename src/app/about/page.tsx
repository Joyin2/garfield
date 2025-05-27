'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Custom hook for intersection observer
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Refs for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [missionRef, missionInView] = useInView({ threshold: 0.3 });
  const [teamRef, teamInView] = useInView({ threshold: 0.2 });
  const [historyRef, historyInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  // Team members data
  const teamMembers = [
    {
      name: "John Garfield",
      role: "Founder & CEO",
      bio: "With over 30 years of experience in financial planning and wealth management, John has helped hundreds of clients achieve their financial goals.",
      image: "/images/team/john.jpg"
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Investment Officer",
      bio: "Sarah brings 20 years of investment expertise, specializing in portfolio management and market analysis for high-net-worth individuals.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Financial Advisor",
      bio: "Michael's approach combines technical expertise with a deep understanding of client needs, creating personalized financial strategies.",
      image: "/images/team/michael.jpg"
    },
    {
      name: "Jennifer Lee",
      role: "Retirement Planning Specialist",
      bio: "Jennifer has helped countless clients transition into retirement with confidence through her comprehensive planning approach.",
      image: "/images/team/jennifer.jpg"
    }
  ];

  // Company values
  const values = [
    {
      title: "Client-First Approach",
      description: "We prioritize your financial goals and needs above all else, ensuring personalized service and solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Integrity & Transparency",
      description: "We believe in complete honesty and clarity in all our communications and financial recommendations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Long-Term Perspective",
      description: "We focus on sustainable financial growth and security that stands the test of time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Continuous Education",
      description: "We stay at the forefront of financial developments to provide you with the most informed guidance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "1990",
      title: "Foundation",
      description: "John Garfield establishes Garfield Financial with a vision to provide personalized financial planning services."
    },
    {
      year: "2000",
      title: "Expansion",
      description: "The firm grows to include a team of specialized advisors, expanding services to wealth management and retirement planning."
    },
    {
      year: "2010",
      title: "Innovation",
      description: "Garfield Financial embraces digital transformation, implementing cutting-edge financial technology to enhance client experience."
    },
    {
      year: "2020",
      title: "New Horizons",
      description: "The company celebrates 30 years of excellence and launches new services focused on sustainable and socially responsible investing."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
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
          {/* Replace random values with fixed values */}
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Garfield Financial</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Building trusted relationships and securing financial futures for over three decades
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#mission"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Our Mission
                </a>
                <a
                  href="#team"
                  className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-200 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Meet Our Team
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
          <a href="#mission" className="flex flex-col items-center cursor-pointer">
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

      {/* Mission Section */}
      <section
        ref={missionRef}
        id="mission"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mb-8 rounded-full"></div>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At Garfield and Davis Financial, we believe that financial security is the foundation for lasting peace of mind. With a team of seasoned advisors and a client-first philosophy, we specialize in crafting tailored financial strategies that align with your life goals—whether you're planning for retirement, growing your wealth, or securing your family's future.
                </p>
                <p>
                  Our approach blends deep market insight with personalized service, ensuring that each financial decision is rooted in both data and your unique values. More than just advisors, we are your lifelong financial partners.
                </p>
                <p>
                  We take pride in building trust through transparency, integrity, and a steadfast commitment to your success. At Garfield and Davis Financial, your future isn't just a projection—it's a plan with purpose.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Personalized Planning</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Asset Protection</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Wealth Building</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Global Perspective</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Changed height from 800px to 600px */}
              <div className="relative h-[600px]">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary-100 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-200 rounded-full opacity-30 blur-xl"></div>

                {/* Interactive financial poster - adjusted height for container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  {/* Removed aspect ratio div and replaced with full height container */}
                  <div className="relative h-[450px]">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

                    {/* Rest of the content remains the same */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

                    {/* Central financial growth chart */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <svg className="w-3/4 h-auto" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Base line */}
                        <line x1="40" y1="160" x2="360" y2="160" stroke="#E2E8F0" strokeWidth="2" />

                        {/* Y-axis labels */}
                        <text x="30" y="160" textAnchor="end" fill="#64748B" fontSize="12">0</text>
                        <text x="30" y="120" textAnchor="end" fill="#64748B" fontSize="12">25</text>
                        <text x="30" y="80" textAnchor="end" fill="#64748B" fontSize="12">50</text>
                        <text x="30" y="40" textAnchor="end" fill="#64748B" fontSize="12">75</text>

                        {/* X-axis labels */}
                        <text x="40" y="175" textAnchor="middle" fill="#64748B" fontSize="12">2020</text>
                        <text x="120" y="175" textAnchor="middle" fill="#64748B" fontSize="12">2025</text>
                        <text x="200" y="175" textAnchor="middle" fill="#64748B" fontSize="12">2030</text>
                        <text x="280" y="175" textAnchor="middle" fill="#64748B" fontSize="12">2035</text>
                        <text x="360" y="175" textAnchor="middle" fill="#64748B" fontSize="12">2040</text>

                        {/* Animated growth line */}
                        <motion.path
                          d="M40,140 C80,130 120,100 160,90 C200,80 240,60 280,40 C320,30 360,20 360,20"
                          stroke="#4F46E5"
                          strokeWidth="3"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                        />

                        {/* Area under the curve */}
                        <motion.path
                          d="M40,140 C80,130 120,100 160,90 C200,80 240,60 280,40 C320,30 360,20 360,20 L360,160 L40,160 Z"
                          fill="url(#gradientFill)"
                          opacity="0.3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.3 }}
                          transition={{ duration: 1, delay: 2 }}
                        />

                        {/* Gradient definition */}
                        <defs>
                          <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>

                    {/* Animated data points */}
                    {[
                      { x: 40, y: 140, delay: 2.0, label: "Start" },
                      { x: 120, y: 100, delay: 2.2, label: "Growth" },
                      { x: 200, y: 80, delay: 2.4, label: "Expansion" },
                      { x: 280, y: 40, delay: 2.6, label: "Maturity" },
                      { x: 360, y: 20, delay: 2.8, label: "Legacy" }
                    ].map((point, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{ left: `calc(${point.x / 4}%)`, top: `calc(${point.y / 2}%)` }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: point.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-primary-600 shadow-lg shadow-primary-300/50"></div>
                          <motion.div
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                          >
                            {point.label}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Floating financial icons */}
                    <motion.div
                      className="absolute top-5 right-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-5 left-5 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 left-5 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Interactive stats cards */}
                  <div className="p-6 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      <motion.div
                        className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl shadow-sm cursor-pointer"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)" }}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">30+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl shadow-sm cursor-pointer"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)" }}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">500+</div>
                        <div className="text-sm text-gray-600">Happy Clients</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl shadow-sm cursor-pointer"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)" }}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">$1B+</div>
                        <div className="text-sm text-gray-600">Assets Managed</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* John Garfield Bio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Meet Our Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          {/* John Garfield Bio */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/garfield.jpg"
                    alt="John Garfield"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">John Garfield</h3>
                <h4 className="text-xl text-gray-700 mb-6">Founder & CEO</h4>

                <div className="space-y-6 text-gray-600">
                  <p>
                    John entered the financial services industry in 1989 after graduating from Embry
                    Riddle Aeronautical University. Over the last three decades, John has been
                    considered an expert at retirement and estate planning.
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Education and Professional Memberships:</h5>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Northwestern Prep School, Santa Barbara, California</li>
                      <li>Embry-Riddle Aeronautical University, Daytona Beach, Florida</li>
                      <li>Million Dollar Round Table (MDRT) - Lifetime Member</li>
                      <li>Court of Table (COT) – Member</li>
                      <li>Forum member - Northwestern Mutual Life</li>
                      <li>Life Underwriting Training Council Fellow (LUTCF)</li>
                      <li>National Association of Insurance Financial Advisors (NAIFA)</li>
                      <li>National Quality Award (NQA)</li>
                      <li>National Sales Achievement Award (NSAA)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                  >
                    <span>Schedule a consultation</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Jon Davis Bio - Photo on right side */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-primary-100 rounded-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/garfield.jpg"
                    alt="Jon Davis"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Jon Davis</h3>
                <h4 className="text-xl text-gray-700 mb-6">Co-Founder & Managing Partner</h4>

                <div className="space-y-6 text-gray-600">
                  <p>
                    Jon Davis brings over 25 years of expertise in wealth management and financial planning. His strategic approach to investment management has helped countless clients build and preserve wealth through changing market conditions.
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Education and Professional Achievements:</h5>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Details to be added later</li>
                      <li>Details to be added later</li>
                      <li>Details to be added later</li>
                      <li>Details to be added later</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                  >
                    <span>Schedule a consultation</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        id="values"
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to financial management and client relationships
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}


      {/* History Timeline Section */}
      <section
        ref={historyRef}
        id="history"
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of growth, innovation, and financial excellence
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 z-0"></div>

            {/* Timeline items */}
            <div className="relative z-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={historyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Year bubble */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg z-10 text-xl font-bold">
                      {item.year}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative p-12 md:p-16">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Secure Your Financial Future?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                  Schedule a consultation with our expert advisors and take the first step toward achieving your financial goals.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-primary-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-primary-700/30 text-white border border-white/30 backdrop-blur-sm rounded-full font-medium hover:bg-primary-700/50 transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add custom CSS for grid pattern */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}