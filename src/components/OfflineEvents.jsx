import React from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../images/Anime quiz.png'; // Replace with your actual image paths
import img3 from '../images/carrom.png';
import img4 from '../images/Chess.png';
import img5 from '../images/Connection quiz.png';
import img6 from '../images/E football.png';
import img7 from '../images/freefire logo.png';
import img8 from '../images/Integration bee.png';
import img9 from '../images/Treasure Hunt.png';
import '../css/OfflineEvents.css'; // Import the new CSS file

const EventCard = ({ backgroundImage, title, content, rules, eventDetails }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/event-details', { state: { image: backgroundImage, title, content, rules, eventDetails } });
  };

  return (
    <article className="card w-64 h-80">
      <img
        className="card__background"
        src={backgroundImage}
        alt={title}
        width="1920"
        height="2193"
      />
      <div className="card__content flow">
        <div className="card__content--container flow">
          <h2 className="card__title">{title}</h2>
          <p className="card__description mt-[1rem]">{content}</p>
        </div>
        <button className="card__button" onClick={handleViewMore}>
          View more
        </button>
      </div>
    </article>
  );
};

const OfflineEvents = () => {
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
    <div className="offline-events-container">
      <EventCard
        backgroundImage={img2}
        title="Anime Quiz"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img4}
        title="Chess"
        content="Client satisfaction stands as a pivotal benchmark for the success of any business."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img3}
        title="Carrom"
        content="Testing involves rigorous evaluation under various conditions to identify potential issues."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img5}
        title="Connection Quiz"
        content="Providing unparalleled 24x7 support to our clients."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img6}
        title="E football"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img7}
        title="FreeFire"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img8}
        title="Integration Bee"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img9}
        title="Treasure Hunt"
        content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
        rules={rules}
        eventDetails={eventDetails}
      />
    </div>
  );
};

export default OfflineEvents;