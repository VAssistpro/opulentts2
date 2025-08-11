import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, Signal } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState<{ level: number; charging: boolean } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Battery API is experimental and might not be available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBattery = () => {
          setBattery({
            level: Math.round(battery.level * 100),
            charging: battery.charging
          });
        };

        updateBattery();
        battery.addEventListener('chargingchange', updateBattery);
        battery.addEventListener('levelchange', updateBattery);
      });
    }
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return 'text-green-500';
    if (level > 20) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-6 bg-black/90 backdrop-blur-md z-50 flex items-center justify-between px-4 text-white text-xs font-medium lg:hidden"
      initial={{ y: -24 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left side - Time */}
      <div className="flex items-center">
        <span>{formatTime(time)}</span>
      </div>

      {/* Right side - Status indicators */}
      <div className="flex items-center space-x-1">
        {/* Network signal */}
        <Signal size={12} className="text-white" />
        
        {/* WiFi */}
        <Wifi size={12} className="text-white" />
        
        {/* Battery */}
        {battery && (
          <div className="flex items-center space-x-1">
            <span className={`text-xs ${getBatteryColor(battery.level)}`}>
              {battery.level}%
            </span>
            <div className="relative">
              <Battery 
                size={14} 
                className={getBatteryColor(battery.level)}
              />
              {battery.charging && (
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Battery size={14} className="text-green-400" />
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatusBar;