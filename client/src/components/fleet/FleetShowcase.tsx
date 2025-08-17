import React, { useState, useCallback } from 'react';
import { FLEET_DATA } from '../../data/fleet/vehicles';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import type { VehicleImage } from '../../types/fleet';

const FleetShowcase = () => {
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const vehicle = FLEET_DATA[activeVehicleIndex];
  const currentImage = vehicle?.images?.[activeImageIndex];

  const totalVehicles = FLEET_DATA.length;
  const prevVehicleIndex = totalVehicles === 0 ? 0 : (activeVehicleIndex - 1 + totalVehicles) % totalVehicles;
  const nextVehicleIndex = totalVehicles === 0 ? 0 : (activeVehicleIndex + 1) % totalVehicles;

  const prevVehicle = FLEET_DATA[prevVehicleIndex];
  const nextVehicle = FLEET_DATA[nextVehicleIndex];

  const handleImageChange = useCallback((newIndex: number) => {
    if (!vehicle || !vehicle.images || vehicle.images.length <= 1 || newIndex === activeImageIndex) return;
    const totalImages = vehicle.images.length;
    const wrappedIndex = (newIndex + totalImages) % totalImages;
    setActiveImageIndex(wrappedIndex);
  }, [activeImageIndex, vehicle]);

  const handleNextImage = useCallback(() => handleImageChange(activeImageIndex + 1), [activeImageIndex, handleImageChange]);
  const handlePrevImage = useCallback(() => handleImageChange(activeImageIndex - 1), [activeImageIndex, handleImageChange]);

  const handleVehicleChange = useCallback((direction: 'next' | 'prev') => {
    if (FLEET_DATA.length === 0) return;
    
    setActiveImageIndex(0);
    setActiveVehicleIndex(prev => {
      const totalVehicles = FLEET_DATA.length;
      return direction === 'next'
        ? (prev + 1) % totalVehicles
        : (prev - 1 + totalVehicles) % totalVehicles;
    });
  }, []);

  if (!FLEET_DATA || FLEET_DATA.length === 0 || !vehicle || !currentImage) {
    return (
      <div className="container mx-auto px-3 py-10 text-white text-center">
        {(!FLEET_DATA || FLEET_DATA.length === 0) ? "No fleet data available." : "Loading fleet..."}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-0">
      {/* Vehicle Counter */}
      {totalVehicles > 1 && (
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 rounded-full text-white/90 text-sm">
            Vehicle {activeVehicleIndex + 1} of {totalVehicles}
          </span>
        </div>
      )}

      <div className="relative bg-black/50 rounded-xl overflow-hidden min-h-[520px] md:min-h-[550px] lg:min-h-[580px] flex flex-col shadow-lg border border-white/10">
        {/* Background Image */}
        {vehicle.images?.[0] && (
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
              style={{
                backgroundImage: `url(${vehicle.images[0].url})`,
                transform: 'scale(1.15)',
                opacity: 0.25,
                filter: 'blur(3px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
          </div>
        )}

        {/* Content Area */}
        <div className="relative z-10 flex flex-grow flex-col md:flex-row items-center gap-4 md:gap-6 p-3 md:p-6 pb-2">
          {/* Vehicle Info */}
          <div className="w-full md:w-4/12 text-white space-y-3 md:space-y-4 order-2 md:order-1 self-center md:self-auto">
            <h3 className="text-3xl md:text-4xl font-bodoni font-bold transition-opacity duration-200">
              {vehicle.name}
            </h3>
            <p className="text-base md:text-lg text-white/80 mt-1 md:mt-2">
              {vehicle.description}
            </p>
            <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2 mt-3 md:mt-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className='text-sm md:text-base'>{vehicle.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className='text-sm md:text-base'>{vehicle.luggage} Bags</span>
              </div>
            </div>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                <h4 className="text-lg md:text-xl font-bodoni font-bold text-gold">
                  Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 md:gap-y-1.5">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1.5 md:gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                      <span className="text-xs md:text-sm text-white/90">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image Display Area */}
          <div className="w-full md:w-8/12 relative aspect-video rounded-lg overflow-hidden order-1 md:order-2 flex flex-col">
            {/* Main Image */}
            <div className="relative w-full flex-grow rounded-lg overflow-hidden">
              <img
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.alt || `${vehicle.name} ${currentImage.type}`}
                className="w-full h-full object-contain transition-opacity duration-200"
                loading="eager"
              />

              {/* Image Navigation */}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {vehicle.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {activeImageIndex + 1} / {vehicle.images.length}
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {vehicle.images.length > 1 && (
              <div className="relative z-10 px-0 md:px-0 pt-0 pb-0 mt-3">
                <div className="flex gap-2 justify-center">
                  {vehicle.images.map((image: VehicleImage, index: number) => (
                    <button
                      key={image.url + index}
                      onClick={() => handleImageChange(index)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-200
                                ${activeImageIndex === index
                                  ? 'ring-2 ring-gold scale-105 opacity-100'
                                  : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-gold/50'}`}
                      aria-label={`View ${vehicle.name} ${image.type} (${index + 1} of ${vehicle.images.length})`}
                    >
                      <img
                        src={image.url}
                        alt={`Thumbnail for ${image.alt || vehicle.name + ' ' + image.type}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/70">
                        {image.type === 'exterior' ? 'Ext' : 'Int'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        {totalVehicles > 1 && (
          <div className="relative z-10 flex items-center justify-between px-3 md:px-6 lg:px-10 pt-4 pb-4">
            {/* Previous Vehicle */}
            <button
              onClick={() => handleVehicleChange('prev')}
              className="flex items-center gap-4 group"
              aria-label="Previous Vehicle"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-gold hover:text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              </div>
              {prevVehicle && (
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-white/80 text-sm font-semibold">Previous</span>
                </div>
              )}
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 flex-grow">
              {FLEET_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVehicleIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200
                        ${activeVehicleIndex === index
                          ? 'w-8 bg-gold'
                          : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to vehicle ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Vehicle */}
            <button
              onClick={() => handleVehicleChange('next')}
              className="flex items-center gap-4 group"
              aria-label="Next Vehicle"
            >
              {nextVehicle && (
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-white/80 text-sm font-semibold">Next</span>
                </div>
              )}
              <div className="w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-gold hover:text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetShowcase;
