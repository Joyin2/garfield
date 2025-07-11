'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function MarketVolatilityArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/resources" className="text-primary-600 hover:text-primary-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Understanding Market Volatility</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Understanding Market Volatility: Navigating Uncertain Times
              </span>
            </motion.h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">MJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-600">Senior Investment Analyst</p>
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
                Learn how market fluctuations affect your investments and strategies to navigate uncertain times with confidence and strategic planning.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Market Volatility?</h2>
              <p className="mb-6">
                Market volatility refers to the degree of variation in trading prices over time. It's a statistical measure of the dispersion of returns for a given security or market index. When markets are volatile, prices can swing dramatically in either direction over short periods.
              </p>
              <p className="mb-6">
                Volatility is often measured using the VIX (Volatility Index), sometimes called the "fear gauge," which tracks expected volatility in the S&P 500 over the next 30 days. A VIX reading above 30 typically indicates high volatility and market uncertainty.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Causes of Market Volatility</h2>
              <p className="mb-6">
                Understanding what drives market volatility can help investors better prepare for and respond to market fluctuations:
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Key Volatility Drivers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Economic Data Releases:</strong> GDP reports, employment figures, and inflation data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Federal Reserve Policy:</strong> Interest rate changes and monetary policy announcements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Geopolitical Events:</strong> Wars, elections, trade disputes, and international tensions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Corporate Earnings:</strong> Quarterly earnings reports and guidance updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Market Sentiment:</strong> Investor emotions, fear, and greed cycles</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Psychology of Volatility</h2>
              <p className="mb-6">
                Market volatility often triggers emotional responses that can lead to poor investment decisions. Understanding these psychological factors is crucial for maintaining a disciplined investment approach.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "The stock market is a voting machine in the short run, but a weighing machine in the long run. Volatility is the price we pay for the higher returns that stocks have historically provided."
                  <footer className="mt-2 text-sm text-gray-600">— Benjamin Graham, The Intelligent Investor</footer>
                </blockquote>
              </div>

              <p className="mb-6">
                Fear and greed are the two primary emotions that drive market volatility. During market downturns, fear can cause panic selling, while during bull markets, greed can lead to speculative bubbles.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies for Managing Volatility</h2>
              <p className="mb-6">
                While you can't eliminate market volatility, you can develop strategies to manage its impact on your portfolio and financial goals.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Diversification</h3>
              <p className="mb-6">
                Diversification remains one of the most effective tools for managing volatility. By spreading investments across different asset classes, sectors, and geographic regions, you can reduce the impact of any single investment's poor performance.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Diversification Strategies:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Asset Class Diversification:</strong> Stocks, bonds, real estate, commodities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Geographic Diversification:</strong> Domestic and international markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Sector Diversification:</strong> Technology, healthcare, finance, consumer goods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Time Diversification:</strong> Dollar-cost averaging over time</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Dollar-Cost Averaging</h3>
              <p className="mb-6">
                Dollar-cost averaging involves investing a fixed amount regularly, regardless of market conditions. This strategy can help reduce the impact of volatility by purchasing more shares when prices are low and fewer when prices are high.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "Time in the market beats timing the market. Dollar-cost averaging helps investors avoid the emotional pitfalls of trying to time market movements perfectly."
                  <footer className="mt-2 text-sm text-gray-600">— Sarah Chen, Portfolio Manager at Vanguard</footer>
                </blockquote>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Maintain an Emergency Fund</h3>
              <p className="mb-6">
                Having 3-6 months of expenses in a liquid emergency fund prevents you from having to sell investments during market downturns. This cash buffer provides peace of mind and financial flexibility during volatile periods.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Rebalancing</h3>
              <p className="mb-6">
                Regular portfolio rebalancing helps maintain your target asset allocation and can actually benefit from volatility. When you rebalance, you're essentially selling high-performing assets and buying underperforming ones, which can enhance long-term returns.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Perspective on Market Volatility</h2>
              <p className="mb-6">
                History shows us that market volatility is normal and temporary. While it can be unsettling in the moment, understanding historical patterns can provide perspective and confidence.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Historical Market Facts:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• The S&P 500 has experienced a 10% correction (decline) about once every 1.5 years on average</li>
                  <li>• Bear markets (20%+ declines) occur roughly every 3-4 years</li>
                  <li>• Despite numerous crises, the S&P 500 has delivered positive returns in about 75% of all years since 1950</li>
                  <li>• The average bull market lasts about 5 years, while the average bear market lasts about 1 year</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Professional Help</h2>
              <p className="mb-6">
                While understanding volatility is important, managing it effectively often requires professional expertise. Consider working with a financial advisor if you:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Feel overwhelmed by market movements and unsure how to respond</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Have significant assets that require sophisticated risk management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Are approaching retirement and need to balance growth with capital preservation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Want to develop a comprehensive financial plan that accounts for market volatility</span>
                </li>
              </ul>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Last Modified: June 15, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-xl">MJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Michael Johnson</h4>
                  <p className="text-gray-600 mb-4">
                    Michael Johnson is a Senior Investment Analyst with over 15 years of experience in portfolio management and market analysis. He holds a CFA designation and has helped hundreds of clients navigate market volatility while achieving their long-term financial goals. Michael specializes in risk management strategies and behavioral finance.
                  </p>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Edited By</h4>
                  <p className="text-gray-600">Hannah Alberstadt, Financial Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Managing Market Volatility?"
        description="Our experienced advisors can help you develop a strategy to navigate market uncertainty while staying focused on your long-term goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}
