import React, { useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  swipeThreshold?: number;
  className?: string;
  disabled?: boolean;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  swipeThreshold = 100,
  className = '',
  disabled = false
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const triggerHaptic = useHapticFeedback();
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled) return;

    const threshold = swipeThreshold;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) >= 500 || Math.abs(offset) >= threshold) {
      setIsExiting(true);
      triggerHaptic('medium');

      if (offset > 0) {
        // Swiped right
        x.set(1000);
        onSwipeRight?.();
      } else {
        // Swiped left
        x.set(-1000);
        onSwipeLeft?.();
      }
    } else {
      // Snap back to center
      x.set(0);
    }
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled) return;

    // Light haptic feedback when reaching threshold
    if (Math.abs(info.offset.x) >= swipeThreshold * 0.7) {
      triggerHaptic('light');
    }
  };

  return (
    <motion.div
      className={`cursor-grab active:cursor-grabbing ${className}`}
      style={{ 
        x, 
        rotate: disabled ? 0 : rotate, 
        opacity: disabled ? 1 : opacity 
      }}
      drag={disabled ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300
      }}
      data-testid="swipeable-card"
    >
      {children}
      
      {/* Swipe indicators */}
      {!disabled && (
        <>
          <motion.div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 font-bold text-lg pointer-events-none"
            style={{ 
              opacity: useTransform(x, [0, swipeThreshold], [0, 1]),
              scale: useTransform(x, [0, swipeThreshold], [0.8, 1.2])
            }}
          >
            ✓
          </motion.div>
          <motion.div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 font-bold text-lg pointer-events-none"
            style={{ 
              opacity: useTransform(x, [-swipeThreshold, 0], [1, 0]),
              scale: useTransform(x, [-swipeThreshold, 0], [1.2, 0.8])
            }}
          >
            ✗
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default SwipeableCard;