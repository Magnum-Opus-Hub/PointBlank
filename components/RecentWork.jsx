import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import image1 from '../public/assets/poze-site-01.png';
import image2 from '../public/assets/poze-site-02.png';
import image3 from '../public/assets/smashed-cards-02.png';
import image4 from '../public/assets/poze-site-04.png';

const RecentWork = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.3,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="my-16 pb-16" aria-label="Recent Work Section">
      <motion.h2
        custom={0}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="text-5xl mt-40 md:text-5xl font-bold text-center mb-8 font-grandir-italic text-sugar-chic"
      >
        RESULTS DELIVERED
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {[image1, image2, image3, image4].map((imgSrc, index) => (
          <motion.div
            custom={index + 1}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            key={index}
            className="w-full hover-pulse md:w-1/4 px-4 py-2"
          >
            <Image src={imgSrc} alt={`Project ${index + 1}`} />
          </motion.div>
        ))}
      </div>
      <motion.div
        custom={5}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="text-center mt-8"
      >
        <p className="text-lg mb-6 text-pearl-white font-grandir-italic md:text-[22px]">WANT TO SEE MORE OF OUR PROJECTS?</p>
        <div className='hover-pulse'>
          <a href="https://www.figma.com/proto/QufV3rZ4Y2YEyOPFEh90Rg/Sample-Work-PBK?page-id=0%3A1&type=design&node-id=1-5945&viewport=507%2C4%2C0.02&t=h7kSkB3hJHjFxY85-1&scaling=min-zoom&starting-point-node-id=1%3A5945&mode=design" className="bg-pearl-white md:text-[22px] text-almost-black px-4 py-2 font-telegraf-slanted rounded-full">See Recent Work</a>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentWork;
