'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function EstatePlanningArticlePage() {
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
              <span className="text-gray-600">Estate Planning Essentials</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Estate Planning Essentials: Protecting Your Legacy
              </span>
            </motion.h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">RW</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Rebecca Williams</p>
                  <p className="text-sm text-gray-600">Estate Planning Attorney</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">March 5, 2023</span>
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
                Protect your legacy and ensure your assets are distributed according to your wishes with comprehensive estate planning strategies that provide peace of mind for you and your loved ones.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Estate Planning Matters</h2>
              <p className="mb-6">
                Estate planning is not just for the wealthy—it's essential for anyone who wants to ensure their assets are distributed according to their wishes and their loved ones are protected. Without proper planning, state laws will determine how your assets are distributed, which may not align with your intentions.
              </p>
              <p className="mb-6">
                Beyond asset distribution, estate planning addresses critical issues like guardianship for minor children, healthcare decisions if you become incapacitated, and minimizing taxes and legal fees for your beneficiaries. It's about creating a comprehensive plan that protects your family and preserves your legacy.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Consequences of Not Having an Estate Plan:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>State laws determine asset distribution, not your wishes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Lengthy and expensive probate process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Court-appointed guardians for minor children</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Higher taxes and legal fees for beneficiaries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Family conflicts and disputes over assets</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Estate Planning Documents</h2>
              <p className="mb-6">
                A comprehensive estate plan typically includes several key documents, each serving a specific purpose in protecting your interests and those of your beneficiaries.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Last Will and Testament</h3>
              <p className="mb-6">
                Your will is the foundation of your estate plan. It specifies how your assets should be distributed, names guardians for minor children, and designates an executor to manage your estate. Without a will, state intestacy laws determine these critical decisions.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Elements of a Will:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Asset distribution instructions</li>
                  <li>• Guardian nominations for minor children</li>
                  <li>• Executor appointment</li>
                  <li>• Specific bequests and charitable gifts</li>
                  <li>• Instructions for digital assets</li>
                  <li>• Pet care provisions</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revocable Living Trust</h3>
              <p className="mb-6">
                A revocable living trust allows you to transfer ownership of assets to the trust while maintaining control during your lifetime. Upon your death, assets pass directly to beneficiaries without going through probate, providing privacy and potentially reducing costs and delays.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Benefits of a Living Trust:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Avoids probate for trust assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provides privacy (not public record)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Allows for incapacity planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Can reduce estate settlement costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provides flexibility for asset management</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power of Attorney Documents</h3>
              <p className="mb-6">
                Power of attorney documents authorize someone to act on your behalf if you become incapacitated. You'll need both financial and healthcare powers of attorney to ensure all aspects of your life are covered.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3">Financial Power of Attorney</h4>
              <p className="mb-6">
                This document allows your chosen agent to manage your financial affairs, including paying bills, managing investments, and handling tax matters. Choose someone you trust completely, as they'll have broad authority over your finances.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare Power of Attorney</h4>
              <p className="mb-6">
                Also known as a healthcare proxy, this document designates someone to make medical decisions on your behalf if you're unable to do so. This person should understand your values and wishes regarding medical care.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advance Healthcare Directive (Living Will)</h3>
              <p className="mb-6">
                An advance directive outlines your preferences for medical treatment in specific situations, particularly end-of-life care. This document provides guidance to your healthcare agent and medical providers about your wishes.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                  "Estate planning is not about death—it's about life. It's about ensuring that your values, your wishes, and your love for your family continue even when you're not there to express them personally."
                  <footer className="mt-2 text-sm text-gray-600">— Rebecca Williams, Estate Planning Attorney</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficiary Designations: Often Overlooked but Critical</h2>
              <p className="mb-6">
                Many assets pass to beneficiaries outside of your will through beneficiary designations. These include retirement accounts, life insurance policies, and bank accounts with payable-on-death provisions. It's crucial to keep these designations current and coordinated with your overall estate plan.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Assets with Beneficiary Designations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>401(k) and 403(b) retirement plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Traditional and Roth IRAs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Life insurance policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Bank accounts (POD/TOD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Investment accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Annuities</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Beneficiary Designation Mistakes</h3>
              <p className="mb-6">
                Failing to update beneficiary designations after major life events is one of the most common estate planning mistakes. These designations typically override your will, so outdated information can have serious consequences.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">When to Update Beneficiary Designations:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Marriage or divorce</li>
                  <li>• Birth or adoption of children</li>
                  <li>• Death of a beneficiary</li>
                  <li>• Significant changes in relationships</li>
                  <li>• Major changes in financial circumstances</li>
                  <li>• At least every 3-5 years as a general review</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Estate Tax Planning</h2>
              <p className="mb-6">
                While most estates won't owe federal estate taxes due to the high exemption amount ($12.92 million per person in 2023), some states have lower thresholds. Additionally, the federal exemption is scheduled to decrease significantly in 2026 unless Congress acts.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Federal Estate Tax Exemption</h3>
              <p className="mb-6">
                The federal estate tax exemption for 2023 is $12.92 million per person, with a top tax rate of 40%. Married couples can effectively combine their exemptions for a total of $25.84 million. However, this exemption is set to decrease to approximately $6 million per person in 2026.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">State Estate Taxes</h3>
              <p className="mb-6">
                Several states impose their own estate or inheritance taxes with much lower exemption amounts. If you live in one of these states, estate tax planning may be necessary even if your estate is below the federal threshold.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust Strategies for Advanced Planning</h2>
              <p className="mb-6">
                Beyond basic revocable trusts, various specialized trusts can provide additional benefits for estate planning, tax reduction, and asset protection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Irrevocable Life Insurance Trust (ILIT)</h3>
              <p className="mb-6">
                An ILIT owns life insurance policies outside of your estate, potentially saving significant estate taxes while providing liquidity for your beneficiaries. This strategy is particularly valuable for larger estates.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Charitable Remainder Trust (CRT)</h3>
              <p className="mb-6">
                A CRT allows you to donate assets to charity while retaining an income stream for life. This strategy can provide significant tax benefits while supporting causes you care about.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Considerations for Business Owners</h2>
              <p className="mb-6">
                Business owners face unique estate planning challenges, including business valuation, succession planning, and liquidity concerns. Proper planning can ensure business continuity while minimizing tax consequences.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-primary-800 mb-3">Business Estate Planning Strategies:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Buy-sell agreements with partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Key person life insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Grantor Retained Annuity Trusts (GRATs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Family Limited Partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Employee Stock Ownership Plans (ESOPs)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Creating Your Estate Planning Action Plan</h2>
              <p className="mb-6">
                Estate planning is not a one-time event but an ongoing process that should be reviewed and updated regularly. Here's a step-by-step approach to getting started:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Estate Planning Checklist:</h4>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Inventory your assets and debts</li>
                  <li>Identify your goals and priorities</li>
                  <li>Choose guardians for minor children</li>
                  <li>Select trustees and agents for various roles</li>
                  <li>Review and update beneficiary designations</li>
                  <li>Draft essential documents (will, trusts, powers of attorney)</li>
                  <li>Consider life insurance needs</li>
                  <li>Plan for business succession if applicable</li>
                  <li>Communicate your plan to family members</li>
                  <li>Review and update your plan regularly</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Professional Help</h2>
              <p className="mb-6">
                While simple estate planning documents can sometimes be prepared using online tools, complex situations require professional guidance. Consider working with an estate planning attorney if you have:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Significant assets or complex financial situations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business ownership or professional practice</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blended families or complex family dynamics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Charitable giving goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Potential estate tax liability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special needs family members</span>
                </li>
              </ul>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-sm text-gray-600">Last Modified: March 5, 2023</p>
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
                  <span className="text-primary-600 font-semibold text-xl">RW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Rebecca Williams</h4>
                  <p className="text-gray-600 mb-4">
                    Rebecca Williams is an Estate Planning Attorney with over 20 years of experience helping families protect their legacies through comprehensive estate planning. She specializes in complex estate planning for high-net-worth individuals and business owners, and has helped thousands of families create plans that provide security and peace of mind.
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
        title="Ready to Protect Your Legacy?"
        description="Our estate planning specialists can help you create a comprehensive plan that protects your family and ensures your wishes are carried out."
        buttonText="Schedule an Estate Planning Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}
