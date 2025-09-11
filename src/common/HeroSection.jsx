import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-lime-300 to-green-200">
      <div className="w-full h-screen">
        {/* Desktop / Large screens */}
        <img
          src="/assets/landing1.png"
          alt="School Banner"
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Tablet view */}
        <img
          src="/assets/landingTablet1.png"
          alt="School Banner Tablet"
          className="hidden sm:block md:hidden w-full h-full object-contain sm:object-cover"
        />


        {/* Mobile view */}
        <img
          src="/assets/landingMobile1.png"
          alt="School Banner Mobile"
          className="block sm:hidden w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
