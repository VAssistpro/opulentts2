import React from 'react';

const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;

const BorderCorners = () => {
  return (
    <>
      {corners.map((corner) => (
        <div
          key={corner}
          className={`absolute w-8 h-8 border-2 border-[#937127] opacity-80
                   ${corner.includes('top') ? 'top-[-2px]' : 'bottom-[-2px]'}
                   ${corner.includes('left') ? 'left-[-2px]' : 'right-[-2px]'}
                   ${corner.includes('top') && corner.includes('left') ? 'rounded-tl-lg' : ''}
                   ${corner.includes('top') && corner.includes('right') ? 'rounded-tr-lg' : ''}
                   ${corner.includes('bottom') && corner.includes('left') ? 'rounded-bl-lg' : ''}
                   ${corner.includes('bottom') && corner.includes('right') ? 'rounded-br-lg' : ''}
                   animate-corner-glow`}
        />
      ))}
    </>
  );
};

export default BorderCorners;