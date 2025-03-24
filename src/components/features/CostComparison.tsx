
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
      <Table>
        <TableCaption>
          <p className="text-lg font-medium">
            Savings with Shiv AI: <span className="text-green-500 text-3xl font-bold">{currencySymbol}49,000</span>
          </p>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%] text-xl">Typical Employee Costs</TableHead>
            <TableHead className="text-right text-xl">Shiv AI Costs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Salary</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}41,500</TableCell>
            <TableCell className="font-medium">Subscription</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}4,500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Benefits & Insurance</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}8,300</TableCell>
            <TableCell className="font-medium">Setup & Training</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}2,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Training</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}2,100</TableCell>
            <TableCell className="font-medium"></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Office Space & Equipment</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}3,600</TableCell>
            <TableCell className="font-medium"></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
          <TableRow className="font-bold">
            <TableCell className="font-semibold text-lg">Total Annual Cost</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}55,500</TableCell>
            <TableCell className="font-semibold text-lg">Total Annual Cost</TableCell>
            <TableCell className="text-right text-2xl font-semibold">{currencySymbol}6,500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CostComparison;
