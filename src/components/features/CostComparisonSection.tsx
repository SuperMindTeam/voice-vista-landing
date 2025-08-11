import React from 'react';

const CostComparisonSection = () => {
  const cards = [
    {
      image: "/lovable-uploads/PhoneCaller.png",
      text: "Automate appointment booking & reminders"
    },
    {
      image: "/lovable-uploads/80a9a018-2c20-4f9d-96ba-b07242658a40.png", 
      text: "24 hours availability for your front desk"
    },
    {
      image: "/lovable-uploads/dee07438-1695-4ee4-8811-ab427fded354.png",
      text: "High Conversion Rates"
    }
  ];

  return (
    <div className="text-center mb-16 -mt-8">
      <h2 className="text-3xl md:text-5xl font-sanomat font-bold mb-4 text-white">
        80% Decrease in Costs
      </h2>
     <hr className="border-t border-white/50 mb-6 max-w-3xl mx-auto" />
     <p className="text-4xl text-white/90 mb-12 max-w-3xl mx-auto">
        AI vs Humans
     </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[540px] flex flex-col"
          >
            <div className="flex-1 mb-4 relative">
              <img 
                src={card.image}
                alt={card.text}
                className="w-full h-80 object-cover rounded-lg"
              />

              {index === 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top-right: Inbound Call Answered */}
                  <div className="absolute top-4 right-4 animate-fade-in">
                    <div className="px-3 py-1 rounded-full bg-white/90 text-indigo-600 text-xs font-semibold shadow">
                      Inbound Call Answered
                    </div>
                  </div>

                  {/* Mid-right: Mia voice pill with waveform */}
                  <div className="absolute top-20 right-6 animate-fade-in animate-delay-200">
                    <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-lg">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow" />
                      <span className="font-medium text-gray-800">Mia</span>
                      <div className="flex items-end gap-1">
                        <span className="w-1 h-2 bg-indigo-500 rounded-sm pulse" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-3 bg-indigo-500/90 rounded-sm pulse" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-4 bg-indigo-500 rounded-sm pulse" style={{ animationDelay: '300ms' }} />
                        <span className="w-1 h-3 bg-indigo-500/90 rounded-sm pulse" style={{ animationDelay: '450ms' }} />
                        <span className="w-1 h-2 bg-indigo-500 rounded-sm pulse" style={{ animationDelay: '600ms' }} />
                      </div>
                    </div>
                  </div>

                  {/* Mid-right: status tags */}
                  <div className="absolute top-44 right-6 space-y-2 animate-fade-in animate-delay-300">
                    <div className="px-3 py-1 rounded-md bg-white/90 text-indigo-600 text-xs font-semibold shadow">Patient ID Verified</div>
                    <div className="px-3 py-1 rounded-md bg-white/90 text-indigo-600 text-xs font-semibold shadow">Appt Scheduled</div>
                  </div>

                  {/* Message bubble */}
                  <div className="absolute left-6 bottom-20 max-w-[75%] animate-fade-in animate-delay-500">
                    <div className="bg-white rounded-2xl shadow-xl p-4 text-gray-900 text-sm md:text-base">
                      Thanks for calling, Jason. Your appointment is confirmed for Mon, Aug 18 @ 3pm.
                    </div>
                  </div>

                  {/* Bottom-right: delivery + success */}
                  <div className="absolute right-6 bottom-6 space-y-2 animate-fade-in animate-delay-700">
                    <div className="px-3 py-1 rounded-md bg-white/90 text-indigo-600 text-xs font-semibold shadow">SMS Delivered</div>
                    <div className="px-3 py-1 rounded-md bg-white/90 text-gray-800 text-xs font-semibold shadow">Successful Call</div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostComparisonSection;
