'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function GlobalEconomicOutlookNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/resources" className="text-indigo-600 hover:text-indigo-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Industry News</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              🌍 GLOBAL OUTLOOK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                Global Economic Outlook Released
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-600 mb-6 max-w-3xl"
            >
              The IMF's latest economic projections reveal important trends for investors to consider as global growth patterns shift and new challenges emerge.
            </motion.p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">R</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Reuters</p>
                  <p className="text-sm text-gray-600">Financial News Source</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">May 30, 2023</span>
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
                The International Monetary Fund has released its updated World Economic Outlook, providing crucial insights into global growth prospects, inflation trends, and regional economic dynamics that will shape investment strategies in the months ahead.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Growth Projections Revised</h2>
              <p className="mb-6">
                The IMF has revised its global growth forecast for 2023 to 3.0%, representing a modest upward revision from previous estimates. This adjustment reflects resilient consumer spending in major economies and better-than-expected performance in emerging markets, despite ongoing challenges from inflation and geopolitical tensions.
              </p>
              <p className="mb-6">
                The organization emphasized that while the global economy has shown remarkable resilience, significant risks remain, including persistent inflation in some regions, financial sector stress, and the ongoing effects of geopolitical conflicts on supply chains and energy markets.
              </p>

              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Key Global Projections (2023-2024):</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-700 mb-3">2023 Growth Forecasts:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Global Economy:</span>
                        <span className="font-bold">3.0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>United States:</span>
                        <span className="font-bold">1.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Euro Area:</span>
                        <span className="font-bold">0.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>China:</span>
                        <span className="font-bold">5.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emerging Markets:</span>
                        <span className="font-bold">4.0%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-700 mb-3">2024 Growth Forecasts:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Global Economy:</span>
                        <span className="font-bold">3.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>United States:</span>
                        <span className="font-bold">1.0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Euro Area:</span>
                        <span className="font-bold">1.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>China:</span>
                        <span className="font-bold">4.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emerging Markets:</span>
                        <span className="font-bold">4.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Economic Dynamics</h2>
              <p className="mb-6">
                The outlook reveals significant divergence in economic performance across regions, with emerging markets showing greater resilience than previously anticipated while advanced economies face more persistent challenges from inflation and monetary tightening.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">United States: Navigating Soft Landing</h3>
              <p className="mb-6">
                The U.S. economy is projected to experience slower growth as the Federal Reserve's monetary tightening continues to work through the system. However, the IMF notes that the labor market remains robust and consumer spending has shown resilience, supporting hopes for a "soft landing" scenario.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Europe: Recovery Amid Challenges</h3>
              <p className="mb-6">
                European economies are expected to see modest growth recovery, supported by easing energy price pressures and resilient domestic demand. However, the region continues to face challenges from the ongoing conflict in Ukraine and its economic spillover effects.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">China: Post-Pandemic Rebound</h3>
              <p className="mb-6">
                China's economy is projected to grow significantly faster than other major economies, driven by the reopening following pandemic restrictions. However, the IMF cautions that structural challenges in the property sector and demographic trends pose medium-term risks.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Regional Themes:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">Advanced Economies:</h5>
                    <p className="text-gray-600 text-sm">Facing headwinds from monetary tightening and persistent core inflation, but showing labor market resilience.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">Emerging Markets:</h5>
                    <p className="text-gray-600 text-sm">Demonstrating greater resilience than expected, with many benefiting from commodity price stabilization.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">Low-Income Countries:</h5>
                    <p className="text-gray-600 text-sm">Continuing to face significant challenges from debt burdens and limited fiscal space.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Inflation Outlook and Central Bank Policy</h2>
              <p className="mb-6">
                The IMF projects that global inflation will continue to decline gradually, falling from 8.7% in 2022 to 7.0% in 2023 and 4.9% in 2024. However, core inflation is expected to remain elevated in many advanced economies, requiring continued vigilance from central banks.
              </p>
              <p className="mb-6">
                The report emphasizes that central banks must remain committed to bringing inflation back to target levels, even if this requires maintaining restrictive monetary policies for an extended period.
              </p>

              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">Inflation Projections:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Global Inflation 2023:</span>
                    <span className="text-indigo-600 font-bold">7.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Global Inflation 2024:</span>
                    <span className="text-indigo-600 font-bold">4.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Advanced Economies 2023:</span>
                    <span className="text-indigo-600 font-bold">4.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Emerging Markets 2023:</span>
                    <span className="text-indigo-600 font-bold">8.1%</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Risks and Uncertainties</h2>
              <p className="mb-6">
                The IMF highlighted several significant risks that could derail the projected economic recovery, emphasizing the need for policymakers and investors to remain vigilant and adaptable.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Major Risk Factors:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong>Financial Sector Stress:</strong> Banking sector vulnerabilities could amplify economic downturns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong>Persistent Inflation:</strong> Core inflation proving more stubborn than anticipated</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong>Geopolitical Tensions:</strong> Escalation of conflicts affecting global supply chains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong>China's Recovery:</strong> Slower-than-expected growth in the world's second-largest economy</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Implications</h2>
              <p className="mb-6">
                The IMF's outlook suggests a complex investment environment where regional diversification and careful sector selection will be crucial for portfolio success. The divergent growth patterns across regions create both opportunities and challenges for global investors.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic">
                  "The global economy is at a critical juncture. While we see signs of resilience, policymakers must remain vigilant and prepared to act decisively to address emerging challenges."
                  <footer className="mt-2 text-sm text-gray-600">— IMF Chief Economist</footer>
                </blockquote>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Investment Considerations</h3>
              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">Portfolio Positioning Insights:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Regional Diversification:</strong> Balance exposure across different economic cycles and growth patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Inflation Protection:</strong> Consider assets that can benefit from or hedge against persistent inflation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Quality Focus:</strong> Emphasize companies with strong balance sheets and pricing power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Emerging Market Opportunities:</strong> Selective exposure to resilient emerging market economies</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Policy Recommendations</h2>
              <p className="mb-6">
                The IMF emphasized the importance of coordinated policy responses to address global challenges effectively. Key recommendations include maintaining monetary policy discipline, implementing targeted fiscal support where needed, and strengthening international cooperation on trade and climate issues.
              </p>
              <p className="mb-6">
                The organization also stressed the need for structural reforms to enhance productivity growth and address long-term challenges such as aging populations and climate change adaptation.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Source: Reuters</p>
                <p className="text-sm text-gray-600 mt-2">Published: May 30, 2023</p>
                <p className="text-sm text-gray-600 mt-4">
                  <em>This analysis is based on IMF World Economic Outlook data and should not be considered as investment advice. Global economic conditions can change rapidly. Consult with a financial advisor for personalized guidance on international investing.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Help with Global Investment Strategy?"
        description="Our international investment specialists can help you navigate global economic trends and build a diversified portfolio that takes advantage of worldwide opportunities."
        buttonText="Schedule a Global Investment Consultation"
        buttonLink="/contact"
        backgroundClass="bg-indigo-900"
      />
    </div>
  );
}
