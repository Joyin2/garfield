'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function TechSectorAnalysisNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/resources" className="text-purple-600 hover:text-purple-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Industry News</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              📊 MARKET ANALYSIS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Market Report: Tech Sector Performance Analysis
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-600 mb-6 max-w-3xl"
            >
              A comprehensive look at how technology stocks are performing and what it means for your portfolio in the current market environment.
            </motion.p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">BB</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Bloomberg</p>
                  <p className="text-sm text-gray-600">Financial News Source</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">June 15, 2023</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                Technology stocks have shown remarkable resilience and growth in recent months, but beneath the surface, significant shifts are reshaping the sector's investment landscape and creating new opportunities for discerning investors.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Sector Overview: A Tale of Two Markets</h2>
              <p className="mb-6">
                The technology sector has experienced a bifurcated performance in 2023, with artificial intelligence and cloud computing companies leading gains while traditional hardware and semiconductor stocks face headwinds from economic uncertainty and supply chain challenges.
              </p>
              <p className="mb-6">
                The Nasdaq Composite has outperformed broader market indices, driven primarily by mega-cap technology stocks that have benefited from the AI revolution and continued digital transformation trends across industries.
              </p>

              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Key Performance Metrics (YTD):</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Nasdaq Composite:</span>
                      <span className="text-green-600 font-bold">+32.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Technology Select Sector SPDR:</span>
                      <span className="text-green-600 font-bold">+28.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">AI-Related Stocks:</span>
                      <span className="text-green-600 font-bold">+45.2%</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Semiconductor Index:</span>
                      <span className="text-red-600 font-bold">-8.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hardware Stocks:</span>
                      <span className="text-red-600 font-bold">-12.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Cybersecurity Sector:</span>
                      <span className="text-green-600 font-bold">+15.6%</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">The AI Revolution Drives Growth</h2>
              <p className="mb-6">
                Artificial intelligence has emerged as the dominant theme driving technology sector performance. Companies with significant AI capabilities or those positioned to benefit from AI adoption have seen substantial investor interest and valuation expansion.
              </p>
              <p className="mb-6">
                Major cloud computing providers have reported accelerating growth in AI-related services, while software companies integrating AI capabilities into their platforms have commanded premium valuations from investors betting on the technology's transformative potential.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leading AI Beneficiaries</h3>
              <p className="mb-6">
                Several categories of technology companies have emerged as primary beneficiaries of the AI boom:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">AI Investment Themes:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Infrastructure Providers:</h5>
                    <p className="text-gray-600 text-sm">Companies providing the computing power and cloud infrastructure necessary for AI development and deployment.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Software Platforms:</h5>
                    <p className="text-gray-600 text-sm">Enterprise software companies integrating AI capabilities to enhance productivity and decision-making.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Semiconductor Designers:</h5>
                    <p className="text-gray-600 text-sm">Chip companies developing specialized processors optimized for AI workloads and machine learning applications.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Data Analytics:</h5>
                    <p className="text-gray-600 text-sm">Companies helping organizations harness and analyze data to train and deploy AI models effectively.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges Facing Traditional Tech</h2>
              <p className="mb-6">
                While AI-focused companies have thrived, traditional technology sectors face significant headwinds. Hardware manufacturers continue to grapple with supply chain disruptions, while semiconductor companies navigate cyclical demand patterns and geopolitical tensions.
              </p>
              <p className="mb-6">
                Consumer electronics demand has softened as post-pandemic purchasing patterns normalize, and enterprise hardware spending has been cautious amid economic uncertainty and higher interest rates affecting capital expenditure decisions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sector-Specific Challenges</h3>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Headwinds by Subsector:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Semiconductors:</strong> Inventory corrections and cyclical demand weakness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Consumer Electronics:</strong> Saturated smartphone market and reduced upgrade cycles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Enterprise Hardware:</strong> Delayed capital expenditures due to economic uncertainty</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Legacy Software:</strong> Competition from AI-enhanced alternatives</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Valuation Considerations</h2>
              <p className="mb-6">
                Technology sector valuations present a mixed picture, with AI-related companies trading at premium multiples while traditional tech stocks offer more attractive entry points for value-oriented investors.
              </p>
              <p className="mb-6">
                The dispersion in valuations within the technology sector has reached levels not seen since the dot-com era, creating both opportunities and risks for investors depending on their investment approach and risk tolerance.
              </p>

              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-purple-800 mb-4">Valuation Metrics Comparison:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">AI-Focused Companies (P/E):</span>
                    <span className="text-purple-600 font-bold">45.2x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cloud Infrastructure (P/E):</span>
                    <span className="text-purple-600 font-bold">38.7x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Traditional Software (P/E):</span>
                    <span className="text-purple-600 font-bold">22.1x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Semiconductor Sector (P/E):</span>
                    <span className="text-purple-600 font-bold">16.8x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hardware Companies (P/E):</span>
                    <span className="text-purple-600 font-bold">14.3x</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Implications and Strategy</h2>
              <p className="mb-6">
                The current technology sector landscape requires a nuanced investment approach that balances exposure to high-growth AI themes with value opportunities in traditional tech segments.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-purple-500 pl-4 italic">
                  "The technology sector is experiencing a fundamental shift that will likely persist for years. Investors need to distinguish between companies riding the AI wave and those building sustainable competitive advantages in the new landscape."
                  <footer className="mt-2 text-sm text-gray-600">— Tech Sector Analyst, Bloomberg Intelligence</footer>
                </blockquote>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Positioning Recommendations</h3>
              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-purple-800 mb-4">Strategic Considerations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Diversified Exposure:</strong> Balance high-growth AI plays with value opportunities in traditional tech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Quality Focus:</strong> Emphasize companies with strong balance sheets and sustainable competitive moats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Valuation Discipline:</strong> Avoid paying excessive premiums for AI exposure without fundamental support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Cyclical Timing:</strong> Consider accumulating semiconductor and hardware positions during weakness</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead: Key Catalysts</h2>
              <p className="mb-6">
                Several factors will likely drive technology sector performance in the coming quarters, including AI adoption rates, semiconductor cycle recovery, and regulatory developments affecting major technology platforms.
              </p>
              <p className="mb-6">
                Investors should monitor earnings guidance, capital expenditure trends, and management commentary around AI investments to gauge the sustainability of current performance trends and identify emerging opportunities.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Metrics to Watch:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI-related revenue growth rates and adoption metrics</li>
                  <li>• Cloud infrastructure spending and capacity utilization</li>
                  <li>• Semiconductor inventory levels and order patterns</li>
                  <li>• Enterprise software renewal rates and expansion metrics</li>
                  <li>• Regulatory developments affecting big tech platforms</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Source: Bloomberg</p>
                <p className="text-sm text-gray-600 mt-2">Published: June 15, 2023</p>
                <p className="text-sm text-gray-600 mt-4">
                  <em>This analysis is based on publicly available market data and should not be considered as investment advice. Technology investments carry inherent risks and volatility. Consult with a financial advisor for personalized guidance.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Help with Technology Sector Investing?"
        description="Our investment team can help you navigate the complex technology sector landscape and identify opportunities that align with your investment goals."
        buttonText="Schedule a Technology Investment Review"
        buttonLink="/contact"
        backgroundClass="bg-purple-900"
      />
    </div>
  );
}
