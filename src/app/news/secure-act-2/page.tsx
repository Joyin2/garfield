'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function SecureAct2NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/resources" className="text-green-600 hover:text-green-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Industry News</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              🏛️ LEGISLATION UPDATE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                New Retirement Legislation Passes Senate
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-600 mb-6 max-w-3xl"
            >
              The SECURE Act 2.0 brings significant changes to retirement savings rules and opportunities, expanding access and flexibility for American workers.
            </motion.p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">WSJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Wall Street Journal</p>
                  <p className="text-sm text-gray-600">Financial News Source</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">June 28, 2023</span>
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
                The Senate has passed comprehensive retirement legislation that significantly expands retirement savings opportunities and provides new flexibility for American workers planning for their financial future.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">SECURE Act 2.0 Overview</h2>
              <p className="mb-6">
                The Setting Every Community Up for Retirement Enhancement (SECURE) Act 2.0 represents the most significant retirement legislation since the original SECURE Act of 2019. The bipartisan bill passed the Senate with overwhelming support and is expected to be signed into law shortly.
              </p>
              <p className="mb-6">
                This landmark legislation addresses key challenges facing American retirement security, including inadequate savings rates, limited access to employer-sponsored plans, and the complexity of retirement planning rules.
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Key Provisions of SECURE Act 2.0:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic enrollment in employer retirement plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Increased catch-up contribution limits for older workers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Delayed required minimum distributions (RMDs)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced tax credits for small business retirement plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Emergency savings provisions for employees</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Changes for Workers</h2>
              <p className="mb-6">
                The legislation introduces several provisions that will directly benefit workers across different age groups and income levels:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatic Enrollment Expansion</h3>
              <p className="mb-6">
                New employer retirement plans will be required to automatically enroll eligible employees at a contribution rate of at least 3% but no more than 10%. This provision aims to increase participation rates and help workers who might otherwise delay starting their retirement savings.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Catch-Up Contributions</h3>
              <p className="mb-6">
                Workers aged 60-63 will be able to make additional catch-up contributions of up to $10,000 annually to their 401(k) plans, significantly higher than current limits. This provision recognizes that many workers reach their peak earning years in their early 60s.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">New Contribution Limits (Effective 2025):</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ages 50-59 (Catch-up):</span>
                    <span className="text-green-600 font-bold">$7,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ages 60-63 (Enhanced Catch-up):</span>
                    <span className="text-green-600 font-bold">$10,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ages 64+ (Standard Catch-up):</span>
                    <span className="text-green-600 font-bold">$7,500</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Minimum Distribution Changes</h2>
              <p className="mb-6">
                The legislation pushes back the age for required minimum distributions (RMDs) from 72 to 75, giving retirees more time for their retirement accounts to grow tax-deferred. This change acknowledges increasing life expectancies and the desire for more flexible retirement timing.
              </p>
              <p className="mb-6">
                Additionally, the penalty for failing to take RMDs is reduced from 50% to 25% of the required amount, and can be further reduced to 10% if corrected within two years.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Small Business Benefits</h2>
              <p className="mb-6">
                The act significantly enhances incentives for small businesses to offer retirement plans to their employees:
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-green-800 mb-4">Small Business Incentives:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Startup Tax Credits:</strong> Increased from $500 to $1,000 per employee for the first three years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Auto-Enrollment Credit:</strong> Additional $500 credit for plans with automatic enrollment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Employer Contribution Credit:</strong> Credit for employer matching contributions for low-income workers</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Savings Provisions</h2>
              <p className="mb-6">
                Recognizing that many Americans struggle with emergency expenses, the legislation allows employers to offer emergency savings accounts linked to retirement plans. Employees can contribute up to $2,500 annually to these accounts, with the first four withdrawals per year being penalty-free.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-green-500 pl-4 italic">
                  "This legislation represents a significant step forward in helping Americans achieve retirement security. By expanding access and increasing flexibility, we're making it easier for workers to save for their future."
                  <footer className="mt-2 text-sm text-gray-600">— Senate Finance Committee Chair</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
              <p className="mb-6">
                Most provisions of SECURE Act 2.0 will be implemented gradually over the next several years:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Implementation Dates:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>2024:</strong> Emergency savings accounts and enhanced small business credits</li>
                  <li><strong>2025:</strong> Automatic enrollment requirements and enhanced catch-up contributions</li>
                  <li><strong>2033:</strong> RMD age increases to 75</li>
                  <li><strong>Ongoing:</strong> Various technical corrections and clarifications</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">What This Means for Your Retirement Planning</h2>
              <p className="mb-6">
                The SECURE Act 2.0 creates new opportunities and considerations for retirement planning:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Review Your Contribution Strategy:</strong> Take advantage of higher catch-up limits if you're approaching 60</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Reassess RMD Planning:</strong> Delayed RMDs may change your tax and estate planning strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Consider Emergency Savings:</strong> New emergency savings options may complement your retirement strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Small Business Owners:</strong> Explore enhanced incentives for offering employee retirement benefits</span>
                </li>
              </ul>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Source: Wall Street Journal</p>
                <p className="text-sm text-gray-600 mt-2">Published: June 28, 2023</p>
                <p className="text-sm text-gray-600 mt-4">
                  <em>This analysis is based on publicly available information about the legislation. Consult with a financial advisor or tax professional for guidance on how these changes may affect your specific situation.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Optimize Your Retirement Strategy?"
        description="Our retirement planning experts can help you take advantage of the new SECURE Act 2.0 provisions and optimize your retirement savings strategy."
        buttonText="Schedule a Retirement Planning Consultation"
        buttonLink="/contact"
        backgroundClass="bg-green-900"
      />
    </div>
  );
}
