import React from 'react';

const Animation = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay  // changed to lowercase 'p'
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
