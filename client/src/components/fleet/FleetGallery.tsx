import React, { useState } from 'react';
import { FLEET_DATA } from '../../data/fleet';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import GlassmorphicCard from '../ui/GlassmorphicCard';

const FleetGallery = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const vehicle = FLEET_DATA[activeVehicle];
  const currentImage = vehicle.images[activeImage];

  const nextVehicle = () => {
    setActiveVehicle((prev) => (prev + 1) % FLEET_DATA.length);
    setActiveImage(0);
  };

  const prevVehicle = () => {
    setActiveVehicle((prev) => (prev - 1 + FLEET_DATA.length) % FLEET_DATA.length);
    setActiveImage(0);
  };

  return (
    <GlassmorphicCard className="p-2 relative overflow-hidden">
      <div className="relative min-h-[600px] rounded-xl overflow-hidden transition-opacity duration-300">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: `url(${currentImage.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-2">
          {/* Vehicle Info */}
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-gold">
              {vehicle.name}
            </h3>
            <p className="text-xl text-white/80">
              {vehicle.description}
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-gold" />
                <span className="text-lg">{vehicle.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-gold" />
                <span className="text-lg">{vehicle.luggage} Bags</span>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Images */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex gap-4 justify-center">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200
                           ${activeImage === index ? 'ring-2 ring-gold scale-105' : 'opacity-50'}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prevVehicle}
          className="pointer-events-auto p-3 rounded-full bg-black/50 text-white hover:bg-gold hover:text-black
                   transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextVehicle}
          className="pointer-events-auto p-3 rounded-full bg-black/50 text-white hover:bg-gold hover:text-black
                   transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </GlassmorphicCard>
  );
};

export default FleetGallery;
