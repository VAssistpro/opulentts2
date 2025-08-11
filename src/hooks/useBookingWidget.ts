import { useState, useEffect } from 'react';
import { ScriptStatus } from '../types/booking';

const WIDGET_CHECK_INTERVAL = 100; // 100ms
const WIDGET_LOAD_TIMEOUT = 5000; // 5 seconds

export const useBookingWidget = () => {
  const [status, setStatus] = useState<ScriptStatus>('idle');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let checkInterval: NodeJS.Timer;

    const checkWidgetAvailability = () => {
      setStatus('loading');

      checkInterval = setInterval(() => {
        if (window.ORES_WIDGET) {
          clearInterval(checkInterval);
          setStatus('ready');
        }
      }, WIDGET_CHECK_INTERVAL);

      timeoutId = setTimeout(() => {
        clearInterval(checkInterval);
        if (status !== 'ready') {
          setStatus('error');
        }
      }, WIDGET_LOAD_TIMEOUT);
    };

    checkWidgetAvailability();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(checkInterval);
    };
  }, [status]);

  return { status };
};