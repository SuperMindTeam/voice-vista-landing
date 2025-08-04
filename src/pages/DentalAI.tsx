import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        <section className="min-h-screen flex items-center bg-white">
          <div 
            className="mx-auto"
            style={{
              background: 'linear-gradient(135deg, #4d9e4d 0%, #00846c 100%)',
              maxWidth: '1280px',
              width: '100%',
              minHeight: '100vh'
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center py-8 px-8 min-h-screen">
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
              <div className="relative flex justify-center">
                {/* Black rectangle with rounded top corners */}
                <div 
                  className="bg-black shadow-2xl"
                  style={{ 
                    width: '280px',
                    height: '420px',
                    maxWidth: '100%',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px'
                  }}
                >
                  {/* Video on top of black rectangle */}
                  <div className="p-4">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-t-lg"
                      style={{
                        width: '100%',
                        height: '380px'
                      }}
                    >
                      <source src="/lovable-uploads/healthcareVideo.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
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
