
import React, { useRef } from 'react';
import CostComparison from './features/CostComparison';
import TryItZone from './features/TryItZone';
import FeaturesList from './features/FeaturesList';
import { useGeolocation } from '@/hooks/use-geolocation';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { countryCode, isLoading } = useGeolocation();
  
  // Determine if user is in Europe
  const isEurope = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'EU'].includes(countryCode);
  
  // Get currency and savings amount based on country
  const getCurrencyData = (countryCode: string, isEurope: boolean) => {
    // Default to Indian Rupees as shown in the image
    switch(countryCode) {
      case 'IN':
        return { 
          symbol: '₹', 
          amount: '313,800', 
          name: 'rupees',
          isEurope: false
        };
      case 'GB':
        return { 
          symbol: '£', 
          amount: '34,800', 
          name: 'pounds',
          isEurope: false 
        };
      case 'JP':
        return { 
          symbol: '¥', 
          amount: '5,500,000', 
          name: 'yen',
          isEurope: false 
        };
      case 'AU':
        return { 
          symbol: 'A$', 
          amount: '45,000', 
          name: 'Australian dollars',
          isEurope: false 
        };
      case 'CA':
        return { 
          symbol: 'C$', 
          amount: '42,000', 
          name: 'Canadian dollars',
          isEurope: false 
        };
      case 'US':
        return { 
          symbol: '$', 
          amount: '38,000', 
          name: 'dollars',
          isEurope: false 
        };
      default:
        // If in Europe, return euro symbol
        if (isEurope) {
          return { 
            symbol: '€', 
            amount: '102,500', 
            name: 'euros',
            isEurope: true 
          };
        }
        // Default case
        return { 
          symbol: '₹', 
          amount: '313,800', 
          name: 'rupees',
          isEurope: false 
        };
    }
  };
  
  const currencyData = getCurrencyData(countryCode, isEurope);
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="cost-effective-solution" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8D393] text-black mb-4">
            <span className="text-xs font-medium">Cost-Effective Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            How Much Can You Save?
          </h2>
        </div>
        
        <CostComparison 
          currencySymbol={currencyData.symbol} 
          isEurope={currencyData.isEurope} 
        />
        
        {/* Added anchor for Demo Zone section after the cost table */}
        <div id="demozone" className="pt-10"></div>
        
        <div className="bg-white py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <TryItZone />
        </div>
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
