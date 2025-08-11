import React, { createContext, useContext, useState } from 'react';

type Section = 'home' | 'about' | 'services' | 'fleet' | 'contact' | 'book';

interface DesktopNavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const DesktopNavigationContext = createContext<DesktopNavigationContextType | undefined>(undefined);

export const DesktopNavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<Section>('home');

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