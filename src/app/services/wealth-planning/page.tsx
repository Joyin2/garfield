'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FaChartLine, FaShieldAlt, FaChartPie, FaCalculator, FaFileAlt, FaGlobe } from 'react-icons/fa';

const features = [
  {
    title: "Strategic Asset Allocation",
    description: "We develop a customized asset allocation strategy based on your risk tolerance, time horizon, and financial goals. Our approach combines traditional and alternative investments to optimize returns while managing risk.",
    icon: <FaChartPie className="w-8 h-8" />
  },
  {
    title: "Wealth Protection",
    description: "We implement comprehensive strategies to safeguard your assets from market volatility, inflation, and unexpected life events. This includes insurance planning, emergency fund management, and risk mitigation techniques.",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Legacy Planning",
    description: "We help you create a lasting impact through strategic estate planning and charitable giving. Our approach ensures your wealth benefits future generations while minimizing tax implications.",
    icon: <FaFileAlt className="w-8 h-8" />
  },
  {
    title: "Real Estate Investment",
    description: "We guide you through real estate investment opportunities, from direct property ownership to REITs. Our strategies focus on building wealth through carefully selected properties and effective management.",
    icon: <FaCalculator className="w-8 h-8" />
  },
  {
    title: "Global Investment Opportunities",
    description: "We provide access to international markets and investment opportunities. Our global approach helps diversify your portfolio and capture growth in emerging markets.",
    icon: <FaGlobe className="w-8 h-8" />
  },
  {
    title: "Performance Analytics",
    description: "We provide detailed performance analysis and reporting to track your investment progress. Our analytics help identify opportunities for optimization and ensure alignment with your goals.",
    icon: <FaChartLine className="w-8 h-8" />
  }
];

export default function WealthPlanningPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const handleScrollToContent = () => {
    if (mainContentRef.current) {
      const yOffset = -100; // Offset to account for any fixed headers
      const y = mainContentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-primary-600 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.2,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Wealth Planning
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build and protect your wealth with our comprehensive wealth management strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={handleScrollToContent}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={handleScrollToContent}
        >
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-primary-600 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={mainContentRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Wealth Planning Services
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Our Wealth Planning Process
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to building and protecting your wealth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Wealth Assessment',
                  description: 'We begin with a comprehensive analysis of your current wealth, including assets, liabilities, income sources, and investment portfolio. This helps us understand your financial foundation.'
                },
                {
                  step: '02',
                  title: 'Goal Definition',
                  description: 'Together, we identify your wealth-building objectives, risk tolerance, and timeline. This includes short-term goals and long-term aspirations for wealth accumulation and preservation.'
                },
                {
                  step: '03',
                  title: 'Strategy Development',
                  description: 'Based on your goals and current situation, we develop a customized wealth management strategy that addresses asset allocation, risk management, and growth opportunities.'
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'We help you execute your wealth management strategy, coordinating with other professionals as needed to ensure all aspects are properly implemented.'
                },
                {
                  step: '05',
                  title: 'Monitoring & Review',
                  description: 'We regularly review your wealth management strategy and make adjustments as needed, ensuring it remains aligned with your goals and adapts to changing market conditions.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Ready to Build Your Wealth?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create a comprehensive wealth management strategy that aligns with your goals and aspirations.
          </p>
          <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 