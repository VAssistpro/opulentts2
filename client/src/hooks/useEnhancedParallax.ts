import { useState, useEffect, useCallback } from 'react';

interface ParallaxOffset {
  x: number;
  y: number;
}

interface UseEnhancedParallaxOptions {
  factor?: number;
  threshold?: number;
  smooth?: boolean;
  enabled?: boolean;
}

export const useEnhancedParallax = (options: UseEnhancedParallaxOptions = {}) => {
  const {
    factor = 0.05,
    threshold = 0.1,
    smooth = true,
    enabled = true
  } = options;

  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if device supports motion
    const supportsMotion = typeof window !== 'undefined' && 
      'DeviceOrientationEvent' in window && 
      'ontouchstart' in window;
    
    setIsSupported(supportsMotion && enabled);
  }, [enabled]);

  const handleDeviceOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (!isSupported) return;

    const { beta, gamma } = event;
    
    if (beta !== null && gamma !== null) {
      // Normalize values (-1 to 1)
      const normalizedBeta = Math.max(-1, Math.min(1, beta / 45));
      const normalizedGamma = Math.max(-1, Math.min(1, gamma / 45));
      
      // Apply threshold to prevent micro-movements
      const x = Math.abs(normalizedGamma) > threshold ? normalizedGamma * factor : 0;
      const y = Math.abs(normalizedBeta) > threshold ? normalizedBeta * factor : 0;
      
      setOffset(prev => {
        if (smooth) {
          return {
            x: prev.x + (x - prev.x) * 0.1,
            y: prev.y + (y - prev.y) * 0.1,
          };
        }
        return { x, y };
      });
    }
  }, [isSupported, factor, threshold, smooth]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!enabled || isSupported) return; // Use device orientation on mobile
    
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse position (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    
    setOffset(prev => {
      const newX = x * factor;
      const newY = y * factor;
      
      if (smooth) {
        return {
          x: prev.x + (newX - prev.x) * 0.1,
          y: prev.y + (newY - prev.y) * 0.1,
        };
      }
      return { x: newX, y: newY };
    });
  }, [enabled, isSupported, factor, smooth]);

  useEffect(() => {
    if (!enabled) return;

    let rafId: number;
    
    const updateParallax = () => {
      if (smooth) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    if (isSupported) {
      // Mobile: Use device orientation
      window.addEventListener('deviceorientation', handleDeviceOrientation);
      
      // Request permission for iOS 13+
      if ((DeviceOrientationEvent as any).requestPermission) {
        (DeviceOrientationEvent as any).requestPermission()
          .then((permission: string) => {
            if (permission === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          })
          .catch(console.error);
      }
    } else {
      // Desktop: Use mouse movement
      window.addEventListener('mousemove', handleMouseMove);
    }

    if (smooth) {
      updateParallax();
    }

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled, isSupported, handleDeviceOrientation, handleMouseMove, smooth]);

  const getParallaxStyle = useCallback((depth: number = 1) => ({
    transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
    willChange: 'transform',
  }), [offset]);

  return {
    offset,
    isSupported,
    getParallaxStyle,
  };
};

export default useEnhancedParallax;
