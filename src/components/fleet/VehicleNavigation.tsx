import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VehicleNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const VehicleNavigation: React.FC<VehicleNavigationProps> = ({
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={onPrevious}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 hover:bg-gold/20 
                 text-gold transition-all duration-300 text-sm"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>
      <button
        onClick={onNext}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 hover:bg-gold/20 
                 text-gold transition-all duration-300 text-sm"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};