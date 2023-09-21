import React, { useEffect } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Features = () => {
  const controlsTitle = useAnimation();
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refRow1, inViewRow1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refRow2, inViewRow2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewTitle) controlsTitle.start('visible');
    if (inViewRow1) controlsRow1.start('visible');
    if (inViewRow2) controlsRow2.start('visible');
  }, [controlsTitle, controlsRow1, controlsRow2, inViewTitle, inViewRow1, inViewRow2]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section id="features" aria-label="PointBlank Features" className="pt-10 pb-24 bg-almost-black text-pearl-white">
      <Head>
        <title>Features | PointBlank</title>
        <meta name="description" content="Discover the features and advantages of using PointBlank's services." />
        <meta name="keywords" content="PointBlank, features, unlimited requests, unlimited revisions, peak performance, swift deliveries, no small talk, easy onboarding" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Features",
            "description": "Discover the features and advantages of using PointBlank's services.",
            "image": [
              "/assets/icon1.html",
              "/assets/icon6.html",
              "/assets/icon2.html",
              "/assets/icon5.html",
              "/assets/icon4.html",
              "/assets/icon3.html"
            ]
          })}
        </script>
      </Head>

      <motion.h2
        ref={refTitle}
        initial="hidden"
        animate={controlsTitle}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="text-5xl mb-12 text-center text-sugar-chic font-grandir-italic"
      >
        WHAT YOU GET
      </motion.h2>

      <motion.div
        ref={refRow1}
        initial="hidden"
        animate={controlsRow1}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >

        {/* Column 1 */}

        <div className="text-center">
        <iframe
        title='icon6'
        alt = 'icon6'
            src="/assets/icon6.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">UNLIMITED REQUESTS</h3>
          <p className="md:text-[22px] px-7 font-telegraf">
            Your vision, our mission.
            Keep the requests coming.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <iframe
          alt = 'icon1'
          title='icon1'
            src="/assets/icon1.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">
          UNLIMITED REVISIONS
          </h3>
          <p className="md:text-[22px] px-7 font-telegraf">
          Perfection is a journey. We’ll iterate until it’s just right.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center">
        <iframe
        title='icon2'
        alt = 'icon2'
            src="/assets/icon2.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">PEAK PERFORMANCE</h3>
          <p className="md:text-[22px] px-7 font-telegraf">
          Access the best in global design and engineering to take your projects to the next level.
          </p>
        </div>

        </motion.div>

      <motion.div
        ref={refRow2}
        initial="hidden"
        animate={controlsRow2}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
      >

        {/* Column 4 */}
        <div className="text-center">
        <iframe
        title='icon5'
        alt = 'icon5'
            src="/assets/icon5.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">SWIFT DELIVERIES</h3>
          <p className="md:text-[22px] px-7 font-telegraf">
            Time is money. We deliver in
            hours and days, not weeks.
          </p>
        </div>

        {/* Column 5 */}
        <div className="text-center">
        <iframe
        title='icon4'
        alt = 'icon4'
            src="/assets/icon4.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">NO SMALL TALK</h3>
          <p className="md:text-[22px] px-7 font-telegraf">
          Trello keeps the chat brief and the progress constant.
          </p>
        </div>

        {/* Column 6 */}
        <div className="text-center">
        <iframe
        title='icon3'
        alt = 'icon3'
            src="/assets/icon3.html"
            width="110"
            height="110"
            className="mx-auto"
          ></iframe>
          <h3 className="text-[22px] mt-4 font-telegraf-slanted">EASY ONBOARDING</h3>
          <p className="md:text-[22px] px-7 font-telegraf">
            Sign up in seconds. See your first
            request shaping up in minutes.
          </p>
        </div>
        </motion.div>

      </section>
  );
};


export default Features;
