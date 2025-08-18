import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesktopNavigation } from '../../contexts/DesktopNavigationContext';
import { SECTIONS } from './constants';

const MainContent = () => {
  const { activeSection } = useDesktopNavigation();
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <div className={`w-full h-full ${
      activeSection === 'home' ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'
    }`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
