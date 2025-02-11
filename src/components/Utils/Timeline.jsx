import React from "react";
import { FaRocket } from "react-icons/fa";

const timelineData = [
  { date: "March12 9.00 Am", event: "Event" },
  { date: "Feb 12, 2024", event: "Team Expansion j,hsdjhgfdgvgdb jfghkjgh" },
  { date: "Mar 18, 2024", event: "Development Phase" },
  { date: "Apr 25, 2024", event: "Bug Fixing & Testing" },
  { date: "May 30, 2024", event: "Beta Release with extended testing and feedback collection" },
  { date: "Jun 20, 2024", event: "Global Launch with a major marketing campaign and public release" },
];

const Timeline = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
      {/* Glowing Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`relative flex w-full items-center py-12 ${
            index % 2 === 0 ? "justify-start pl-20" : "justify-end pr-20"
          }`}
        >
          {/* Glowing Circle Connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>

          {/* Event Box - Responsive Size */}
          <div className="relative flex flex-col items-center min-w-[250px] max-w-[400px] min-h-[100px] p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-600 transition-colors duration-300 hover:text-cyan-400">
            {/* Date Positioned Above */}
            <div className="absolute -top-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              {item.date}
            </div>

            {/* Same Icon for All Events */}
            <div className="relative text-4xl text-blue-400 p-4 border-4 border-pink-400 rounded-full bg-gray-900 shadow-lg">
              <FaRocket />
            </div>

            {/* Event Text - Responsive & Wrapped */}
            <div className="mt-2 text-center break-words whitespace-normal">
              <p className="text-lg font-semibold tracking-wide">{item.event}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
