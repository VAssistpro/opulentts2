import { useMediaQuery } from './useMediaQuery';
import { useDesktopNavigation } from '../contexts/DesktopNavigationContext';
import { useMobileNavigation } from '../contexts/MobileNavigationContext';

export const useNavigationContext = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const desktopNav = useDesktopNavigation();
  const mobileNav = useMobileNavigation();

  const setActiveSection = (section: 'home' | 'about' | 'services' | 'fleet' | 'contact' | 'book') => {
    if (isDesktop) {
      desktopNav.setActiveSection(section);
    } else {
      mobileNav.setActiveSection(section);
    }
  };

  return {
    setActiveSection,
    activeSection: isDesktop ? desktopNav.activeSection : mobileNav.activeSection
  };
};