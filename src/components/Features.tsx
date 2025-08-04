
import React, { useRef } from 'react';
import CostComparison from './features/CostComparison';
import CostComparisonSection from './features/CostComparisonSection';
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
    <section id="features" className="py-20" style={{ backgroundColor: '#767067' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Added anchor for Demo Zone section after the cost table */}
        <div id="demozone" className="pt-10"></div>
        
        <CostComparisonSection />
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
