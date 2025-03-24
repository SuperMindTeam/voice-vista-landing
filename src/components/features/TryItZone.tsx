
import React, { useState } from 'react';
import { toast } from "sonner";
import { 
  UserIcon, 
  ShieldIcon,
  PlusCircleIcon,
  GlobeIcon,
  HeadphonesIcon,
  YoutubeIcon
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
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const handleUseCaseClick = (videoId) => {
    setSelectedVideo(videoId);
    toast.success("Loading demo video");
  };

  return (
    <div className="text-center max-w-5xl mx-auto mb-24 p-10 rounded-3xl relative overflow-hidden" id="tryitzone">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-black">
          Demo Zone
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
          Experience our AI voice agent in action across different use cases.
          Select a scenario below to watch a demo video.
        </p>
        
        {/* Updated background color to white */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Language selector in top center */}
            <div className="pt-6 flex justify-center relative z-10">
              <Select defaultValue="english">
                <SelectTrigger className="w-32 bg-transparent border-gray-300 text-black">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 text-black">
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
                  className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer bg-white border border-gray-200"
                  onClick={() => handleUseCaseClick(useCase.videoId)}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    {useCase.icon}
                  </div>
                  <span className="text-sm text-black text-center">
                    {useCase.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* YouTube video player instead of microphone */}
            <div className="flex flex-col items-center justify-center py-8 relative z-10">
              {selectedVideo ? (
                <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <YoutubeIcon className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-black text-xl max-w-md text-center">
                    Select a category above to watch a demo video
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItZone;
