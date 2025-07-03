'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Insight {
  id: number;
  title: string;
  description: string;
  category: string;
  impact: string;
  icon: string;
}

const financialInsights: Insight[] = [
  {
    id: 1,
    title: "Retirement Readiness",
    description: "Understanding your retirement readiness score and steps to improve it",
    category: "Retirement",
    impact: "High",
    icon: "📊"
  },
  {
    id: 2,
    title: "Tax Optimization",
    description: "Strategic tax planning opportunities for the current fiscal year",
    category: "Tax Planning",
    impact: "Medium",
    icon: "💰"
  },
  {
    id: 3,
    title: "Market Trends",
    description: "Key market indicators and their potential impact on your portfolio",
    category: "Investments",
    impact: "High",
    icon: "📈"
  },
  {
    id: 4,
    title: "Estate Planning",
    description: "Essential updates to consider for your estate planning strategy",
    category: "Estate",
    impact: "Medium",
    icon: "🏛️"
  }
];

const FinancialInsightsSection = () => {
  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Financial Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed with our expert analysis and strategic insights to help you make confident financial decisions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financialInsights.map((insight) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: insight.id * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              onHoverStart={() => setActiveInsight(insight.id)}
              onHoverEnd={() => setActiveInsight(null)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{insight.icon}</span>
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    insight.impact === 'High' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {insight.category}
                  </span>
                  <motion.button
                    className="text-primary-600 font-semibold hover:text-primary-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
              
              {activeInsight === insight.id && (
                <motion.div
                  className="absolute inset-0 bg-primary-600 bg-opacity-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/insights"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300"
          >
            View All Insights
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialInsightsSection; 