import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-8">
          <div>
            <img
              src="/assets/name.png"
              alt="landing"
              className="w-1/2 object-contain mb-3"
            />
            <p className="text-yellow-200">Social Emotional Learning for the 21st Century</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mt-2 mb-4 ">Programmes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">For Schools</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">For Teachers</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">For Parents</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mt-2 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">Lesson Plans</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">Activities</a></li>
              <li><a href="#" className="text-white font-semibold hover:text-green-400 transition-colors">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mt-2 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-white font-semibold hover:text-green-400 transition-colors">info@brainybuds.org</li>
              <li className="text-white font-semibold hover:text-green-400 transition-colors">+91 88344-56788</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-5 text-center text-yellow-200">
          <p>© 2025 Brainy-Buds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;