import React from 'react';
import './HeroSection.css';
import { IoChevronBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gradient-to-br from-lime-300 to-green-200">
        <div className="w-full h-screen">
          {/* Get Started Button*/}
          <button
            onClick={() => {
              navigate("/authpage")
            }}
            className="absolute left-1/2 top-[70%]  md:top-[85%] -translate-x-1/2 -translate-y-1/2  hover:scale-95 p-2 md:p-3  px-5 md:px-6 shadow rounded-full text-lg md:text-xl text-white bg-gradient-to-br from-green-600 to-green-700 cursor-pointer font-bold "
          >
           
            Get Started
          </button>

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
    </>
  );
};

export default HeroSection;
