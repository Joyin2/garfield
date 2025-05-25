'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ServiceCard from '../ServiceCard';

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const services = [
    {
      title: "Financial Planning",
      description: "Your financial journey starts with understanding where you are, where you want to go, and how to bridge the gap. Financial planning is more than just numbers—it's a dynamic, lifelong process designed to adapt as your life evolves. We help you build a clear, actionable roadmap that addresses your short-term needs and long-term goals with confidence and precision.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: "/images/financial-planning.jpg"
    },
    {
      title: "Wealth Planning",
      description: "Wealth planning is about seeing the full picture—and making the most of it. Whether you're focused on growing your assets, protecting what you've built, or creating a legacy, we tailor strategies that reflect your values and priorities. Our role is to simplify the complex, so you can focus on what matters while knowing your wealth is working intelligently for you.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/images/wealth-planning.jpg"
    },
    {
      title: "Retirement Planning",
      description: "Retirement is not an end point—it's a new beginning. With decades of retirement to plan for, our approach is both strategic and deeply personal. We design forward-thinking plans that aim to maximize growth, ensure tax-efficient income streams, and preserve wealth for future generations. The result? A retirement lifestyle that reflects your vision, supported by a plan built to last.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      image: "/images/retirement-planning.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20 z-0"
        style={{ y }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e0e7ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </motion.div>
      
      {/* Decorative blobs */}
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
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-primary-300 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 rounded-full mb-3"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our Expertise
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
              Our Services
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mx-auto rounded-full mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-3xl text-center"
          >
            Comprehensive financial solutions tailored to your unique needs and goals, 
            designed to secure your financial future with confidence.
          </motion.p>
        </motion.div>
        
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-400">
            <button className="px-8 py-3 rounded-full bg-white hover:bg-transparent hover:text-white transition-colors duration-300 text-primary-600 font-medium">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}