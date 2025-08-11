import { useEffect, useState, useCallback } from 'react';
import { ScriptStatus } from '../types/booking';

export const useScript = (src: string): ScriptStatus => {
  const [status, setStatus] = useState<ScriptStatus>('idle');

  const initializeWidget = useCallback(() => {
    if (window.ORES_WIDGET?.init) {
      try {
        // Remove any existing widgets first
        const existingWidgets = document.querySelectorAll('[data-ores-widget]');
        existingWidgets.forEach(widget => widget.remove());
        
        // Initialize the widget
        window.ORES_WIDGET.init();
        setStatus('ready');
      } catch (error) {
        console.error('Failed to initialize widget:', error);
        setStatus('error');
      }
    }
  }, []);

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Remove any existing scripts
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-widget-type', 'booking');
    
    const handleLoad = () => {
      // Wait for ORES_WIDGET to be available
      const checkWidget = setInterval(() => {
        if (window.ORES_WIDGET) {
          clearInterval(checkWidget);
          initializeWidget();
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkWidget);
        if (status !== 'ready') {
          setStatus('error');
        }
      }, 5000);
    };

    const handleError = () => {
      setStatus('error');
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [src, initializeWidget, status]);

  return status;
};