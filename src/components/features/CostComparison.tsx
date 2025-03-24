import React from 'react';

interface CostComparisonProps {
  currencySymbol?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({ currencySymbol = '$' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Typical Employee Costs
        </h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Salary</span>
            <span className="text-2xl font-semibold">{currencySymbol}41,500</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Benefits & Insurance</span>
            <span className="text-2xl font-semibold">{currencySymbol}8,300</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Training</span>
            <span className="text-2xl font-semibold">{currencySymbol}2,100</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Office Space & Equipment</span>
            <span className="text-2xl font-semibold">{currencySymbol}3,600</span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Total Annual Cost</span>
            <span className="text-2xl font-semibold">{currencySymbol}55,500</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Shiv AI Costs
        </h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Subscription</span>
            <span className="text-2xl font-semibold">{currencySymbol}4,500</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Setup & Training</span>
            <span className="text-2xl font-semibold">{currencySymbol}2,000</span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Total Annual Cost</span>
            <span className="text-2xl font-semibold">{currencySymbol}6,500</span>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-lg font-medium">
            Savings with Shiv AI: <span className="text-green-500 text-3xl font-bold">{currencySymbol}49,000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
