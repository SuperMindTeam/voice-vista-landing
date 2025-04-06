
import React, { useState } from 'react';
import { 
  UserIcon, 
  HeadphonesIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

// Simplified use cases to only include Virtual Receptionist and Super Salesman
const useCases = [
  {
    id: "virtual",
    title: "Virtual Receptionist",
    icon: <HeadphonesIcon className="h-6 w-6 text-black" />,
    videoId: "1072645999",
    videoType: "vimeo",
    language: "English"
  },
  {
    id: "salesman",
    title: "Super Salesman",
    icon: <UserIcon className="h-6 w-6 text-black" />,
    videoId: "1072685841", 
    videoType: "vimeo",
    language: "English"
  }
];

const TryItZone = () => {
  const [selectedTab, setSelectedTab] = useState("virtual");
  const isMobile = useIsMobile();
  
  const handleTabChange = (value) => {
    setSelectedTab(value);
    // Toast messages removed as requested
  };

  // Find the current use case based on selected tab
  const currentUseCase = useCases.find(useCase => useCase.id === selectedTab);

  return (
    <div className="text-center max-w-5xl mx-auto mb-24 p-4 sm:p-10 rounded-3xl relative overflow-hidden" id="tryitzone">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-black">
          Demo Zone
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
          Experience our AI voice agent in action across different use cases.
          Select a tab below to watch a demo video.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-0">
            {/* English section */}
            <div className="flex flex-col items-start w-full">
              <span className="px-3 py-1 bg-[#2E8B57] text-white text-xs font-medium rounded mb-2">English</span>
              <div className="w-full flex">
                {useCases.map((useCase, index) => (
                  <button
                    key={useCase.id}
                    onClick={() => handleTabChange(useCase.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 flex-1 ${
                      selectedTab === useCase.id 
                        ? "bg-[#B8D393] text-black font-semibold" 
                        : "bg-[#f3f3f3] text-gray-600"
                    } ${
                      index === 0 ? "rounded-tl-lg border-r border-white" : ""
                    } ${
                      index === useCases.length - 1 ? "rounded-tr-lg" : ""
                    }`}
                  >
                    {useCase.icon}
                    <span className={`text-sm sm:text-base ${isMobile ? "leading-tight" : ""}`}>{useCase.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content area with video player - adjusted width for mobile */}
          <div className="bg-[#B8D393] rounded-b-lg shadow-md p-3 sm:p-6">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className={`${selectedTab === useCase.id ? 'block' : 'hidden'} w-full`}
              >
                <div className="w-full mx-auto aspect-video rounded-lg overflow-hidden">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://player.vimeo.com/video/${useCase.videoId}?autoplay=0`}
                      title={`${useCase.title} demo video`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItZone;
