
import React from 'react';
import { 
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
      image: "/lovable-uploads/97487a33-dfea-40e3-85f9-e06e533c5c39.png",
      title: "Intelligent Responses",
      description: "",
      delay: 100,
      imageOnly: true
    },
    {
      image: "/lovable-uploads/8c7fb5a3-36c1-427e-9f9b-ac59fc5cffa5.png",
      title: "Seamless Integration",
      description: "",
      delay: 200,
      imageOnly: true
    },
    {
      image: "/lovable-uploads/a0f5bd6b-3ebc-4007-b8bf-f4c225a30d5f.png",
      title: "Queries Resolved",
      description: "",
      delay: 300,
      imageOnly: true
    },
    {
      image: "/lovable-uploads/c3c1aee2-4ea8-46ec-8d40-e1a5049fd24e.png",
      title: "Analytics Dashboard",
      description: "",
      delay: 400,
      imageOnly: true
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
          image={feature.image}
          imageOnly={feature.imageOnly}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
