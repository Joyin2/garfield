'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function RetirementPlanningMistakes() {
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
              <Link href="/blogs" className="text-primary-600 hover:text-primary-700">
                Blogs
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">5 Common Retirement Planning Mistakes</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-sm font-semibold bg-primary-600 text-white px-3 py-1 rounded-full">Retirement Planning</span>
              <span className="text-sm text-gray-600 ml-4">July 9, 2025</span>
              <span className="text-sm text-gray-400 ml-2">• 8 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              5 Common Retirement Planning Mistakes — And How to Avoid Them
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Retirement isn't a finish line — it's a new beginning. But how you prepare for it can make all the difference between financial confidence and costly surprises.
            </p>

            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">JG</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Garfield</p>
                  <p className="text-sm text-gray-600">Financial Advisor & Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Garfield Financial, we've spent over 30 years helping individuals and families retire with clarity and control. Along the way, we've seen some consistent missteps that can derail even the best intentions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Here are five common retirement planning mistakes — and how you can avoid them.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Underestimating How Long Retirement Will Last</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">The Mistake:</p>
                <p className="text-red-700">Many people still plan as if retirement lasts 10–15 years. But today, it's not uncommon to spend 25–30 years in retirement — or more.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">Why It Matters:</p>
                <p className="text-yellow-700">Outliving your savings is one of the top financial fears of retirees. If your plan only covers the first half of retirement, what happens in the second?</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-green-800 font-medium mb-2">What to Do Instead:</p>
                <p className="text-green-700">Work with a financial professional to build an income strategy that's designed to last a lifetime. At Garfield Financial, we use tools like guaranteed income products, tax-smart withdrawals, and inflation-adjusted planning to help ensure your money outlasts your retirement.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Claiming Social Security Too Early</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">The Mistake:</p>
                <p className="text-red-700">Many people claim Social Security at age 62 — the earliest eligible age — without understanding the long-term impact.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">Why It Matters:</p>
                <p className="text-yellow-700">Claiming early locks in a reduced monthly benefit for life. Waiting until full retirement age (or beyond) could increase your lifetime income by tens of thousands of dollars.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-green-800 font-medium mb-2">What to Do Instead:</p>
                <p className="text-green-700">Consider your full retirement age, health outlook, and other income sources before deciding when to claim. We help clients model different scenarios to determine the optimal timing for their goals and lifestyle.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Ignoring Healthcare and Long-Term Care Costs</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">The Mistake:</p>
                <p className="text-red-700">Many retirees believe Medicare will cover all their health needs — but it doesn't. And most people don't plan for long-term care at all.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">Why It Matters:</p>
                <p className="text-yellow-700">Healthcare can easily exceed $300,000 per couple in retirement. Long-term care costs can reach $100,000+ per year and quickly drain a nest egg.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-green-800 font-medium mb-2">What to Do Instead:</p>
                <p className="text-green-700">Explore strategies such as long-term care insurance, hybrid policies, or health savings accounts (HSAs) as part of your plan. We help you anticipate and plan for healthcare costs before they become a crisis.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Not Accounting for Taxes in Retirement</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">The Mistake:</p>
                <p className="text-red-700">Many retirees assume their taxes will be lower — only to be surprised by taxable Social Security, required minimum distributions (RMDs), and more.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">Why It Matters:</p>
                <p className="text-yellow-700">Without proactive planning, you could lose a significant portion of your retirement income to taxes.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-green-800 font-medium mb-2">What to Do Instead:</p>
                <p className="text-green-700">We work with a network of tax professionals to help clients structure withdrawals, convert IRAs to Roths, and sequence income sources in a way that keeps taxes as low as legally possible.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Taking a "Set It and Forget It" Approach</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">The Mistake:</p>
                <p className="text-red-700">Retirement is not a one-time event — but many people treat it that way, failing to adjust their strategy over time.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">Why It Matters:</p>
                <p className="text-yellow-700">Life, markets, tax laws, and health needs all change. If your plan doesn't evolve with them, you could fall behind.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-green-800 font-medium mb-2">What to Do Instead:</p>
                <p className="text-green-700">Schedule regular reviews with your advisor to revisit your plan, rebalance your investments, and adjust as needed. At Garfield Financial, we believe retirement planning is an ongoing relationship, not a one-time transaction.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Bottom Line</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Retirement is too important to leave to chance — and too complex to tackle alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Avoiding these five mistakes can significantly improve your odds of retiring securely and living confidently. And the good news? You don't have to do it by yourself.
              </p>

              <div className="bg-primary-50 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a complimentary consultation with Garfield Financial today</h3>
                <p className="text-gray-700 mb-6">
                  Let's build a retirement strategy that's smart, flexible, and built around your life.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">Call <strong>203-913-3279</strong></span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Located in <strong>Norwalk, CT</strong></span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="text-gray-700">Book your retirement review at <strong>www.garfieldfinancial.com</strong></span>
                  </div>
                </div>
                <Link href="/contact" className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Schedule Your Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
