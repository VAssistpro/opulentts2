import React, { useState } from 'react';
import { FLEET_DATA } from '../../data/fleet/vehicles';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Users, Briefcase, Star } from 'lucide-react';

const NewFleetGallery = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const currentVehicle = FLEET_DATA[selectedVehicle];
  const currentImage = currentVehicle.images[selectedImageIndex];

  const handleVehicleChange = (index: number) => {
    setSelectedVehicle(index);
    setSelectedImageIndex(0); // Reset to first image when changing vehicles
  };

  return (
    <div className="absolute inset-0 p-2">
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl 
                    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none 
                    h-full w-full flex flex-col">
        
        <AnimatedSection>
          {/* Header Section */}
          <div className="flex-shrink-0 px-4 pt-4 pb-3">
            <SectionTitle
              title="Our Fleet"
              description="Discover our collection of meticulously maintained luxury vehicles"
            />
          </div>
          
          {/* Header Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-4"></div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          {/* Vehicle Selection Tabs */}
          <div className="flex-shrink-0 flex flex-wrap justify-center gap-1 md:gap-2 my-4 px-4">
            {FLEET_DATA.map((vehicle, index) => (
              <button
                key={index}
                onClick={() => handleVehicleChange(index)}
                className={`px-2 md:px-3 py-1.5 md:py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap
                  ${selectedVehicle === index
                    ? 'bg-gold text-black shadow-lg'
                    : 'bg-white/[0.05] backdrop-blur-xl border border-white/10 text-black dark:text-white hover:bg-white/[0.08] hover:border-gold/30'
                  }`}
              >
                {vehicle.name}
              </button>
            ))}
          </div>
          
          {/* Tabs Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4 mb-4"></div>

          {/* Main Content Area */}
          <div className="flex-1 px-4 pb-4 relative min-h-0">
              
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-6 h-full">
                {/* Vehicle Details - Left Side */}
                <div className="xl:col-span-2 space-y-3 flex flex-col justify-center order-2 xl:order-1 min-h-0 xl:pr-4 xl:border-r xl:border-white/10">
                  <div>
                    <h2 className="text-xl md:text-2xl xl:text-3xl font-playfair font-bold text-black dark:text-white mb-2">
                      {currentVehicle.name}
                    </h2>
                    <p className="text-sm text-black/80 dark:text-white/80 leading-relaxed">
                      {currentVehicle.description}
                    </p>
                  </div>

                  {/* Vehicle Specs Divider */}
                  <div className="h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent"></div>

                  {/* Capacity & Features */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-sm text-black dark:text-white font-medium">{currentVehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gold" />
                        <span className="text-sm text-black dark:text-white font-medium">{currentVehicle.luggage} Bags</span>
                      </div>
                    </div>

                    {/* Features Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-gold/30"></div>

                    {/* Features Grid */}
                    <div>
                      <h4 className="text-base font-semibold text-gold mb-2">Features</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {currentVehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Star className="w-2.5 h-2.5 text-gold fill-gold flex-shrink-0" />
                            <span className="text-xs text-black/80 dark:text-white/80 truncate">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Image Display - Right Side */}
                <div className="xl:col-span-3 flex flex-col order-1 xl:order-2 min-h-0 xl:pl-4">
                  <div className="relative flex-1 w-full max-w-full min-h-0">
                    {/* Main Image */}
                    <div className="relative bg-black/10 rounded-lg overflow-hidden w-full h-full flex-1">
                      <img
                        src={currentImage.url}
                        alt={currentImage.alt}
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                      
                      {/* Image Type Badge */}
                      <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded-full">
                        {currentImage.type === 'exterior' ? 'Exterior' : 'Interior'}
                      </div>

                      {/* Navigation Arrows */}
                      {currentVehicle.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? currentVehicle.images.length - 1 : selectedImageIndex - 1)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex === currentVehicle.images.length - 1 ? 0 : selectedImageIndex + 1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails */}
                    {currentVehicle.images.length > 1 && (
                      <div className="flex justify-center gap-1.5 mt-2 overflow-x-auto px-2">
                        {currentVehicle.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`relative w-12 h-9 rounded overflow-hidden transition-all duration-200 flex-shrink-0
                              ${selectedImageIndex === index
                                ? 'ring-2 ring-gold scale-105'
                                : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-gold/50'
                              }`}
                          >
                            <img
                              src={image.url}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] bg-black/80 text-white px-1 py-0.5 rounded">
                              {image.type === 'exterior' ? 'Ext' : 'Int'}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-8 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            
            {/* Vehicle Counter */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/30 border border-gold/20 rounded-full text-xs text-gold font-medium">
                Vehicle {selectedVehicle + 1} of {FLEET_DATA.length}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NewFleetGallery;