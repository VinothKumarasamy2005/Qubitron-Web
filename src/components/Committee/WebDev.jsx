import React from "react";
import member4 from "../../assets/images/member4.jpg";

const teamMembers = [
  { id: 1, name: "Team Member 1", img: member4 },
  { id: 2, name: "Team Member 2", img: member4 },
  { id: 3, name: "Team Member 3", img: member4 },
];

const WebDev = () => {
  return (
    <>   
    <br/>
    <br/>
     <div className="flex flex-col items-center py-10 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6"> Developers</h1>

      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className={`flex items-center w-4/5 mb-10 p-6 rounded-xl shadow-md bg-gray-100 transition-transform transform hover:scale-105 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Profile Section */}
          <div className="relative flex-shrink-0 border-black" >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full border-4 border-black shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-black text-xs font-bold text-white px-3 py-1 rounded-full">
              Third Year
            </span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default WebDev;