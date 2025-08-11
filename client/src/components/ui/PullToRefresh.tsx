import React, { useState, useRef, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
  threshold = 80,
  className = ''
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const triggerHaptic = useHapticFeedback();
  
  const y = useSpring(0);
  const pullDistance = useRef(0);
  const startY = useRef(0);
  const canPull = useRef(true);

  const opacity = useTransform(y, [0, threshold], [0, 1]);
  const scale = useTransform(y, [0, threshold], [0.8, 1]);
  const rotate = useTransform(y, [0, threshold * 2], [0, 360]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const scrollTop = (e.currentTarget as HTMLElement).scrollTop;
    canPull.current = scrollTop === 0;
    
    if (canPull.current && !isRefreshing) {
      startY.current = e.touches[0].clientY;
    }
  }, [isRefreshing]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!canPull.current || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    pullDistance.current = Math.max(0, (currentY - startY.current) * 0.4);
    
    if (pullDistance.current > 10) {
      setIsPulling(true);
      y.set(Math.min(pullDistance.current, threshold * 1.5));
      
      // Haptic feedback when reaching threshold
      if (pullDistance.current >= threshold && !isPulling) {
        triggerHaptic('light');
      }
    }
  }, [isRefreshing, threshold, y, triggerHaptic, isPulling]);

  const handleTouchEnd = useCallback(async () => {
    if (!canPull.current || isRefreshing) return;

    if (pullDistance.current >= threshold) {
      setIsRefreshing(true);
      triggerHaptic('success');
      
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setIsPulling(false);
    y.set(0);
    pullDistance.current = 0;
  }, [isRefreshing, threshold, onRefresh, y, triggerHaptic]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      data-testid="pull-to-refresh-container"
    >
      {/* Pull to refresh indicator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 flex items-center justify-center py-4 z-50"
        style={{ 
          opacity,
          y: useTransform(y, [0, threshold], [-50, 0])
        }}
      >
        <motion.div
          className="flex items-center space-x-2 text-gold-lighter"
          style={{ scale }}
        >
          <motion.div style={{ rotate }}>
            <RefreshCw 
              size={24} 
              className={isRefreshing ? 'animate-spin' : ''}
            />
          </motion.div>
          <span className="text-sm font-medium">
            {isRefreshing ? 'Refreshing...' : 
             pullDistance.current >= threshold ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh;