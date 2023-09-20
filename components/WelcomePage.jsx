import Image from 'next/image';
import React from 'react';
import StrechedLogo from '../public/assets/master-20.png';

const WelcomePage = () => {
  return (
    <div id='top' className="relative min-h-[82vh] bg-almost-black text-pearl-white flex md:mb-16 flex-col items-center justify-center" aria-label="Welcome Section">
      {/* Background Image */}
      <Image src={StrechedLogo} alt="Background" height={1100} width={1100} className="absolute md:object-cover object-cover" aria-label="Point Blank Background Logo" />

      {/* Title and Description */}
      <div className="z-10 text-center md:text-almost-black text-almost-black md:mb-4 mb-0">
        <h1 className="text-2xl md:text-5xl font-grandir-italic" aria-label="Welcome to">WELCOME TO</h1>
        <h1 className='text-2xl md:text-5xl  font-grandir-italic' aria-label="Point Blank">POINT BLANK </h1>
      </div>

      {/* Description only for mobile */}
      <div className="z-10 text-center absolute bottom-24  md:text-almost-black text-pearl-white md:relative md:bottom-auto ">
        <p className="md:text-[22px] px-9 font-telegraf" aria-label="Company Description 1">Dive into a seamless experience of modern design and software development.</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="md:text-[22px] px-9 font-telegraf" aria-label="Company Description 2">We're not just another digital studio, but your strategic growth partner.</p>
      </div>
    </div>
  );
};

export default WelcomePage;
