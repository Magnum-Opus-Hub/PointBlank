import React, { useEffect } from 'react';
import Image from 'next/image';
import yellowball from '../public/assets/bilac-10.svg';
import pinkball from '../public/assets/bilab-09.svg';
import whiteball from '../public/assets/bilaa-05.svg';
import StrechedLogo from '../public/assets/master-20.png';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Plans = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const plan1Controls = useAnimation();
  const [plan1Ref, plan1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plan2Controls = useAnimation();
  const [plan2Ref, plan2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plan3Controls = useAnimation();
  const [plan3Ref, plan3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (plan1InView) {
      plan1Controls.start('visible');
    }
  }, [plan1Controls, plan1InView]);

  useEffect(() => {
    if (plan2InView) {
      plan2Controls.start('visible');
    }
  }, [plan2Controls, plan2InView]);

  useEffect(() => {
    if (plan3InView) {
      plan3Controls.start('visible');
    }
  }, [plan3Controls, plan3InView]);


  const referControls = useAnimation();
  const [referRef, referInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (referInView) {
      referControls.start('visible');
    }
  }, [referControls, referInView]);


  return (
    <section id="plans" aria-label="Subscription Plans" className="md:pt-[35px] pb-60 bg-almost-black text-pearl-white">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level="1"
        className="text-[48px] leading-none text-sugar-chic md:text-5xl  mb-24 text-center font-grandir-italic"
      >
        CHOOSE YOUR PLAN
      </motion.h2>
      <div role="list" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Lemon Plan */}
        <motion.div
          ref={plan1Ref}
          initial="hidden"
          animate={plan1Controls}
          variants={variants}
          transition={{ duration: 0.5 }}
          role="listitem"
          className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full  w-40 h-40">
              <Image src={yellowball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >LEMON</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl  mb-1 font-grandir-italic" >$3,499/m</h3>
          <p className="mb-4 text-[22px]  font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/00g2af0MT3Yf2wU6ov" className="bg-pedestrian-lemon text-black text-[22px] rounded-full  py-2 px-16  font-telegraf-slanted" >
Get started
          </Link>
          </div>
          {/* Add Features */}
          <div role="list" className="text-center text-[22px] mt-3 font-telegraf">
            <p>One request at a time</p>
            <p>Average 60-hour delivery</p>
            <p>Unlimited users</p>
            <p>Unlimited revisions</p>
            <p>Unlimited projects</p>
            <p>Easy credit card payment</p>
          </div>
        </motion.div>

        {/* Sugar Plan */}
        <motion.div
          ref={plan2Ref}
          initial="hidden"
          animate={plan2Controls}
          variants={variants}
          transition={{ duration: 0.5 }}
          role="listitem"
          className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full w-40 h-40">
              <Image src={pinkball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >SUGAR</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl mb-1  font-grandir-italic" >$3,999/m</h3>
          <p className="mb-4 text-[22px] font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/4gwaGL2V12Ub7ReeV2" className="bg-sugar-chic text-black rounded-full text-[22px] py-2 px-16  font-telegraf-slanted" >
Get started
          </Link>
          </div>
          {/* Add Features */}
          <div role="list" className="text-center text-[22px] mt-3 font-telegraf">
            <p>One request at a time</p>
            <p>Average 48-hour delivery</p>
            <p>Unlimited users</p>
            <p>Unlimited revisions</p>
            <p>Unlimited projects</p>
            <p>Easy credit card payment</p>
          </div>
        </motion.div>

        {/* Pearl Plan */}
        <motion.div
          ref={plan3Ref}
          initial="hidden"
          animate={plan3Controls}
          variants={variants}
          transition={{ duration: 0.5 }}
          role="listitem"
          className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full w-40 h-40">
              <Image src={whiteball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >PEARL</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl mb-1  font-grandir-italic" >$5,999/m</h3>
          <p className="mb-4 text-[22px] font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/5kAg15ant66nefC4gp" className="bg-pearl-white text-black rounded-full text-[22px] py-2 px-16  font-telegraf-slanted" >
Get started
          </Link>
          </div>
          {/* Add Features */}
          <div role="list" className="text-center text-[22px] mt-3 font-telegraf">
            <p>Two requests at a time</p>
            <p>Average 48-hour delivery</p>
            <p>Unlimited users</p>
            <p>Unlimited revisions</p>
            <p>Unlimited projects</p>
            <p>Easy credit card payment</p>
          </div>
        </motion.div>
      </div>
      {/* Stretched Logo */}

 <motion.div
        ref={referRef}
        initial="hidden"
        animate={referControls}
        variants={variants}
        transition={{ duration: 0.5 }}
        role="contentinfo"
        aria-label="Refer a Friend Program"
        className="text-center">
      <div role="presentation" className="text-center mt-28">
        <Image src={StrechedLogo} alt="Background" height={210} width={210} className="mx-auto object-cover" />
      </div>
      {/* Refer a Friend */}
      <div role="contentinfo" aria-label="Refer a Friend Program" className="text-center">
        <h3 role="heading" aria-level="2" className="text-[22px] mb-4 font-grandir-italic">REFER A FRIEND</h3>
        <p className=" text-[22px] font-telegraf" >Earn 15% monthly recurring commissions for each referral</p>
        <p className="mb-7 text-[22px] font-telegraf" >●●● Coming soon ●●●</p>
        <div className='hover-pulse'>
        {/* <button className="bg-pearl-white  text-black rounded-full  text-[22px] py-2 px-6   font-telegraf-slanted" >
          Join the affiliate program
        </button> */}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Plans;