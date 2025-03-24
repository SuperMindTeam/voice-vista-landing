
import React from 'react';

interface CostComparisonProps {
  currencySymbol?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({ currencySymbol = '₹' }) => {
  return (
    <div className="mx-auto my-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Cost Comparison</h3>
        <p className="text-lg text-gray-600">
          See how much you can save by switching to Shiv AI
        </p>
      </div>
      
      <div className="overflow-hidden rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="w-[30%] text-gray-600 font-medium py-3 px-4 text-left">Expense Category</th>
                <th className="w-[23%] text-gray-600 font-medium py-3 px-4 text-right">Traditional Staff</th>
                <th className="w-[23%] text-gray-600 font-medium py-3 px-4 text-right">AI Voice Agent</th>
                <th className="w-[24%] text-gray-600 font-medium py-3 px-4 text-right">Your Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left font-medium">Monthly Salary (per agent)</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}25,000</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}15,000</td>
                <td className="py-3 px-4 text-right font-medium text-green-600">{currencySymbol}10,000 (40%)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left font-medium">Office Space & Equipment</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}15,000</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}0</td>
                <td className="py-3 px-4 text-right font-medium text-green-600">{currencySymbol}15,000 (100%)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left font-medium">Management Overhead</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}700</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}0</td>
                <td className="py-3 px-4 text-right font-medium text-green-600">{currencySymbol}700 (100%)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left font-medium">Turnover Costs (averaged)</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}450</td>
                <td className="py-3 px-4 text-right font-medium">{currencySymbol}0</td>
                <td className="py-3 px-4 text-right font-medium text-green-600">{currencySymbol}450 (100%)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-4 text-left font-bold">Total Monthly Cost</td>
                <td className="py-3 px-4 text-right font-bold">{currencySymbol}41,150</td>
                <td className="py-3 px-4 text-right font-bold">{currencySymbol}15,000</td>
                <td className="py-3 px-4 text-right font-bold text-green-600">{currencySymbol}26,150 (64%)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-4 text-left font-bold">Annual Cost</td>
                <td className="py-3 px-4 text-right font-bold">{currencySymbol}493,800</td>
                <td className="py-3 px-4 text-right font-bold">{currencySymbol}180,000</td>
                <td className="py-3 px-4 text-right font-bold text-green-600">{currencySymbol}313,800 (64%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
