'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Modern, animated check icon component
const CheckIcon = () => (
  <motion.svg 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-6 h-6 text-primary-600" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </motion.svg>
);

// Animated number counter component
const AnimatedCounter = ({ value, label, suffix = "+" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center px-4 py-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-50 flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>
      <motion.span 
        className="block text-3xl md:text-4xl font-bold text-gray-900 mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {value}{suffix}
      </motion.span>
      <span className="text-sm text-gray-600">{label}</span>
    </motion.div>
  );
};

// Interactive Financial Data Visualization Component
const FinancialVisualization = () => {
  return (
    <div className="relative aspect-[16/12] md:aspect-[16/13] lg:aspect-[16/14] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 border border-primary-600">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="url(#smallGrid)"/>
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Animated Growth Chart */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 flex items-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1000 300" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0,300 L0,200 C50,180 100,150 150,190 C200,230 250,220 300,170 C350,120 400,100 450,150 C500,200 550,220 600,180 C650,140 700,120 750,160 C800,200 850,220 900,180 C950,140 1000,160 1000,140 L1000,300 Z"
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.path 
            d="M0,200 C50,180 100,150 150,190 C200,230 250,220 300,170 C350,120 400,100 450,150 C500,200 550,220 600,180 C650,140 700,120 750,160 C800,200 850,220 900,180 C950,140 1000,160 1000,140"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
        </svg>
      </motion.div>
      
      {/* Animated Data Points */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => {
          const positions = [
            { x: '20%', y: '60%' },
            { x: '40%', y: '40%' },
            { x: '60%', y: '55%' },
            { x: '75%', y: '35%' },
            { x: '85%', y: '45%' }
          ];
          return (
            <motion.div 
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full shadow-lg shadow-primary-900/30"
              style={{ 
                left: positions[i].x, 
                top: positions[i].y,
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (i * 0.2) }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-white"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                style={{ opacity: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Financial Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative w-full max-w-md mx-auto h-full md:h-[120%] lg:h-[140%]" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Central 3D Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="relative w-32 h-32 md:w-40 md:h-40"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-80"
                animate={{ boxShadow: ['0 0 15px 5px rgba(79, 70, 229, 0.3)', '0 0 20px 8px rgba(79, 70, 229, 0.4)', '0 0 15px 5px rgba(79, 70, 229, 0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />
              <div 
                className="absolute inset-2 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full flex items-center justify-center"
              >
                <div className="text-white font-bold text-xs md:text-sm tracking-wider text-center">
                  Garfield<br/>Financial
                </div>
              </div>
              <div className="absolute -inset-4 border-4 border-white/20 rounded-full opacity-50" />
              <div className="absolute -inset-8 border-2 border-white/10 rounded-full opacity-30" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Financial Indicators */}
      <div className="absolute inset-x-0 top-4 md:top-6 flex justify-center">
        <motion.div 
          className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 text-white text-xs md:text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              <span>S&P 500</span>
            </div>
            <motion.span 
              className="font-medium"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +2.4%
            </motion.span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
              <span>NASDAQ</span>
            </div>
            <motion.span 
              className="font-medium"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              +1.8%
            </motion.span>
          </div>
        </motion.div>
      </div>
      
      {/* Financial Metrics */}
      <motion.div 
        className="absolute left-4 top-1/3 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20 shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="text-white text-xs space-y-1">
          <div className="flex justify-between items-center">
            <span>ROI</span>
            <span className="font-medium">12.8%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Risk</span>
            <span className="font-medium">Low</span>
          </div>
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white" 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Floating card elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 max-w-xs"
      >
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900">Client Satisfaction</h4>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <motion.div 
                className="bg-primary-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Industry Average</span>
              <span className="font-medium">95% Satisfied</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutCompanySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const features = [
    {
      title: "Personalized Financial Strategies",
      description: "We craft bespoke financial plans, meticulously tailored to your unique aspirations and circumstances, ensuring a perfect fit for your journey to financial success.",
      icon: <CheckIcon />,
    },
    {
      title: "Proactive & Expert Guidance",
      description: "Our seasoned professionals leverage cutting-edge financial insights and a proactive approach to navigate market complexities and secure your financial future.",
      icon: <CheckIcon />,
    },
    {
      title: "Client-Centric Philosophy",
      description: "Your financial well-being is our paramount concern. We foster enduring partnerships built on a bedrock of unwavering trust, transparency, and mutual respect.",
      icon: <CheckIcon />,
    },
    {
      title: "Long-Term Relationship Focus",
      description: "We believe in building lasting relationships with our clients, providing continuous support and adapting strategies as your financial journey evolves over time.",
      icon: <CheckIcon />,
    },
  ];

  const stats = [
    { value: 30, label: "Years Experience" },
    { value: 500, label: "Satisfied Clients" },
    { value: 95, label: "Client Retention", suffix: "%" },
    { value: 24, label: "Industry Awards" }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"
        style={{ 
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle Background Pattern with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 opacity-30 z-0"
        style={{ y }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e0e7ff" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#fadeGradient)" style={{mixBlendMode: 'overlay'}} />
        </svg>
      </motion.div>

      {/* Floating decorative elements */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 rounded-full mb-3"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our Foundation
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-500 to-primary-600">
              About Garfield Financial
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full mb-4"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 leading-relaxed"
          >
            For over three decades, Garfield Financial has been a steadfast partner in navigating the complexities of financial planning, empowering clients to achieve lasting prosperity and peace of mind.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <AnimatedCounter 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix || "+"}
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Financial Visualization Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <FinancialVisualization />
            
            {/* Background design elements */}
            <div className="absolute -z-10 -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full rounded-2xl border-2 border-primary-100"></div>
            <motion.div 
              className="absolute -z-10 -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary-50 border border-primary-100"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content Section with Animated Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                Our Commitment to Your Success
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                At Garfield Financial, our mission is to deliver exceptional financial planning and wealth management services. We are committed to understanding your unique needs and providing tailored solutions that foster long-term financial security and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3 border border-primary-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-medium shadow-lg shadow-primary-200/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave shape - reduced height */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg className="relative block w-full h-8 sm:h-10 md:h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}