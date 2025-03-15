
import React, { useRef } from 'react';
import CostComparison from './features/CostComparison';
import TryItZone from './features/TryItZone';
import FeaturesList from './features/FeaturesList';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CostComparison />
        <TryItZone />
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
