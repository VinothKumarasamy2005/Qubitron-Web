import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaGamepad, FaTools, FaDownload, FaBars } from "react-icons/fa";
import TopLeftNavbar from "./TopLeftNavbar"; // Import Sidebar Component
import brochure from "../assets/NIS.pdf";

const NavBar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle file download
  const handleDownload = () => {
    const fileUrl = brochure;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Qubitron_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-icon")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Sidebar Component */}
      <TopLeftNavbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <nav className="bg-black text-white py-5 shadow-lg fixed top-0 w-full flex items-center justify-between px-6">
        {/* Left Side - Hamburger Icon & Company Name */}
        <div className="flex items-center gap-4">
          <FaBars className="text-2xl cursor-pointer hover:text-gray-400 menu-icon" onClick={toggleSidebar} />
          <div className="text-3xl font-extrabold tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="text-blue-500">Qubitron</span>
          </div>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="flex-grow flex justify-center space-x-10 text-lg">
          <Link to="/technical" className="flex items-center gap-2 hover:text-gray-300 font-semibold">
            <FaLaptopCode size={22} /> Technical
          </Link>
          <Link to="/non-technical" className="flex items-center gap-2 hover:text-gray-300 font-semibold">
            <FaGamepad size={22} /> Non-Technical
          </Link>
          <Link to="/workshop" className="flex items-center gap-2 hover:text-gray-300 font-semibold">
            <FaTools size={22} /> Workshop
          </Link>
        </div>

        {/* Brochure Download Button with Tooltip Effect */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button onClick={handleDownload} className="text-white hover:text-gray-300 text-lg flex items-center gap-2">
            <FaDownload size={22} />
          </button>
          
          {showTooltip && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded-md shadow-md">
              Download Brochure
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
