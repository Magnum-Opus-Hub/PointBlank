import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import whiteball from '../public/assets/bilaa-05.svg';
import pinkball from '../public/assets/bilab-09.svg';
import yellowball from '../public/assets/bilac-10.svg';

const HowItWorks = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section id="how-it-works" className="py-12 bg-almost-black text-pearl-white">
      <Head>
        <title>How It Works - PointBlank</title>
        <meta name="description" content="Understand how PointBlank makes design and software engineering hassle-free." />
        <meta property="og:title" content="How It Works - PointBlank" />
        <meta property="og:description" content="From selecting your plan to seeing the magic unfold, learn how PointBlank works." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pointblank.design/how-it-works" />
      </Head>
      <div className="container mx-auto text-center">

        {/* Point 1 */}
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
        <div className="relative inline-flex items-center justify-center h-16 md:h-20 w-16 md:w-20">
          <Image src={yellowball} alt="Background" height={280} width={280} className="absolute object-cover z-0 rounded-full" />
          <span className="text-4xl md:text-6xl font-bold relative z-10 text-almost-black font-grandir-italic" >1</span>
        </div>
        <h1 className="text-[30px] font-telegraf-slanted md:text-[45px] mt-2 " >Select your plan</h1>
        <p  className='mb-10 font-telegraf md:mb-10 px-5 text-[15px] md:text-[22px]'>From startups to enterprises, we offer subscriptions tailored to every need.</p>
        </motion.div>

        {/* Point 2 */}
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={variants}
          transition={{ duration: 0.5 }}
          >
        <div className="relative inline-flex items-center justify-center h-16 md:h-20 w-16 md:w-20">
          <Image src={pinkball} alt="Background" height={280} width={280} className="absolute object-cover z-0 rounded-full" />
          <span className="text-4xl md:text-6xl font-bold relative z-10 text-almost-black font-grandir-italic" >2</span>
        </div>
        <h1 className="text-[30px] font-telegraf-slanted md:text-[45px] mt-2 " >Submit your requests</h1>
        <p  className='mb-10 font-telegraf px-5 md:mb-10 text-[15px] md:text-[22px]'>Whether it’s a logo design or a full-fledged app, we’re geared up.</p>
          </motion.div>

        {/* Point 3 */}
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
        <div className="relative inline-flex items-center justify-center h-16 md:h-20 w-16 md:w-20">
          <Image src={whiteball} alt="Background" height={280} width={280} className="absolute object-cover z-0 rounded-full" />
          <span className="text-4xl md:text-6xl font-bold relative z-10 text-almost-black font-grandir-italic" >3</span>
        </div>
        <h1 className="text-[30px] font-telegraf-slanted md:text-[45px] mt-2 " >See the magic</h1>
        <p  className='mb-20 font-telegraf md:mb-20 text-[15px] md:text-[22px]'>Our top-tier talent ensures your requests are transformed into reality, one by one.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
