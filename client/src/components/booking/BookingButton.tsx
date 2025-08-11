import React from 'react';
import { ArrowRight } from 'lucide-react';
import Tooltip from '../ui/Tooltip';

const BookingButton = () => {
  const handleClick = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 sm:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-0">
      <Tooltip content="Book Your Luxury Journey" position="top">
        <button
          onClick={handleClick}
          className="flex items-center justify-center gap-2 sm:gap-3 
                   px-6 sm:px-8 lg:px-10 h-[48px] sm:h-[52px] lg:h-[56px]
                   bg-black/95 hover:bg-gold text-gold hover:text-black
                   text-xs sm:text-sm lg:text-[14px] font-montserrat tracking-[0.2em] uppercase font-semibold
                   rounded-full border border-gold/30 hover:border-transparent
                   shadow-[0_0_30px_rgba(147,113,39,0.6)]
                   hover:shadow-[0_0_40px_rgba(147,113,39,0.9)]
                   transition-all duration-300 transform hover:scale-105
                   group whitespace-nowrap w-full sm:w-auto min-w-[200px] sm:min-w-[240px] lg:min-w-[260px]"
        >
          <span>Book Your Journey</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </Tooltip>
    </div>
  );
};

export default BookingButton;