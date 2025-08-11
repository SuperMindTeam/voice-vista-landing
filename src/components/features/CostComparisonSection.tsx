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

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[600px] flex flex-col"
          >
            <div className="flex-1 mb-4 relative">
              <img 
                src={card.image}
                alt={card.text}
                className="w-full h-96 object-cover rounded-lg"
              />

              {index === 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Connector line going through center of all elements */}
                  <div className="absolute top-6 left-1/2 bottom-6 border-l border-dotted border-indigo-500/80" />

                  {/* Top: Inbound Call Answered */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-fade-in">
                    <div className="px-4 py-1.5 rounded-full bg-white/90 text-indigo-600 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Inbound Call Answered</span>
                    </div>
                  </div>

                  {/* Mia voice pill */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-200">
                    <div className="px-4 py-3 rounded-2xl bg-white/95 shadow-lg flex items-center gap-3 min-w-[280px]">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span className="text-black font-medium text-lg">Mia</span>
                      <div className="flex items-center gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className={`bg-indigo-500 rounded-full ${i % 3 === 0 ? 'w-1 h-8' : i % 3 === 1 ? 'w-1 h-6' : 'w-1 h-4'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mid: status tags */}
                  <div className="absolute top-36 left-1/2 -translate-x-1/2 space-y-3 animate-fade-in animate-delay-300">
                    <div className="px-4 py-1.5 rounded-md bg-white/90 text-indigo-600 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Patient ID Verified</span>
                    </div>
                    <div className="px-4 py-1.5 rounded-md bg-white/90 text-indigo-600 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Appt Scheduled</span>
                    </div>
                  </div>

                  {/* Message bubble */}
                  <div className="absolute top-56 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
                    <div className="bg-white rounded-lg p-4 shadow-lg max-w-[320px] text-center">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        Thanks for calling, Jason. Your appointment is confirmed for Mon, Aug 18 @ 3pm.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: delivery + success */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 space-y-2 animate-fade-in animate-delay-700">
                    <div className="px-4 py-1.5 rounded-md bg-white/90 text-indigo-600 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>SMS Delivered</span>
                    </div>
                    <div className="px-4 py-1.5 rounded-md bg-white/90 text-gray-800 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Successful Call</span>
                    </div>
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
