export type BookingWidgetStatus = 'idle' | 'loading' | 'ready' | 'error';

declare global {
  interface Window {
    ORES_WIDGET?: {
      init: () => void;
    };
  }
}

export interface BookingWidgetProps {
  className?: string;
}

export interface BookingFrameProps {
  className?: string;
}