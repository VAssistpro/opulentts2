import React from 'react';
import VideoBackground from '../video/VideoBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <VideoBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;