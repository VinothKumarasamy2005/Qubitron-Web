import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full fixed bottom-0 text-center  shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-2">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl hover:text-blue-600" />
          </a>
          

          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-2xl hover:text-sky-500" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-lg font-medium">
          <span className="font-semibold">Contact Us</span> | &copy; Qubitron 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
