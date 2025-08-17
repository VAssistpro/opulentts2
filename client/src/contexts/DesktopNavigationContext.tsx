import React, { createContext, useContext, useState, useEffect } from 'react';

type Section = 'home' | 'about' | 'services' | 'fleet' | 'contact' | 'book';

interface DesktopNavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const DesktopNavigationContext = createContext<DesktopNavigationContextType | undefined>(undefined);

export const DesktopNavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<Section>(() => {
    const savedSection = localStorage.getItem('activeSection');
    return (savedSection as Section) || 'home';
  });

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  return (
    <DesktopNavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </DesktopNavigationContext.Provider>
  );
};

export const useDesktopNavigation = () => {
  const context = useContext(DesktopNavigationContext);
  if (!context) {
    throw new Error('useDesktopNavigation must be used within a DesktopNavigationProvider');
  }
  return context;
};
