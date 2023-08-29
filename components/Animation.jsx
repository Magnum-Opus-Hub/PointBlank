'use client'
import Image from 'next/image';
import React from 'react';
import gif from '/public/pbklogo.gif';

const Animation = () => {
  return (
    <div className="relative h-screen w-full flex items-start">
      <Image
        src={gif}
        alt="Your GIF"
        layout='fill'
        className="absolute top-0 left-0 w-full h-auto md:h-full object-contain md:object-cover object-top"
      />
    </div>
  );
};

export default Animation;
