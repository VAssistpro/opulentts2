import React from 'react';

const MobileHeroContent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="text-center mt-16 py-12"> {/* Added vertical padding */}
        {/* Main Heading */}
        <h1 className="font-playfair text-white">
          <span className="block text-[3rem] xs:text-[3.5rem] sm:text-5xl font-bold tracking-wide leading-[1.2] drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]">
            New York's Premier
          </span>
          <span className="block text-[3rem] xs:text-[3.5rem] sm:text-5xl font-bold tracking-wide leading-[1.2] drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]">
            Chauffeur Service
          </span>
        </h1>

        {/* Gold divider */}
        <div className="gold-divider mt-8 mb-8"></div>

        {/* Subtext - Updated to match desktop text */}
        <p className="mt-6 text-xl xs:text-2xl sm:text-2xl text-white font-medium max-w-[340px] mx-auto leading-relaxed tracking-wide">
          Travel in comfort and style with{' '}
          <span className="text-[#FFD700] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Opulent Transport Solutions
          </span>
          {' – '}
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            premium chauffeured services across New York City, JFK, LGA, EWR Airports, and Charter/As directed luxury transportation.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MobileHeroContent;