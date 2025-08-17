import React from 'react';
import ConsoleLayout from './ConsoleLayout';

const DesktopLayout = ({ children }: { children?: React.ReactNode }) => {
  return <ConsoleLayout>{children}</ConsoleLayout>;
};

export default DesktopLayout;
