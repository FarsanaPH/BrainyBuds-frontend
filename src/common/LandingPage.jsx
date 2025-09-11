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
    </div>
  );
}

export default LandingPage