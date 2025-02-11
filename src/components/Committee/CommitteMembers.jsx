import React from "react";
import NavBar from "../NavBar";

const CommitteeCard = ({ image, name, year, role }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-80">
      {/* Profile Picture */}
      <img src={image} alt={name} className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-md" />
      
      {/* Name */}
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      
      {/* Year & Role */}
      <p className="text-gray-400 text-sm">{year}</p>
      <p className="text-blue-400 font-medium">{role}</p>
    </div>
  );
};

const CommitteeMembers = () => {
  const members = [
    { image: "https://via.placeholder.com/150", name: "John Doe", year: "Third Year", role: "Event Coordinator" },
    { image: "https://via.placeholder.com/150", name: "Jane Smith", year: "Third Year", role: "Technical Head" },
    { image: "https://via.placeholder.com/150", name: "Alice Brown", year: "Third Year", role: "Design Lead" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    { image: "https://via.placeholder.com/150", name: "Bob Johnson", year: "Third Year", role: "Logistics Manager" },
    
  ];

  return (
    <>
    <NavBar/>
    <br/>
    <br/>
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Committee Members</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <CommitteeCard key={index} {...member} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CommitteeMembers;
