
import React, { useEffect, useRef } from 'react';
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

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
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

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={featuresRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-4">
            <span className="text-xs font-medium">Powerful Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Elevate Your Customer Experience
          </h2>
          <p className="text-xl text-gray-600">
            Our AI voice agent comes equipped with all the tools your business needs to provide exceptional service.
          </p>
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
