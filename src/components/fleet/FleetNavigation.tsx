import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FleetNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const FleetNavigation: React.FC<FleetNavigationProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  total
}) => {
  return (
    <div className="flex items-center justify-between gap-2 mt-2">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="flex items-center gap-1 px-2 py-1 rounded-lg
                 bg-black/80 backdrop-blur-sm border border-gold/20
                 text-gold text-[10px] xs:text-xs font-medium
                 transition-all duration-300 active:scale-95
                 hover:border-gold/40 hover:bg-black/90
                 shadow-[0_0_10px_rgba(147,113,39,0.2)]"
        aria-label="Previous vehicle"
      >
        <ChevronLeft className="w-3 h-3" />
        <span>Previous</span>
      </button>

      {/* Counter */}
      <span className="text-[10px] xs:text-xs text-gold/80 bg-black/50 px-2 py-1 rounded-md">
        {currentIndex + 1} / {total}
      </span>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="flex items-center gap-1 px-2 py-1 rounded-lg
                 bg-black/80 backdrop-blur-sm border border-gold/20
                 text-gold text-[10px] xs:text-xs font-medium
                 transition-all duration-300 active:scale-95
                 hover:border-gold/40 hover:bg-black/90
                 shadow-[0_0_10px_rgba(147,113,39,0.2)]"
        aria-label="Next vehicle"
      >
        <span>Next</span>
        <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default FleetNavigation;