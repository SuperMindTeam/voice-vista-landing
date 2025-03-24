import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SmileIcon, Phone, DollarSign } from 'lucide-react';
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
      <div className="rounded-full overflow-hidden shadow-lg bg-[#9E99F9] text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <SmileIcon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">98%</h3>
          <p className="text-xs md:text-sm text-white/80">Customer Satisfaction</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-[#9E99F9] text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">24x7</h3>
          <p className="text-xs md:text-sm text-white/80">Always Available</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-[#9E99F9] text-white p-3 md:p-4 flex items-center gap-2">
        <div className="bg-white/20 rounded-full p-1.5 md:p-2 flex-shrink-0">
          <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">80%</h3>
          <p className="text-xs md:text-sm text-white/80">Cost Reduction</p>
        </div>
      </div>
    </div>
  );

  // Video component with lazy loading
  const VideoPlayer = () => (
    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl glass">
      <div className="relative h-full w-full bg-gray-100">
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Shiv AI Demo"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-white">
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {isMobile ? (
          <div 
            ref={heroRef}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mb-6 max-w-4xl">
              Reduce Salaries—Our <span className="text-[#D9F19E]">Artificial Intelligence</span> will Answer Your Calls.
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-green-600 max-w-2xl mb-10 font-bold">
              Instant Answers, Zero Wait Time.
            </p>
            
            <div className="mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                Start 1 Month Free Trial
              </Button>
            </div>
            
            {/* Centered stat boxes */}
            <StatBoxes />
            
            <div className="mt-8 w-full relative mx-auto max-w-5xl">
              <VideoPlayer />
            </div>
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="flex flex-col items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mt-4 mb-6">
                Reduce Salaries—Our <span className="text-[#D9F19E]">Artificial Intelligence</span> will Answer Your Calls.
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-green-600 mb-10 animate-fade-in animate-delay-100 font-bold">
                Instant Answers, Zero Wait Time.
              </p>
              
              <div className="mb-8 animate-fade-in animate-delay-200 flex justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Start 1 Month Free Trial
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in animate-delay-200 max-w-5xl mx-auto w-full">
              <VideoPlayer />
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
