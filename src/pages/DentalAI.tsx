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
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-background flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground">
                  AI built for Dental Practices.
                </h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex justify-center mb-3">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
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
                  className="w-full sm:w-auto"
                >
                  Get Dental Solution
                </Button>
              </div>

              {/* Right Video */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DentalAI;