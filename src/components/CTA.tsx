
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const benefits = [
    "14-day free trial, no credit card required",
    "Easy setup in less than 10 minutes",
    "Full access to all premium features",
    "Dedicated onboarding support"
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ctaRef}
          className="max-w-6xl mx-auto glass rounded-2xl overflow-hidden shadow-xl transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <span className="text-xs font-medium">Get Started Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-gray-600 mb-8">
                Join thousands of businesses already using our AI voice agent to provide exceptional customer service.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 group">
                  <span>Book a Demo</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 lg:p-16 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Enterprise Solutions</h3>
                <p className="mb-8 opacity-90">
                  Need a custom solution for your large organization? Contact our enterprise team for a personalized consultation.
                </p>
                <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Contact Enterprise Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
