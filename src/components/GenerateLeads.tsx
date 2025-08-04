import React, { useState, useEffect } from 'react';
import { Users, Megaphone, BarChart3, Search, Calendar } from 'lucide-react';

const AnalyticsQueue = () => {
  const [queue, setQueue] = useState([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  const allActivities = [
    { icon: 'users', text: 'Identified 2,140 customers affected by storm' },
    { icon: 'megaphone', text: 'Drip campaign initiated' },
    { icon: 'chart', text: 'Conversed with 1,912 customers' },
    { icon: 'search', text: 'Identified 357 upsell opportunities' },
    { icon: 'calendar', text: 'Booked 100 jobs' },
    { icon: 'users', text: 'Identified 1,847 high-value prospects' },
    { icon: 'megaphone', text: 'Email sequence launched successfully' },
    { icon: 'chart', text: 'Generated 2,304 qualified leads' },
    { icon: 'search', text: 'Discovered 892 cross-sell opportunities' },
    { icon: 'users', text: 'Segmented 3,156 customers by behavior' },
    { icon: 'megaphone', text: 'Social media campaign activated' },
    { icon: 'chart', text: 'Analyzed 4,521 customer interactions' },
    { icon: 'search', text: 'Found 445 renewal opportunities' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let startDelay;
    let initialInterval;
    let restartTimeout;

    // Initial population phase
    if (isInitializing) {
      startDelay = setTimeout(() => {
        initialInterval = setInterval(() => {
          setQueue(prevQueue => {
            if (prevQueue.length >= 5) {
              setIsInitializing(false);
              return prevQueue;
            }
            
            const newActivity = allActivities[currentIndex % allActivities.length];
            const newItem = {
              id: Date.now() + Math.random(),
              icon: newActivity.icon,
              text: newActivity.text
            };
            
            setCurrentIndex(prev => prev + 1);
            return [...prevQueue, newItem];
          });
        }, 400);
      }, 1000);
    }

    // Handle restart after 4.2 seconds
    if (!isInitializing) {
      restartTimeout = setTimeout(() => {
        // Reset everything to restart the cycle
        setQueue([]);
        setIsInitializing(true);
        setCycleCount(prev => prev + 1);
      }, 500); // 0.5 seconds
    }

    return () => {
      if (initialInterval) clearInterval(initialInterval);
      if (restartTimeout) clearTimeout(restartTimeout);
    };
  }, [isInitializing, currentIndex, cycleCount]);

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'users':
        return <Users className="w-5 h-5 text-gray-600" />;
      case 'megaphone':
        return <Megaphone className="w-5 h-5 text-gray-600" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-gray-600" />;
      case 'search':
        return <Search className="w-5 h-5 text-gray-600" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-gray-600" />;
      default:
        return <Users className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
              Generate the next lead
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Netic's Cultivate engine taps into customer data to proactively identify and capture sales opportunities. It launches targeted autonomous engagement campaigns for memberships or upsells relevant services in real time.
            </p>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-4/5 h-96 rounded-xl shadow-2xl p-6 overflow-hidden" style={{ backgroundColor: '#122429' }}>
              <div className="relative h-full flex flex-col justify-end">
                {queue.map((item, index) => (
                  <div
                    key={item.id}
                    className={`
                      flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200
                      transition-all duration-500 ease-in-out transform
                      ${isInitializing ? 'animate-slide-in-bottom' : ''}
                    `}
                    style={{
                      marginBottom: index === queue.length - 1 ? '0px' : '12px'
                    }}
                  >
                    {getIcon(item.icon)}
                    <span className="text-gray-800 font-medium text-sm flex-1">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-in-bottom {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-in-top {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-out-bottom {
          to {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.5s ease-out;
        }
        
        .animate-slide-in-top {
          animation: slide-in-top 0.5s ease-out;
        }
        
        .animate-slide-out-bottom {
          animation: slide-out-bottom 0.5s ease-in;
        }
      `}</style>
    </section>
  );
};

export default AnalyticsQueue;
