import React from 'react';
import EnhancedConsoleLayout from './EnhancedConsoleLayout';

const DesktopLayout = ({ children }: { children?: React.ReactNode }) => {
  return <EnhancedConsoleLayout>{children}</EnhancedConsoleLayout>;
};

export default DesktopLayout;
