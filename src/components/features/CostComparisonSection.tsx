import React from 'react';

const CostComparisonSection = () => {
  const cards = [
    {
      image: "/lovable-uploads/Inbound.jpg",
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
                  {/* Connector line */}
                  <div className="absolute top-6 right-16 bottom-6 border-l border-dotted border-indigo-500/80" />

                  {/* Top-right: Inbound Call Answered */}
                  <div className="absolute top-6 right-4 animate-fade-in">
                    <div className="px-4 py-1.5 rounded-full bg-white/90 text-indigo-600 text-sm font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Inbound Call Answered</span>
                    </div>
                  </div>

                  {/* Mid-right: status tags */}
                  <div className="absolute top-28 right-4 space-y-3 animate-fade-in animate-delay-300">
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
                  <div className="absolute right-16 -translate-x-1/2 bottom-24 max-w-[60%] animate-fade-in animate-delay-500">
                    <img
                      src="/lovable-uploads/calender.jpg"
                      alt="Appointment confirmation calendar"
                      className="rounded-2xl shadow-xl w-56 h-32 object-cover"
                    />
                  </div>

                  {/* Bottom-right: delivery + success */}
                  <div className="absolute right-4 bottom-6 space-y-2 animate-fade-in animate-delay-700">
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
