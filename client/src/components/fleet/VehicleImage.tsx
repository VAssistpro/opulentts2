import React from 'react';
import type { Vehicle } from '../../types';

interface VehicleImageProps {
  vehicle: Vehicle;
  activeImage: number;
  setActiveImage: (index: number) => void;
}

export const VehicleImage: React.FC<VehicleImageProps> = ({ 
  vehicle, 
  activeImage, 
  setActiveImage 
}) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
        <img
          src={vehicle.images[activeImage].url}
          alt={vehicle.images[activeImage].alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex gap-4 mt-4">
        {vehicle.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all duration-300
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
  );
};