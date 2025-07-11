'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function FedInterestRatesNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/resources" className="text-blue-600 hover:text-blue-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Industry News</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              📈 BREAKING NEWS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Federal Reserve Announces Interest Rate Decision
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-600 mb-6 max-w-3xl"
            >
              The Federal Reserve's latest policy meeting resulted in a key decision on interest rates that could impact investors across all asset classes.
            </motion.p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-semibold">FT</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Financial Times</p>
                  <p className="text-sm text-gray-600">Financial News Source</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">July 2, 2023</span>
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
                In a closely watched decision, the Federal Reserve announced its latest interest rate policy, marking a significant moment for financial markets and investors seeking clarity on monetary policy direction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fed Raises Rates by 0.25%</h2>
              <p className="mb-6">
                The Federal Open Market Committee (FOMC) voted to increase the federal funds rate by 25 basis points, bringing the target range to 5.25%-5.50%. This marks the highest level for interest rates in over two decades and represents the Fed's continued commitment to combating persistent inflation.
              </p>
              <p className="mb-6">
                Fed Chair Jerome Powell emphasized that the central bank remains data-dependent in its approach, stating that future rate decisions will be based on incoming economic data, the evolving outlook, and the balance of risks.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Key Decision Points:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Federal funds rate increased to 5.25%-5.50% range</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Decision was unanimous among voting members</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Future policy remains data-dependent</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inflation remains above the 2% target</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Reaction and Implications</h2>
              <p className="mb-6">
                Financial markets responded with mixed reactions to the announcement. While the rate increase was largely anticipated by investors, the Fed's forward guidance and commentary on future policy direction provided new insights into the central bank's thinking.
              </p>
              <p className="mb-6">
                Bond yields initially rose following the announcement, with the 10-year Treasury yield climbing to multi-month highs. Equity markets showed volatility as investors digested the implications for corporate earnings and economic growth.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact on Different Asset Classes</h3>
              <p className="mb-6">
                The rate decision has varying implications across different investment categories:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Asset Class Impact Analysis:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Fixed Income:</h5>
                    <p className="text-gray-600 text-sm">Higher rates generally benefit new bond issuances but may pressure existing bond prices. Short-term bonds may see immediate yield increases.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Equities:</h5>
                    <p className="text-gray-600 text-sm">Higher borrowing costs may pressure growth stocks, while financial sector stocks could benefit from improved net interest margins.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Real Estate:</h5>
                    <p className="text-gray-600 text-sm">Rising rates typically increase mortgage costs, potentially cooling housing demand and affecting REIT valuations.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Dollar Impact:</h5>
                    <p className="text-gray-600 text-sm">Higher U.S. rates often strengthen the dollar relative to other currencies, affecting international investments.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Economic Context and Rationale</h2>
              <p className="mb-6">
                The Fed's decision comes amid ongoing concerns about inflation persistence, despite recent moderation in price pressures. Core inflation remains elevated above the central bank's 2% target, prompting continued monetary tightening.
              </p>
              <p className="mb-6">
                Labor market strength continues to support the Fed's hawkish stance, with unemployment near historic lows and wage growth remaining robust. These conditions suggest the economy can withstand higher interest rates without falling into recession.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "We remain committed to bringing inflation down to our 2% goal and will continue to assess the appropriate stance of monetary policy as more data becomes available."
                  <footer className="mt-2 text-sm text-gray-600">— Jerome Powell, Federal Reserve Chair</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">What This Means for Investors</h2>
              <p className="mb-6">
                Investors should consider several key implications of the Fed's decision for their portfolios and investment strategies:
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-blue-800 mb-4">Investment Considerations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Portfolio Rebalancing:</strong> Consider adjusting asset allocation to account for changing interest rate environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Fixed Income Strategy:</strong> Evaluate duration risk and consider shorter-term bonds or floating-rate securities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Sector Rotation:</strong> Financial stocks may benefit while interest-sensitive sectors could face headwinds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Cash Management:</strong> Higher rates make cash and short-term investments more attractive</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
              <p className="mb-6">
                The Fed's next policy meeting is scheduled for September, where officials will have additional economic data to assess the effectiveness of current monetary policy. Key indicators to watch include inflation trends, employment data, and economic growth metrics.
              </p>
              <p className="mb-6">
                Market participants will closely monitor Fed communications and economic data releases for signals about future policy direction. The central bank has emphasized its commitment to data-dependent decision-making, suggesting flexibility in future rate adjustments.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Source: Financial Times</p>
                <p className="text-sm text-gray-600 mt-2">Published: July 2, 2023</p>
                <p className="text-sm text-gray-600 mt-4">
                  <em>This analysis is based on publicly available information and should not be considered as investment advice. Consult with a financial advisor for personalized guidance.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Help Navigating Interest Rate Changes?"
        description="Our investment advisors can help you adjust your portfolio strategy to account for changing interest rate environments and market conditions."
        buttonText="Schedule a Portfolio Review"
        buttonLink="/contact"
        backgroundClass="bg-blue-900"
      />
    </div>
  );
}
