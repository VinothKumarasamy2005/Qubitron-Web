import React from "react";
import logo from "../../assets/logo.jpg";
import departmentImage from "../../assets/department.jpg";
import collegeImage from "../../assets/college.jpg";
import staff1 from "../../assets/staff1.jpg";
import staff2 from "../../assets/staff2.jpg";
import staff3 from "../../assets/staff3.jpg";
import NavBar from "../NavBar";
import Timer from "../Utils/Timer";

const staffMembers = [
  { image: staff1, name: "Dr. John Doe", role: "HOD" },
  { image: staff2, name: "Ms. Jane Smith", role: "Assistant Professor" },
  { image: staff3, name: "Mr. Alan Brown", role: "Tutor" },
];

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <br/>
      <br/>
      <br/>
      <Timer/>
      <div className="bg-gray-100 text-gray-900 p-10">
        {/* Large Logo & Symposium Description */}
        <section className="flex flex-col md:flex-row items-center text-left gap-10">
          <img src={logo} alt="Symposium Logo" className="w-[600px] h-[500px] rounded-lg shadow-lg" />
          <div className="max-w-3xl bg-gradient-to-r from-gray-200 to-gray-50 p-6 rounded-lg shadow-md">
            <h1 className="text-5xl font-bold">Our Symposium</h1>
            <p className="text-lg mt-4 leading-relaxed">
              <strong>QUBITRON</strong> is a National-level technical intercollegiate symposium conducted by the
              Computer Science and Engineering department of Coimbatore Institute of Technology. This event encompasses
              technical and non-technical competitions, workshops, and webinars, fostering an environment for students
              to enhance their skills and knowledge. From cutting-edge hackathons to thought-provoking tech talks by
              industry leaders, <strong>CRYPTERA</strong> offers a platform for attendees to engage with the latest trends in technology.
            </p>
          </div>
        </section>

        {/* Department Image & Description */}
        <section className="flex flex-col md:flex-row items-center bg-white p-10 shadow-lg mt-10 rounded-lg">
          <img src={departmentImage} alt="Department" className="w-2/5 h-auto rounded-lg shadow-md" />
          <div className="md:ml-10 text-center md:text-left max-w-xl bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">About Our Department</h2>
            <p className="text-lg mt-4 leading-relaxed">
              Our department is committed to excellence in education and research. We strive to provide the best
              learning environment for students, ensuring innovation and knowledge growth.
            </p>
          </div>
        </section>

        {/* College Photo & Description */}
        <section className="flex flex-col md:flex-row-reverse items-center bg-gray-200 p-10 shadow-lg mt-10 rounded-lg">
          <img src={collegeImage} alt="College" className="w-2/5 h-auto rounded-lg shadow-md" />
          <div className="md:mr-10 text-center md:text-left max-w-xl bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">Our College</h2>
            <p className="text-lg mt-4 leading-relaxed">
              Established in 1990, our college has been a pioneer in higher education. We nurture talent and prepare
              students for a bright future through holistic learning approaches and industry collaborations.
            </p>
          </div>
        </section>

        {/* Staff Cards */}
        <section className="p-10 mt-10">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Staff</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl w-60"
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-32 h-32 rounded-full border-4 border-gray-300"
                />
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
