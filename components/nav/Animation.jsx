'use client'
import React, { useState } from 'react';

const Animation = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isVideoPlaying ? (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src='/pbklogo.mp4' type='video/mp4' />
          Your browser does not support the video tag
        </video>
      ) : (
        <div className="relative">
          <button onClick={handlePlayClick} className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white flex items-center justify-center">
            Play Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Animation;
