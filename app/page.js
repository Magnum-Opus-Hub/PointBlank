import React from 'react';
import Animation from '@/components/nav/Animation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Animation />
      {/* Other content */}
      <Footer />
    </div>
  );
}
