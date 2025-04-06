
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
          'max-w-5xl w-full rounded-full transition-all duration-300 ease-in-out px-6 py-4 mt-5',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-2 border-gray-200 shadow-lg' 
            : 'bg-white/50 backdrop-blur-sm border-2 border-white/70 shadow-md'
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MicIcon className="h-6 w-6 text-black mr-2" />
            <span className="font-display font-bold text-xl text-black">SuperMind</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#demozone" className="text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Demo Zone
            </a>
            <a href="#features-list" className="text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="text-sm font-medium bg-[#B8D393] hover:bg-[#A6C27D] text-black shadow-sm" onClick={() => window.open('https://forms.gle/zpiozAUmedjgyR678', '_blank')}>
              Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
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
