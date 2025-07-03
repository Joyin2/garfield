 'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InvestmentCalculator() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    monthlyContribution: '',
    expectedReturn: '',
    investmentPeriod: '',
    inflationRate: '',
  });

  const [result, setResult] = useState<{
    totalInvestment: number;
    totalReturn: number;
    finalAmount: number;
    realReturn: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    
    const {
      initialInvestment,
      monthlyContribution,
      expectedReturn,
      investmentPeriod,
      inflationRate
    } = formData;

    // Convert inputs to numbers
    const initialInvestmentNum = parseFloat(initialInvestment);
    const monthlyContributionNum = parseFloat(monthlyContribution);
    const expectedReturnNum = parseFloat(expectedReturn) / 100;
    const investmentPeriodNum = parseFloat(investmentPeriod);
    const inflationRateNum = parseFloat(inflationRate) / 100;

    // Calculate future value of initial investment
    const futureValueOfInitial = initialInvestmentNum * Math.pow(1 + expectedReturnNum, investmentPeriodNum);

    // Calculate future value of monthly contributions
    const monthlyRate = expectedReturnNum / 12;
    const numberOfPayments = investmentPeriodNum * 12;
    const futureValueOfContributions = monthlyContributionNum * 
      ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / monthlyRate);

    // Total final amount
    const finalAmount = futureValueOfInitial + futureValueOfContributions;

    // Calculate total investment
    const totalInvestment = initialInvestmentNum + (monthlyContributionNum * numberOfPayments);

    // Calculate total return
    const totalReturn = finalAmount - totalInvestment;

    // Calculate real return (adjusted for inflation)
    const realReturn = (finalAmount / Math.pow(1 + inflationRateNum, investmentPeriodNum)) - totalInvestment;

    setResult({
      totalInvestment,
      totalReturn,
      finalAmount,
      realReturn
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Investment Return Calculator
            </span>
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={calculateInvestment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Investment ($)
                  </label>
                  <input
                    type="number"
                    id="initialInvestment"
                    name="initialInvestment"
                    value={formData.initialInvestment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="monthlyContribution" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    id="monthlyContribution"
                    name="monthlyContribution"
                    value={formData.monthlyContribution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="expectedReturn" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    id="expectedReturn"
                    name="expectedReturn"
                    value={formData.expectedReturn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                    max="20"
                    step="0.1"
                  />
                </div>

                <div>
                  <label htmlFor="investmentPeriod" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    id="investmentPeriod"
                    name="investmentPeriod"
                    value={formData.investmentPeriod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="1"
                    max="50"
                  />
                </div>

                <div>
                  <label htmlFor="inflationRate" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Inflation Rate (%)
                  </label>
                  <input
                    type="number"
                    id="inflationRate"
                    name="inflationRate"
                    value={formData.inflationRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                    max="10"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Calculate
                </button>
              </div>
            </form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-primary-50 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Investment Projection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Investment</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.totalInvestment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Return</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Final Amount</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.finalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Real Return (Inflation Adjusted)</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.realReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Note: This is a simplified calculation and doesn't account for all factors. Past performance is not indicative of future results. Please consult with a financial advisor for investment advice.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}