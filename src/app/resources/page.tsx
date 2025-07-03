'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CTASection from '@/components/sections/CTASection';

export default function ResourcesPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState('articles');
  const heroInView = useInView(heroRef);
  
  // Scroll animation for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Resource articles
  const articles = [
    {
      title: "The 'Peak 65' Retirement Wave: Why FIAs Are Gaining Popularity",
      description: "As record numbers of Americans reach age 65, retirees are turning to fixed index annuities for guaranteed income, principal protection and moderate growth, offering a safer alternative to bonds and stocks in today's volatile market.",
      category: "Retirement Planning",
      date: "May 6, 2025",
      image: "/images/resources/fia-article.jpg",
      link: "/resources/fia-popularity"
    },
    {
      title: "Understanding Market Volatility",
      description: "Learn how market fluctuations affect your investments and strategies to navigate uncertain times.",
      category: "Investing",
      date: "June 15, 2023",
      image: "/images/resources/market-volatility.jpg",
      link: "/resources/market-volatility"
    },
    {
      title: "Retirement Planning in Your 40s",
      description: "Key strategies to accelerate your retirement savings during your peak earning years.",
      category: "Retirement",
      date: "May 22, 2023",
      image: "/images/resources/retirement-40s.jpg",
      link: "/resources/retirement-40s"
    },
    {
      title: "Tax-Efficient Investment Strategies",
      description: "Maximize your after-tax returns with these proven investment approaches.",
      category: "Tax Planning",
      date: "April 10, 2023",
      image: "/images/resources/tax-efficient.jpg",
      link: "/resources/tax-strategies"
    },
    {
      title: "Estate Planning Essentials",
      description: "Protect your legacy and ensure your assets are distributed according to your wishes.",
      category: "Estate Planning",
      date: "March 5, 2023",
      image: "/images/resources/estate-planning.jpg",
      link: "/resources/estate-planning"
    }
  ];

  // Industry news
  const news = [
    {
      title: "Federal Reserve Announces Interest Rate Decision",
      description: "The Federal Reserve's latest policy meeting resulted in a key decision on interest rates that could impact investors.",
      source: "Financial Times",
      date: "July 2, 2023",
      image: "/images/resources/fed-news.jpg",
      link: "/news/fed-interest-rates"
    },
    {
      title: "New Retirement Legislation Passes Senate",
      description: "The SECURE Act 2.0 brings significant changes to retirement savings rules and opportunities.",
      source: "Wall Street Journal",
      date: "June 28, 2023",
      image: "/images/resources/retirement-legislation.jpg",
      link: "/news/secure-act-2"
    },
    {
      title: "Market Report: Tech Sector Performance Analysis",
      description: "A comprehensive look at how technology stocks are performing and what it means for your portfolio.",
      source: "Bloomberg",
      date: "June 15, 2023",
      image: "/images/resources/tech-stocks.jpg",
      link: "/news/tech-sector-analysis"
    },
    {
      title: "Global Economic Outlook Released",
      description: "The IMF's latest economic projections reveal important trends for investors to consider.",
      source: "Reuters",
      date: "May 30, 2023",
      image: "/images/resources/economic-outlook.jpg",
      link: "/news/global-economic-outlook"
    }
  ];

  // Webinars and events
  const events = [
    {
      title: "Preparing for Retirement: A Comprehensive Guide",
      description: "Join our expert advisors for a deep dive into retirement preparation strategies.",
      date: "August 15, 2023",
      time: "2:00 PM - 3:30 PM EST",
      image: "/images/resources/retirement-webinar.jpg",
      link: "/events/retirement-preparation"
    },
    {
      title: "Market Outlook: Q3 2023",
      description: "Our investment team shares insights on market trends and investment opportunities.",
      date: "July 20, 2023",
      time: "1:00 PM - 2:00 PM EST",
      image: "/images/resources/market-outlook.jpg",
      link: "/events/market-outlook-q3"
    },
    {
      title: "Tax Planning Strategies for High-Income Earners",
      description: "Learn advanced tax planning techniques to minimize your tax burden.",
      date: "July 10, 2023",
      time: "11:00 AM - 12:30 PM EST",
      image: "/images/resources/tax-planning.jpg",
      link: "/events/tax-planning-high-income"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced with animations */}
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
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Resources & Insights</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Expert financial insights to help you make informed decisions
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={() => handleTabClick('articles')}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Educational Articles
                </button>
                <button
                  onClick={() => handleTabClick('events')}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Webinars
                </button>
                <button
                  onClick={() => handleTabClick('news')}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Industry News
                </button>
                <button
                  onClick={() => handleTabClick('all')}
                  className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-200 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  View All
                </button>
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
          <a href="#content" className="flex flex-col items-center cursor-pointer">
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

      {/* Main content */}
      <section ref={contentRef} id="content" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* All Content */}
          {activeTab === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* Educational Articles Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Educational Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {articles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold bg-primary-50 text-primary-700 px-2 py-1 rounded-full">{article.category}</span>
                          <span className="text-xs text-gray-500 ml-2">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.description}</p>
                        <Link href={article.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Read Article
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Webinars Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Webinars & Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex flex-col mb-2">
                          <span className="text-sm font-semibold text-gray-900">{event.date}</span>
                          <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <Link href={event.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Register Now
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry News Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {news.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{item.source}</span>
                          <span className="text-xs text-gray-500 ml-2">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link href={item.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Read News
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Individual Tab Content */}
          {activeTab !== 'all' && (
            <>
              {/* Articles Tab Content */}
              {activeTab === 'articles' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                  {articles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold bg-primary-50 text-primary-700 px-2 py-1 rounded-full">{article.category}</span>
                          <span className="text-xs text-gray-500 ml-2">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.description}</p>
                        <Link href={article.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Read Article
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* News Tab Content */}
              {activeTab === 'news' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                  {news.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{item.source}</span>
                          <span className="text-xs text-gray-500 ml-2">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link href={item.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Read News
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Events Tab Content */}
              {activeTab === 'events' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex flex-col mb-2">
                          <span className="text-sm font-semibold text-gray-900">{event.date}</span>
                          <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <Link href={event.link} className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                          Register Now
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Featured Video</span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our latest insights on financial planning and investment strategies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://player.vimeo.com/video/913010308?h=5114683805&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Financial Planning Video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold text-primary-600 mb-2">Featured Resource</span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6"
                >
                  <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">2023 Financial Planning Guide</span>
                </motion.h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive guide covers everything you need to know about financial planning in today's economic environment. From investment strategies to tax planning and retirement preparation, this guide provides actionable insights for every stage of your financial journey.
                </p>
                <ul className="space-y-2 mb-8">
                  {['Investment strategy updates', 'Tax planning opportunities', 'Retirement planning essentials', 'Estate planning considerations'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <a 
                    href="/resources/financial-planning-guide" 
                    className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Download Guide
                  </a>
                </div>
              </div>
              <div className="bg-primary-100 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-primary-600 text-white p-4 rounded-b-lg">
                    <div className="text-sm font-medium">2023 Edition</div>
                    <div className="text-xs opacity-75">Updated quarterly</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Financial Planning Tools</span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our interactive calculators and tools to help you make informed financial decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retirement Calculator",
                description: "Estimate how much you need to save for retirement and track your progress.",
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                link: "/calculators/retirement"
              },
              {
                title: "Investment Return Calculator",
                description: "Calculate potential returns on your investments based on different scenarios.",
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                ),
                link: "/calculators/investment"
              },
              {
                title: "Budget Planner",
                description: "Create a personalized budget to help manage your income and expenses effectively.",
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                link: "/calculators/budget"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{tool.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{tool.description}</p>
                <div className="text-center">
                  <Link href={tool.link} className="inline-block px-5 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300">
                    Try Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Newsletter Signup */}
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 p-10 rounded-2xl shadow-lg"
      >
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Stay Informed</span>
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest financial insights, market updates, and exclusive resources directly to your inbox.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3 text-center md:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <CTASection 
        title="Have Questions About Your Financial Future?"
        description="Schedule a consultation with our expert advisors to discuss your specific financial needs and goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}