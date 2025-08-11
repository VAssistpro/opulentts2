import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="container mx-auto px-8">
      <div className="relative rounded-xl border border-gold/30 overflow-hidden">
        <div className="h-[calc(100vh-10rem)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;