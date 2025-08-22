import { ThemeProvider } from './contexts/ThemeContext';
import { ParallaxProvider } from './contexts/ParallaxContext';
import { DesktopNavigationProvider } from './contexts/DesktopNavigationContext';
import { MobileNavigationProvider } from './contexts/MobileNavigationContext';
import { HelmetProvider } from 'react-helmet-async';
import GlobalErrorBoundary from './components/error/GlobalErrorBoundary';
import DesktopLayout from './components/layout/DesktopLayout';
import MobileLayout from './components/mobile/MobileLayout';
import SEOHead from './components/seo/SEOHead';
import ScrollToTop from './components/ui/ScrollToTop';
import StatusBar from './components/ui/StatusBar';
import { ToastProvider } from './components/ui/EnhancedToast';

const App = () => {
  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <ToastProvider>
            <ParallaxProvider>
              <MobileNavigationProvider>
                <DesktopNavigationProvider>
                  <SEOHead />
                  <StatusBar />
                  <div className="block sm:hidden">
                    <MobileLayout />
                  </div>
                  <div className="hidden sm:block">
                    <DesktopLayout />
                  </div>
                  <ScrollToTop />
                </DesktopNavigationProvider>
              </MobileNavigationProvider>
            </ParallaxProvider>
          </ToastProvider>
        </ThemeProvider>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
