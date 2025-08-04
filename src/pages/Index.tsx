
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ConvertOpportunity from '@/components/ConvertOpportunity';
import LiveDemo from '@/components/LiveDemo';
import AnalyticsQueue from '@/components/GenerateLeads';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Ensure components are visible on direct page loads
  useEffect(() => {
    // Set loaded state immediately
    setIsLoaded(true);
    
    // Also handle reveal elements with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={isLoaded ? 'loaded' : ''}>
        <Hero />
        <LiveDemo />
        <Features />
        <ConvertOpportunity />
        <AnalyticsQueue />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
