'use client'
import React, { useRef } from 'react';

const Animation = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    video.play();
  };

  return (
    <div onClick={handlePlay} className="relative h-screen w-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-auto md:h-full object-contain md:object-cover"
      >
        <source src='/pbklogo.mp4' type='video/mp4' />
        Your browser does not support the video tag
      </video>
    </div>
  );
};

export default Animation;

