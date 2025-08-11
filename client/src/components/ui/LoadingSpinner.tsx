import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center space-y-4 py-8">
    <Loader2 className="w-8 h-8 text-gold animate-spin" />
    <p className="text-gray-600 dark:text-gray-400">Loading booking system...</p>
  </div>
);

export default LoadingSpinner;