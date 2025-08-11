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

const App = () => {
  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <ParallaxProvider>
            <MobileNavigationProvider>
              <DesktopNavigationProvider>
                <SEOHead />
                <div className="lg:hidden">
                  <MobileLayout />
                </div>
                <div className="hidden lg:block">
                  <DesktopLayout />
                </div>
                <ScrollToTop />
              </DesktopNavigationProvider>
            </MobileNavigationProvider>
          </ParallaxProvider>
        </ThemeProvider>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
