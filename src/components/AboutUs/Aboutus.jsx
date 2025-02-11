import React from "react";
import logo from "../../assets/logo.jpg"; // Update path accordingly
import departmentImage from "../../assets/department.jpg"; // Department image
import collegeImage from "../../assets/college.jpg"; // College photo
import staff1 from "../../assets/staff1.jpg"; // Example staff images
import staff2 from "../../assets/staff2.jpg";
import staff3 from "../../assets/staff3.jpg";
import NavBar from "../NavBar";

// Staff data (Replace with actual details)
const staffMembers = [
  { image: staff1, name: "Dr. John Doe", role: "HOD" },
  { image: staff2, name: "Ms. Jane Smith", role: "Assistant Professor" },
  { image: staff3, name: "Mr. Alan Brown", role: "Tutor" },
];

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <br/>
    <br></br>
    <br/>
    <div className="bg-gray-100 text-gray-900">
      {/* Large Logo & Symposium Description */}
      <section className="flex flex-col items-center text-center p-10">
        <img src={logo} alt="Symposium Logo" className="w-64 h-64 mb-6" />
        <h1 className="text-5xl font-bold">Our Symposium</h1>
        <p className="text-lg max-w-3xl mt-4">
        QUBITRON is a National-level technical intercollegiate symposium conducted by Computer Science and Engineering department of Coimbatore Institute of Technology. This dynamic event encompasses a diverse array of technical and non-technical competitions, workshops, and webinars, fostering an environment where students can sharpen their skills and expand their knowledge. From cutting-edge hackathons to thought-provoking tech talks by industry leaders, CRYPTERA offers a platform for attendees to engage with the latest trends in technology.
        </p>
      </section>

      {/* Department Image & Description */}
      <section className="flex flex-col md:flex-row items-center bg-white p-10 shadow-lg">
        <img src={departmentImage} alt="Department" className="w-1/2 h-auto rounded-xl" />
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold">About Our Department</h2>
          <p className="text-lg mt-4">
            Our department is committed to excellence in education and research. We strive to provide the best learning environment for students.
          </p>
        </div>
      </section>

      {/* College Photo & Description */}
      <section className="flex flex-col md:flex-row-reverse items-center bg-gray-200 p-10 shadow-lg">
        <img src={collegeImage} alt="College" className="w-1/2 h-auto rounded-xl" />
        <div className="md:mr-8 text-center md:text-left">
          <h2 className="text-3xl font-bold">Our College</h2>
          <p className="text-lg mt-4">
            Established in 1990, our college has been a pioneer in higher education. We nurture talent and prepare students for a bright future.
          </p>
        </div>
      </section>

      {/* Staff Cards */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Staff</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {staffMembers.map((staff, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl w-60"
            >
              <img src={staff.image} alt={staff.name} className="w-32 h-32 rounded-full border-4 border-gray-300" />
              <h3 className="text-xl font-semibold mt-4">{staff.name}</h3>
              <p className="text-gray-600">{staff.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
