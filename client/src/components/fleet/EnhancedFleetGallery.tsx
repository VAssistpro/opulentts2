import React, { useState, useRef } from 'react';
import { FLEET_DATA } from '../../data/fleet/vehicles';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import AnimatedElement from '../ui/AnimatedElement';
import type { VehicleImage } from '../../types/fleet';

const EnhancedFleetGallery = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useMouseParallax(0.03);

  const vehicle = FLEET_DATA[activeVehicle];
  const currentImage = vehicle.images[activeImage];

  const handleImageChange = (index: number) => {
    setIsTransitioning(true);
    setActiveImage(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleVehicleChange = (direction: 'next' | 'prev') => {
    setIsTransitioning(true);
    setActiveImage(0);
    setActiveVehicle(prev => {
      if (direction === 'next') {
        return (prev + 1) % FLEET_DATA.length;
      }
      return (prev - 1 + FLEET_DATA.length) % FLEET_DATA.length;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="container mx-auto px-4 py-12" ref={containerRef}>
      <div className="relative min-h-[80vh] bg-black rounded-xl overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{ 
            transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${currentImage.url})`,
              transform: 'scale(1.1)',
              opacity: 0.2
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-12 p-8">
          {/* Vehicle Info */}
          <div className="w-full md:w-1/2 text-white space-y-8">
            <AnimatedElement>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bodoni font-bold">
                {vehicle.name}
              </h3>
              <p className="text-xl text-white/80 mt-4">
                {vehicle.description}
              </p>
              <div className="flex gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#937127]" />
                  <span>{vehicle.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-[#937127]" />
                  <span>{vehicle.luggage} Bags</span>
                </div>
              </div>
              
              {/* Features Section */}
              {vehicle.features && vehicle.features.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-2xl font-bodoni font-bold text-gold mb-4">
                    Features
                  </h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold"></span>
                        <span className="text-white/90">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AnimatedElement>
          </div>

          {/* Main Image Display */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 transition-transform duration-75 ease-out"
              style={{ 
                transform: `translate3d(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px, 0)`,
              }}
            >
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className={`w-full h-full object-cover transition-all duration-500
                         ${isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 px-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={() => handleVehicleChange('prev')}
                className="p-4 rounded-full bg-[#937127]/10 hover:bg-[#937127]/20 
                         transition-all duration-300 text-white"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleVehicleChange('next')}
                className="p-4 rounded-full bg-[#937127]/10 hover:bg-[#937127]/20 
                         transition-all duration-300 text-white"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-4">
              {vehicle.images.map((image: VehicleImage, index: number) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300
                           ${activeImage === index ? 'ring-2 ring-[#937127] scale-110' : 'opacity-50'}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-white">
                    {image.type === 'exterior' ? 'Exterior' : 'Interior'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedFleetGallery;