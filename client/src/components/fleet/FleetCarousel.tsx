import React, { useState, useEffect } from 'react';
import { FLEET_DATA } from '../../data/fleet';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import ParallaxSection from '../effects/ParallaxSection';

const FleetCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % FLEET_DATA.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + FLEET_DATA.length) % FLEET_DATA.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const vehicle = FLEET_DATA[activeIndex];

  return (
    <div className="relative min-h-[80vh] bg-black overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${vehicle.images[0].url})`,
            opacity: isTransitioning ? 0.5 : 0.2
          }}
        />
      </ParallaxSection>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vehicle Info */}
          <div className="text-white space-y-8">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bodoni font-bold">
              {vehicle.name}
            </h3>
            <p className="text-xl text-white/80">
              {vehicle.description}
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-[#937127]" />
                <span>{vehicle.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#937127]" />
                <span>{vehicle.luggage} Bags</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full bg-[#937127]/10 hover:bg-[#937127]/20 
                         transition-all duration-300"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 rounded-full bg-[#937127]/10 hover:bg-[#937127]/20 
                         transition-all duration-300"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Vehicle Images */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={vehicle.images[0].url}
                alt={vehicle.images[0].alt}
                className={`w-full h-full object-cover transition-all duration-500 
                         ${isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {FLEET_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                       ${activeIndex === index ? 'w-8 bg-[#937127]' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetCarousel;