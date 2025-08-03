
import React from 'react';
import { MicIcon, Mail, Instagram, Phone, Linkedin } from 'lucide-react';
import { useGeolocation } from '@/hooks/use-geolocation';

const Footer = () => {
  const { countryCode } = useGeolocation();
  
  // Determine which phone number to display based on location
  const getPhoneDisplay = () => {
    switch(countryCode) {
      case 'IE':
        return {
          number: '0833 833 321',
          link: 'tel:+353833833321'
        };
      case 'IN':
        return {
          number: '+91 9810 851 631',
          link: 'https://wa.me/919810851631'
        };
      default:
        return {
          number: '+91 9810-851-631',
          link: 'https://wa.me/919810851631'
        };
    }
  };
  
  const phoneDisplay = getPhoneDisplay();

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat bg-gray-800"
      style={{
        backgroundImage: "url('./lovable-uploads/background.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Logo Card */}
            <div className="bg-[#777066]/100 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/WhiteLogo.png" 
                  alt="Logo" 
                  className="h-15 w-25"
                />
              </div>
            </div>

            {/* Use Cases Card */}
            <div className="bg-[#777066]/100 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-medium text-lg mb-4 text-white">Use Cases</h3>
              <div className="space-y-2">
                <p className="text-white/80">Healthcare</p>
                <p className="text-white/80">Hotel</p>
                <p className="text-white/80">E-commerce</p>
                <p className="text-white/80">Restaurant</p>
              </div>
            </div>
          </div>

          {/* Middle Column - Transparent Spacer */}
          <div className="hidden md:block"></div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-[#777066]/100 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
              <h3 className="font-medium text-lg mb-4 text-white">Contact</h3>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-white mr-2" />
                <span className="text-white/80">hello@getsupermind.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#777066]/100 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
              <div className="flex justify-center items-center space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © All rights reserved {new Date().getFullYear()} SuperMind Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
