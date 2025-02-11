import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaTimes, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Semi-Transparent Overlay */}
      {showModal && <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>}

      {/* Footer */}
      <footer className="bg-black text-white py-6 w-full fixed bottom-0 text-center shadow-lg z-50">
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
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-sky-500" />
            </a>
          </div>

          {/* Contact Us Button and Text */}
          <div className="flex items-center space-x-4">
            <button
              className="font-semibold text-blue-400 hover:underline flex items-center gap-1"
              onClick={() => setShowModal(true)}
            >
              Contact Us <FaEnvelope />
            </button>
            <p className="text-lg font-medium">| &copy; Qubitron 2025 All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Contact Us Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-xl w-[450px]">
            {/* Close Button at Top Right Corner */}
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
