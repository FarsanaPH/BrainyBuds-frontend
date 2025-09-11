<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // You'll need to create this CSS file

function LandingPage() {
  return (
    <div className="landing-page-container">
      {/* First Background Section - FORM */}
      <div className="relative background-section first-section">
        {/* Your content for the first section */}
        <Link to="/authpage" style={{ textDecoration: 'none'}}>
        <button
          className="absolute bg-green-700 top-[550px] left-[665px] px-6 py-3 text-white text-[16px] font-bold rounded-full cursor-pointer border-0  hover:bg-green-800">

          Get Started
        </button>
        </Link>
      </div>

      {/* Second Background Section - WELCOME */}
      <div className="background-section second-section">
        {/* Your content for the second section */}
      </div>
=======
import React from "react";
import Header from "../common/Header";
import HeroSection from "../common/HeroSection";
import Features from "../common/Features";
import Testimonial from "../common/Testimonial";
import Footer from "../common/Footer";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Header/>
      <HeroSection />
      <Features />
      <Testimonial />
      <Footer />
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
    </div>
  );
}

<<<<<<< HEAD
export default LandingPage
=======
export default LandingPage;
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
