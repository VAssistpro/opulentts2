import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import type { Vehicle } from '../../types';

interface VehicleInfoProps {
  vehicle: Vehicle;
}

export const VehicleInfo: React.FC<VehicleInfoProps> = ({ vehicle }) => {
  return (
    <div className="w-full lg:w-1/3 space-y-6">
      <h3 className="text-3xl sm:text-4xl font-bodoni font-bold text-gold">
        {vehicle.name}
      </h3>
      <p className="text-lg text-white/80">
        {vehicle.description}
      </p>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-gold" />
          <span className="text-white/90">{vehicle.capacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-gold" />
          <span className="text-white/90">{vehicle.luggage} Bags</span>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mt-8">
        <h4 className="text-xl font-bodoni font-bold text-gold mb-4">Features</h4>
        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-white/90">Leather Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-white/90">Climate Control</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-white/90">WiFi Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-white/90">Bottled Water</span>
          </div>
        </div>
      </div>
    </div>
  );
};