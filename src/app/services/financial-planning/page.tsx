'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaBalanceScale, FaChartPie, FaHandshake } from 'react-icons/fa';

const features = [
  {
    title: 'Comprehensive Financial Analysis',
    description: 'We conduct a thorough analysis of your current financial situation, including income, expenses, assets, liabilities, and investment portfolio. This detailed assessment forms the foundation of your personalized financial plan.',
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: 'Strategic Goal Planning',
    description: 'Together, we identify and prioritize your financial goals, whether they\'re short-term objectives like buying a home or long-term aspirations like retirement. We create actionable strategies to achieve each goal.',
    icon: <FaPiggyBank className="w-8 h-8" />
  },
  {
    title: 'Risk Management',
    description: 'We evaluate your risk tolerance and develop strategies to protect your assets and income. This includes insurance planning, emergency fund management, and investment risk assessment.',
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: 'Tax Optimization',
    description: 'Our team implements tax-efficient strategies to minimize your tax burden while maximizing your wealth accumulation. We stay current with tax laws to ensure optimal planning.',
    icon: <FaBalanceScale className="w-8 h-8" />
  },
  {
    title: 'Investment Strategy',
    description: 'We design a diversified investment portfolio aligned with your goals and risk tolerance. Our approach combines traditional and alternative investments for optimal returns.',
    icon: <FaChartPie className="w-8 h-8" />
  },
  {
    title: 'Estate Planning',
    description: 'We help you create a comprehensive estate plan to protect your legacy and ensure your assets are distributed according to your wishes while minimizing tax implications.',
    icon: <FaHandshake className="w-8 h-8" />
  }
];

export default function FinancialPlanningPage() {
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
              Financial Planning
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create a roadmap to achieve your financial goals with our comprehensive planning services.
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
              Our Financial Planning Services
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
                Our Financial Planning Process
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to achieving your financial goals
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We begin with a comprehensive discussion about your financial situation, goals, and concerns. This helps us understand your unique needs and objectives.'
                },
                {
                  step: '02',
                  title: 'Data Collection & Analysis',
                  description: 'We gather and analyze your financial information, including income, expenses, assets, liabilities, and current investments.'
                },
                {
                  step: '03',
                  title: 'Strategy Development',
                  description: 'Based on our analysis, we develop a customized financial plan that addresses your specific goals and circumstances.'
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'We help you put your financial plan into action, coordinating with other professionals as needed to ensure all aspects are properly executed.'
                },
                {
                  step: '05',
                  title: 'Monitoring & Review',
                  description: 'We regularly review your progress and make adjustments to your plan as needed, ensuring it remains aligned with your goals and adapts to life changes.'
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
              Ready to Start Your Financial Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create a comprehensive financial plan that aligns with your goals and aspirations.
          </p>
          <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 