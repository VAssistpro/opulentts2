import React from 'react';
import { VIDEO_CONFIG } from '../../config/video';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_CONFIG.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30" />
      </div>
    </div>
  );
};

export default BackgroundVideo;