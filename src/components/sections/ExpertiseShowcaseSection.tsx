'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Target, Star } from 'lucide-react';

const expertiseData = [
  {
    id: 1,
    title: "Three Decades of Excellence",
    description: "Since 1990, Garfield Financial has been a trusted name in financial planning, serving generations of clients with dedication and expertise.",
    icon: <Star className="w-8 h-8 text-primary-600" />,
    highlight: "30+ Years"
  },
  {
    id: 2,
    title: "Comprehensive Planning",
    description: "From retirement strategies to estate planning, Garfield Financial offers a full spectrum of financial services tailored to individual needs.",
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    highlight: "Full-Service"
  },
  {
    id: 3,
    title: "Client Success Stories",
    description: "Countless individuals and businesses have achieved their financial goals through Garfield Financial's strategic guidance and personalized approach.",
    icon: <Target className="w-8 h-8 text-primary-600" />,
    highlight: "Proven Results"
  },
  {
    id: 4,
    title: "Industry Recognition",
    description: "Garfield Financial's commitment to excellence has earned recognition from leading financial institutions and industry publications.",
    icon: <Award className="w-8 h-8 text-primary-600" />,
    highlight: "Award-Winning"
  }
];

const ExpertiseShowcaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500 font-[var(--font-playfair)]">
              Garfield Financial Expertise
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            A legacy of financial excellence, built on trust, innovation, and unwavering commitment to client success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-tight mb-2">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                        {item.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcaseSection; 