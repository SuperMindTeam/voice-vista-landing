
import React, { useState, useEffect } from 'react';
import { toast } from "sonner";
import { 
  DollarSignIcon, 
  FileTextIcon, 
  ShieldIcon,
  PlusCircleIcon,
  MicIcon,
  GlobeIcon,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// New use cases to match the screenshot
const useCases = [
  {
    id: "debt",
    title: "Debt Collection",
    icon: <DollarSignIcon className="h-6 w-6" />,
  },
  {
    id: "claims",
    title: "Claims FNOL (Intake)",
    icon: <FileTextIcon className="h-6 w-6" />,
  },
  {
    id: "insurance",
    title: "Auto Insurance Quote",
    icon: <ShieldIcon className="h-6 w-6" />,
  },
  {
    id: "doctor",
    title: "Doctor Appointment Booking",
    icon: <PlusCircleIcon className="h-6 w-6" />,
  },
];

const TryItZone = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Complete animation in 20 seconds if talking, or reset if not talking
      if (isTalking) {
        // Progress from 0 to 100 over 20 seconds
        const progress = Math.min(elapsed / 20000, 1);
        setAnimationProgress(progress);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          // End the conversation when animation completes
          setIsTalking(false);
          toast.info("Voice conversation ended");
        }
      } else {
        // Reset animation when not talking
        setAnimationProgress(0);
      }
    };
    
    if (isTalking) {
      startTime = 0; // Reset start time
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isTalking]);

  const handleTalkClick = () => {
    if (isTalking) {
      setIsTalking(false);
      toast.info("Voice conversation ended");
    } else {
      setIsTalking(true);
      toast.success("Started conversation with Collections AI agent");
    }
  };

  // Calculate the border dash offset for animation
  const calculateDashOffset = () => {
    // The total length is the perimeter of the container
    // We're using a negative offset that decreases as animation progresses
    return (1 - animationProgress) * 1600; // Approximate perimeter value
  };

  return (
    <div className="text-center max-w-5xl mx-auto mb-24 p-10 rounded-3xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-white">
          Try It Zone
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Experience our AI voice agent in real-time across different use cases.
          Select a scenario below and start the conversation.
        </p>
        
        {/* Dark themed card with animated border */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121212] border border-gray-800 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Animated border using SVG */}
            <svg 
              className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <rect 
                x="0" 
                y="0" 
                width="100" 
                height="100" 
                fill="none" 
                stroke="#D946EF" 
                strokeWidth="0.5"
                strokeDasharray="250" 
                strokeDashoffset={calculateDashOffset()}
                className="transition-all duration-300"
                rx="8" 
                ry="8"
              />
            </svg>
            
            {/* Language selector in top center */}
            <div className="pt-6 flex justify-center relative z-10">
              <Select defaultValue="english">
                <SelectTrigger className="w-32 bg-transparent border-gray-700 text-white">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] border-gray-700 text-white">
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Grid of use cases */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6 relative z-10">
              {useCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer bg-[#1A1A1A] border border-gray-800"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                    {useCase.icon}
                  </div>
                  <span className="text-sm text-white text-center">
                    {useCase.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Microphone in center */}
            <div className="flex flex-col items-center justify-center py-8 relative z-10">
              <Button
                variant="outline"
                size="icon"
                className={`w-20 h-20 rounded-full border-2 ${
                  isTalking ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse' : 'bg-white text-gray-800 hover:bg-gray-200'
                } mb-4`}
                onClick={handleTalkClick}
              >
                <MicIcon className="h-8 w-8" />
              </Button>
              
              <p className="text-white text-xl max-w-md text-center">
                Tap the mic and try our Collections AI Agent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItZone;
