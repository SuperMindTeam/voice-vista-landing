import React from 'react';

const CostComparisonSection = () => {
  const cards = [
    {
      image: "/lovable-uploads/27d990bc-60ac-4996-9a71-938a5636fd7d.png",
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
    <section className="py-16 px-4" style={{ backgroundColor: '#767067' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
          80% Decrease <br />in Costs vs Humans
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          AI operators are less expensive than humans
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <img 
                  src={card.image}
                  alt={card.text}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-800 text-lg font-medium leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostComparisonSection;
