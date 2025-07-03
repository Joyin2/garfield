'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const testimonials = [
    {
      quote: "Working with John has completely transformed our financial outlook. His strategic approach and personalized guidance gave us confidence in our retirement planning that we never thought possible.",
      author: "Michael & Sarah Thompson",
      position: "Retired Educators"
    },
    {
      quote: "As a business owner, I needed someone who understood both my personal and company finances. John's comprehensive wealth management strategy helped me optimize my business structure while securing my family's future.",
      author: "David Chen",
      position: "CEO, Tech Innovations"
    },
    {
      quote: "After inheriting my parents' estate, I was overwhelmed with the responsibility. John not only helped me manage these assets wisely but educated me throughout the process. His patience and expertise were invaluable.",
      author: "Jennifer Williams",
      position: "Healthcare Professional"
    },
    {
      quote: "John's approach to financial planning is refreshingly holistic. He took the time to understand our values and goals before creating a strategy that aligned perfectly with our vision for the future.",
      author: "Robert & Lisa Garcia",
      position: "Small Business Owners"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20 z-0"
        style={{ y }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e0e7ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </motion.div>
      
      {/* Decorative elements */}
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
          className="flex flex-col items-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 rounded-full mb-3"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Testimonials
            </span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500 font-[var(--font-playfair)]">
              What Our Clients Say
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
            Don't just take our word for it. Hear from clients who have transformed their financial future with our guidance.
          </motion.p>
        </motion.div>
        
        {/* Testimonials list */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-50 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                
                {/* Quote mark */}
                <div className="absolute -right-4 -top-4 text-primary-100 opacity-30 transform rotate-12">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-1 bg-primary-500 rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-800">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating stars - only visible on larger screens */}
                  <div className="hidden md:flex flex-col items-end justify-start self-start mt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Join hundreds of satisfied clients who have secured their financial future.
          </p>
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-400">
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full bg-white hover:bg-transparent hover:text-white transition-colors duration-300 text-primary-600 font-medium">
                Schedule Your Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}