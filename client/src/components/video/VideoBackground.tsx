import React from 'react';
import VideoPlayer from '../ui/BackgroundVideo';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <VideoPlayer />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30" />
      </div>
    </div>
  );
};

export default VideoBackground;