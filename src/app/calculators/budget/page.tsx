'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BudgetPlanner() {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    housing: '',
    utilities: '',
    transportation: '',
    groceries: '',
    dining: '',
    entertainment: '',
    healthcare: '',
    savings: '',
    debt: '',
    other: '',
  });

  const [result, setResult] = useState<{
    totalExpenses: number;
    remainingIncome: number;
    savingsRate: number;
    debtToIncome: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBudget = (e: React.FormEvent) => {
    e.preventDefault();
    
    const {
      monthlyIncome,
      housing,
      utilities,
      transportation,
      groceries,
      dining,
      entertainment,
      healthcare,
      savings,
      debt,
      other
    } = formData;

    // Convert inputs to numbers
    const monthlyIncomeNum = parseFloat(monthlyIncome);
    const expenses = [
      parseFloat(housing),
      parseFloat(utilities),
      parseFloat(transportation),
      parseFloat(groceries),
      parseFloat(dining),
      parseFloat(entertainment),
      parseFloat(healthcare),
      parseFloat(debt),
      parseFloat(other)
    ];

    // Calculate total expenses
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);

    // Calculate remaining income
    const remainingIncome = monthlyIncomeNum - totalExpenses;

    // Calculate savings rate
    const savingsRate = (parseFloat(savings) / monthlyIncomeNum) * 100;

    // Calculate debt-to-income ratio
    const debtToIncome = (parseFloat(debt) / monthlyIncomeNum) * 100;

    setResult({
      totalExpenses,
      remainingIncome,
      savingsRate,
      debtToIncome
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
              Budget Planner
            </span>
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={calculateBudget} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Income ($)
                  </label>
                  <input
                    type="number"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="housing" className="block text-sm font-medium text-gray-700 mb-2">
                    Housing Expenses ($)
                  </label>
                  <input
                    type="number"
                    id="housing"
                    name="housing"
                    value={formData.housing}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="utilities" className="block text-sm font-medium text-gray-700 mb-2">
                    Utilities ($)
                  </label>
                  <input
                    type="number"
                    id="utilities"
                    name="utilities"
                    value={formData.utilities}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="transportation" className="block text-sm font-medium text-gray-700 mb-2">
                    Transportation ($)
                  </label>
                  <input
                    type="number"
                    id="transportation"
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="groceries" className="block text-sm font-medium text-gray-700 mb-2">
                    Groceries ($)
                  </label>
                  <input
                    type="number"
                    id="groceries"
                    name="groceries"
                    value={formData.groceries}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="dining" className="block text-sm font-medium text-gray-700 mb-2">
                    Dining Out ($)
                  </label>
                  <input
                    type="number"
                    id="dining"
                    name="dining"
                    value={formData.dining}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="entertainment" className="block text-sm font-medium text-gray-700 mb-2">
                    Entertainment ($)
                  </label>
                  <input
                    type="number"
                    id="entertainment"
                    name="entertainment"
                    value={formData.entertainment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="healthcare" className="block text-sm font-medium text-gray-700 mb-2">
                    Healthcare ($)
                  </label>
                  <input
                    type="number"
                    id="healthcare"
                    name="healthcare"
                    value={formData.healthcare}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="savings" className="block text-sm font-medium text-gray-700 mb-2">
                    Savings ($)
                  </label>
                  <input
                    type="number"
                    id="savings"
                    name="savings"
                    value={formData.savings}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="debt" className="block text-sm font-medium text-gray-700 mb-2">
                    Debt Payments ($)
                  </label>
                  <input
                    type="number"
                    id="debt"
                    name="debt"
                    value={formData.debt}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-2">
                    Other Expenses ($)
                  </label>
                  <input
                    type="number"
                    id="other"
                    name="other"
                    value={formData.other}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="0"
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
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Budget Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Expenses</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.totalExpenses.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Remaining Income</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      ${result.remainingIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Savings Rate</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      {result.savingsRate.toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Debt-to-Income Ratio</h3>
                    <p className="text-2xl font-bold text-primary-600">
                      {result.debtToIncome.toFixed(1)}%
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Note: This is a simplified budget calculation. Consider consulting with a financial advisor for personalized budgeting advice.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 