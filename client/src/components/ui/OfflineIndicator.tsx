import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Wifi } from 'lucide-react';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';

const OfflineIndicator: React.FC = () => {
  const { isOnline, effectiveType } = useNetworkStatus();

  const getConnectionQuality = () => {
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return { color: 'text-red-500', label: 'Slow Connection' };
      case '3g':
        return { color: 'text-yellow-500', label: 'Moderate Connection' };
      case '4g':
        return { color: 'text-green-500', label: 'Good Connection' };
      default:
        return { color: 'text-gray-500', label: 'Unknown Connection' };
    }
  };

  const connectionQuality = getConnectionQuality();

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          <div className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
            <WifiOff size={16} />
            <span className="text-sm font-medium">You're offline</span>
          </div>
        </motion.div>
      )}
      
      {isOnline && effectiveType && effectiveType !== '4g' && (
        <motion.div
          className="fixed top-4 right-4 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className={`${connectionQuality.color} bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs flex items-center space-x-1`}>
            <Wifi size={12} />
            <span>{connectionQuality.label}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineIndicator;