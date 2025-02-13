import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaGamepad, FaTools, FaDownload, FaBars } from "react-icons/fa";
import TopLeftNavbar from "./TopLeftNavbar"; // Sidebar Component
import brochure from "../assets/NIS.pdf";

const NavBar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDownload = () => {
    const fileUrl = brochure;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Qubitron_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
      {/* Sidebar */}
      <TopLeftNavbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <nav className="fixed top-0 w-full bg-black text-gray-800 py-4 shadow-md flex items-center justify-between px-8 z-50">
        {/* Left Side - Logo (Home Link) */}
        <div className="flex items-center gap-4">
          <FaBars className="text-2xl cursor-pointer text-white hover:text-red transition menu-icon" onClick={toggleSidebar} />
          <Link to="/" className="text-3xl font-extrabold tracking-wide text-white hover:text-blue-900 transition">
            Qubitron
          </Link>
        </div>

        {/* Navigation Links (Right-Aligned) */}
        <div className="flex items-center space-x-10 text-lg">
          <Link to="/techincal-events" className="flex items-center gap-2 text-white hover:text-gray-900 font-semibold transition">
            <FaLaptopCode size={22} /> Technical
          </Link>
          <Link to="/non-technical-events" className="flex items-center gap-2 text-white hover:text-gray-900 font-semibold transition">
            <FaGamepad size={22} /> Non-Technical
          </Link>
          <Link to="/workshops" className="flex items-center gap-2 text-white hover:text-gray-900 font-semibold transition">
            <FaTools size={22} /> Workshop
          </Link>
          {/* Add More Links Here */}

          {/* Brochure Download Button with Tooltip */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button onClick={handleDownload} className="text-white hover:text-gray-900 text-lg flex items-center gap-2 transition">
              <FaDownload size={22} />
            </button>
            
            {showTooltip && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md">
                Download Brochure
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
