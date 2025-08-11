import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

interface BookingFormProps {
  isInitialized: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ isInitialized }) => {
  const bookingLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isInitialized && bookingLinkRef.current) {
      // Force widget to reinitialize on this element
      window.ORES_WIDGET?.init();
    }
  }, [isInitialized]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full mb-8">
        <a
          ref={bookingLinkRef}
          href="https://book.mylimobiz.com/v4/virk"
          data-ores-widget="https://delightful-travesseiro-0d7366.netlify.app/#book"
          data-ores-alias="virk"
          className="block w-full text-center text-lg font-semibold text-gray-800 dark:text-dark-text hover:text-gold transition-colors duration-300"
        >
          Online Reservations
        </a>
      </div>

      {!isInitialized && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Having trouble with the booking system?
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-bg px-6 py-3 rounded-lg shadow-sm">
            <Phone className="w-5 h-5 text-gold" />
            <span>Call us at (516) 324-5483</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;