import React from 'react';
import img from '../images/qubitgold.png'; // Replace with your actual image path
import '../css/Footer.css'; // Import the CSS file
import '../css/Footer.scss'
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Overlapping CTA Section */}
      

      {/* Main Footer */}
      <div className="bg-gray-900 mt-[-11rem] py-2 pb-3 px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Footer Links */}
          <div className="lg:flex justify-evenly items-start mt-48 flex-grow">
            <div className="lg:w-1/4 mb-6 lg:mb-0 sm:mr-0 sm:w-1/2 pl-20">
              <img src={img} alt="logo" className="w-full h-auto brightness-90 " style={{ maxWidth: '200px' }} />
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
              <h6 className="mb-4 font-bold contact-heading pb-10">
                <span>
                  <a href="#" className="uppercase hover:text-yellow-500 text-gray-400">
               Qubitron
                  </a>
                </span>
              </h6>
              <ul>
                <li className="mb-2 mt-3">
                  <Link  to="/about-us" className="hover:text-yellow-500 text-gray-500">
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                <Link  to="/committee-members" className="hover:text-yellow-500 text-gray-500">
                Committee
                  </Link>
                </li>
                <li className="mb-2">
                <Link  to="/web-devs" className="hover:text-yellow-500 text-gray-500">
                Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
              <h6 className="mb-4 font-bold contact-heading">
                <span>
                  <a href="#" className="uppercase hover:text-yellow-500 text-gray-400">
                  Quick Links
                  </a>
                </span>
              </h6>
              <ul>
                <li className="mb-2 mt-3">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                    <Link to="/home">Home</Link>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                    <Link to="/techincal-events">Technical Events</Link>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                    <Link to="/non-techincal-events">Non - Technical Events</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
              <h6 className="mb-4 font-bold contact-heading">
                <span>
                  <a href="#" className="uppercase hover:text-yellow-500 text-gray-400">
                  Contact us
                  </a>
                </span>
              </h6>
              <ul>
                <li className="mb-2 mt-3">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                  qubitron.ece.cit@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                  Nisanth S - 9943322935
                  </a>
                </li>
                
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-500 text-gray-500">
                    Coimbatore Institute of Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-container text-center mx-auto">
          <ul className="flex justify-center gap-6">
  <li>
    <a href="https://www.instagram.com/qubitron__2k25?igsh=eWNzbmh5YWVpbGx0" className="text-gray-500 hover:text-pink-500 transition">
      <FaInstagram className="w-6 h-6" />
    </a>
  </li>
  <li>
    <a href="qubitron.ece.cit@gmail.com" className="text-gray-500 hover:text-purple-400 transition">
      <FiMail className="w-6 h-6" />
    </a>
  </li>
  <li>
    <a href="https://youtube.com/@qubitron2k25?si=DJVvqR9dZpiHZ_mE" className="text-gray-500 hover:text-red-700 transition">
      <FaYoutube className="w-6 h-6" />
    </a>
  </li>
  <li>
    <a target="_blank" href="https://wa.me/919080867203" className="text-gray-500 hover:text-green-500 transition">
      <FaWhatsapp className="w-6 h-6" />
    </a>
  </li>
</ul>


            <div className="text-center text-gray-500 mt-10">
              ©  Qubitron 2025 . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;