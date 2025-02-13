import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft, FaClock } from "react-icons/fa";
import NavBar from "../NavBar";

const timelineData = [
  { date: "March 12, 9:00 AM", event: "Event" },
  { date: "Feb 12, 2024", event: "Team Expansion" },
  { date: "Mar 18, 2024", event: "Development Phase" },
  { date: "Apr 25, 2024", event: "Bug Fixing & Testing" },
  { date: "May 30, 2024", event: "Beta Release" },
  { date: "Jun 20, 2024", event: "Global Launch" },
  { date: "July 1, 2024  9.00Am", event: "Post Launch Review" },
  { date: "Aug 15, 2024", event: "Product Enhnhajdguygefyejancement" },
  { date: "March 12, 9:00 AM", event: "Event" },
  { date: "Feb 12, 2024", event: "Team Expansion" },
  { date: "Mar 18, 2024", event: "Development Phase" },
  { date: "Apr 25, 2024", event: "Bug Fixing & Testing" },
  { date: "May 30, 2024", event: "Beta Release" },
  { date: "Jun 20, 2024", event: "Global Launch" },
  { date: "July 10, 2024", event: "Post Launch Review" },
  { date: "Aug 15, 2024", event: "Product Enhancement" },
];

const Timeline = () => {
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const firstEventRef = useRef(null);
  const lastEventRef = useRef(null);

  const OFFSET = -50; // Adjust starting position
  const HEIGHT_OFFSET = 20; // Adjust ending position

  const updateLine = () => {
    if (firstEventRef.current && lastEventRef.current) {
      const firstArrow = firstEventRef.current.querySelector(".arrow-icon");
      const lastArrow = lastEventRef.current.querySelector(".arrow-icon");

      if (firstArrow && lastArrow) {
        const firstPosition = firstArrow.getBoundingClientRect().top + window.scrollY;
        const lastPosition = lastArrow.getBoundingClientRect().top + window.scrollY;

        setLineTop(firstPosition + firstArrow.offsetHeight / 2 + OFFSET);
        setLineHeight(lastPosition - firstPosition + HEIGHT_OFFSET);
      }
    }
  };

  useEffect(() => {
    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, [timelineData.length]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
      
      </div>
      <br /><br /><br />

      <div
        id="timeline-container"
        className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-24 pb-20"
      >
        <div className="absolute top-10 left-10 flex items-center gap-3 text-white text-4xl font-bold">
          <FaClock className="text-blue-500" />
          <span>Timeline</span>
        </div>

        {/* Dynamic Vertical Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
          style={{
            top: lineTop + "px",
            height: lineHeight + "px",
          }}
          
        ></div>

        <div className="relative flex flex-col items-center w-full z-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex w-full items-center py-12 ${
                index % 2 === 0 ? "justify-end pr-120" : "justify-start pl-120"
              }`}
              ref={index === 0 ? firstEventRef : index === timelineData.length - 1 ? lastEventRef : null}
            >
              <div className="arrow-icon absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                {index % 2 === 0 ? (
                  <FaArrowRight className="text-white text-lg" />
                ) : (
                  <FaArrowLeft className="text-white text-lg" />
                )}
              </div>

              <div className="relative flex flex-col items-center min-w-[220px] max-w-[350px] min-h-[80px] p-5 bg-gray-800 rounded-xl shadow-lg border border-gray-600 transition-all duration-300 hover:text-cyan-400">
                <div className="absolute -top-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {item.date}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-lg font-semibold">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;