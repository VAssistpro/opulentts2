import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X } from 'lucide-react';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  snapPoints?: number[];
  initialSnap?: number;
  className?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  snapPoints = [0.25, 0.5, 0.9],
  initialSnap = 1,
  className = ''
}) => {
  const [currentSnap, setCurrentSnap] = useState(initialSnap);
  const triggerHaptic = useHapticFeedback();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    // Close if dragged down significantly or with high velocity
    if (offset > 100 || velocity > 500) {
      triggerHaptic('medium');
      onClose();
      return;
    }

    // Find the closest snap point
    const windowHeight = window.innerHeight;
    const currentPosition = windowHeight * (1 - snapPoints[currentSnap]) + offset;
    const currentPercentage = 1 - (currentPosition / windowHeight);

    let closestSnapIndex = 0;
    let minDistance = Math.abs(snapPoints[0] - currentPercentage);

    snapPoints.forEach((snap, index) => {
      const distance = Math.abs(snap - currentPercentage);
      if (distance < minDistance) {
        minDistance = distance;
        closestSnapIndex = index;
      }
    });

    setCurrentSnap(closestSnapIndex);
    triggerHaptic('light');
  };

  const getHeight = () => `${snapPoints[currentSnap] * 100}%`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-testid="bottom-sheet-backdrop"
          />

          {/* Bottom Sheet */}
          <motion.div
            className={`
              fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl 
              border-t border-gold/20 rounded-t-3xl z-50 ${className}
            `}
            initial={{ y: '100%' }}
            animate={{ y: 0, height: getHeight() }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            data-testid="bottom-sheet"
          >
            {/* Handle */}
            <div className="w-12 h-1 bg-gold/50 rounded-full mx-auto mt-3 mb-4" />

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 pb-4">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  data-testid="close-bottom-sheet"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            )}

            {/* Content */}
            <div className="px-6 pb-6 overflow-y-auto flex-1">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;