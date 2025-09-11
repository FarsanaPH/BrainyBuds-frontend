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
    </div>
  );
}

export default LandingPage;
