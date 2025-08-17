import React, { createContext, useContext, useState, useEffect } from 'react';

type Section = 'home' | 'about' | 'services' | 'fleet' | 'contact' | 'book';

interface MobileNavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const MobileNavigationContext = createContext<MobileNavigationContextType | undefined>(undefined);

export const MobileNavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<Section>(() => {
    const savedSection = localStorage.getItem('activeSection');
    return (savedSection as Section) || 'home';
  });

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  return (
    <MobileNavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </MobileNavigationContext.Provider>
  );
};

export const useMobileNavigation = () => {
  const context = useContext(MobileNavigationContext);
  if (!context) {
    throw new Error('useMobileNavigation must be used within a MobileNavigationProvider');
  }
  return context;
};
