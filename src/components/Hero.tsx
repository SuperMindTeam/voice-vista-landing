
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MicIcon, PhoneIcon, MessageCircleIcon, ChevronDownIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden pattern-background">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {isMobile ? (
          <div 
            ref={heroRef}
            className="flex flex-col items-center text-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6 animate-fade-in">
              <span className="text-xs font-medium">Introducing AI Voice Assistant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mb-4 max-w-4xl">
              Why Hire More? Let us Answer Your <span className="gradient-text">Calls 24x7</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in animate-delay-100">
              Reduce payroll costs by 80% every month
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animate-delay-200">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 relative mx-auto max-w-5xl animate-fade-in animate-delay-300">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl glass">
                <div className="relative h-full w-full bg-gray-100">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Shiv AI Demo"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-3xl font-semibold mb-2">98%</h3>
                  <p className="text-gray-600">Customer satisfaction rate</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-3xl font-semibold mb-2">24/7</h3>
                  <p className="text-gray-600">Always available support</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-3xl font-semibold mb-2">45%</h3>
                  <p className="text-gray-600">Reduction in support costs</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="order-2 lg:order-1 animate-fade-in animate-delay-200 mt-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl glass">
                <div className="relative h-full w-full bg-gray-100">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Shiv AI Demo"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold mb-1">98%</h3>
                  <p className="text-sm text-gray-600">Customer satisfaction rate</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold mb-1">24/7</h3>
                  <p className="text-sm text-gray-600">Always available support</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold mb-1">45%</h3>
                  <p className="text-sm text-gray-600">Reduction in support costs</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6 animate-fade-in">
                <span className="text-xs font-medium">Introducing AI Voice Assistant</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mb-4">
                Why Hire More? Let us Answer Your <span className="gradient-text">Calls 24x7</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in animate-delay-100">
                Reduce payroll costs by 80% every month
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in animate-delay-200 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-1">Discover More</span>
            <ChevronDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
