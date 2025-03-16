
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MicIcon, PhoneIcon, MessageCircleIcon, PercentIcon, Clock, TrendingUpIcon } from 'lucide-react';
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

  // Stat boxes component to be reused in both mobile and desktop views
  const StatBoxes = () => (
    <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 max-w-3xl mx-auto">
      <div className="rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <PercentIcon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">98%</h3>
          <p className="text-xs md:text-sm text-white/80">Customer satisfaction</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <Clock className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">24/7</h3>
          <p className="text-xs md:text-sm text-white/80">Always available</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-rose-400 to-pink-500 text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <TrendingUpIcon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">45%</h3>
          <p className="text-xs md:text-sm text-white/80">Cost reduction</p>
        </div>
      </div>
    </div>
  );

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
              Reduce Salaries—Our <span className="gradient-text">Artificial Intelligence</span> will Answer Your Calls.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in animate-delay-100 font-bold">
              Reduce staff salaries costs by 80% every month
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animate-delay-200">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Try Today
              </Button>
            </div>
            
            {/* Centered stat boxes */}
            <StatBoxes />
            
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
            </div>
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="flex flex-col items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 w-full">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6 animate-fade-in">
                  <span className="text-xs font-medium">Introducing AI Voice Assistant</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mb-4">
                  Reduce Salaries—Our <span className="gradient-text">Artificial Intelligence</span> will Answer Your Calls.
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in animate-delay-100 font-bold">
                  Reduce staff salaries costs by 80% every month
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in animate-delay-200 justify-center lg:justify-start">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Try Today
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in animate-delay-200">
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
              </div>
            </div>
            
            {/* Centered stat boxes */}
            <StatBoxes />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
