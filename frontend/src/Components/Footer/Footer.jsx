import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side: Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/" className="hover:text-teal-400 transition">Home</Link>
          <Link to="/about" className="hover:text-teal-400 transition">About Us</Link>
          <Link to="/services" className="hover:text-teal-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-teal-400 transition">Contact</Link>
        </div>

        {/* Center: Logo or Text */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">BrandName</h1>
          <p className="text-sm text-gray-400">© 2024 BrandName. All rights reserved.</p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <Link to="#" className="hover:text-teal-400 transition">
            <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
          </Link>
          <Link to="#" className="hover:text-teal-400 transition">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="hover:text-teal-400 transition">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="hover:text-teal-400 transition">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
