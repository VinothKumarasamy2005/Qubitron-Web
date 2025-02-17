import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaInfoCircle, FaUsers, FaCode, FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";

const TopLeftNavBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`absolute top-0  left-0 h-full w-64 bg-gray-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out sidebar`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <FaTimes className="text-2xl cursor-pointer hover:text-gray-400" onClick={onClose} />
      </div>

      {/* Sidebar Links */}
      <ul className="p-4 space-y-4"> <li>
          <Link to="/" className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
            <FaHome size={20} /> Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
            <FaInfoCircle size={20} /> About Us
          </Link>
        </li>
        <li>
          <Link to="/committee-members" className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
            <FaUsers size={20} /> Committee
          </Link>
        </li>
        <li>
          <Link to="/web-devs" className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
            <FaCode size={20} /> WebDevs
          </Link>
        </li>
        <li>
          <Link to="/event-timeline" className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
            <RiTimeLine size={20} /> Timeline
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopLeftNavBar;
