import { useEffect, useRef } from 'react';

type EventHandler = (event: Event) => void;

export const useEventListener = (
  eventName: string,
  handler: EventHandler,
  element: Window | Element | null = window
) => {
  const savedHandler = useRef<EventHandler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element || !savedHandler.current) return;

    const eventListener = (event: Event) => savedHandler.current!(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};