
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
    icon: <HeadphonesIcon className="h-6 w-6 text-pink-500" />,
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  {
    id: "salesman",
    title: "Super Salesman",
    icon: <UserIcon className="h-6 w-6 text-pink-500" />,
    videoId: "jNQXAC9IVRw" // Example YouTube video ID
  },
  {
    id: "insurance",
    title: "Automatic Quotation",
    icon: <ShieldIcon className="h-6 w-6 text-pink-500" />,
    videoId: "9bZkp7q19f0" // Example YouTube video ID
  },
  {
    id: "doctor",
    title: "Doctor Appointment Booking",
    icon: <PlusCircleIcon className="h-6 w-6 text-pink-500" />,
    videoId: "xvFZjo5PgG0" // Example YouTube video ID
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
          <Tabs 
            defaultValue="virtual" 
            value={selectedTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="flex w-full bg-transparent p-0 mb-6 justify-between">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className={`
                    flex-1 relative flex items-center gap-2 rounded-t-lg px-6 py-3
                    ${selectedTab === useCase.id ? 'bg-[#B8D393] text-black font-semibold' : 'bg-gray-100 text-gray-700'}
                    transition-all duration-200
                  `}
                >
                  <div className="flex items-center gap-2">
                    {useCase.icon}
                    <span>{useCase.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Content area with video player */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              {useCases.map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
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
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TryItZone;
