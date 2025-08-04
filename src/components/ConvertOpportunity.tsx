import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const ConvertOpportunity = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: 'Lola Mafoud', type: 'phone', status: 'Job Booked' },
    { id: 2, name: 'Carter Rocket', type: 'message', status: 'Job Booked' },
    { id: 3, name: 'Joseph Good', type: 'phone', status: 'Job Booked' },
    { id: 4, name: 'Calix Huang', type: 'phone', status: 'Job Booked' },
    { id: 5, name: 'Keshav Soni', type: 'phone', status: 'Job Booked' }
  ]);

  const allNames = [
    'Lola Mafoud', 'Carter Rocket', 'Joseph Good', 'Calix Huang', 'Keshav Soni',
    'Emma Johnson', 'Michael Chen', 'Sarah Wilson', 'David Martinez', 'Lisa Thompson',
    'James Rodriguez', 'Anna Garcia', 'Robert Kim', 'Maria Lopez', 'Kevin Brown'
  ];

  const [currentIndex, setCurrentIndex] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue(prevQueue => {
        // Remove the bottom item
        const newQueue = prevQueue.slice(0, -1);
        
        // Add a new item at the top
        const newName = allNames[currentIndex % allNames.length];
        const newItem = {
          id: Date.now(),
          name: newName,
          type: Math.random() > 0.7 ? 'message' : 'phone',
          status: 'Job Booked'
        };
        
        setCurrentIndex(prev => prev + 1);
        return [newItem, ...newQueue];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-4/5 space-y-6">
              <h2 className="text-3xl md:text-5xl font-sanomat font-bold text-gray-900">
                Convert every opportunity
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                SuperMind AI agents automatically book jobs across all channels—calls, text, web-chat, online widgets, and third-party platforms—directly into your CRM or FSM, following your operational rules for flawless execution. By handling routine bookings, our AI lets your team focus solely on mission-critical interactions that drive growth.
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-4/5 h-96 rounded-xl shadow-2xl p-6 overflow-hidden" style={{ backgroundColor: '#122429' }}>
              {/* Header */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center text-white">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium">Resolved</span>
                </div>
              </div>
              
              {/* Queue Container */}
              <div className="relative">
                {queue.map((item, index) => (
                  <div
                    key={item.id}
                    className={`
                      flex items-center justify-between p-4 rounded-lg shadow-sm border border-gray-200
                      transition-all duration-500 ease-in-out transform
                      ${index === 0 ? 'animate-slide-in-top' : ''}
                      ${index === queue.length - 1 ? 'animate-slide-out-bottom opacity-80' : ''}
                    `}
                    style={{
                      backgroundColor: '#F3ECE6',
                      opacity: index === queue.length - 1 ? 0.7 : 1,
                      marginBottom: '8px'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      {item.type === 'phone' ? (
                        <Phone className="w-5 h-5 text-green-600 fill-current" />
                      ) : (
                        <MessageSquare className="w-5 h-5 text-black fill-current" />
                      )}
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                    
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
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

export default ConvertOpportunity;
