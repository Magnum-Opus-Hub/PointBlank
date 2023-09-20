import React from 'react';

// Import your images
import image1 from '../public/assets/poze-site-01.png';
import image2 from '../public/assets/posters-card-02.png';
import image3 from '../public/assets/smashed-cards-02.png';
import image4 from '../public/assets/poze-site-04.png';
import Image from 'next/image';



const RecentWork = () => {
  return (
    <div className="my-16 pb-16" aria-label="Recent Work Section">
      <h2 role="heading" aria-level="1" className="text-5xl md:text-5xl font-bold text-center mb-8 font-grandir-italic text-sugar-chic">RESULTS DELIVERED</h2>
      <div role="list" className="flex flex-wrap justify-center">
        <div role="listitem" className="w-full hover-pulse md:w-1/4 px-4 py-2">
          <Image src={image1} alt="Project 1" />
        </div>
        <div role="listitem" className="w-full hover-pulse md:w-1/4 px-4 py-2">
          <Image src={image2} alt="Project 2" />
        </div>
        <div role="listitem" className="w-full hover-pulse md:w-1/4 px-4 py-2">
          <Image src={image3} alt="Project 3" />
        </div>
        <div role="listitem" className="w-full hover-pulse md:w-1/4 px-4 py-2">
          <Image src={image4} alt="Project 4" />
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg mb-4 text-pearl-white font-grandir-italic md:text-[22px]">WANT TO SEE MORE OF OUR PROJECTS?</p>
        <div className='hover-pulse'>
        <a
          href="https://www.figma.com/proto/QufV3rZ4Y2YEyOPFEh90Rg/Sample-Work-PBK?page-id=0%3A1&type=design&node-id=1-5945&viewport=888%2C-151%2C0.03&t=WjMoOx8UkZEijz97-1&scaling=min-zoom&starting-point-node-id=1%3A5945&mode=design"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See Recent Work on Figma"
          className="bg-pearl-white md:text-[22px] text-almost-black px-4 py-2 font-telegraf-slanted rounded-full">
          See Recent Work
        </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
