
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface CostComparisonProps {
  currencySymbol?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({ currencySymbol = '$' }) => {
  return (
    <div className="mx-auto my-12 bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Cost Comparison</h3>
        <p className="text-lg text-gray-600">
          See how much you can save by switching to Shiv AI
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Typical Employee Costs</TableHead>
              <TableHead className="text-right">Annual Cost</TableHead>
              <TableHead className="w-[40%]">Shiv AI Costs</TableHead>
              <TableHead className="text-right">Annual Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Salary</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}41,500</TableCell>
              <TableCell className="font-medium">Subscription</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}4,500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Benefits & Insurance</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}8,300</TableCell>
              <TableCell className="font-medium">Setup & Training</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}2,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Training</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}2,100</TableCell>
              <TableCell className="font-medium"></TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Office Space & Equipment</TableCell>
              <TableCell className="text-right font-semibold">{currencySymbol}3,600</TableCell>
              <TableCell className="font-medium"></TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
            <TableRow className="border-t-2 border-gray-300">
              <TableCell className="font-bold text-lg">Total Annual Cost</TableCell>
              <TableCell className="text-right text-xl font-bold">{currencySymbol}55,500</TableCell>
              <TableCell className="font-bold text-lg">Total Annual Cost</TableCell>
              <TableCell className="text-right text-xl font-bold">{currencySymbol}6,500</TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700">Annual Savings with Shiv AI:</p>
              <p className="text-green-600 text-3xl font-bold mt-2">{currencySymbol}49,000</p>
            </div>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
};

export default CostComparison;
