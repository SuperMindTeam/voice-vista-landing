
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
}

const CostComparison: React.FC<CostComparisonProps> = ({ currencySymbol = '₹' }) => {
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
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}75,000</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}15,000</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Office Space & Equipment</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}15,000</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Management Overhead</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}700</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-3 text-left font-medium">Turnover Costs (averaged)</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}450</td>
                <td className="py-3 px-3 text-right font-medium">{currencySymbol}0</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-3 text-left font-bold">Total Monthly Cost</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}41,150</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}15,000</td>
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="py-3 px-3 text-left font-bold">Annual Cost</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}493,800</td>
                <td className="py-3 px-3 text-right font-bold">{currencySymbol}180,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
