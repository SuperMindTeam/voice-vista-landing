
import React from 'react';
import { 
  ZapIcon, 
  PlusCircleIcon, 
  ShieldCheckIcon, 
  HeadphonesIcon,
} from 'lucide-react';

export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  exampleQuestions: string[];
  greeting: string;
  color: string;
  gradient: string;
}

export const useCases: UseCase[] = [
  {
    id: "electricity",
    title: "Electricity Sales Inquiry",
    description: "Speak with our AI agent about our electricity plans and services.",
    icon: <ZapIcon className="h-6 w-6" />,
    exampleQuestions: [
      "What plans do you offer?",
      "How much does solar installation cost?",
      "Do you offer any special rates?"
    ],
    greeting: "Hello! I'm your electrical company sales assistant. How can I help you today with our electricity plans and services?",
    color: "from-amber-500 to-orange-600",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100"
  },
  {
    id: "dental",
    title: "Dentist Appointment",
    description: "Book or reschedule your next dental appointment.",
    icon: <PlusCircleIcon className="h-6 w-6" />,
    exampleQuestions: [
      "I need a cleaning appointment",
      "When is Dr. Smith available?",
      "What procedures do you offer?"
    ],
    greeting: "Hi there! I'm the dental appointment assistant. I can help you book or reschedule your next dental visit. How can I assist you today?",
    color: "from-blue-500 to-cyan-600",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    id: "insurance",
    title: "Insurance Quotation",
    description: "Get quotes for various insurance policies.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    exampleQuestions: [
      "How much is home insurance?",
      "Can I get a quote for auto insurance?",
      "What discounts are available?"
    ],
    greeting: "Welcome! I'm your insurance quotation assistant. I'm here to help you get quotes for various insurance policies. What type of insurance are you interested in today?",
    color: "from-emerald-500 to-green-600",
    gradient: "bg-gradient-to-br from-emerald-50 to-emerald-100"
  },
  {
    id: "support",
    title: "Customer Support",
    description: "Get help with product issues or questions.",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    exampleQuestions: [
      "My product isn't working",
      "I need help with setup",
      "How do I return an item?"
    ],
    greeting: "Hello and welcome to customer support! I'm here to help with any product issues or questions you may have. What can I assist you with today?",
    color: "from-purple-500 to-indigo-600",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100"
  }
];
