import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Global error handler for uncaught errors
window.addEventListener('error', (event) => {
  // Only prevent default for script errors
  if (event.error === undefined && event.message === 'Script error.') {
    event.preventDefault();
    console.warn('External script error handled:', {
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno
    });
    return;
  }

  // Log other errors but don't prevent default handling
  console.error('Uncaught error:', event.error || event);
});

// Global handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Don't prevent default to allow error boundary to catch it
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);