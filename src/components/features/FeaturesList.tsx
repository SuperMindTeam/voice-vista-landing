
import React from 'react';
import { 
  MicIcon, 
  BarChartIcon, 
  GitBranchIcon, 
  GlobeIcon, 
  ShieldCheckIcon, 
  ZapIcon,
  BrainIcon,
  HeadphonesIcon,
  UsersIcon
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesList = () => {
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
      title: "Queries Resolved 60%",
      description: "Communicate with customers in over 30 languages with natural-sounding translation.",
      delay: 300,
      isHighlighted: true
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
          isHighlighted={feature.isHighlighted}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
