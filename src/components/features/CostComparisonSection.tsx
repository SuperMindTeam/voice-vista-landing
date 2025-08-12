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
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="mb-2">
              <img 
                src={card.image}
                alt={card.text}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <p className="text-gray-800 text-xl font-bold leading-relaxed px-8 pb-8 pt-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostComparisonSection;
