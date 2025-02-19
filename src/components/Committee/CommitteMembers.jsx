import React from "react";
import NavBar from "../NavBar";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";
import Timer from "../Utils/Timer";

const members = [
  { image: member1, name: "John Doe", year: "Third Year", role: "Event Coordinator" },
  { image: member2, name: "Jane Smith", year: "Third Year", role: "Technical Head" },
  { image: member3, name: "Alice Brown", year: "Third Year", role: "Design Lead" },
  { image: member4, name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
  { image: member1, name: "Eve Adams", year: "Third Year", role: "Marketing Head" },
  { image: member2, name: "Charlie White", year: "Third Year", role: "Sponsorship Head" },
];

const CommitteeMembers = () => {
  return (
    <>
  
  <Timer/>
      <div className="bg-gray-100 text-gray-900 mt-24 min-h-screen flex flex-col items-center overflow-auto">
        <br/>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Committee</h2>
        <p className="text-lg text-gray-600 mb-12">The masterminds behind every successful event.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-8 rounded-3xl shadow-xl flex flex-col items-center w-[350px] h-[320px] space-y-4 transition-transform transform hover:scale-110 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-md"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.year}</p>
                <p className="text-blue-600 font-medium text-lg">{member.role}</p>
              </div>
              
            </div>
          ))}
          <br/>
        </div>
      </div>
    </>
  );
};

export default CommitteeMembers;