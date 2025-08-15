import React, { useState } from 'react';
import { Vehicle } from '../../types/fleet';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import GlassmorphicCard from '../ui/GlassmorphicCard';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  return (
    <GlassmorphicCard
      className="w-full h-[600px]"
      glowIntensity="strong"
      glowColor="rgba(147, 113, 39, 0.4)"
    >
      <div className="relative w-full h-full">
        <img
          src={vehicle.images[currentImageIndex].url}
          alt={vehicle.images[currentImageIndex].alt}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out
                   group-hover:scale-[1.02] will-change-transform"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {vehicle.images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                       bg-black/50 text-white flex items-center justify-center opacity-0
                       group-hover:opacity-100 transition-all duration-300 ease-out hover:bg-gold
                       hover:text-black will-change-transform hover:scale-[0.98]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                       bg-black/50 text-white flex items-center justify-center opacity-0
                       group-hover:opacity-100 transition-all duration-300 ease-out hover:bg-gold
                       hover:text-black will-change-transform hover:scale-[0.98]"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-bodoni text-2xl font-bold text-white mb-4">
            {vehicle.name}
          </h3>
          <div className="flex items-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-lg text-white/90">{vehicle.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gold" />
              <span className="text-lg text-white/90">{vehicle.luggage} Bags</span>
            </div>
          </div>
          <p className="text-base text-white/80 leading-relaxed mb-6">
            {vehicle.description}
          </p>
          
          {/* Features Section */}
          {vehicle.features && vehicle.features.length > 0 && (
            <div>
              <h4 className="text-xl font-bodoni font-bold text-gold mb-3">
                Features
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span className="text-white/90">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default VehicleCard;
