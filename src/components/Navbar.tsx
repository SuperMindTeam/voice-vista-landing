
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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
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
            <MicIcon className={cn("h-6 w-6 mr-2", isScrolled ? "text-black" : "text-white")} />
            <span className={cn("font-display font-bold text-xl", isScrolled ? "text-black" : "text-white")}>SuperMind</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200")}>
              Pricing
            </a>
            <a href="#demozone" className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200")}>
              Demo Zone
            </a>
            <a href="#features-list" className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200")}>
              Features
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className={cn("text-sm font-medium shadow-sm", isScrolled ? "bg-black hover:bg-black/90 text-white" : "bg-white hover:bg-white/90 text-black")} onClick={() => window.open('https://forms.gle/zpiozAUmedjgyR678', '_blank')}>
              Get started
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
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col px-8 py-4 space-y-6">
          <a 
            href="#features" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#demozone" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demo Zone
          </a>
          <a 
            href="#features-list" 
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
