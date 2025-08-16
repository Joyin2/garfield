'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function EstatePlanningTrustsVsWillsBlogPage() {
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
              <span className="text-gray-600">Estate Planning Essentials</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-sm font-semibold bg-primary-600 text-white px-3 py-1 rounded-full">Estate Planning</span>
              <span className="text-sm text-gray-600 ml-4">June 15, 2025</span>
              <span className="text-sm text-gray-400 ml-2">• 12 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Estate Planning Essentials: Trusts vs. Wills — What's Right for You?
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Navigate the complex world of estate planning with our comprehensive guide comparing wills, trusts, and powers of attorney to protect your legacy.
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
                Estate planning should be as deliberate as your retirement plan—tailored, adaptable, and proactive. Yet many people find themselves overwhelmed by the various tools available and unsure which combination best serves their unique situation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Today, we'll break down the essential estate planning tools—Wills, Revocable Trusts, and Powers of Attorney—to help you make informed decisions about protecting your legacy and securing your family's future.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Understanding the Basics</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wills</h3>
              <p className="mb-6">
                A Will is a legal directive that outlines how to distribute your property, selects guardians for minor children, and names your executor. It's the foundation of most estate plans and serves several critical functions.
              </p>
              <p className="mb-6">
                However, it's important to understand that a Will must pass through probate, which can take months, involve court fees, and become public record. This process varies significantly by state and can impact both the timeline and cost of settling your estate.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revocable Trusts (Living Trusts)</h3>
              <p className="mb-6">
                A Revocable Trust allows you to transfer assets under its control while maintaining flexibility to revise terms during your lifetime. You can serve as the trustee, maintaining complete control over your assets while you're alive and capable.
              </p>
              <p className="mb-6">
                Key advantages include bypassing probate entirely, maintaining privacy, and potentially speeding up asset distribution across state lines. This makes trusts particularly valuable for individuals with property in multiple states or those who value privacy in their estate affairs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Durable Powers of Attorney (POA)</h3>
              <p className="mb-6">
                Financial POA grants someone you trust authority to manage your finances if you become incapacitated. This document is crucial for ensuring your financial affairs can continue without court intervention.
              </p>
              <p className="mb-8">
                An Advance Healthcare Directive names a healthcare decision-maker if you're unable to make medical decisions yourself. Both tools avoid court-appointed guardianship—providing critical continuity in times of crisis.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Pros & Cons: Quick Comparison</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Tool</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Pros</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Will</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Simple, cost-effective, appoints guardians and executors</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Probate delays & costs; public exposure</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Revocable Trust</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Probate avoidance; cross-state adaptability; privacy maintained</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">More complex and costly to set up; needs ongoing funding</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Durable POA & Healthcare Directive</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Allows trusted agent to act when you can't</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Risk of misuse if poorly chosen; less oversight</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Why It Matters for Nationwide Clients</h2>
              <p className="mb-6">
                At Garfield Financial, we work with clients across the country, and we've seen firsthand how state-specific laws can complicate estate planning. Here's what you need to know:
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>State Variations:</strong> Probate processes vary significantly from state to state; in some states, it can be lengthy and public, while others have simplified procedures.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Multi-State Property:</strong> Owning property across multiple states can complicate probate. A Revocable Trust, if properly funded and recognized in each jurisdiction, can simplify administration and avoid multiple probate proceedings.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Coordination Challenges:</strong> Beneficiary designations, joint ownership, and titling rules vary by state, making coordination crucial for asset transfer efficiency.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. What Clients Should Consider</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Estate Size & Asset Type</h3>
              <p className="mb-6">
                Smaller, modest estates might find a Will sufficient for their needs. However, larger or multi-state estates benefit more from a Trust for efficiency and streamlined administration.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Privacy Priorities</h3>
              <p className="mb-6">
                Wills become public record through probate; Trusts remain private, which can protect sensitive distributions or beneficiaries from public scrutiny.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Cost-Benefit Analysis</h3>
              <p className="mb-6">
                Trust setup involves higher upfront costs but may reduce long-term administrative burdens and legal disruptions, potentially saving money over time.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Flexibility Needs</h3>
              <p className="mb-6">
                Revocable Trusts can be changed anytime during your lifetime; Wills require probate to enforce updates, which can delay implementation of changes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Incapacity Preparedness</h3>
              <p className="mb-8">
                Durable POAs and healthcare directives ensure someone can act for you immediately during incapacity, without needing court intervention or delays.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. FAQs for Garfield Financial Readers</h2>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I use both a Will and a Trust?</h3>
                <p className="text-gray-700">
                  Absolutely. A "pour-over Will" ensures residual assets funnel into your Trust upon death. This combination provides comprehensive coverage for all your assets.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Does one state's Trust work in another?</h3>
                <p className="text-gray-700">
                  Yes—provided it's properly funded and structured, most states will honor it. However, it's important to work with an attorney familiar with multi-state issues.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">When should I update my documents?</h3>
                <p className="text-gray-700">
                  After major life events—marriage, divorce, births, relocations—or changes in estate tax rules. Regular reviews every 3-5 years are also recommended.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Planning for the Future: Action Steps</h2>

              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Your Estate Planning Checklist:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Evaluate your estate complexity:</strong> Property types, locations, liquidity, family dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Consult an experienced estate planning attorney:</strong> Ideally one licensed in the states relevant to your assets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Fund your Trust properly:</strong> Ensure assets are titled correctly to avoid probate traps</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Review and update regularly:</strong> Stay current with changing laws and life developments</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="mb-6">
                Estate planning should be as deliberate as your retirement plan—tailored, adaptable, and proactive. A combination of a Will, Revocable Trust, and durable authority documents builds a strong foundation for preserving your legacy, securing your family's future, and minimizing court involvement and expense.
              </p>
              <p className="mb-8">
                The key is finding the right combination for your unique situation. Whether you need the simplicity of a Will, the sophistication of a Trust, or a comprehensive approach that combines multiple tools, the important thing is to start the conversation and take action.
              </p>

              <div className="bg-primary-100 border-l-4 border-primary-500 p-6 mb-8">
                <p className="text-primary-800 font-medium mb-2">Ready to Take the Next Step?</p>
                <p className="text-primary-700">
                  At Garfield Financial, we work closely with experienced estate planning attorneys to ensure our clients have comprehensive plans that coordinate with their overall financial strategy. Don't leave your family's future to chance—let's discuss how proper estate planning can provide peace of mind and protect what matters most to you.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Published: June 15, 2025</p>
                    <p className="text-sm text-gray-600">Category: Estate Planning</p>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="/blogs" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      ← Back to Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Protect Your Legacy?"
        description="Our comprehensive estate planning guidance works hand-in-hand with your financial plan to ensure your family's future is secure."
        buttonText="Schedule an Estate Planning Consultation"
        buttonLink="/contact"
        backgroundClass="bg-primary-900"
      />
    </div>
  );
}
