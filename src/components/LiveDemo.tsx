import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

const LiveDemo = () => {
  const categories = [
    { icon: "🐾", name: "Vet Care" },
    { icon: "🔬", name: "Dermatology" },
    { icon: "🦴", name: "Orthopedics" },
    { icon: "👂", name: "ENT" },
    { icon: "🦷", name: "Dentist" },
    { icon: "🚨", name: "Urgent Care" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Categories */}
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-lg font-medium text-gray-700">{category.name}</span>
                </div>
              ))}
            </div>

            {/* Center - Main content */}
            <div className="text-center lg:col-span-1">
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  HEARING IS BELIEVING
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Experience a live call (or text) with
                  <br />
                  <span className="text-blue-600">Mia, our AI agent</span>
                </h2>
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-3 text-lg font-medium">
                  <Mic className="w-5 h-5 mr-2" />
                  Start Talking
                </Button>
              </div>
            </div>

            {/* Right side - Timer/Stats */}
            <div className="text-center lg:text-right">
              <div className="text-4xl font-mono font-bold text-gray-400 mb-2">
                00:00:00
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                LIVE TRANSCRIPT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;