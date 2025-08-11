import { useState, useEffect, useCallback } from 'react';

export type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';

const WIDGET_URL = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js';
const WIDGET_LOAD_TIMEOUT = 10000; // 10 seconds timeout

export const useBookingScript = () => {
  const [status, setStatus] = useState<ScriptStatus>('idle');

  const handleScriptError = useCallback((error: Error | Event) => {
    console.warn('Booking widget error:', error);
    setStatus('error');
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const initializeWidget = () => {
      try {
        if (window.ORES_WIDGET?.init) {
          window.ORES_WIDGET.init();
          setStatus('ready');
        }
      } catch (error) {
        handleScriptError(error);
      }
    };

    const loadScript = () => {
      setStatus('loading');

      // Remove any existing scripts
      const existingScript = document.querySelector(`script[src="${WIDGET_URL}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }

      const script = document.createElement('script');
      script.src = WIDGET_URL;
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      
      // Add specific error handler for this script
      script.onerror = handleScriptError;
      
      script.onload = () => {
        // Check periodically for widget initialization
        const checkInterval = setInterval(() => {
          if (window.ORES_WIDGET) {
            clearInterval(checkInterval);
            initializeWidget();
          }
        }, 100);

        // Set timeout to prevent infinite checking
        timeoutId = setTimeout(() => {
          clearInterval(checkInterval);
          if (status !== 'ready') {
            handleScriptError(new Error('Widget load timeout'));
          }
        }, WIDGET_LOAD_TIMEOUT);
      };

      document.head.appendChild(script);
    };

    loadScript();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [handleScriptError]);

  return status;
};