'use client'

import React, { useEffect } from 'react';

const Animation = () => {
  useEffect(() => {
    const videoElement = document.getElementById('myVideo');
    videoElement.play();
  }, []);

  return (
    <div className="relative h-screen w-full">
      <video
        id="myVideo"
        autoPlay
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
