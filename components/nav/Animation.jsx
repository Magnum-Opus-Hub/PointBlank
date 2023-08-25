import React from 'react';

const Animation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
     <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src='/pbklogo.mp4' type='video/mp4' />
  Your browser does not support the video tag
</video>

    </div>
  );
};

export default Animation;
