import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Timer from "../Utils/Timer";
import logo from "../../assets/logo.jpg";
import departmentImage from "../../assets/department.jpg";
import collegeImage from "../../assets/college.jpg";

const AboutUs = () => {
  return (
    <>
      <Timer />
      <div className="bg-gradient-to-br from-blue-50 to-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        {/* Symposium Section */}
        <motion.section
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt="Symposium Logo"
            className="w-64 sm:w-80 h-auto shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
              Our Symposium - QUBITRON
            </h1>
            <p className="text-lg mt-4 leading-relaxed text-gray-600">
              <strong>QUBITRON</strong>  is a National-level technical symposium organized by the Electronics and Communication Engineering (ECE) Department of Coimbatore Institute of Technology. Inspired by the fusion of Quantum Computing and Electronics, Qubitron serves as a dynamic platform for students to explore emerging technologies, exchange ideas, and enhance their technical expertise.

The symposium features a diverse lineup of technical and non-technical events, hands-on workshops, and expert sessions, fostering an environment of learning, innovation, and collaboration. With engaging competitions, insightful discussions, and cutting-edge technological showcases, Qubitron aims to bring together some of the brightest minds to push the frontiers of engineering and technology.
            </p>
          </div>
        </motion.section>

        {/* Department Section */}
        <motion.section
          className="mt-16 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={departmentImage}
            alt="Department"
            className="w-full sm:w-[500px] h-auto shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              About Our Department
            </h2>
            <p className="text-lg mt-4 leading-relaxed text-gray-600">
            The Department of Electronics and Communication Engineering was started in the year 1968. Currently the department offers undergraduate – B.E Electronics and Communication Engineering (Full time), post graduate – M.E Communication Engineering (Full Time and Part Time) and research (Full Time and Part Time) programmes.
            The department has produced 20 doctorates in the area of Signal processing, Wireless Communication, Networking, Wireless sensor Networks, Image processing, VLSI Design and Embedded systems. The faculty members of the department have undertaken innovative projects from leading agencies such as AICTE, UGC, DST.
            </p>
          </div>
        </motion.section>

        {/* College Section */}
        <motion.section
          className="mt-16 flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={collegeImage}
            alt="College"
            className="w-full sm:w-[500px] h-auto shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Our College
            </h2>
            <p className="text-lg mt-4 leading-relaxed text-gray-600">
            The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956.
            CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987.
            </p>
          </div>
        </motion.section>

        {/* Events Section with Animated Cards */}
        <motion.section
          className="mt-16 flex flex-col items-center gap-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            About Our Events
          </h2>
          <p className="text-lg mt-4 leading-relaxed text-gray-600">
            QUBITRON offers a dynamic lineup of events tailored for technology
            enthusiasts and aspiring innovators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Technical Events",
                description:
                  "Designed to enhance problem-solving and technical skills, these events challenge students in circuit design, coding, and real-world engineering tasks. They bridge the gap between theory and practical application, preparing participants for the evolving tech landscape.",
              },
              {
                title: "Workshops",
                description:
                  "Hands-on sessions by industry experts offering insights into emerging technologies like IoT, AI, Embedded Systems, and Quantum Computing. These workshops provide practical exposure beyond classroom learning, ensuring participants stay ahead in the tech world.",
              },
              
              {
                title: "Guidelines",
                description:
                  "Participants must register in advance and be punctual for all events. Professionalism and ethical conduct are expected throughout the symposium. Judging will be based on creativity, accuracy, and problem-solving skills, and all decisions by judges and organizers are final. Give your best and make Qubitron 2K25 a great success!",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-lg mt-2 text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Floating Animation Text */}
        <motion.div
          className="mt-16 text-center text-xl sm:text-2xl font-semibold text-gray-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          "Innovate. Inspire. Impact."
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;