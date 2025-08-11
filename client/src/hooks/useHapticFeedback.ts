import { useCallback } from 'react';

export type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'warning';

export const useHapticFeedback = () => {
  const triggerHaptic = useCallback((type: HapticType = 'light') => {
    // Check if the device supports haptic feedback
    if ('vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30],
        success: [10, 50, 10],
        error: [50, 50, 50],
        warning: [20, 30, 20]
      };

      navigator.vibrate(patterns[type]);
    }

    // For iOS devices with haptic engine support
    if ('Haptics' in window) {
      try {
        const hapticTypes = {
          light: 'impactLight',
          medium: 'impactMedium', 
          heavy: 'impactHeavy',
          success: 'notificationSuccess',
          error: 'notificationError',
          warning: 'notificationWarning'
        };

        (window as any).Haptics.impact(hapticTypes[type]);
      } catch (error) {
        // Fallback to vibration if haptic engine fails
        if ('vibrate' in navigator) {
          navigator.vibrate([10]);
        }
      }
    }
  }, []);

  return triggerHaptic;
};