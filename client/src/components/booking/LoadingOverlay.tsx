import React from 'react';
import { Phone } from 'lucide-react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-bg p-8">
      <div className="mb-6">Loading booking system...</div>
      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
        <Phone className="w-5 h-5 text-gold" />
        <span>Having trouble? Call us at (516) 324-5483</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;