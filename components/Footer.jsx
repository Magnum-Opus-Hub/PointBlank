'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';  // Import Head from Next.js

const textVariants = {
  animate: { x: '-100%', transition: { repeat: Infinity, duration: 15, ease: 'linear' } },
};

const Footer = () => {
  return (
    <footer className="footer py-1 sticky bottom-0 z-50 bg-yellow-400">
      <Head>
        <style>{`
          @font-face {
            font-family: 'PPTelegraf-RegularSlanted';
            src: url('/fonts/PPTelegraf-RegularSlanted.woff2') format('woff2'),
                 url('/fonts/PPTelegraf-RegularSlanted.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </Head>
      <div className="marquee overflow-hidden">
        <motion.div
          className="content whitespace-nowrap"
          style={{ fontFamily: "PPTelegraf-RegularSlanted" }} // Added custom font here
          variants={textVariants}
          initial={{ x: '100%' }}
          animate="animate"
        >
          {Array.from({ length: 2000 }).map((_, index) => (
            <span key={index} className="inline-block">
              <a className="px-5"
                href="https://twitter.com/PointBlankpbk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ● @pointblankpbk
              </a>
              <a className="px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                ● coming soon
              </a>
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
