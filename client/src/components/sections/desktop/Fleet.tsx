import React, { useState } from 'react';
import { FLEET_DATA } from '../../../data/fleet/vehicles';
import AnimatedSection from '../../ui/AnimatedSection';
import SectionTitle from '../../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Users, Briefcase, Star } from 'lucide-react';

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const currentVehicle = FLEET_DATA[selectedVehicle];
  const currentImage = currentVehicle.images[selectedImageIndex];

  const handleVehicleChange = (index: number) => {
    setSelectedVehicle(index);
    setSelectedImageIndex(0); // Reset to first image when changing vehicles
  };

  return (
    <div className="h-full flex items-center justify-center relative py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Our Fleet"
            description="Discover our collection of meticulously maintained luxury vehicles"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto mt-10 md:mt-12">
            {/* Vehicle Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {FLEET_DATA.map((vehicle, index) => (
                <button
                  key={index}
                  onClick={() => handleVehicleChange(index)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedVehicle === index
                      ? 'bg-gold text-black shadow-lg'
                      : 'bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white hover:bg-white/[0.08] hover:border-gold/30'
                    }`}
                >
                  {vehicle.name}
                </button>
              ))}
            </div>

            {/* Main Fleet Display */}
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.37)]
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Vehicle Details - Left Side */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black dark:text-white mb-3">
                      {currentVehicle.name}
                    </h2>
                    <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                      {currentVehicle.description}
                    </p>
                  </div>

                  {/* Capacity & Features */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        <span className="text-black dark:text-white font-medium">{currentVehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gold" />
                        <span className="text-black dark:text-white font-medium">{currentVehicle.luggage} Bags</span>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h4 className="text-xl font-semibold text-gold mb-3">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentVehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-gold fill-gold" />
                            <span className="text-sm text-black/80 dark:text-white/80">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Image Display - Center */}
                <div className="lg:col-span-3">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative aspect-video bg-black/10 rounded-xl overflow-hidden">
                      <img
                        src={currentImage.url}
                        alt={currentImage.alt}
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                      
                      {/* Image Type Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 text-white text-sm rounded-full">
                        {currentImage.type === 'exterior' ? 'Exterior' : 'Interior'}
                      </div>

                      {/* Navigation Arrows */}
                      {currentVehicle.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? currentVehicle.images.length - 1 : selectedImageIndex - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex === currentVehicle.images.length - 1 ? 0 : selectedImageIndex + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-gold hover:text-black 
                                     text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails */}
                    {currentVehicle.images.length > 1 && (
                      <div className="flex justify-center gap-3 mt-4">
                        {currentVehicle.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-200
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
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] bg-black/80 text-white px-1.5 py-0.5 rounded">
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
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full text-sm text-black/80 dark:text-white/80">
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

export default Fleet;