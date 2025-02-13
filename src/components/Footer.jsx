import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, 
  FaTimes, FaPaperPlane, FaInfoCircle, FaUsers, FaCode, FaHome 
} from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Semi-Transparent Overlay */}
      {showModal && <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>}

      {/* Footer Container */}
      <footer className="bg-gray-900 text-white py-10 w-full bottom-0 shadow-lg z-50">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/committee-members" className="hover:text-white">Committee</Link></li>
              <li><Link to="/web-devs" className="hover:text-white">WebDevs</Link></li>
              <li><Link to="/event-timeline" className="hover:text-white">Event Timeline</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/technical" className="hover:text-white">Technical</Link></li>
              <li><Link to="/non-technical" className="hover:text-white">Non-Technical</Link></li>
              <li><Link to="/workshop" className="hover:text-white">Workshop</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-pink-500" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl hover:text-blue-600" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-2xl hover:text-sky-500" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300 mb-2">Email: info@qubitron.com</p>
            <p className="text-gray-300 mb-4">Phone: +1 234 567 890</p>
            <button 
              className="text-blue-400 font-semibold hover:underline flex items-center gap-1"
              onClick={() => setShowModal(true)}
            >
              Contact Us <FaEnvelope />
            </button>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
          &copy; 2025 Qubitron. All rights reserved.
        </div>
      </footer>

      {/* Contact Us Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-xl w-[450px]">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Modal Header */}
            <div className="flex justify-center items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-center">
                <FaEnvelope className="text-blue-500" /> Contact Us
              </h2>
            </div>

            {/* Contact Form */}
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md mb-5"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md mb-5"
              />
              <input
                type="text"
                placeholder="College"
                className="w-full p-3 border rounded-md mb-5"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="w-full p-3 border rounded-md mb-5"
              />
              <textarea
                placeholder="Your Queries..."
                className="w-full p-3 border rounded-md mb-5"
                rows="4"
              ></textarea>

              {/* Centered Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600"
                >
                  <FaPaperPlane /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
