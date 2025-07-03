'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RetirementCalculator() {
  const [formData, setFormData] = useState({
    currentAge: '',
    retirementAge: '',
    currentSavings: '',
    monthlyContribution: '',
    expectedReturn: '',
    inflationRate: '',
  });

  const [result, setResult] = useState<{
    totalSavings: number;
    monthlyIncome: number;
    yearsOfIncome: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateRetirement = (e: React.FormEvent) => {
    e.preventDefault();
    
    const {
      currentAge,
      retirementAge,
      currentSavings,
      monthlyContribution,
      expectedReturn,
      inflationRate
    } = formData;

    // Convert inputs to numbers
    const currentAgeNum = parseFloat(currentAge);
    const retirementAgeNum = parseFloat(retirementAge);
    const currentSavingsNum = parseFloat(currentSavings);
    const monthlyContributionNum = parseFloat(monthlyContribution);
    const expectedReturnNum = parseFloat(expectedReturn) / 100;
    const inflationRateNum = parseFloat(inflationRate) / 100;

    // Calculate years until retirement
    const yearsUntilRetirement = retirementAgeNum - currentAgeNum;

    // Calculate future value of current savings
    const futureValueOfCurrentSavings = currentSavingsNum * Math.pow(1 + expectedReturnNum, yearsUntilRetirement);

    // Calculate future value of monthly contributions
    const monthlyRate = expectedReturnNum / 12;
    const numberOfPayments = yearsUntilRetirement * 12;
    const futureValueOfContributions = monthlyContributionNum * 
      ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / monthlyRate);

    // Total savings at retirement
    const totalSavings = futureValueOfCurrentSavings + futureValueOfContributions;

    // Calculate monthly income (assuming 4% withdrawal rate)
    const withdrawalRate = 0.04;
    const annualIncome = totalSavings * withdrawalRate;
    const monthlyIncome = annualIncome / 12;

    // Calculate years of income (assuming 30 years of retirement)
    const yearsOfIncome = 30;

    setResult({
      totalSavings,
      monthlyIncome,
      yearsOfIncome
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
              Retirement Calculator
            </span>
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={calculateRetirement} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentAge" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Age
                  </label>
                  <input
                    type="number"
                    id="currentAge"
                    name="currentAge"
                    value={formData.currentAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="18"
                    max="100"
                  />
                </div>

                <div>
                  <label htmlFor="retirementAge" className="block text-sm font-medium text-gray-700 mb-2">
                    Retirement Age
                  </label>
                  <input
                    type="number"
                    id="retirementAge"
                    name="retirementAge"
                    value={formData.retirementAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="45"
                    max="85"
                  />
                </div>

                <div>
                  <label htmlFor="currentSavings" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Savings ($)
                  </label>
                  <input
                    type="number"
                    id="currentSavings"
                    name="currentSavings"
                    value={formData.currentSavings}
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
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Retirement Projection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Savings at Retirement</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Monthly Income</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.monthlyIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Years of Income</h3>
                    <p className="text-2xl font-bold text-primary-600">{result.yearsOfIncome}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Note: This is a simplified calculation and doesn't account for all factors. Please consult with a financial advisor for a comprehensive retirement plan.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 