import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

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

export default LandingPage
