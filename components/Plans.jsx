import React from 'react';
import Image from 'next/image';
import yellowball from '../public/assets/bilac-10.svg';
import pinkball from '../public/assets/bilab-09.svg';
import whiteball from '../public/assets/bilaa-05.svg';
import StrechedLogo from '../public/assets/master-20.png';
import Link from 'next/link';



const Plans = () => {
  return (
    <section id="plans" aria-label="Subscription Plans" className="md:pt-[35px] pb-60 bg-almost-black text-pearl-white">
      <h2 role="heading" aria-level="1" className="text-[48px] leading-none text-sugar-chic md:text-5xl  mb-24 text-center font-grandir-italic">
        CHOOSE YOUR PLAN
      </h2>
      <div role="list" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Lemon Plan */}
        <div role="listitem" className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full  w-40 h-40">
              <Image src={yellowball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >LEMON</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl  mb-1 font-grandir-italic" >$3,495/m</h3>
          <p className="mb-4 text-[22px]  font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/7sI027gLRcuL1sQbIM" className="bg-pedestrian-lemon text-black text-[22px] rounded-full  py-1 px-16  font-telegraf-slanted" >
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
        </div>

        {/* Sugar Plan */}
        <div role="listitem" className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full w-40 h-40">
              <Image src={pinkball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >SUGAR</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl mb-1  font-grandir-italic" >$3,995/m</h3>
          <p className="mb-4 text-[22px] font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/28o16bfHNcuLc7u3ch" className="bg-sugar-chic text-black rounded-full text-[22px] py-1 px-16  font-telegraf-slanted" >
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
        </div>

        {/* Pearl Plan */}
        <div role="listitem" className="bg-almost-black p-6">
          <div className="relative inline-flex items-center justify-center mb-24">
            <div className="absolute object-cover z-0 rounded-full w-40 h-40">
              <Image src={whiteball} alt="Background" fill className='object-cover' />
            </div>
            <span className="text-[22px] font-bold relative z-10 text-almost-black font-grandir-italic" >PEARL</span>
          </div>
          <h3 className="text-[48px] leading-none md:text-5xl mb-1  font-grandir-italic" >$5,995/m</h3>
          <p className="mb-4 text-[22px] font-telegraf-slanted" >Pause or cancel anytime</p>
          <div className='hover-pulse'>
          <Link href="https://buy.stripe.com/5kAcOT2V166ngnK14a" className="bg-pearl-white text-black rounded-full text-[22px] py-1 px-16  font-telegraf-slanted" >
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
        </div>
      </div>
      {/* Stretched Logo */}
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
    </section>
  );
};

export default Plans;