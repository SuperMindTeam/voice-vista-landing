
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface CostComparisonProps {
  currencySymbol?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({ currencySymbol = '₹' }) => {
  return (
    <div className="mx-auto my-12">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Cost Comparison</h3>
        <p className="text-lg text-gray-600">
          See how much you can save by switching to Shiv AI
        </p>
      </div>
      
      <div className="overflow-hidden rounded-lg shadow-md">
        <Table className="w-full">
          <TableHeader className="bg-gray-900">
            <TableRow className="border-none">
              <TableHead className="w-[40%] text-gray-300 font-medium py-4 pl-8">Expense Category</TableHead>
              <TableHead className="text-right text-gray-300 font-medium py-4 pr-8">Traditional Staff</TableHead>
              <TableHead className="text-right text-gray-300 font-medium py-4 pr-8">AI Voice Agent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-[#121212] border-t border-gray-800">
              <TableCell className="font-medium text-white py-5 pl-8">Monthly Salary (per agent)</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}25,000</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}15,000</TableCell>
            </TableRow>
            <TableRow className="bg-[#121212] border-t border-gray-800">
              <TableCell className="font-medium text-white py-5 pl-8">Office Space & Equipment</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}15,000</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}0</TableCell>
            </TableRow>
            <TableRow className="bg-[#121212] border-t border-gray-800">
              <TableCell className="font-medium text-white py-5 pl-8">Management Overhead</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}700</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}0</TableCell>
            </TableRow>
            <TableRow className="bg-[#121212] border-t border-gray-800">
              <TableCell className="font-medium text-white py-5 pl-8">Turnover Costs (averaged)</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}450</TableCell>
              <TableCell className="text-right font-semibold text-white pr-8">{currencySymbol}0</TableCell>
            </TableRow>
            <TableRow className="bg-[#1a1f2c] border-t border-gray-700">
              <TableCell className="font-bold text-white py-5 pl-8">Total Monthly Cost</TableCell>
              <TableCell className="text-right font-bold text-white pr-8">{currencySymbol}41,150</TableCell>
              <TableCell className="text-right font-bold text-white pr-8">{currencySymbol}15,000</TableCell>
            </TableRow>
            <TableRow className="bg-[#181b24] border-t border-gray-600">
              <TableCell className="font-bold text-white py-5 pl-8">Annual Cost</TableCell>
              <TableCell className="text-right font-bold text-white pr-8">{currencySymbol}493,800</TableCell>
              <TableCell className="text-right font-bold text-white pr-8">{currencySymbol}180,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-lg text-gray-700">Annual Savings with Shiv AI:</p>
        <p className="text-green-600 text-3xl font-bold mt-2">{currencySymbol}313,800</p>
      </div>
    </div>
  );
};

export default CostComparison;
