
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MicIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={cn(
          'w-full transition-all duration-300 ease-in-out px-6 py-4',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <img 
              src={isScrolled ? "/lovable-uploads/BlackLogo.png" : "/lovable-uploads/WhiteLogo.png"} 
              alt="SuperMind Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#live-demo" className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200")}>
              Demo Zone
            </a>
            <a href="#cost-comparison" className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200")}>
              Features
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className={cn("text-sm font-medium shadow-sm", isScrolled ? "bg-black hover:bg-black/90 text-white" : "bg-white hover:bg-white/90 text-black")} onClick={() => window.open('https://forms.gle/zpiozAUmedjgyR678', '_blank')}>
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-700" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-700" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-6 border-b">
          <img 
            src="/lovable-uploads/65c69295-e209-47b1-a841-efd705a89794.png" 
            alt="SuperMind Logo" 
            className="h-10 w-auto"
          />
          <button 
            className="focus:outline-none" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="flex flex-col px-8 py-4 space-y-6">
          <a 
            href="#live-demo" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demo Zone
          </a>
          <a 
            href="#cost-comparison" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <div className="pt-6 border-t">
            <Button 
              className="w-full bg-[#B8D393] hover:bg-[#A6C27D] text-black"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open('https://forms.gle/zpiozAUmedjgyR678', '_blank');
              }}
            >
              Free Trial
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
