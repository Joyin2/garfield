'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Topic {
  id: number;
  title: string;
  description: string;
  category: string;
  engagement: number;
  image: string;
}

const trendingTopics: Topic[] = [
  {
    id: 1,
    title: "AI-Powered Development",
    description: "Explore how artificial intelligence is revolutionizing software development",
    category: "Technology",
    engagement: 2450,
    image: "/images/ai-dev.jpg"
  },
  {
    id: 2,
    title: "Cloud Architecture",
    description: "Best practices for building scalable cloud infrastructure",
    category: "Cloud",
    engagement: 1890,
    image: "/images/cloud.jpg"
  },
  {
    id: 3,
    title: "Web3 Development",
    description: "Understanding blockchain and decentralized applications",
    category: "Blockchain",
    engagement: 3200,
    image: "/images/web3.jpg"
  },
  {
    id: 4,
    title: "DevOps Automation",
    description: "Streamline your development workflow with automation",
    category: "DevOps",
    engagement: 1560,
    image: "/images/devops.jpg"
  }
];

const TrendingTopicsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what's capturing the attention of developers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTopics.map((topic) => (
            <motion.div
              key={topic.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredId(topic.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                  {topic.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {topic.engagement.toLocaleString()} views
                  </span>
                  <motion.button
                    className="text-blue-600 font-semibold hover:text-blue-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
              {hoveredId === topic.id && (
                <motion.div
                  className="absolute inset-0 bg-blue-600 bg-opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopicsSection; 