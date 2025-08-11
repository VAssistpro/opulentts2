import React from 'react';
import { Phone } from 'lucide-react';

const ErrorMessage = () => (
  <div className="text-center space-y-4 py-8">
    <div className="text-red-500 mb-4">
      Unable to load the booking system at the moment.
    </div>
    <div className="inline-flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-bg px-6 py-3 rounded-lg shadow-sm">
      <Phone className="w-5 h-5 text-gold" />
      <span>Please call us at (516) 324-5483 to make a reservation</span>
    </div>
  </div>
);

export default ErrorMessage;