
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MicIcon className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-display font-semibold text-xl">Shiv AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
            <Button size="sm" className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              Get Started
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
      </div>

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
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-lg font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-6 border-t">
            <Button 
              variant="outline" 
              className="w-full mb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            <Button 
              className="w-full bg-blue-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
