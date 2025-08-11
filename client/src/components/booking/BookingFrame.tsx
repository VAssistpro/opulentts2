import React from 'react';
import { Phone } from 'lucide-react';

const BookingFrame = () => {
  return (
    <div className="space-y-8">
      <div className="w-full min-h-[700px] relative bg-white dark:bg-dark-bg rounded-lg overflow-hidden">
        <iframe
          src="https://book.mylimobiz.com/v4/virk"
          title="Booking Widget"
          className="w-full h-full absolute inset-0 border-none"
          allow="payment"
        />
      </div>

      <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Available 24/7
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Instant Confirmation
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Need immediate assistance?
        </p>
        <div className="inline-flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-bg px-6 py-3 rounded-lg shadow-sm">
          <Phone className="w-5 h-5 text-gold" />
          <span>Call us at (516) 324-5483</span>
        </div>
      </div>
    </div>
  );
};

export default BookingFrame;