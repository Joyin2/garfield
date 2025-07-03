'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  link: string;
  features: ServiceFeature[];
}

const services: Service[] = [
  {
    title: 'Financial Planning',
    description: 'Your financial journey starts with understanding where you are, where you want to go, and how to bridge the gap. Financial planning is more than just numbers—it\'s a dynamic, lifelong process designed to adapt as your life evolves. We help you build a clear, actionable roadmap that addresses your short-term needs and long-term goals with confidence and precision.',
    link: '/services/financial-planning',
    features: [
      {
        title: 'Comprehensive Analysis',
        description: 'We analyze your current financial situation, goals, and risk tolerance to create a personalized plan.',
        icon: '📊'
      },
      {
        title: 'Goal Setting',
        description: 'Define clear, achievable financial goals with actionable steps to reach them.',
        icon: '🎯'
      },
      {
        title: 'Regular Reviews',
        description: 'Ongoing monitoring and adjustments to keep your plan aligned with your changing needs.',
        icon: '🔄'
      }
    ]
  },
  {
    title: 'Wealth Planning',
    description: 'Wealth planning is about seeing the full picture—and making the most of it. Whether you\'re focused on growing your assets, protecting what you\'ve built, or creating a legacy, we tailor strategies that reflect your values and priorities. Our role is to simplify the complex, so you can focus on what matters while knowing your wealth is working intelligently for you.',
    link: '/services/wealth-planning',
    features: [
      {
        title: 'Asset Growth',
        description: 'Strategic investment strategies designed to maximize returns while managing risk.',
        icon: '📈'
      },
      {
        title: 'Wealth Protection',
        description: 'Comprehensive strategies to protect your assets from market volatility and unexpected events.',
        icon: '🛡️'
      },
      {
        title: 'Legacy Planning',
        description: 'Ensure your wealth benefits future generations according to your wishes.',
        icon: '🏛️'
      }
    ]
  },
  {
    title: 'Retirement Planning',
    description: 'Retirement is not an end point—it\'s a new beginning. With decades of retirement to plan for, our approach is both strategic and deeply personal. We design forward-thinking plans that aim to maximize growth, ensure tax-efficient income streams, and preserve wealth for future generations. The result? A retirement lifestyle that reflects your vision, supported by a plan built to last.',
    link: '/services/retirement-planning',
    features: [
      {
        title: 'Income Planning',
        description: 'Create reliable income streams to support your desired retirement lifestyle.',
        icon: '💰'
      },
      {
        title: 'Tax Efficiency',
        description: 'Strategies to minimize tax impact and maximize retirement income.',
        icon: '📝'
      },
      {
        title: 'Long-term Growth',
        description: 'Investment strategies designed to maintain purchasing power throughout retirement.',
        icon: '🌱'
      }
    ]
  }
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const [heroInView, setHeroInView] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px'
      }
    );

    const financialPlanningSection = document.getElementById('financial-planning');
    if (financialPlanningSection) {
      observer.observe(financialPlanningSection);
    }

    return () => {
      if (financialPlanningSection) {
        observer.unobserve(financialPlanningSection);
      }
    };
  }, []);

  // Add new observer for tracking active section
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px'
      }
    );

    // Observe all service sections
    services.forEach(service => {
      const section = document.getElementById(service.title.toLowerCase().replace(' ', '-'));
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      services.forEach(service => {
        const section = document.getElementById(service.title.toLowerCase().replace(' ', '-'));
        if (section) {
          sectionObserver.unobserve(section);
        }
      });
    };
  }, []);

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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Our Services</span> 
              </h1> 

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div> 

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"> 
                Comprehensive financial solutions tailored to your unique needs and goals. 
              </p> 

              <div className="flex flex-wrap justify-center gap-4 mt-8"> 
                <Link 
                  href="#journey" 
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                > 
                  Get Started 
                </Link> 
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

      {/* Fixed Side Navigation */}
      

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
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors"
                    >
                      Learn more
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      
    </div>
  );
}