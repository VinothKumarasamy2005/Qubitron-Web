import React from "react";
import NavBar from "../NavBar";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";


const CommitteeCard = ({ image, name, year, role }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex items-center w-[500px] h-[180px] space-x-6">
      {/* Profile Picture (Auto-Resizing) */}
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 shadow-md"
      />

      {/* Name, Year, and Role */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-gray-400 text-lg">{year}</p>
        <p className="text-blue-400 font-medium text-lg">{role}</p>
      </div>
    </div>
  );
};

const CommitteeMembers = () => {
  const members = [
    { image: member1, name: "John Doe", year: "Third Year", role: "Event Coordinator" },
    { image: member2, name: "Jane Smith", year: "Third Year", role: "Technical Head" },
    { image: member3, name: "Alice Brown", year: "Third Year", role: "Design Lead" },
    { image: member4, name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: member1, name: "John Doe", year: "Third Year", role: "Event Coordinator" },
    { image: member2, name: "Jane Smith", year: "Third Year", role: "Technical Head" },
    { image: member3, name: "Alice Brown", year: "Third Year", role: "Design Lead" },
  ];

  return (
    <>
      <NavBar />
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Committee Members</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => (
            <CommitteeCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommitteeMembers;
