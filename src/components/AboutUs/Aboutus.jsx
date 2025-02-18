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
              <strong>QUBITRON</strong> is a national-level symposium by the
              Computer Science and Engineering department of CIT. From
              hackathons to tech talks, this event is a gateway to innovation
              and knowledge-sharing.
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
              The Department of Electronics and Communication Engineering was
              started in the year 1968. Currently, it offers undergraduate,
              postgraduate, and research programs.
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
              Founded in 1990, our college is a pioneer in higher education,
              empowering students through research, industry exposure, and
              innovation.
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
                  "Coding challenges, AI & ML competitions, and robotics hackathons.",
              },
              {
                title: "Workshops",
                description:
                  "Hands-on sessions on trending technologies like blockchain, cybersecurity, and IoT.",
              },
              {
                title: "Guidelines to Register",
                description:
                  "Register online, submit your project details, and confirm participation via email.",
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