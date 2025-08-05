
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SmileIcon, Phone, DollarSign, Mic } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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

  const handleFreeTrialClick = () => {
    window.open("https://forms.gle/zpiozAUmedjgyR678", "_blank");
  };

  const CallToAction = () => (
    <div className="flex items-center gap-4 mt-8 max-w-md mx-auto">
      <div className="relative">
        <Mic className="w-12 h-12 text-white bg-white/20 rounded-full p-3" />
        {/* Hand-drawn style arrow */}
        <svg 
          className="absolute -right-20 -top-2 w-16 h-8 text-white" 
          viewBox="0 0 64 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path 
            d="M2 16 C10 8, 20 12, 30 16 C40 20, 50 12, 58 16" 
            strokeDasharray="2,2"
            className="animate-pulse"
          />
          <path d="M54 12 L58 16 L54 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="ml-8">
        <p className="text-lg font-semibold text-white">Talk to SuperMind!</p>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/30"></div>
        <div className="absolute inset-0 bg-black/72 md:bg-black/0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {isMobile ? (
          <div 
            ref={heroRef}
            className="flex flex-col items-center text-center"
          >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-sanomat font-semibold tracking-tight mb-6 max-w-4xl text-white text-center">
              Cut Costs.<br />Answering Calls 24 hours/7 days.
            </h1>
            
            
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white max-w-2xl mb-10 font-bold">
                Instant Answers, Zero Wait Time.
              </p>
              
              <div className="mb-12">
                <Button 
                  size="lg" 
                  variant="custom"
                  className="shadow-md"
                  onClick={handleFreeTrialClick}
                >
                  Start 1 Month Free Trial
                </Button>
              </div>
            </div>
            
            <CallToAction />
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="flex flex-col items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12 max-w-7xl mx-auto">
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-sanomat font-semibold tracking-tight mt-4 mb-6 text-white">
                  Cut Costs.<br />Automate Reception.
                </h1>
                
                <div>
                  <p className="text-3xl md:text-4xl lg:text-5xl text-white mb-10 animate-fade-in animate-delay-100 font-bold text-left">
                    Instant Answers, Zero Wait Time.
                  </p>
                  
                  <div className="mb-8 animate-fade-in animate-delay-200 text-left">
                    <Button 
                      size="lg" 
                      variant="custom"
                      className="shadow-md"
                      onClick={handleFreeTrialClick}
                    >
                      Start 1 Month Free Trial
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
            
            <CallToAction />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
