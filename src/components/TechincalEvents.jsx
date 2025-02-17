import React from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../images/probe and pursuit.jpeg'; // Replace with your actual image paths
import img3 from '../images/QUIZZIE BUZZIE.jpeg';
import img4 from '../images/Track tacticians.png';
import img5 from '../images/embedx.png';
import img6 from '../images/CYBER SYNAPSE.png'
import img7 from '../images/ASSEMBLY ARENA.jpeg'
import img8 from '../images/PIXEL PROS.png'
import img9 from '../images/TRANSFORMER.png'
import '../css/TechnicalEvents.css'; // Import your CSS file
import '../css/ViewMoreButton.css'; 

const FlipCard = ({ frontImage, title, content, rules, eventDetails }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/event-details', { state: { image: frontImage, title, content, rules, eventDetails } });
  };


  return (
    <div className="flip-card w-64 h-80 mx-auto my-8 cursor-pointer overflow-hidden">
      <div className="flip-card-inner relative w-full h-full">
        <div className="card-face front absolute w-full h-full bg-white shadow-md rounded-lg">
          <img src={frontImage} alt="Front" className="object-cover rounded-lg w-full h-full zoom-out-img" />
          <div className="absolute bottom-0 w-full text-center bg-opacity-75 bg-white py-2">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>
        <div className="card-face back absolute w-full h-full shadow-md rounded-lg flex flex-col justify-center items-center transform rotate-y-180">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-1 text-yellow-500">{title}</h2>
            <p className="bg-gradient-to-r text-black font-bold">{content} </p>
            <button
              onClick={handleViewMore}
              className="view-more-button mt-4"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechincalEvents = () => {

  const rules = [
    "Analyze and troubleshoot challenging circuit problems.",
    "Debug issues ranging from simple wiring to complex logical errors.",
    "Work within a set time frame to solve problems efficiently.",
    "Identify and fix faulty connections, misplaced components, or design flaws.",
    "Demonstrate critical thinking and swift problem-solving skills."
  ];
  const eventDetails = {
    date: "14.03.2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-"
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 mb-20  md:ml-15 mr-15 sm:ml-0">
      <FlipCard
        frontImage={img2}
        title="PROBE AND PURSUIT"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img4}
        title="TRACK TACTICIANS"
        content="Client satisfaction stands as a pivotal benchmark for the success of any business."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img3}
        title="QUIZZIE-BUZZIE"
        content="Testing involves rigorous evaluation under various conditions to identify potential issues."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img5}
        title="EMBEDX"
        content="Providing unparalleled 24x7 support to our clients."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img6}
        title="CYBERSYNAPSE"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img7}
        title="ASSEMBLY ARENA"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img8}
        title="PIXEL PROS"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <FlipCard
        frontImage={img9}
        title="TRANSFORMER"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />

    </div>
  );
};

export default TechincalEvents;
