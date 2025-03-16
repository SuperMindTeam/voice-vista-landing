
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "../ui/aspect-ratio";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isHighlighted?: boolean;
  image?: string;
  imageOnly?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  isHighlighted = false,
  image,
  imageOnly = false
}) => {
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

  if (imageOnly && image) {
    return (
      <div 
        ref={cardRef} 
        className="feature-card bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all duration-500 opacity-0 translate-y-10 h-full"
      >
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  if (isHighlighted) {
    return (
      <div 
        ref={cardRef} 
        className="feature-card relative overflow-hidden rounded-xl p-6 transition-all duration-500 opacity-0 translate-y-10 bg-[#1A1F2C] text-white"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-4">
            <div className="text-sm text-gray-400 mb-1">Gen AI Powered</div>
            <h3 className="text-2xl font-semibold mb-6">{title}</h3>
            
            <div className="grid grid-cols-6 gap-2 mb-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-4">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    {index === 0 && <span>0%</span>}
                    {index === 2 && <span>40%</span>}
                    {index === 4 && <span>80%</span>}
                    {index === 5 && <span>100%</span>}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative h-48 w-full">
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700"></div>
              <div className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-700"></div>
              
              {/* Vertical grid lines */}
              {Array.from({ length: 7 }).map((_, index) => (
                <div 
                  key={index} 
                  className="absolute bottom-0 bg-gray-700 w-[1px] h-full" 
                  style={{ left: `${(index / 6) * 100}%` }}
                ></div>
              ))}
              
              {/* Horizontal grid lines */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="absolute left-0 right-0 bg-gray-700 h-[1px]" 
                  style={{ bottom: `${(index / 5) * 100}%` }}
                ></div>
              ))}
              
              {/* The curve */}
              <div className="absolute bottom-0 left-0 w-full h-full">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <path 
                    d="M0,100 Q30,100 50,50 T100,0" 
                    fill="none" 
                    stroke="#7DD3FC" 
                    strokeWidth="3"
                    className="glow-effect"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Before Gen AI</span>
              <span>Today</span>
              <span>After Gen AI</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={cardRef} 
      className="feature-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all duration-500 opacity-0 translate-y-10"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {image && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src={image} 
              alt={title}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
