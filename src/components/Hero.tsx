
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SmileIcon, Phone, DollarSign } from 'lucide-react';
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

  const StatBoxes = () => (
    <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 max-w-3xl mx-auto">
      <div className="rounded-full overflow-hidden shadow-lg bg-white text-black p-2 md:p-4 flex items-center gap-2">
        <div className="bg-black/10 rounded-full p-1 md:p-2 flex-shrink-0">
          <SmileIcon className="w-3 h-3 md:w-5 md:h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-sm md:text-xl font-semibold truncate">98%</h3>
          <p className="text-[10px] md:text-sm text-black/80 truncate">Customer Satisfaction</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-white text-black p-2 md:p-4 flex items-center gap-2">
        <div className="bg-black/10 rounded-full p-1 md:p-2 flex-shrink-0">
          <Phone className="w-3 h-3 md:w-5 md:h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-sm md:text-xl font-semibold truncate">24x7</h3>
          <p className="text-[10px] md:text-sm text-black/80 truncate">Always Available</p>
        </div>
      </div>
      
      <div className="rounded-full overflow-hidden shadow-lg bg-white text-black p-2 md:p-4 flex items-center gap-2">
        <div className="bg-black/10 rounded-full p-1 md:p-2 flex-shrink-0">
          <DollarSign className="w-3 h-3 md:w-5 md:h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-sm md:text-xl font-semibold truncate">80%</h3>
          <p className="text-[10px] md:text-sm text-black/80 truncate">Cost Reduction</p>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      className="relative min-h-screen pt-32 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 22%, hsla(0, 0%, 100%, 1) 35%, hsla(95, 93%, 84%, 1) 100%)',
      }}
    >
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
              Reduce Salaries—Our <span className="text-black bg-[#B8D393] px-1">Artificial Intelligence</span> will Answer Your Calls.
            </h1>
            
            {/* Video for mobile */}
            <div className="w-full mb-6">
              <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/7_4ZsWyPYdA?rel=0&modestbranding=1"
                  className="w-full h-full"
                  title="Demo video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[#76A646] max-w-2xl mb-10 font-bold">
              Instant Answers, Zero Wait Time.
            </p>
            
            <div className="mb-12">
              <Button 
                size="lg" 
                className="bg-black hover:bg-black/80 text-white shadow-md"
                onClick={handleFreeTrialClick}
              >
                Start 1 Month Free Trial
              </Button>
            </div>
            
            <StatBoxes />
          </div>
        ) : (
          <div 
            ref={heroRef}
            className="flex flex-col items-center transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12 max-w-7xl mx-auto">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight mt-4 mb-6">
                  Reduce Salaries—Our <span className="text-black bg-[#B8D393] px-1">Artificial Intelligence</span> will Answer Your Calls.
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-[#76A646] mb-10 animate-fade-in animate-delay-100 font-bold">
                  Instant Answers, Zero Wait Time.
                </p>
                
                <div className="mb-8 animate-fade-in animate-delay-200">
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-black/80 text-white shadow-md"
                    onClick={handleFreeTrialClick}
                  >
                    Start 1 Month Free Trial
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-full">
                <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden shadow-xl">
                  <iframe 
                    src="https://www.youtube.com/embed/7_4ZsWyPYdA?rel=0&modestbranding=1"
                    className="w-full h-full"
                    title="Demo video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </div>
            </div>
            
            <StatBoxes />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
