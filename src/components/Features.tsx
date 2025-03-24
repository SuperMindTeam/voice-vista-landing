
import React, { useRef } from 'react';
import CostComparison from './features/CostComparison';
import TryItZone from './features/TryItZone';
import FeaturesList from './features/FeaturesList';
import { useGeolocation } from '@/hooks/use-geolocation';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { countryCode, isLoading } = useGeolocation();
  
  // Get currency and savings amount based on country
  const getCurrencyData = (countryCode: string) => {
    // Default to USD if country is not determined yet or not in our list
    switch(countryCode) {
      case 'IN':
        return { symbol: '₹', amount: '313,800', name: 'rupees' };
      case 'GB':
        return { symbol: '£', amount: '3,000', name: 'pounds' };
      case 'EU':
        return { symbol: '€', amount: '3,500', name: 'euros' };
      case 'JP':
        return { symbol: '¥', amount: '500,000', name: 'yen' };
      case 'AU':
        return { symbol: 'A$', amount: '5,000', name: 'Australian dollars' };
      case 'CA':
        return { symbol: 'C$', amount: '4,200', name: 'Canadian dollars' };
      default:
        return { symbol: '$', amount: '3,800', name: 'dollars' };
    }
  };
  
  const currencyData = getCurrencyData(countryCode);
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-4">
            <span className="text-xs font-medium">Cost-Effective Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Save over {currencyData.symbol}{currencyData.amount} per year for each agent you replace
          </h2>
          <p className="text-xl text-gray-600">
            with our AI solution, while maintaining exceptional customer service quality 24/7.
          </p>
        </div>
        
        <CostComparison currencySymbol={currencyData.symbol} />
        <div className="bg-white py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <TryItZone />
        </div>
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
