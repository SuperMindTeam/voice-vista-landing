
import React, { useEffect, useRef, useState } from 'react';
import { 
  MicIcon, 
  BarChartIcon, 
  GitBranchIcon, 
  GlobeIcon, 
  ShieldCheckIcon, 
  ZapIcon,
  BrainIcon,
  HeadphonesIcon,
  UsersIcon,
  PhoneCallIcon,
  MessageSquareIcon,
  BoltIcon,
  PlusCircleIcon,
  SparklesIcon,
  WandSparklesIcon
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="feature-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all duration-500 opacity-0 translate-y-10"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  exampleQuestions: string[];
  greeting: string;
  color: string;
  gradient: string;
}

const useCases: UseCase[] = [
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

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const tryItZoneRef = useRef<HTMLDivElement>(null);
  const [activeUseCase, setActiveUseCase] = useState<UseCase>(useCases[0]);
  const [isTalking, setIsTalking] = useState(false);
  
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
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    if (comparisonRef.current) {
      observer.observe(comparisonRef.current);
    }
    
    if (tryItZoneRef.current) {
      observer.observe(tryItZoneRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
      
      if (comparisonRef.current) {
        observer.unobserve(comparisonRef.current);
      }
      
      if (tryItZoneRef.current) {
        observer.unobserve(tryItZoneRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <MicIcon className="h-6 w-6" />,
      title: "Natural Voice Recognition",
      description: "Advanced speech recognition that understands context, accents, and industry-specific terminology.",
      delay: 0
    },
    {
      icon: <BrainIcon className="h-6 w-6" />,
      title: "Intelligent Responses",
      description: "AI-powered responses that adapt to conversation flow and provide accurate, helpful information.",
      delay: 100
    },
    {
      icon: <GitBranchIcon className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Easily integrate with your existing systems including CRM, help desk, and booking platforms.",
      delay: 200
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Communicate with customers in over 30 languages with natural-sounding translation.",
      delay: 300
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights on customer interactions, sentiment analysis, and performance metrics.",
      delay: 400
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR, HIPAA, and other regulatory standards.",
      delay: 500
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Provide support and service to your customers around the clock without any downtime.",
      delay: 600
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Personalized Experience",
      description: "Recognize returning customers and provide personalized service based on previous interactions.",
      delay: 700
    },
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: "Automated Workflows",
      description: "Trigger automated actions based on conversation outcomes like scheduling, payments, or follow-ups.",
      delay: 800
    }
  ];

  const costComparisonData = [
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

  const handleTalkClick = () => {
    if (isTalking) {
      setIsTalking(false);
      toast.info("Voice conversation ended");
    } else {
      setIsTalking(true);
      toast.success(`Started conversation with ${activeUseCase.title} assistant`);
      
      // Simulate conversation ending after 20 seconds
      setTimeout(() => {
        if (isTalking) {
          setIsTalking(false);
          toast.info("Voice conversation ended");
        }
      }, 20000);
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={comparisonRef}
          className="text-center max-w-4xl mx-auto mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-4">
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
        
        <div 
          ref={tryItZoneRef}
          className="text-center max-w-5xl mx-auto mb-24 transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="relative mb-8">
            {/* Background decoration elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 left-1/4 w-28 h-28 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4">
              <SparklesIcon className="mr-2 h-5 w-5 animate-pulse" />
              <span className="text-sm font-medium">Experience It Live</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Try It Zone
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Experience our AI voice agent in real-time across different use cases.
              Select a scenario below and start the conversation.
            </p>
          </div>
          
          <div className="relative">
            {/* Glass card with shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl transform -rotate-1 scale-[1.02] blur-sm"></div>
            
            <div className="relative glass rounded-3xl shadow-xl overflow-hidden border border-white/40 backdrop-blur-sm bg-white/50">
              <Tabs defaultValue="electricity" className="w-full" onValueChange={(value) => {
                const newUseCase = useCases.find(uc => uc.id === value);
                if (newUseCase) {
                  setActiveUseCase(newUseCase);
                  setIsTalking(false);
                }
              }}>
                <div className="p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 p-1 rounded-xl bg-white/80 backdrop-blur-sm shadow-inner">
                    {useCases.map((useCase) => (
                      <TabsTrigger 
                        key={useCase.id} 
                        value={useCase.id} 
                        className="gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:shadow-md data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 animate-pulse rounded-full bg-indigo-200/50 data-[state=active]:opacity-0"></div>
                          {useCase.icon}
                        </div>
                        <span className="hidden md:inline font-medium">{useCase.title}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {useCases.map((useCase) => (
                  <TabsContent key={useCase.id} value={useCase.id} className="mt-0 animate-fade-up">
                    <div className={`relative rounded-b-3xl overflow-hidden ${useCase.gradient}`}>
                      <Card className="border-0 shadow-none bg-transparent">
                        <CardHeader className="relative z-10">
                          <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${useCase.color} text-white`}>
                              {useCase.icon}
                            </div>
                            {useCase.title}
                          </CardTitle>
                          <CardDescription className="text-base">{useCase.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm mb-6 border border-gray-100">
                            <p className="text-gray-700 font-medium">{useCase.greeting}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Example questions you can ask:</h4>
                            <ul className="space-y-3">
                              {useCase.exampleQuestions.map((question, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg shadow-sm border border-gray-100">
                                  <MessageSquareIcon className={`h-5 w-5 text-gradient-to-r ${useCase.color} shrink-0 mt-0.5`} />
                                  <span className="text-gray-700">{question}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center border-t border-gray-100/30 pt-6 pb-8 relative z-10">
                          <Button 
                            className={`${
                              isTalking 
                                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse' 
                                : `bg-gradient-to-r ${useCase.color} hover:shadow-lg`
                            } text-white px-8 py-6 rounded-full transition-all duration-300 shadow-md hover:shadow-xl`}
                            onClick={handleTalkClick}
                          >
                            {isTalking ? (
                              <>
                                <PhoneCallIcon className="mr-2 h-5 w-5" />
                                End Conversation
                              </>
                            ) : (
                              <>
                                <MicIcon className="mr-2 h-5 w-5" />
                                Talk to AI Assistant
                              </>
                            )}
                          </Button>
                        </CardFooter>
                      </Card>

                      {/* Decorative elements */}
                      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/30 blur-3xl"></div>
                      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-white/20 blur-3xl"></div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
