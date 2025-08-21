import { useCallback } from 'react';

type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

interface HapticFeedbackOptions {
  type?: HapticType;
  duration?: number;
  intensity?: number;
}

export const useEnhancedHapticFeedback = () => {
  const triggerHaptic = useCallback((options: HapticFeedbackOptions = {}) => {
    const { type = 'light', duration = 50, intensity = 1 } = options;

    // Check if we're in a mobile environment
    if (typeof window === 'undefined') return;

    try {
      // Modern Haptic API (iOS Safari 13.1+, Chrome 90+)
      if ('vibrate' in navigator) {
        let pattern: number | number[];
        
        switch (type) {
          case 'light':
            pattern = [duration * 0.5];
            break;
          case 'medium':
            pattern = [duration];
            break;
          case 'heavy':
            pattern = [duration * 1.5];
            break;
          case 'success':
            pattern = [50, 50, 100];
            break;
          case 'warning':
            pattern = [100, 50, 100];
            break;
          case 'error':
            pattern = [200, 100, 200, 100, 200];
            break;
          default:
            pattern = [duration];
        }
        
        navigator.vibrate(pattern);
      }

      // iOS Haptic Engine (if available)
      if ('DeviceMotionEvent' in window && (window as any).DeviceMotionEvent?.requestPermission) {
        // This is iOS - use touch-action CSS for better feedback
        const element = document.activeElement as HTMLElement;
        if (element) {
          element.style.touchAction = 'manipulation';
        }
      }

    } catch (error) {
      // Silently fail if haptic feedback is not supported
      console.debug('Haptic feedback not supported:', error);
    }
  }, []);

  const hapticClick = useCallback(() => {
    triggerHaptic({ type: 'light', duration: 30 });
  }, [triggerHaptic]);

  const hapticHover = useCallback(() => {
    triggerHaptic({ type: 'light', duration: 20 });
  }, [triggerHaptic]);

  const hapticSuccess = useCallback(() => {
    triggerHaptic({ type: 'success' });
  }, [triggerHaptic]);

  const hapticError = useCallback(() => {
    triggerHaptic({ type: 'error' });
  }, [triggerHaptic]);

  const hapticWarning = useCallback(() => {
    triggerHaptic({ type: 'warning' });
  }, [triggerHaptic]);

  return {
    triggerHaptic,
    hapticClick,
    hapticHover,
    hapticSuccess,
    hapticError,
    hapticWarning,
  };
};

export default useEnhancedHapticFeedback;
