import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaGraduationCap, FaDirections } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <FaUserFriends />, text: "About Us", path: "/about" },
    { icon: <FaGraduationCap />, text: "Reach Us", path: "/contact" },
    { icon: <FaDirections />, text: "Login", path: "/authpage" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-lime-100 bg-opacity-95 backdrop-blur-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo + Extra Image */}
        <div className="flex items-center gap-3">
          <img 
            src="/assets/Logo.png" 
            alt="ABC" 
            className={`transition-all duration-300 ${isScrolled ? 'h-12 w-12' : 'h-15 w-20'}`}
          />
          <img 
            src="/assets/name.png" 
            alt="Brainy Buds" 
            className={`transition-all duration-300 ${isScrolled ? 'h-6' : 'h-10'}`}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center  gap-2 transition-all duration-300 ${isScrolled ? 'text-base text-green-700 hover:text-green-400 font-medium' : 'text-lg font-semibold text-yellow-200 hover:text-yellow-300'}`}
            >
              {item.icon} {item.text}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)} // close menu on click
            >
              {item.icon} {item.text}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
