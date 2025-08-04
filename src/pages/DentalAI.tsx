import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Users, Clock, TrendingUp } from 'lucide-react';

const DentalAI = () => {
  const handleGetSolution = () => {
    window.open('https://forms.gle/your-dental-form-link', '_blank');
  };

  const stats = [
    {
      icon: Phone,
      value: "95%",
      label: "Call Answer Rate"
    },
    {
      icon: Users,
      value: "2.5k+",
      label: "Patients Served"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Available"
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "More Bookings"
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="flex items-center bg-white">
          <div 
            className="mx-auto"
            style={{
              background: 'linear-gradient(135deg, #4d9e4d 0%, #00846c 100%)',
              maxWidth: '1280px',
              width: '100%'
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center py-12 px-8">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                  AI built for Dental Practices.
                </h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:shadow-lg hover:bg-white/15 transition-all duration-300"
                      >
                        <div className="flex justify-center mb-2">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/80">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={handleGetSolution}
                  size="lg"
                  className="w-full sm:w-auto bg-white text-green-700 hover:bg-white/90 font-semibold"
                >
                  Get Dental Solution
                </Button>
              </div>

              {/* Right Video */}
              <div className="relative flex justify-center" style={{ overflow: 'hidden', height: '450px' }}>
                {/* Outer hollow rectangle (phone frame) */}
                <div 
                  className="relative"
                  style={{ 
                    width: '320px',
                    height: '550px', // Taller than container to get cut off
                    maxWidth: '100%',
                    border: '3px solid black',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                    backgroundColor: 'transparent'
                  }}
                >
                  {/* Volume buttons (left side) */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '80px',
                      width: '4px',
                      height: '30px',
                      backgroundColor: 'black',
                      borderRadius: '2px'
                    }}
                  ></div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '120px',
                      width: '4px',
                      height: '30px',
                      backgroundColor: 'black',
                      borderRadius: '2px'
                    }}
                  ></div>

                  {/* Power button (right side) */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-6px',
                      top: '100px',
                      width: '4px',
                      height: '50px',
                      backgroundColor: 'black',
                      borderRadius: '2px'
                    }}
                  ></div>

                  {/* Inner black rectangle with gap */}
                  <div 
                    className="bg-black shadow-2xl absolute"
                    style={{ 
                      width: '280px',
                      height: '510px', // Adjusted to match outer rectangle
                      top: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '0px',
                      borderBottomRightRadius: '0px'
                    }}
                  >
                    {/* Video positioned so rectangles' edges align with video center */}
                    <div 
                      className="absolute bg-white rounded-lg overflow-hidden shadow-lg"
                      style={{
                        width: '160px', // Increased from 120px
                        height: '160px', // Increased from 120px
                        top: '80px',
                        left: '-80px', // Adjusted: Half of new video width (160px / 2 = 80px)
                        zIndex: 10
                      }}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/lovable-uploads/healthcareVideo.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    {/* Text and button next to video */}
                    <div 
                      className="absolute"
                      style={{
                        top: '80px', // Adjusted to align with new video position
                        left: '100px', // Adjusted: video ends at -80px + 160px + gap 20px
                        zIndex: 10
                      }}
                    >
                      {/* "I'm ready to talk!" text */}
                      <div 
                        className="text-white font-medium mb-3"
                        style={{
                          fontSize: '16px',
                          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                        }}
                      >
                        I'm ready to talk!
                      </div>

                      {/* Call button */}
                      <button
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        <Phone className="w-4 h-4" />
                        Click to Call AI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DentalAI;
