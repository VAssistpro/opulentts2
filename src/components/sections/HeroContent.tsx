import React from 'react';
import HeroTitle from '../hero/HeroTitle';
import HeroSubtext from '../hero/HeroSubtext';
import HeroCallToAction from '../hero/HeroCallToAction';

const HeroContent = () => {
  return (
    <div className="text-center relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6">
      <HeroTitle />
      <HeroSubtext />
      <HeroCallToAction />
    </div>
  );
};

export default HeroContent;