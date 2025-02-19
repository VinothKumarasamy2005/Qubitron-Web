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
  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md border-2 border-blue-800 hover:bg-blue-700 hover:border-blue-900 transition duration-300 ease-in-out mt-7"
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

  const eventDetails = [
    "Team size: 2 members per team.",
    "Round 1 Identification of the components shown Teams that identifies more number of components will be selected for round2",
    "Circuit debugging Each team will be given a faulty circuit , they have to identify, rectify the circuit and produce the expected output  within the given time will get to round3.",
    "Circuit designing Teams that get to this round will be given a common high level circuit to build , the team that builds the circuit within the given time will be announced as  winner of the event."
  ];
  
  const Probe_and_Pursuit_rules = [
    "Team size: 2 members per team.",
    "Round 1 Identification of the components shown Teams that identifies more number of components will be selected for round2",
    "Circuit debugging Each team will be given a faulty circuit , they have to identify, rectify the circuit and produce the expected output  within the given time will get to round3.",
    "Circuit designing Teams that get to this round will be given a common high level circuit to build , the team that builds the circuit within the given time will be announced as  winner of the event.",
    "For the Entire Rules,Refer Gform"
  ];

  const embedx_rules = [
    "Participants should form a team of 3 to 4among themselves",
    "All the components and required materials will be provided.",
    "No need to bring laptops. ",
    "In case of any copying or malpractice leads to disqualification.",
    "For the Entire Rules,Refer Gform"
  ];


  const quiz_rules = [
    "Round 1:With a mix of descriptive and pictorial problems, this challenge is your chance to demonstrate your expertise and outshine the competition. Precision, quick thinking, and teamwork will be your winning formula.",
    "All the components and required materials will be provided.",
    "No need to bring laptops. ",
    "In case of any copying or malpractice leads to disqualification.",
    "For the Entire Rules,Refer Gform"
  ];


  const prompt_verse_rules = [
    "Each team must consist of two members.",
    "Participants are asked to bring  their  laptops.",
    "Teams must use only the AI tools specified during the event.",
    "Only outputs submitted within the given time limit will be accepted",
    "For the Entire Rules,Refer Gform"
  ];

  const line_following_robot_rules = [
    "Each team can have 2-4 participants.",
    "The participating bots must be autonomous and cannot involve wireless communication between an operator and the bot",
    "Bots can be circular, square, or any shape, but must fit inside the box of 20cm long, 20cm wide, and 20cm height at any given point in time",
    "The maximum weight of the bot can not exceed 3kg including battery, however, a tolerance of 5% in weight is acceptable.",
    "For the Entire Rules,Refer Gform"
  ];

  const cybernapse_rules = [
    "The Contest consists of  2 rounds that test the participants eligible for Champion title.",
    "Round 1 The participants will take part in engaging technical quiz designed to assess their knowledge of programming concepts, Data structures and Algorithms and logical reasoning.",
    "Round 2 Participants face advanced-level coding challenges that test their problem-solving skills under a set time limit.",
    "All participants compete in both rounds, and their total score across both rounds determines the final ranking",
    "Top performers who successfully complete the challenges earn exciting rewards and claim the title"
  ];

  const assembly_arena_rules = [
    "There will be a three round.",
    "Both 8051 microcontroller programming and STM32 microcontroller programming contests will be conducted as per the preference of the team during the enrollment  for the event.",
    "Keil Microvision software will be used as a programming environment.",
    "Systems will be allocated.",
    "For the Entire Rules,Refer Gform"
    
  ];

  const paper_presentation_rules = [
    "Participants can choose any topic related to Engineering, Technology, or Applied Sciences. The topic should be original and innovative",
    "Maximum 3 or 4 members in a team , Individual participation also allowed",
    "Each team will have 10 minutes for the presentation, followed by a 5-minute Q&A session.",
    "Papers must be submitted in PDF format before the deadline.",
    "For the Entire Rules,Refer Gform"
    
  ];

  const webleague_rules = [
    "Each team must have exactly 2 members.",
    "Participants must bring their own laptops with necessary tools pre-installed.",
    "The project must be fully functional with both frontend & backend.",
    "Teams can use any tech stack (MERN, Spring Boot + React, Django + Angular, etc.).",
    "Teams will choose 1 project idea from 10 given at the start.",
    "For the Entire Rules,Refer Gform",
    "Pre-built templates are not allowed—originality is key."
  ];
  const Probe_and_circuit_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
    fee:"200"
  };

  const assembly_arena_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "2 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
    fee:"200",
    gform:"https://docs.google.com/forms/d/e/1FAIpQLSfZScTfYDRnuvw2LL-KG9tTZN7WwNmLeGNb2HvoLG4Zr_QuEw/viewform?usp=header"
  };
  const paper_presentation_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
      fee:"200"
  };

  const embedx_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
      fee:"200"
  };

  const quiz_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
      fee:"200"
  };


  const line_following_robot_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
      fee:"200"
  };
  const prompt_verse_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
     fee:"200"
  };
  const cybernapse_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-",
     fee:"200"

  };
  const webleague_eventDetails = {
    date: "14/02/2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.90000/-",
     fee:"200"
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 mb-20  md:ml-15 mr-15 sm:ml-0">
      <FlipCard
        frontImage={img2}
        title="PROBE AND PURSUIT"
        content=" An event to test the circuit designing and debugging skills."
        rules={Probe_and_Pursuit_rules}
        eventDetails={Probe_and_circuit_eventDetails}
      />

      <FlipCard
        frontImage={img2}
        title="PAPER PRESENTATION"
        content=" The Paper Presentation is an event  where participants showcase their research, ideas, and innovations in front of a panel of judges and an audience."
        rules={paper_presentation_rules}
        eventDetails={paper_presentation_eventDetails}
      />
      <FlipCard
        frontImage={img4}
        title="TRACK TACTICIANS"
        content="Track Tacticians is a thrilling line follower bot competition where participants must design and build an autonomous bot capable of following a predefined track with precision and speed."
        rules={line_following_robot_rules}
        eventDetails={line_following_robot_eventDetails}
      />
      <FlipCard
        frontImage={img3}
        title="QUIZTOPIA"
        content="Quiztopia is a thrilling team challenge! Compete in pairs to tackle thought-provoking questions that test your foundational and core knowledge."
        rules={quiz_rules}
        eventDetails={quiz_eventDetails}
      />
      <FlipCard
        frontImage={img5}
        title="EMBEDX"
        content="EMBEDX is an offline event where participants design,program and troubleshoot microcontroller based circuits (mainly using Arduino UNO) "
        rules={embedx_rules}
        eventDetails={embedx_eventDetails}
      />
      <FlipCard
        frontImage={img6}
        title="CYBERSYNAPSE"
        content="Cyber Synapse is the High-Stakes programming contest designed to challenge programmers of all skill levels."
        rules={cybernapse_rules}
        eventDetails={cybernapse_eventDetails}
      />
      <FlipCard
        frontImage={img7}
        title="ASSEMBLY ARENA"
        content="ASSEMBLY ARENA is an event where the participants showcase their Assembly language programming skills."
        rules={assembly_arena_rules}
        eventDetails={assembly_arena_eventDetails}
      />
      <FlipCard
        frontImage={img8}
        title="THE WEB LEAGUE"
        content="Pixel Pros is a thrilling full-stack development competition that tests coding and problem-solving skills. "
        rules={webleague_rules}
        eventDetails={webleague_eventDetails}
      />
      <FlipCard
        frontImage={img9}
        title="PROMPT VERSE"
        content="PROMPT VERSE is a competition that tests creativity and AI prompting skills. Participants must craft precise AI prompts to recreate given images or videos. "
        rules={prompt_verse_rules}
        eventDetails={prompt_verse_eventDetails}
      />

    </div>
  );
};

export default TechincalEvents;
