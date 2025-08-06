
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

  const CallToAction = ({ isMobileLayout = false }) => (
  <div className={isMobileLayout ? "relative mt-8 w-full flex justify-center" : "relative mt-8 w-full flex justify-center"}>
    {/* Container for both SVGs */}
    <div className={isMobileLayout 
      ? "flex flex-col items-center space-y-4" 
      : "absolute right-6 -translate-y-[30rem] flex flex-col items-end space-y-[-1rem]"
    }>
      <img 
        src="/lovable-uploads/d16122e6-44c7-4082-ba99-a318c5e3213c.svg" 
        alt="Gradient mic" 
        className={isMobileLayout 
          ? "w-32 h-32" 
          : "w-48 h-48 -translate-x-12 -translate-y-14"
        }
      />
      <img 
        src="/lovable-uploads/NewHandWrittenMic4.svg" 
        alt="Handwritten mic" 
        className={isMobileLayout 
          ? "w-48 h-32" 
          : "w-72 h-52 translate-x-24 -translate-y-40"
        }
        style={{ 
          filter: 'brightness(0) invert(1)'
        }}
      />
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-sanomat font-semibold tracking-tight mb-6 text-white text-center">
              Cut Costs<br /><span className="whitespace-nowrap">Calls Answered</span> 24 hours
            </h1>
            
            {/* Decorative line */}
            <div className="w-80 h-0.5 bg-white/40 mb-6 mx-auto"></div>
            
            <div className="text-center">
              
              <div className="mb-12">
                <Button 
                  size="lg" 
                  variant="white"
                  className="shadow-md"
                  onClick={handleFreeTrialClick}
                >
                  Start 1 Month Free Trial
                </Button>
              </div>
            </div>
            
            <CallToAction isMobileLayout={true} />
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="flex flex-col items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12 max-w-7xl mx-auto">
              <div className="text-left max-w-none">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-sanomat font-semibold tracking-tight mt-4 mb-6 text-white">
                  Cut Costs<br /><span className="whitespace-nowrap">Calls Answered</span> 24 hours
                </h1>
                
                {/* Decorative line */}
                <div className="w-80 h-0.5 bg-white/40 mb-6"></div>
                
                <div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-10 animate-fade-in animate-delay-100 font-bold text-left">
                    Instant Answers, Zero Wait Time.
                  </p>
                  
                  <div className="mb-8 animate-fade-in animate-delay-200 text-left">
                    <Button 
                      size="lg" 
                      variant="white"
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
