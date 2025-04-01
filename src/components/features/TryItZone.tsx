
import React, { useState } from 'react';
import { toast } from "sonner";
import { 
  UserIcon, 
  ShieldIcon,
  PlusCircleIcon,
  HeadphonesIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// New use cases to match the screenshot
const useCases = [
  {
    id: "virtual",
    title: "Virtual Receptionist",
    icon: <HeadphonesIcon className="h-6 w-6 text-black" />,
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    language: "English"
  },
  {
    id: "salesman",
    title: "Super Salesman",
    icon: <UserIcon className="h-6 w-6 text-black" />,
    videoId: "jNQXAC9IVRw", // Example YouTube video ID
    language: "English"
  },
  {
    id: "insurance",
    title: "Automatic Quotation",
    icon: <ShieldIcon className="h-6 w-6 text-black" />,
    videoId: "9bZkp7q19f0", // Example YouTube video ID
    language: "Hindi"
  },
  {
    id: "doctor",
    title: "Doctor Appointment Booking",
    icon: <PlusCircleIcon className="h-6 w-6 text-black" />,
    videoId: "xvFZjo5PgG0", // Example YouTube video ID
    language: "Hindi"
  },
];

const TryItZone = () => {
  const [selectedTab, setSelectedTab] = useState("virtual");
  
  const handleTabChange = (value) => {
    setSelectedTab(value);
    toast.success(`Loaded demo: ${useCases.find(useCase => useCase.id === value)?.title}`);
  };

  // Find the current video ID based on selected tab
  const currentVideoId = useCases.find(useCase => useCase.id === selectedTab)?.videoId;

  // Group tabs by language
  const groupedTabs = useCases.reduce((acc, useCase) => {
    if (!acc[useCase.language]) {
      acc[useCase.language] = [];
    }
    acc[useCase.language].push(useCase);
    return acc;
  }, {});

  return (
    <div className="text-center max-w-5xl mx-auto mb-24 p-10 rounded-3xl relative overflow-hidden" id="tryitzone">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-black">
          Demo Zone
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
          Experience our AI voice agent in action across different use cases.
          Select a tab below to watch a demo video.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-start">
              <span className="px-3 py-1 bg-[#2E8B57] text-white text-xs font-medium rounded mb-2">English</span>
              <div className="w-full grid grid-cols-2 gap-1">
                {groupedTabs["English"]?.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => handleTabChange(useCase.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-t-lg ${
                      selectedTab === useCase.id 
                        ? "bg-[#B8D393] text-black font-semibold" 
                        : "bg-[#f3f3f3] text-gray-600"
                    }`}
                  >
                    {useCase.icon}
                    <span>{useCase.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="px-3 py-1 bg-[#F97316] text-white text-xs font-medium rounded mb-2">Hindi</span>
              <div className="w-full grid grid-cols-2 gap-1">
                {groupedTabs["Hindi"]?.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => handleTabChange(useCase.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-t-lg ${
                      selectedTab === useCase.id 
                        ? "bg-[#B8D393] text-black font-semibold" 
                        : "bg-[#f3f3f3] text-gray-600"
                    }`}
                  >
                    {useCase.icon}
                    <span>{useCase.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content area with video player */}
          <div className="bg-[#B8D393] rounded-lg shadow-md p-6">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className={`${selectedTab === useCase.id ? 'block' : 'hidden'}`}
              >
                <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${useCase.videoId}?autoplay=0`}
                    title={`${useCase.title} demo video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
