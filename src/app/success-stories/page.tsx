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

export default function SuccessStoriesPage() {
  const [activeTab, setActiveTab] = useState('individuals');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  
  // Testimonials data
  const testimonials = {
    individuals: [
      {
        name: "Sarah Johnson",
        role: "Retired Teacher",
        quote: "Garfield Financial transformed my retirement planning. I now have the confidence and security to enjoy my golden years without financial stress.",
        image: "/images/testimonials/sarah.jpg",
        rating: 5,
        achievement: "Retirement portfolio growth of 32% over 5 years"
      },
      {
        name: "Michael Chen",
        role: "Tech Executive",
        quote: "As someone with a complex financial situation, I needed advisors who understood both my immediate needs and long-term goals. The team at Garfield delivered beyond my expectations.",
        image: "/images/testimonials/michael.jpg",
        rating: 5,
        achievement: "Successfully diversified portfolio while maintaining growth"
      },
      {
        name: "Elena Rodriguez",
        role: "Small Business Owner",
        quote: "They helped me navigate both personal finances and business planning. Their integrated approach made all the difference in my financial journey.",
        image: "/images/testimonials/elena.jpg",
        rating: 5,
        achievement: "Balanced business growth with personal wealth building"
      }
    ],
    businesses: [
      {
        name: "Horizon Technologies",
        role: "Software Development",
        quote: "Garfield Financial helped us structure our company finances during a critical growth phase. Their strategic advice was instrumental in our successful Series B funding.",
        image: "/images/testimonials/horizon.jpg",
        rating: 5,
        achievement: "Secured $12M in funding with optimized financial structure"
      },
      {
        name: "Green Earth Organics",
        role: "Sustainable Food Production",
        quote: "As we scaled our operations, Garfield's team provided invaluable guidance on cash flow management and investment strategies that aligned with our values.",
        image: "/images/testimonials/greenearth.jpg",
        rating: 5,
        achievement: "30% reduction in operational costs while expanding to new markets"
      },
      {
        name: "Metropolitan Medical Group",
        role: "Healthcare Provider",
        quote: "The specialized knowledge Garfield brought to our practice helped us navigate complex healthcare financial regulations while maximizing our growth potential.",
        image: "/images/testimonials/metropolitan.jpg",
        rating: 5,
        achievement: "Optimized tax strategy saving $230K annually"
      }
    ]
  };
  
  // Case studies data
  const caseStudies = [
    {
      title: "Retirement Reimagined",
      category: "individuals",
      challenge: "A couple in their 50s with inadequate retirement savings and concerns about future financial security.",
      solution: "Comprehensive retirement planning with accelerated savings strategy, tax optimization, and portfolio rebalancing.",
      result: "On track to retire comfortably at 65 with 120% of their target retirement income.",
      image: "/images/case-studies/retirement.jpg"
    },
    {
      title: "Business Succession Planning",
      category: "businesses",
      challenge: "Family-owned manufacturing business seeking to transition leadership while preserving wealth and company legacy.",
      solution: "Structured succession plan with tax-efficient ownership transfer and leadership development program.",
      result: "Successful transition to second generation with 15% business growth in the first year post-transition.",
      image: "/images/case-studies/succession.jpg"
    },
    {
      title: "Wealth Preservation Strategy",
      category: "individuals",
      challenge: "High-net-worth individual concerned about estate taxes and legacy planning for multiple beneficiaries.",
      solution: "Custom estate planning with trust structures, philanthropic integration, and tax-efficient wealth transfer mechanisms.",
      result: "Projected tax savings of $1.2M and established foundation for multi-generational wealth preservation.",
      image: "/images/case-studies/wealth.jpg"
    },
    {
      title: "Startup Financial Architecture",
      category: "businesses",
      challenge: "Tech startup with rapid growth needing financial infrastructure to support scaling operations.",
      solution: "Implemented comprehensive financial systems, investor relations framework, and equity compensation planning.",
      result: "Successfully raised Series A at 3x valuation with robust financial reporting that impressed investors.",
      image: "/images/case-studies/startup.jpg"
    }
  ];
  
  // Filter case studies based on active tab
  const filteredCaseStudies = caseStudies.filter(study => 
    activeTab === 'all' || study.category === activeTab
  );
  
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
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });
  const [caseStudiesRef, caseStudiesInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

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
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 6 + 2}rem`,
                height: `${Math.random() * 6 + 2}rem`,
                opacity: Math.random() * 0.15 + 0.05,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Success Stories</span>
              </h1>
              
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Real results from real clients. Discover how we've helped individuals and businesses achieve their financial goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button 
                  onClick={() => setActiveTab('individuals')}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === 'individuals' 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Individual Success
                </button>
                <button 
                  onClick={() => setActiveTab('businesses')}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === 'businesses' 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Business Success
                </button>
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === 'all' 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  View All
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-primary-600 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary-300 flex items-center justify-center">
              <motion.div 
                className="w-1.5 h-3 bg-primary-500 rounded-full"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        id="testimonials" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with Garfield Financial
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials[activeTab === 'all' ? 'individuals' : activeTab].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Quote Icon */}
                <div className="mb-6 text-primary-500">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H12.5C13.163 12.5 13.7989 12.2366 14.2678 11.7678C14.7366 11.2989 15 10.663 15 10V7.5C15 6.83696 15.2634 6.20107 15.7322 5.73223C16.2011 5.26339 16.837 5 17.5 5H20M35 25H25C24.337 25 23.7011 24.7366 23.2322 24.2678C22.7634 23.7989 22.5 23.163 22.5 22.5V15C22.5 14.337 22.7634 13.7011 23.2322 13.2322C23.7011 12.7634 24.337 12.5 25 12.5H30C30.663 12.5 31.2989 12.2366 31.7678 11.7678C32.2366 11.2989 32.5 10.663 32.5 10V7.5C32.5 6.83696 32.7634 6.20107 33.2322 5.73223C33.7011 5.26339 34.337 5 35 5H37.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Achievement */}
                <div className="mb-6 bg-primary-50 p-3 rounded-lg">
                  <p className="text-primary-700 text-sm font-medium">
                    <span className="text-primary-600 font-bold">Achievement:</span> {testimonial.achievement}
                  </p>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    {/* Placeholder for client image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section 
        ref={caseStudiesRef}
        id="case-studies" 
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed examples of how we've helped our clients overcome financial challenges
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={caseStudiesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for case study image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                    {study.title} Image
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/2"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {study.category === 'individuals' ? 'Individual Client' : 'Business Client'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-primary-600 font-semibold mb-1">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-primary-600 font-semibold mb-1">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-primary-600 font-semibold mb-1">Result</h4>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href="#"
                      className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
                    >
                      Read full case study
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                  Join our family of satisfied clients and let us help you achieve your financial goals with personalized strategies and expert guidance.
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
  );}
