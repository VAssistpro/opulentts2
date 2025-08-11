import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import LoadingOverlay from './LoadingOverlay';

const BookingWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="booking-container bg-white dark:bg-dark-bg rounded-lg shadow-xl shadow-gold/20 
                  hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
      <div className="custom-scrollbar">
        <iframe
          src="https://book.mylimobiz.com/v4/virk"
          title="Booking Widget"
          className="w-full min-h-[650px] border-none"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      {!isLoaded && <LoadingOverlay />}
    </div>
  );
};

export default BookingWidget;