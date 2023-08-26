import React from 'react';

const Animation = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src='/pbklogo.mp4' type='video/mp4' />
        Your browser does not support the video tag
      </video>
    </div>
  );
};

export default Animation;
