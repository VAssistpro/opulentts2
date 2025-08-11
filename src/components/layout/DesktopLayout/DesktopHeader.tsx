import React from 'react';
import Logo from '../Logo';
import ContactIcons from '../ContactIcons';

const DesktopHeader = () => {
  return (
    <div className="fixed top-6 left-4 z-40">
      <div className="flex flex-col items-start gap-6">
        <div className="ml-[42px]">
          <Logo />
        </div>
        <div className="ml-4">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;