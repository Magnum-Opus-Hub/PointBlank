'use client'

import React, { useState, useEffect } from 'react';

const Animation = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setVideoPlaying(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative">
      {isVideoPlaying && (
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src='/pbklogo.mp4' type='video/mp4' />
          Your browser does not support the video tag
        </video>
      )}

      {!isVideoPlaying && (
        <button onClick={() => setVideoPlaying(true)} className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white flex items-center justify-center">
          Play Video
        </button>
      )}
    </div>
  );
};

export default Animation;
