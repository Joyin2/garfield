'use client';

import { motion } from 'framer-motion';
import FinancialModel from '@/components/FinancialModel';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function FinancialPlanningPage() {
  return (
    <div className="overflow-hidden">
      {/* Page header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-primary-800 to-primary-600 py-20 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="financial-planning-header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#financial-planning-header-grid)" />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
          >
            Financial Planning
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl text-white/90 text-center max-w-3xl mx-auto"
          >
            Comprehensive strategies to help you achieve your financial goals
          </motion.p>
        </div>
      </motion.div>
      
      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Journey to Financial Confidence</h2>
              <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
              <p className="text-lg text-gray-700">
                Financial planning is more than just numbers—it's a dynamic, lifelong process designed to adapt as your life evolves. We help you build a clear, actionable roadmap that addresses your short-term needs and long-term goals with confidence and precision.
              </p>
              <p className="text-lg text-gray-700">
                Our comprehensive financial planning services include:
              </p>
              <ul className="space-y-3">
                {[
                  "Cash flow analysis and budgeting",
                  "Investment strategy and portfolio management",
                  "Retirement planning and income strategies",
                  "Tax planning and optimization",
                  "Estate planning and wealth transfer",
                  "Risk management and insurance analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-xl"
            >
              <FinancialModel />
            </motion.div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}