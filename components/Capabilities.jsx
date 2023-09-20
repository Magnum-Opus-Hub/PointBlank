'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import yellowball from '../public/assets/bilac-10.svg';
import { Disclosure } from '@headlessui/react';

gsap.registerPlugin(ScrollTrigger);

const Capabilities = () => {
  const containerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth > 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    if (isDesktop) {
      const tl = gsap.timeline();
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        once: true,
        onEnter: () => {
          // Existing animation code
          tl.to('.yellowball1', { x: '-=1120%', duration: 0.25 })
            .to('.yellowball3', { x: '+=1030%', duration: 0.25 }, 0)
            .to('.yellowball1', { y: '37vh', duration: 1 })
            .to('.yellowball2', { y: '37vh', duration: 1 }, '-=1')
            .to('.yellowball3', { y: '37vh', duration: 1 }, '-=1')
            .to('.yellowball1, .yellowball2, .yellowball3', { opacity: 0, duration: 0.2 })
            .then(() => setShowButtons(true));
        },
      });
    } else {
      setShowButtons(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const graphicDesignTexts = [
    '● Logo & Branding', '● Redesign', '● Consultancy', '● Business cards', '● Stationery',
    '● Posters', '● Social media graphics', '● Mockups', '● Packaging', '● Icons',
    '● Signature', '● Email Graphics'
  ];

  const webDevelopmentTexts = [
    '● Websites','● UX/UI Design','● Redesign ', '● Consultancy', '● Wireframes ', '● Prototyping ','● Responsive Design ',
    '● SASS ', '● SEO',
    '● Blog Design ', '● CMS-based Websites ', '● Website Maintenance and Updates'
  ];

  const softwareEngineeringTexts = [
    '● JavaScript', '● TypeScript', '● React', '● React Native', '● Node.js', '● PostgreSQL',
    '● MongoDB', '● Firebase', '● Docker', '● Prisma','● API Integration', '● Quality Assurance and Testing'
  ];


  return (
    <section id="capabilities" aria-label="Our Capabilities" ref={containerRef} className="relative md:pt-[250px] pt-[950px] pb-[950px] md:pb-[510px]">
    {showButtons ? (
      <div aria-label="Capability Categories" className="absolute md:top-[42%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 w-full gap-3">
          {!isDesktop ? (
            <>
              <div className="justify-self-center pb-10  ">
                <button className="bg-pedestrian-lemon text-[22px]   text-almost-black rounded-full py-1 px-11 font-telegraf-slanted" >
                  Graphic Design
                </button>
                <div className="mt-6 w-72">
                  <ul className="space-y-1 text-[22px]">
                    {graphicDesignTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="justify-self-center pb-10">
                <button className="bg-pedestrian-lemon text-[22px] text-almost-black rounded-full py-1 px-9 font-telegraf-slanted" >
                  Web Development
                </button>
                <div className="mt-6 w-72">
                  <ul className="space-y-1 text-[22px]">
                    {webDevelopmentTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="justify-self-center">
                <button className="bg-pedestrian-lemon text-[22px] text-almost-black rounded-full py-1 px-6 font-telegraf-slanted" >
                  Software Engineering
                </button>
                <div className="mt-6 w-72">
                  <ul className="space-y-1 text-[22px]">
                    {softwareEngineeringTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
<Disclosure as="div" className="justify-self-center ">
            {({ open }) => (
              <div className={`   ${open ? 'mt-[-32vh]' : ''}`}>
                <Disclosure.Button className={`bg-pedestrian-lemon font-telegraf-slanted   text-[22px] text-almost-black rounded-full py-1 px-11 hover-pulse ${open ? 'mt-[-calc(100% + 1rem)]' : ''}`}  >
                  Graphic Design
                </Disclosure.Button>
                <Disclosure.Panel as="div" className="mt-6 absolute w-72">
                  <ul className="space-y-1 text-[22px]">
                    {graphicDesignTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="justify-self-center">
            {({ open }) => (
              <div className={` ${open ? 'mt-[-32vh]' : ''}`}>
                <Disclosure.Button className={`bg-pedestrian-lemon text-[22px] font-telegraf-slanted text-almost-black rounded-full py-1 px-9 hover-pulse ${open ? 'mt-[-calc(100% + 1rem)]' : ''}`}  >
                  Web Development
                </Disclosure.Button>
                <Disclosure.Panel as="div" className="mt-6 absolute  w-72">
                  <ul className="space-y-1 text-[22px]">
                    {webDevelopmentTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="justify-self-center">
            {({ open }) => (
              <div className={` ${open ? 'mt-[-32vh]' : ''}`}>
                <Disclosure.Button className={`bg-pedestrian-lemon text-[22px] font-telegraf-slanted text-almost-black rounded-full py-1 px-6 hover-pulse ${open ? 'mt-[-calc(100% + 1rem)]' : ''}`}  >
                  Software Engineering
                </Disclosure.Button>
                <Disclosure.Panel as="div" className="mt-6 absolute  w-72">
                  <ul className="space-y-1 text-[22px]">
                    {softwareEngineeringTexts.map((text, index) => (
                      <li key={index} className='text-pearl-white font-telegraf'  >{text}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
            </>
          )}
        </div>
      ) : (
        <>
           <div className="absolute top-0 left-[45%]">
            <Image className="yellowball1" src={yellowball} alt="Yellow ball representing Graphic Design" height={40} width={40} />
          </div>
          <div className="absolute top-0 left-[55%]">
            <Image className="yellowball3" src={yellowball} alt="Yellow ball representing Software Engineering" height={40} width={40} />
          </div>
          <div className="absolute top-0 left-[50%]">
            <Image className="yellowball2" src={yellowball} alt="Yellow ball representing Web Development" height={40} width={40} />
          </div>
        </>
      )}
    </section>
  );

};

export default Capabilities;

