import React from 'react';
import EnhancedVideoLayout from './EnhancedVideoLayout';

const DesktopLayout = ({ children }: { children?: React.ReactNode }) => {
  return <EnhancedVideoLayout>{children}</EnhancedVideoLayout>;
};

export default DesktopLayout;
