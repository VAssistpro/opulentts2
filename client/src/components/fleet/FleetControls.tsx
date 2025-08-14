import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FleetControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const FleetControls: React.FC<FleetControlsProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  total
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-8">
      <button
        onClick={onPrevious}
        className="transform -translate-x-4 w-16 h-16 rounded-full 
                 bg-black/80 text-gold border border-gold/30
                 hover:bg-gold hover:text-black
                 transition-all duration-300 group"
        aria-label="Previous vehicle"
      >
        <ChevronLeft className="w-8 h-8 mx-auto group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform" />
      </button>
      
      <button
        onClick={onNext}
        className="transform translate-x-4 w-16 h-16 rounded-full 
                 bg-black/80 text-gold border border-gold/30
                 hover:bg-gold hover:text-black
                 transition-all duration-300 group"
        aria-label="Next vehicle"
      >
        <ChevronRight className="w-8 h-8 mx-auto group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform" />
      </button>
    </div>
  );
};

export default FleetControls;
