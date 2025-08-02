import React from 'react';
import { Phone, MessageSquare, Clock, BarChart3 } from 'lucide-react';

const HowItTransforms = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Instant Call Handling",
      description: "Answer every call within seconds with AI-powered responses that sound natural and professional."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Smart Conversations",
      description: "Engage customers with intelligent dialogue that understands context and provides accurate information."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Availability",
      description: "Never miss a call again. Your AI receptionist works around the clock to capture every opportunity."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Performance Analytics",
      description: "Track call metrics, conversion rates, and customer satisfaction to optimize your business operations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SuperMind Transforms Your Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered receptionist revolutionizes your business communication and customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItTransforms;