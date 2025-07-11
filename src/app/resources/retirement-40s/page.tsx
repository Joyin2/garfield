'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function Retirement40sArticlePage() {
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
              <span className="text-gray-600">Retirement Planning in Your 40s</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Retirement Planning in Your 40s: Maximizing Your Peak Earning Years
              </span>
            </motion.h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">DR</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">David Rodriguez</p>
                  <p className="text-sm text-gray-600">Certified Financial Planner</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">May 22, 2023</span>
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
                Key strategies to accelerate your retirement savings during your peak earning years and position yourself for financial independence.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your 40s Are Critical for Retirement Planning</h2>
              <p className="mb-6">
                Your 40s represent a unique window of opportunity for retirement planning. This decade typically brings peak earning potential, increased financial stability, and enough time remaining to benefit from compound growth. However, it's also when many people face competing financial priorities like children's education costs and caring for aging parents.
              </p>
              <p className="mb-6">
                The decisions you make in your 40s can dramatically impact your retirement readiness. With roughly 20-25 years until retirement, you still have significant time to build wealth, but not enough to recover from major financial mistakes.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Key Advantages of Planning in Your 40s:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Peak Earning Years:</strong> Typically your highest income decade</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Compound Growth:</strong> 20+ years for investments to grow</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Catch-Up Contributions:</strong> Eligible for higher contribution limits at age 50</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Financial Clarity:</strong> Better understanding of lifestyle and retirement goals</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Retirement Savings Benchmarks for Your 40s</h2>
              <p className="mb-6">
                Financial experts generally recommend having specific savings milestones by certain ages. These benchmarks can help you assess whether you're on track for retirement:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Recommended Savings Benchmarks:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Age 40:</strong> 3x your annual salary saved for retirement</li>
                  <li><strong>Age 45:</strong> 4x your annual salary saved for retirement</li>
                  <li><strong>Age 50:</strong> 6x your annual salary saved for retirement</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  *These are general guidelines. Your specific needs may vary based on your retirement goals, expected Social Security benefits, and other factors.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maximizing Retirement Account Contributions</h2>
              <p className="mb-6">
                Your 40s are the perfect time to maximize contributions to tax-advantaged retirement accounts. These accounts offer significant tax benefits and should be prioritized in your savings strategy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">401(k) and 403(b) Plans</h3>
              <p className="mb-6">
                If your employer offers a 401(k) or 403(b) plan, this should typically be your first priority, especially if there's an employer match. For 2023, you can contribute up to $22,500, and if you're 50 or older, you can make an additional $7,500 catch-up contribution.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">401(k) Strategy Tips:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Always contribute enough to get the full employer match</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Increase contributions by 1-2% annually or with each raise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Consider Roth 401(k) options if available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Review and rebalance your investment options annually</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Retirement Accounts (IRAs)</h3>
              <p className="mb-6">
                IRAs offer additional tax-advantaged savings opportunities. For 2023, you can contribute up to $6,500 to an IRA, or $7,500 if you're 50 or older. Choose between traditional and Roth IRAs based on your current and expected future tax situation.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "The power of compound interest is most pronounced when you have time on your side. Starting aggressive savings in your 40s can still result in substantial retirement wealth, but every year you delay makes the goal more challenging."
                  <footer className="mt-2 text-sm text-gray-600">— Jennifer Martinez, CFP at Fidelity Investments</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Competing Financial Priorities</h2>
              <p className="mb-6">
                One of the biggest challenges in your 40s is balancing retirement savings with other financial goals. Many people in this age group face the "sandwich generation" dilemma of supporting both children and aging parents.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">College Funding vs. Retirement Savings</h3>
              <p className="mb-6">
                While it's natural to want to help your children with college expenses, remember that you can borrow for college, but you can't borrow for retirement. Financial advisors generally recommend prioritizing retirement savings while still contributing to education savings when possible.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Balancing Education and Retirement Savings:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maximize employer 401(k) match first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contribute to 529 education savings plans for tax advantages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Consider Roth IRAs, which can be used for education expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Explore scholarships, grants, and affordable college options</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Strategy for Your 40s</h2>
              <p className="mb-6">
                Your investment strategy in your 40s should balance growth potential with increasing attention to risk management. You still have time to recover from market downturns, but you should begin gradually shifting toward a more conservative allocation as you approach retirement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asset Allocation Guidelines</h3>
              <p className="mb-6">
                A common rule of thumb is to subtract your age from 100 to determine your stock allocation. For someone who is 45, this would suggest a 55% stock allocation. However, with longer life expectancies and low interest rates, many advisors now recommend more aggressive allocations.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Sample Asset Allocation for 40s:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Early 40s:</strong> 70-80% stocks, 20-30% bonds</li>
                  <li><strong>Late 40s:</strong> 60-70% stocks, 30-40% bonds</li>
                  <li><strong>Within stocks:</strong> Mix of domestic and international, large and small-cap</li>
                  <li><strong>Consider:</strong> Real estate investment trusts (REITs) for diversification</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Catch-Up Contributions: Your Secret Weapon</h2>
              <p className="mb-6">
                Once you turn 50, you become eligible for catch-up contributions, which allow you to save significantly more in tax-advantaged accounts. This is a powerful tool for accelerating your retirement savings in the final stretch before retirement.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">2023 Catch-Up Contribution Limits (Age 50+):</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>401(k):</strong> Additional $7,500 (total $30,000)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>IRA:</strong> Additional $1,000 (total $7,500)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>HSA:</strong> Additional $1,000 (total $4,850 for individuals)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't Forget About Healthcare Costs</h2>
              <p className="mb-6">
                Healthcare expenses are one of the largest and most unpredictable costs in retirement. Fidelity estimates that a 65-year-old couple retiring in 2023 will need approximately $315,000 to cover healthcare costs throughout retirement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Savings Accounts (HSAs)</h3>
              <p className="mb-6">
                If you have access to a high-deductible health plan, consider maximizing contributions to an HSA. HSAs offer triple tax benefits: deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "HSAs are the most tax-advantaged accounts available. After age 65, you can withdraw funds for any purpose without penalty, making them excellent retirement savings vehicles."
                  <footer className="mt-2 text-sm text-gray-600">— Dr. William Bernstein, Author of "The Four Pillars of Investing"</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Creating Your Action Plan</h2>
              <p className="mb-6">
                Success in retirement planning requires a systematic approach. Here's a step-by-step action plan for optimizing your retirement savings in your 40s:
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Your 40s Retirement Planning Checklist:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Calculate your retirement savings benchmark and assess your current progress</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximize employer 401(k) match and increase contributions annually</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open and fund an IRA if you don't have one</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Review and optimize your investment allocation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Consider HSA contributions if eligible</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plan for catch-up contributions starting at age 50</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Meet with a financial advisor to create a comprehensive plan</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Last Modified: May 22, 2023</p>
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
                  <span className="text-primary-600 font-semibold text-xl">DR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">David Rodriguez</h4>
                  <p className="text-gray-600 mb-4">
                    David Rodriguez is a Certified Financial Planner with over 12 years of experience helping clients in their 40s and 50s optimize their retirement planning strategies. He specializes in comprehensive financial planning for high-earning professionals and has helped hundreds of families navigate the complex financial decisions of their peak earning years.
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
        title="Ready to Optimize Your Retirement Strategy?"
        description="Our experienced advisors can help you create a personalized retirement plan that maximizes your peak earning years and sets you up for financial independence."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}
