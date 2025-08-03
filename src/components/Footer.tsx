
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
        backgroundImage: "url('./lovable-uploads/Screenshot%202025-08-03%20020531.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Logo Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/WhiteLogo.png" 
                alt="SuperMind Logo" 
                className="h-15 w-25"
              />
            </div>
          </div>

          {/* Use Cases Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="font-medium text-lg mb-4 text-white">Use Cases</h3>
            <div className="space-y-2">
              <p className="text-white/80">Healthcare</p>
              <p className="text-white/80">Hotel</p>
              <p className="text-white/80">E-commerce</p>
              <p className="text-white/80">Restaurant</p>
            </div>
          </div>

          {/* Quicklinks Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="font-medium text-lg mb-4 text-white">Quicklinks</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Company</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Partners</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Tips</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Security</a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
            <h3 className="font-medium text-lg mb-4 text-white">Contact</h3>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-white mr-2" />
              <span className="text-white/80 text-sm">hello@getsupermind.com</span>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* Ireland Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="font-medium text-lg mb-2 text-white">Ireland</h3>
            <p className="text-white/80 text-sm">Ireland, 123 Summerhill, Dublin</p>
          </div>

          {/* Social Media */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">Terms & Conditions</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">Website Tracking Policy</a>
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
