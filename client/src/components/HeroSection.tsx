import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          OPULENT
          <br />
          <span className="text-yellow-500">TRANSPORT</span>
          <br />
          SOLUTIONS
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
          Where Excellence Meets Luxury
        </p>
        
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
          Experience unparalleled sophistication with our curated fleet of ultra-premium vehicles, 
          elite professional chauffeurs, and white-glove concierge service that defines luxury 
          transportation throughout New York.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="flex items-center space-x-3 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-6 h-6" />
            <span>Book Your Journey</span>
          </button>
          
          <button className="flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Phone className="w-6 h-6" />
            <span>Call (516) 324-5483</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;