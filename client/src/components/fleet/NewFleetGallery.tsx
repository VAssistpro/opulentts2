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
    <div className="h-full flex items-stretch relative py-8 md:py-12">
      <div className="relative z-10 w-full px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Our Fleet"
            description="Discover our collection of meticulously maintained luxury vehicles"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="w-full max-w-none mt-6 md:mt-8">
            {/* Vehicle Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {FLEET_DATA.map((vehicle, index) => (
                <button
                  key={index}
                  onClick={() => handleVehicleChange(index)}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300
                    ${selectedVehicle === index
                      ? 'bg-gold text-black shadow-lg'
                      : 'bg-white/[0.05] backdrop-blur-xl border border-white/10 text-black dark:text-white hover:bg-white/[0.08] hover:border-gold/30'
                    }`}
                >
                  {vehicle.name}
                </button>
              ))}
            </div>

            {/* Main Fleet Display */}
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none h-full max-h-[calc(100vh-200px)]">
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-stretch h-full">
                {/* Vehicle Details - Left Side */}
                <div className="lg:col-span-2 space-y-4 flex flex-col justify-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-black dark:text-white mb-2">
                      {currentVehicle.name}
                    </h2>
                    <p className="text-sm md:text-base text-black/80 dark:text-white/80 leading-relaxed">
                      {currentVehicle.description}
                    </p>
                  </div>

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

                    {/* Features Grid */}
                    <div>
                      <h4 className="text-lg font-semibold text-gold mb-2">Features</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {currentVehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Star className="w-2.5 h-2.5 text-gold fill-gold" />
                            <span className="text-xs text-black/80 dark:text-white/80">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Image Display - Right Side */}
                <div className="lg:col-span-3 flex flex-col">
                  <div className="relative flex-1">
                    {/* Main Image */}
                    <div className="relative aspect-video bg-black/10 rounded-xl overflow-hidden h-full min-h-[280px] md:min-h-[320px]">
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
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex === currentVehicle.images.length - 1 ? 0 : selectedImageIndex + 1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails */}
                    {currentVehicle.images.length > 1 && (
                      <div className="flex justify-center gap-2 mt-3">
                        {currentVehicle.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-200
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
                            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[9px] bg-black/80 text-white px-1 py-0.5 rounded">
                              {image.type === 'exterior' ? 'Ext' : 'Int'}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Vehicle Counter */}
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-full text-xs text-black/80 dark:text-white/80">
                  Vehicle {selectedVehicle + 1} of {FLEET_DATA.length}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NewFleetGallery;