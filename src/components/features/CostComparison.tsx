
import React from 'react';
import { UserIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CostComparisonProps {
  currencySymbol?: string;
  isEurope?: boolean;
}

const CostComparison: React.FC<CostComparisonProps> = ({ 
  currencySymbol = '₹',
  isEurope = false 
}) => {
  // Different cost values based on region
  const monthlySalary = isEurope ? 90000 : 75000;
  const officeSpace = isEurope ? 10000 : 15000;
  const managementOverhead = isEurope ? 2000 : 700;
  const turnoverCosts = isEurope ? 500 : 450;
  const aiAgentCost = isEurope ? 89 : 15000;
  
  // Calculate totals
  const totalMonthlyCost = monthlySalary + officeSpace + managementOverhead + turnoverCosts;
  const annualCost = totalMonthlyCost * 12;
  const aiAnnualCost = aiAgentCost * 12;
  
  return (
    <div id="cost-comparison" className="mx-auto my-8">
      <div className="overflow-hidden rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#B8D393]">
                <th className="w-[35%] text-black font-medium py-3 px-3 text-left">Expense Category</th>
                <th className="w-[32.5%] text-black font-medium py-3 px-3 text-right">
                  Traditional Staff <UserIcon className="inline h-5 w-5 text-black mx-1" /> 3
                </th>
                <th className="w-[32.5%] text-black font-medium py-3 px-3 text-right">AI Voice Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Monthly Salary (for 3 people)</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}{monthlySalary.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}{aiAgentCost.toLocaleString()}</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Office Space & Equipment</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}{officeSpace.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Management Overhead</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}{managementOverhead.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Turnover Costs (averaged)</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}{turnoverCosts.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-3 text-left font-bold">Total Monthly Cost</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}{totalMonthlyCost.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}{aiAgentCost.toLocaleString()}</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-3 text-left font-bold">Annual Cost</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}{annualCost.toLocaleString()}</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}{aiAnnualCost.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
