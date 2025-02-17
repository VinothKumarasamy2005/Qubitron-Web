

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaLaptopCode, FaGamepad, FaTools, FaDownload, FaBars } from "react-icons/fa";
// import TopLeftNavBar from "./TopLeftNavbar"; // Sidebar Component
// import brochure from "../assets/NIS.pdf";
// import "../css/NavBar.scss"; // Import the SCSS file
// import img from "../images/qubitgold.png";
// import '../css/DropDown.scss'

// const NavBar = () => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isMobileNavVisible, setMobileNavVisible] = useState(false);
//   const [isNonTechDropdownOpen, setNonTechDropdownOpen] = useState(false); // State for dropdown

//   const handleDownload = () => {
//     const fileUrl = brochure;
//     const link = document.createElement("a");
//     link.href = fileUrl;
//     link.download = "Qubitron_Brochure.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const toggleMobileNav = () => {
//     setMobileNavVisible(!isMobileNavVisible);
//   };

//   const toggleNonTechDropdown = () => {
//     setNonTechDropdownOpen((prev) => !prev); // Toggle dropdown
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isSidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-icon")) {
//         setIsSidebarOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <>
//       {/* Sidebar */}
//       <TopLeftNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="header relative md:mb-[10rem]">
//         {/* Logo */}
//         <div className="header__logo w-[10rem] md:w-auto w-[8rem] md:ml-40">
//           <Link to="/" className="text-3xl font-extrabold tracking-wide text-white hover:text-blue-900 transition">
//             <img src={img} alt="logo" className="" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="navbar !hidden md:!flex">
//           <ul className="navbar__menu">
//             <NavItem link="/techincal-events" label="Technical" icon={<FaLaptopCode size={22} />} />
//             {/* Non-Technical Events Dropdown */}
//             <li className="navbar__item relative">
//               <div
//                 className="navbar__link cursor-pointer"
//                 onClick={toggleNonTechDropdown}
//                 onMouseEnter={() => setNonTechDropdownOpen(true)}
//                 onMouseLeave={() => setNonTechDropdownOpen(false)}
//               >
//                 <FaGamepad size={22} />
//                 <span>Non-Technical</span>
//               </div>
//               {isNonTechDropdownOpen && (
//                 <ul className="dropdown-menu absolute top-full left-0 bg-gray-800 text-white p-2 rounded-md shadow-md">
//                   <li>
//                     <Link to="/offline-events" className="block px-4 py-2 hover:bg-gray-700">
//                       Offline Events
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/online-events" className="block px-4 py-2 hover:bg-gray-700">
//                       Online Events
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <NavItem link="/workshops" label="Workshop" icon={<FaTools size={22} />} />
//             <li className="navbar__item">
//               <div
//                 className="relative flex items-center"
//                 onMouseEnter={() => setShowTooltip(true)}
//                 onMouseLeave={() => setShowTooltip(false)}
//               >
//                 <button onClick={handleDownload} className="navbar__link">
//                   <FaDownload size={22} />
//                 </button>
//                 {showTooltip && (
//                   <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md">
//                     Download Brochure
//                   </div>
//                 )}
//               </div>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Navigation */}
//         <nav className={`navbar-mob md:hidden absolute top-0 bg-gray-800 p-10 text-gray-200 h-screen w-[70%] transition-all duration-300 ease-in-out ${isMobileNavVisible ? 'right-0' : 'right-full'}`}>
//           <span className='absolute top-5 left-5 cursor-pointer' onClick={toggleMobileNav}>
//             <i className="fa-regular fa-2xl fa-circle-xmark"></i>
//           </span>
//           <div className="flex my-auto h-1/2 items-center justify-center flex-col">
//             <Link to="/techincal-events" className='text-2xl my-10 cursor-pointer' onClick={toggleMobileNav}>
//               <FaLaptopCode size={22} /> Technical
//             </Link>
//             {/* Non-Technical Events Dropdown for Mobile */}
//             <div className="text-2xl my-10 cursor-pointer" onClick={toggleMobileNav}>
//               <FaGamepad size={22} /> Non-Technical
//               <ul className="ml-4 mt-2">
//                 <li>
//                   <Link to="/offline-events" className="block py-1 hover:bg-gray-700">
//                     Offline Events
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/online-events" className="block py-1 hover:bg-gray-700">
//                     Online Events
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <Link to="/workshops" className='text-2xl my-10 cursor-pointer' onClick={toggleMobileNav}>
//               <FaTools size={22} /> Workshop
//             </Link>
//             <button onClick={handleDownload} className='text-2xl my-10 cursor-pointer'>
//               <FaDownload size={22} /> Download Brochure
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <i className="fa-solid fa-bars fa-2xl ml-auto text-yellow-600 md:hidden cursor-pointer" onClick={toggleMobileNav}></i>
//       </div>
//     </>
//   );
// };

// const NavItem = ({ link, label, icon }) => (
//   <li className="navbar__item">
//     <Link to={link} className="navbar__link">
//       {icon}
//       <span>{label}</span>
//     </Link>
//   </li>
// );

// export default NavBar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaGamepad, FaTools, FaDownload, FaBars } from "react-icons/fa";
import TopLeftNavBar from "./TopLeftNavbar"; // Sidebar Component
import brochure from "../assets/NIS.pdf";
import "../css/NavBar.scss"; // Import the SCSS file
import img from "../images/qubitgold.png";
import "../css/DropDown.scss"

const NavBar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isNonTechDropdownOpen, setNonTechDropdownOpen] = useState(false); // State for dropdown

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

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const toggleNonTechDropdown = () => {
    setNonTechDropdownOpen((prev) => !prev); // Toggle dropdown
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
      <TopLeftNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="header relative md:mb-[5rem]">
        {/* Logo */}
        <div className="header__logo w-[10rem] md:w-auto w-[8rem] md:ml-40">
          <Link to="/" className="text-3xl font-extrabold tracking-wide text-white hover:text-blue-900 transition">
            <img src={img} alt="logo" className="" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar !hidden md:!flex">
          <ul className="navbar__menu">
            <NavItem link="/techincal-events" label="Technical" icon={<FaLaptopCode size={22} />} />
            {/* Non-Technical Events Dropdown */}
            <li
              className="navbar__item relative"
              onMouseEnter={() => setNonTechDropdownOpen(true)} // Open dropdown on hover
              onMouseLeave={() => setNonTechDropdownOpen(false)} // Close dropdown on mouse leave
            >
              <div className="navbar__link cursor-pointer">
                <FaGamepad size={22} />
                <span>Non-Technical</span>
              </div>
              {isNonTechDropdownOpen && (
                <ul
                  className="dropdown-menu absolute top-full left-0 bg-gray-800 text-white p-2 rounded-md shadow-md"
                  onMouseEnter={() => setNonTechDropdownOpen(true)} // Keep dropdown open when hovering over it
                  onMouseLeave={() => setNonTechDropdownOpen(false)} // Close dropdown when mouse leaves
                >
                  <li>
                    <Link to="/offline-events" className="block px-4 py-2 hover:bg-gray-700">
                      Offline Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/online-events" className="block px-4 py-2 hover:bg-gray-700">
                      Online Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <NavItem link="/workshops" label="Workshop" icon={<FaTools size={22} />} />
            <li className="navbar__item">
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <button onClick={handleDownload} className="navbar__link">
                  <FaDownload size={22} />
                </button>
                {showTooltip && (
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md">
                    Download Brochure
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`navbar-mob md:hidden absolute top-0 bg-gray-800 p-10 text-gray-200 h-screen w-[70%] transition-all duration-300 ease-in-out ${isMobileNavVisible ? 'right-0' : 'right-full'}`}>
          <span className='absolute top-5 left-5 cursor-pointer' onClick={toggleMobileNav}>
            <i className="fa-regular fa-2xl fa-circle-xmark"></i>
          </span>
          <div className="flex my-auto h-1/2 items-center justify-center flex-col">
            <Link to="/techincal-events" className='text-2xl my-10 cursor-pointer' onClick={toggleMobileNav}>
              <FaLaptopCode size={22} /> Technical
            </Link>
            {/* Non-Technical Events Dropdown for Mobile */}
            <div className="text-2xl my-10 cursor-pointer" onClick={toggleMobileNav}>
              <FaGamepad size={22} /> Non-Technical
              <ul className="ml-4 mt-2">
                <li>
                  <Link to="/offline-events" className="block py-1 hover:bg-gray-700">
                    Offline Events
                  </Link>
                </li>
                <li>
                  <Link to="/online-events" className="block py-1 hover:bg-gray-700">
                    Online Events
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/workshops" className='text-2xl my-10 cursor-pointer' onClick={toggleMobileNav}>
              <FaTools size={22} /> Workshop
            </Link>
            <button onClick={handleDownload} className='text-2xl my-10 cursor-pointer'>
              <FaDownload size={22} /> Download Brochure
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <i className="fa-solid fa-bars fa-2xl ml-auto text-yellow-600 md:hidden cursor-pointer" onClick={toggleMobileNav}></i>
      </div>
    </>
  );
};

const NavItem = ({ link, label, icon }) => (
  <li className="navbar__item">
    <Link to={link} className="navbar__link">
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

export default NavBar;