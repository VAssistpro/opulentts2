import React, { useState, useCallback } from 'react';
import { FLEET_DATA } from '../../data/fleet/vehicles';
import { ChevronLeft, ChevronRight, Users, Briefcase, Star } from 'lucide-react';
import type { VehicleImage } from '../../types/fleet';

const FleetShowcase = () => {
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const vehicle = FLEET_DATA[activeVehicleIndex];
  const currentImage = vehicle?.images?.[activeImageIndex];

  const totalVehicles = FLEET_DATA.length;

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
    <div className="container mx-auto px-4 py-8">
      {/* Vehicle Counter */}
      {totalVehicles > 1 && (
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 rounded-full text-white/90 text-sm">
            Vehicle {activeVehicleIndex + 1} of {totalVehicles}
          </span>
        </div>
      )}

      <div className="relative bg-black/50 rounded-xl overflow-hidden min-h-[600px] flex flex-col shadow-lg border border-white/10">
        {/* Background Image */}
        {vehicle.images?.[0] && (
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
              style={{
                backgroundImage: `url(${vehicle.images[0].url})`,
                transform: 'scale(1.15)',
                opacity: 0.15,
                filter: 'blur(3px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          </div>
        )}

        {/* Content Area */}
        <div className="relative z-10 flex flex-grow flex-col lg:flex-row items-stretch gap-8 p-8">
          {/* Vehicle Info */}
          <div className="w-full lg:w-5/12 text-white space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold transition-opacity duration-200 mb-4">
                {vehicle.name}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {vehicle.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-base">{vehicle.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gold" />
                <span className="text-base">{vehicle.luggage} Bags</span>
              </div>
            </div>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xl font-bold text-gold mb-4">
                  Premium Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-gold fill-gold flex-shrink-0" />
                      <span className="text-sm text-white/90">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image Display Area */}
          <div className="w-full lg:w-7/12 flex flex-col">
            {/* Main Image */}
            <div className="relative flex-grow rounded-lg overflow-hidden bg-black/20 min-h-[400px]">
              <img
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.alt || `${vehicle.name} ${currentImage.type}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="eager"
              />

              {/* Image Navigation */}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Type Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 text-white text-sm rounded-full">
                {currentImage.type === 'exterior' ? 'Exterior View' : 'Interior View'}
              </div>

              {/* Image Counter */}
              {vehicle.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {activeImageIndex + 1} / {vehicle.images.length}
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {vehicle.images.length > 1 && (
              <div className="flex gap-3 justify-center mt-4">
                {vehicle.images.map((image: VehicleImage, index: number) => (
                  <button
                    key={image.url + index}
                    onClick={() => handleImageChange(index)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-200
                              ${activeImageIndex === index
                                ? 'ring-2 ring-gold scale-110 opacity-100'
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
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        {totalVehicles > 1 && (
          <div className="relative z-10 flex items-center justify-between px-6 lg:px-10 py-6 border-t border-white/10">
            {/* Previous Vehicle */}
            <button
              onClick={() => handleVehicleChange('prev')}
              className="flex items-center gap-3 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors duration-200"
              aria-label="Previous Vehicle"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Previous</span>
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
              {FLEET_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVehicleIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200
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
              className="flex items-center gap-3 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors duration-200"
              aria-label="Next Vehicle"
            >
              <span className="hidden md:inline text-sm font-medium">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetShowcase;