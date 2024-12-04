import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">StocksApp</h2>
          <p className="mt-2 text-gray-400">
            Your trusted platform for stock market insights and analysis.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} StocksApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;