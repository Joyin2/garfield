'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function TaxStrategiesArticlePage() {
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
              <span className="text-gray-600">Tax-Efficient Investment Strategies</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Tax-Efficient Investment Strategies: Maximizing Your After-Tax Returns
              </span>
            </motion.h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">LT</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Lisa Thompson</p>
                  <p className="text-sm text-gray-600">Tax Planning Specialist</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">April 10, 2023</span>
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
                Maximize your after-tax returns with these proven investment approaches that help you keep more of what you earn while building long-term wealth.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Importance of Tax-Efficient Investing</h2>
              <p className="mb-6">
                Taxes can significantly erode your investment returns over time. The difference between a tax-efficient and tax-inefficient investment strategy can cost you hundreds of thousands of dollars over a lifetime of investing. Understanding how to minimize the tax impact on your investments is crucial for building long-term wealth.
              </p>
              <p className="mb-6">
                Tax-efficient investing isn't about avoiding taxes entirely—it's about legally minimizing them through strategic planning, proper account selection, and smart investment choices. The goal is to maximize your after-tax returns, which is what you actually get to keep and spend.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">The Cost of Tax Inefficiency:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Poor tax planning can reduce returns by 1-3% annually</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Over 30 years, this can cost hundreds of thousands in lost wealth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-income earners face the greatest tax drag on investments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tax-inefficient funds can trigger unnecessary capital gains</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Different Types of Investment Taxes</h2>
              <p className="mb-6">
                Before diving into strategies, it's important to understand how different types of investment income are taxed:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ordinary Income Tax</h3>
              <p className="mb-6">
                Interest from bonds, CDs, and savings accounts is taxed as ordinary income at your marginal tax rate, which can be as high as 37% for high earners, plus state taxes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Capital Gains Tax</h3>
              <p className="mb-6">
                Profits from selling investments are subject to capital gains tax. Short-term gains (assets held less than one year) are taxed as ordinary income, while long-term gains benefit from preferential rates of 0%, 15%, or 20%.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dividend Tax</h3>
              <p className="mb-6">
                Qualified dividends are taxed at the same preferential rates as long-term capital gains, while non-qualified dividends are taxed as ordinary income.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2023 Capital Gains Tax Rates:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>0% Rate:</strong> Single filers with income up to $44,625; Joint filers up to $89,250</li>
                  <li><strong>15% Rate:</strong> Single filers $44,626-$492,300; Joint filers $89,251-$553,850</li>
                  <li><strong>20% Rate:</strong> Single filers above $492,300; Joint filers above $553,850</li>
                  <li><strong>Additional:</strong> 3.8% Net Investment Income Tax may apply to high earners</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax-Advantaged Account Strategies</h2>
              <p className="mb-6">
                The foundation of tax-efficient investing is maximizing contributions to tax-advantaged accounts. These accounts provide immediate tax benefits and allow your investments to grow tax-deferred or tax-free.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">401(k) and Traditional IRAs</h3>
              <p className="mb-6">
                Traditional retirement accounts provide an immediate tax deduction and allow investments to grow tax-deferred. You'll pay taxes when you withdraw the money in retirement, ideally when you're in a lower tax bracket.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Roth IRAs and Roth 401(k)s</h3>
              <p className="mb-6">
                Roth accounts are funded with after-tax dollars but provide tax-free growth and tax-free withdrawals in retirement. They're particularly valuable for younger investors and those who expect to be in higher tax brackets in retirement.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Account Priority Strategy:</h4>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Contribute enough to 401(k) to get full employer match</li>
                  <li>Max out HSA contributions if eligible</li>
                  <li>Consider Roth IRA if income allows</li>
                  <li>Return to 401(k) to maximize contributions</li>
                  <li>Use taxable accounts for additional savings</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "The most powerful tax strategy is often the simplest: maximize contributions to tax-advantaged accounts before investing in taxable accounts. The tax savings compound over time and can add hundreds of thousands to your retirement wealth."
                  <footer className="mt-2 text-sm text-gray-600">— Robert Johnson, CPA and Financial Planner</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Asset Location Strategy</h2>
              <p className="mb-6">
                Asset location involves strategically placing different types of investments in the most tax-efficient accounts. This strategy can significantly improve your after-tax returns without changing your overall asset allocation.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Optimal Asset Location:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary-700 mb-2">Tax-Deferred Accounts (401k, Traditional IRA):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Bonds and bond funds</li>
                      <li>• REITs</li>
                      <li>• High-dividend stocks</li>
                      <li>• Actively managed funds</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary-700 mb-2">Tax-Free Accounts (Roth IRA, Roth 401k):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• High-growth stocks</li>
                      <li>• Small-cap and emerging market funds</li>
                      <li>• Assets with highest expected returns</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary-700 mb-2">Taxable Accounts:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Tax-efficient index funds</li>
                      <li>• Individual stocks (for tax-loss harvesting)</li>
                      <li>• Municipal bonds (for high earners)</li>
                      <li>• Foreign tax credit eligible funds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax-Loss Harvesting</h2>
              <p className="mb-6">
                Tax-loss harvesting involves selling investments at a loss to offset capital gains and reduce your tax liability. This strategy can be particularly effective in volatile markets and can save thousands in taxes annually.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Tax-Loss Harvesting Works</h3>
              <p className="mb-6">
                When you sell an investment for less than you paid, you realize a capital loss. These losses can offset capital gains dollar-for-dollar. If your losses exceed your gains, you can deduct up to $3,000 against ordinary income, with excess losses carried forward to future years.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Tax-Loss Harvesting Best Practices:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Harvest losses regularly, not just at year-end</li>
                  <li>• Be aware of the wash sale rule (30-day restriction)</li>
                  <li>• Consider the impact on your overall asset allocation</li>
                  <li>• Use similar but not identical replacement investments</li>
                  <li>• Keep detailed records for tax reporting</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Municipal Bonds for High Earners</h2>
              <p className="mb-6">
                Municipal bonds can be an excellent tax-efficient investment for high-income investors. The interest from most municipal bonds is exempt from federal taxes and may also be exempt from state taxes if you live in the issuing state.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculating Tax-Equivalent Yield</h3>
              <p className="mb-6">
                To compare municipal bonds with taxable bonds, calculate the tax-equivalent yield using this formula: Municipal Yield ÷ (1 - Tax Rate) = Tax-Equivalent Yield.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Example Tax-Equivalent Yields:</h4>
                <p className="text-sm text-gray-700 mb-3">For a 4% municipal bond yield:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 22% tax bracket: 5.13% tax-equivalent yield</li>
                  <li>• 32% tax bracket: 5.88% tax-equivalent yield</li>
                  <li>• 37% tax bracket: 6.35% tax-equivalent yield</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Index Fund Advantages</h2>
              <p className="mb-6">
                Index funds are inherently more tax-efficient than actively managed funds because they trade less frequently, generating fewer taxable events. This makes them ideal for taxable accounts.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "Index funds typically distribute far fewer capital gains than actively managed funds. Over time, this tax efficiency can add 0.5-1.5% annually to your after-tax returns."
                  <footer className="mt-2 text-sm text-gray-600">— John Bogle, Founder of Vanguard</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Strategies for High Net Worth Investors</h2>
              <p className="mb-6">
                Wealthy investors have access to additional tax-efficient strategies that can provide significant benefits:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donor-Advised Funds</h3>
              <p className="mb-6">
                Donor-advised funds allow you to make a charitable contribution, receive an immediate tax deduction, and then recommend grants to charities over time. Contributing appreciated securities avoids capital gains taxes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualified Small Business Stock (QSBS)</h3>
              <p className="mb-6">
                Section 1202 of the tax code allows investors to exclude up to $10 million or 10 times their basis in qualified small business stock from federal taxes when sold.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Tax-Efficiency Mistakes to Avoid</h2>
              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Mistakes That Cost You Money:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Holding tax-inefficient investments in taxable accounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ignoring the wash sale rule when tax-loss harvesting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Not maximizing tax-advantaged account contributions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Frequent trading that generates short-term capital gains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Failing to coordinate investment and tax planning</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Last Modified: April 10, 2023</p>
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
                  <span className="text-primary-600 font-semibold text-xl">LT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Lisa Thompson</h4>
                  <p className="text-gray-600 mb-4">
                    Lisa Thompson is a Tax Planning Specialist and CPA with over 18 years of experience helping high-net-worth individuals optimize their investment tax strategies. She holds advanced certifications in tax planning and has saved her clients millions in taxes through strategic planning and implementation of tax-efficient investment approaches.
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
        title="Want to Optimize Your Tax Strategy?"
        description="Our tax planning specialists can help you implement these strategies and potentially save thousands in taxes while building long-term wealth."
        buttonText="Schedule a Tax Planning Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}
