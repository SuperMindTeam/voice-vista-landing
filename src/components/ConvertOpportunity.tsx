import React from 'react';

const ConvertOpportunity = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
              Convert every opportunity
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SuperMind AI agents automatically book jobs across all channels—calls, text, web-chat, online widgets, and third-party platforms—directly into your CRM or FSM, following your operational rules for flawless execution. By handling routine bookings, our AI lets your team focus solely on mission-critical interactions that drive growth.
            </p>
          </div>
          
          <div className="relative flex justify-center">
            <video 
              className="w-4/5 h-96 object-cover rounded-xl shadow-2xl"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/lovable-uploads/inBoundCalls.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertOpportunity;
