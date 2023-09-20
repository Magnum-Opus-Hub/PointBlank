'use client'
import React from 'react';

const Animation = () => {
  return (
    <div className="relative h-screen w-full flex items-start">
      <iframe
        title="PointBlank Studio Introductory Animation"  // Descriptive title
        src="/assets/new1website20intro20vector.html"
        layout="responsive"
        alt="A visual introduction to PointBlank's identity"  // Descriptive alt
        loading="lazy"  // Lazy loading
        className="absolute top-0 left-0 w-full h-auto md:h-full object-contain md:object-cover object-top"
      >
        {/* Fallback content */}
        Your browser does not support iframes. Visit our site with a more modern browser to view our introductory animation.
      </iframe>
    </div>
  );
};

export default Animation;
