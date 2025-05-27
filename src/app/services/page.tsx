'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function ServicesPage() {
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

  // Services data
  const services = [
    {
      title: "Financial Planning",
      description: "Your financial journey starts with understanding where you are, where you want to go, and how to bridge the gap. Financial planning is more than just numbers—it's a dynamic, lifelong process designed to adapt as your life evolves. We help you build a clear, actionable roadmap that addresses your short-term needs and long-term goals with confidence and precision.",
      features: [
        {
          title: "Comprehensive Assessment",
          description: "We analyze your current financial situation, assets, liabilities, and cash flow to establish a baseline.",
          icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        {
          title: "Goal-Based Planning",
          description: "We help you define clear, measurable financial goals aligned with your values and life aspirations.",
          icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Personalized Strategies",
          description: "We develop customized strategies that address your unique circumstances and risk tolerance.",
          icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          )
        },
        {
          title: "Ongoing Guidance",
          description: "We provide continuous support and adjustments as your life circumstances and financial markets evolve.",
          icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Wealth Planning",
      description: "Wealth planning is about seeing the full picture—and making the most of it. Whether you're focused on growing your assets, protecting what you've built, or creating a legacy, we tailor strategies that reflect your values and priorities. Our role is to simplify the complex, so you can focus on what matters while knowing your wealth is working intelligently for you.",
      features: [
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
      ]
    },
    {
      title: "Retirement Planning",
      description: "Retirement is not an end point—it's a new beginning. With decades of retirement to plan for, our approach is both strategic and deeply personal. We design forward-thinking plans that aim to maximize growth, ensure tax-efficient income streams, and preserve wealth for future generations. The result? A retirement lifestyle that reflects your vision, supported by a plan built to last.",
      features: [
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
      ]
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Financial Planning</span> 
              </h1> 

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div> 

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"> 
                Building a roadmap for your financial future 
              </p> 

              <div className="flex flex-wrap justify-center gap-4 mt-8"> 
                <a 
                  href="#process" 
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                > 
                  Our Process 
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
          <a href="#journey" className="flex flex-col items-center cursor-pointer"> 
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

      {/* Services Overview Section - Enhanced */}
      <section className="py-16 bg-white" id="journey">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}   
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-xl p-8 border border-primary-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full relative overflow-hidden group"
                >
                  {/* Decorative elements */}
                  <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-primary-100 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-primary-200 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary-700 relative z-10">{service.title}</h3>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mb-6 rounded-full"></div>
                  <p className="text-gray-700 flex-grow relative z-10">{service.description}</p>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 self-start"
                  >
                    <a 
                      href={`#${service.title.toLowerCase().replace(' ', '-')}`} 
                      className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors"
                    >
                      Learn more
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Sections - Enhanced */}
      {services.map((service, index) => (
        <section 
          key={index} 
          id={service.title.toLowerCase().replace(' ', '-')}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-primary-50 to-white'} relative overflow-hidden`}
        >
          {/* Decorative background elements */}
          {index % 2 === 0 ? (
            <>
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 opacity-50 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-100 opacity-30 rounded-tr-full"></div>
            </>
          ) : (
            <>
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-100 opacity-30 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary-50 opacity-50 rounded-tl-full"></div>
            </>
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-20 text-center"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
              >
                {index === 0 ? 'Plan Your Future' : index === 1 ? 'Grow Your Assets' : 'Secure Your Retirement'}
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">{service.title}</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-primary-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Call-to-action button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {index === 0 ? 'Start Your Plan' : index === 1 ? 'Optimize Your Wealth' : 'Secure Your Future'}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}