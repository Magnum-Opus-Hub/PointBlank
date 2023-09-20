'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Animation from '@/components/Animation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WelcomePage from '@/components/WelcomePage';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Plans from '@/components/Plans';
import Faq from '@/components/Faq';
import SiteFooter from '@/components/SiteFooter';
import Capabilities from '@/components/Capabilities';
import RecentWork from '@/components/RecentWork';



export default function Home() {
  const [fadeAnimation, setFadeAnimation] = useState('opacity-100');
  const [contentOpacity, setContentOpacity] = useState('opacity-0');
  const [showContent, setShowContent] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [zIndex, setZIndex] = useState('z-[1]');


  useEffect(() => {

    window.scrollTo(0, 0);

    const initialIsDesktop = window.innerWidth > 768;
    setIsDesktop(initialIsDesktop);

    // Client-side only code
    if (typeof window !== "undefined") {
      const initialIsDesktop = window.innerWidth > 768;
      setIsDesktop(initialIsDesktop);

      // Scroll to the top of the page
      window.scrollTo(0, 0);

      // Enable scrolling for mobile immediately
      if (!initialIsDesktop) {
        document.body.style.overflow = 'auto';
        setContentOpacity('opacity-100 transition-opacity duration-400 ease-in-out');
        setShowContent(true);
      } else {
        // Disable scrolling initially for desktop
        document.body.style.overflow = 'hidden';
      }



      const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
      };

      window.addEventListener('resize', handleResize);

      const fadeTimer = setTimeout(() => {
        setFadeAnimation('opacity-0 transition-opacity duration-400 ease-in-out');
        setContentOpacity('opacity-100 transition-opacity duration-400 ease-in-out');
        document.body.style.overflow = 'auto';
      }, 2100);

      const showTimer = setTimeout(() => {
        setShowContent(true);
      }, 1000);

      const zIndexTimer = setTimeout(() => {
        setZIndex('z-0');
      }, 2000);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(fadeTimer);
        clearTimeout(showTimer);
        clearTimeout(zIndexTimer);
        document.body.style.overflow = 'auto';
      };
    }
  }, []);


  if (isDesktop === null) {
    return null;
  }



  return (
    <div className="relative min-h-screen" >
      <Head>
        <title>PointBlank: Home - Where Your Development Journey Begins</title>
        <meta name="description" content="Welcome to PointBlank, your one-stop solution for top-notch design and development services. Explore our features, capabilities, and flexible plans." />
      </Head>
      {isDesktop && (
        <div className={`absolute top-0 left-0 w-full h-full ${zIndex} ${fadeAnimation}`}>
          <Animation />
        </div>
      )}
      <div className={`relative z-0 ${contentOpacity} ${!isDesktop && 'opacity-100 transition-opacity duration-400 ease-in-out'}`}>
        <Navbar />
        <WelcomePage />
        <RecentWork />
        <HowItWorks />
        <Features />
        <Capabilities />
        <Plans />
        <Faq />
        <SiteFooter />
        <Footer />
      </div>
    </div>
  );
}
