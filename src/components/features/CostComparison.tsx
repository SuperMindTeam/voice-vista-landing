
import React, { useRef, useEffect } from 'react';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CostComparisonItem {
  expense: string;
  traditional: string;
  ai: string;
  savings: string;
}

const CostComparison = () => {
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (comparisonRef.current) {
      observer.observe(comparisonRef.current);
    }
    
    return () => {
      if (comparisonRef.current) {
        observer.unobserve(comparisonRef.current);
      }
    };
  }, []);

  const costComparisonData: CostComparisonItem[] = [
    { 
      expense: "Monthly Salary (per agent)", 
      traditional: "$3,500", 
      ai: "$299",
      savings: "$3,201 (91%)"
    },
    { 
      expense: "Training Costs", 
      traditional: "$1,200", 
      ai: "$0",
      savings: "$1,200 (100%)"
    },
    { 
      expense: "Benefits & Insurance", 
      traditional: "$1,050", 
      ai: "$0",
      savings: "$1,050 (100%)"
    },
    { 
      expense: "Office Space & Equipment", 
      traditional: "$800", 
      ai: "$0",
      savings: "$800 (100%)"
    },
    { 
      expense: "Management Overhead", 
      traditional: "$700", 
      ai: "$0",
      savings: "$700 (100%)"
    },
    { 
      expense: "Turnover Costs (averaged)", 
      traditional: "$450", 
      ai: "$0",
      savings: "$450 (100%)"
    },
    { 
      expense: "Total Monthly Cost", 
      traditional: "$7,700", 
      ai: "$299",
      savings: "$7,401 (96%)"
    },
    { 
      expense: "Annual Cost", 
      traditional: "$92,400", 
      ai: "$3,588",
      savings: "$88,812 (96%)"
    }
  ];

  return (
    <div 
      ref={comparisonRef}
      className="text-center max-w-4xl mx-auto transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-3">
        <span className="text-xs font-medium">Cost Efficiency</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
        How Much Can You Save?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Compare the costs of traditional call center staff versus our AI voice agent solution.
      </p>
      
      <div className="glass rounded-xl overflow-hidden shadow-md mb-12">
        <Table>
          <TableCaption>
            Cost comparison based on industry average figures for a single agent.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="w-[250px] font-semibold">Expense Category</TableHead>
              <TableHead className="text-right font-semibold">Traditional Staff</TableHead>
              <TableHead className="text-right font-semibold">AI Voice Agent</TableHead>
              <TableHead className="text-right font-semibold">Your Savings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {costComparisonData.map((item, index) => (
              <TableRow key={index} className={index === costComparisonData.length - 1 || index === costComparisonData.length - 2 ? "bg-blue-50 font-medium" : ""}>
                <TableCell className="font-medium">{item.expense}</TableCell>
                <TableCell className="text-right">{item.traditional}</TableCell>
                <TableCell className="text-right">{item.ai}</TableCell>
                <TableCell className="text-right text-green-600">{item.savings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <p className="text-lg text-gray-700">
        Save over <span className="font-semibold text-blue-600">$88,000 per year</span> for each agent you replace with our AI solution, 
        while maintaining exceptional customer service quality 24/7.
      </p>
    </div>
  );
};

export default CostComparison;
