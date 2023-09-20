import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const textVariants = {
  animate: { x: '-100%', transition: { repeat: Infinity, duration: 20, ease: 'linear' } },
};

const Footer = () => {
  return (
    <>
      <Head>
        <title>Footer | PointBlank</title>
        <meta name="description" content="Get in touch with PointBlank. Follow us on Twitter @pointblankpbk or email us at hello@pointblank.design." />
        <meta property="og:title" content="Footer | PointBlank" />
        <meta property="og:description" content="Get in touch with PointBlank. Follow us on Twitter @pointblankpbk or email us at hello@pointblank.design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pointblank.design/" />
      </Head>

      <footer className="footer py-1 sticky bottom-0 z-50 bg-pedestrian-lemon" aria-label="Contact Information">
        <div className="marquee overflow-hidden">
          <motion.div
            className="content whitespace-nowrap font-telegraf-slanted"
            variants={textVariants}
            initial={{ x: '100%' }}
            animate="animate"
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} className="inline-block text-lg">
                <a className="px-1 font-telegraf-slanted hover:underline"
                  href="https://twitter.com/PointBlankpbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  ● @pointblankpbk
                </a>
                <a className="px-1 font-telegraf-slanted hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:hello@pointblank.design"
                  aria-label="Email us at hello@pointblank.design"
                >
                  ● hello@pointblank.design
                </a>
              </span>
            ))}
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
