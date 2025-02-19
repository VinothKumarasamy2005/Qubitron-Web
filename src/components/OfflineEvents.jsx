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
  const Anime = [
    "Teams may have up to 4 members.",
    "Mobile phone use during the event is strictly prohibited. ",
    "It has 2 rounds : STAGE 1, STAGE 2",
    "For further information refer G-form"
  ];
  const chess = [
    "The match is restricted to the latest FIDE rules and Swiss system.",
    "Arbiter's decision is conclusive.",
    "In the event of a tie, the higher - ranked player will receive the prize.",
    "Each Round lasts 20 minutes, if the round exceeds 20 minutes, a 10 minute clock will be provided (5 minutes per player)",
    "For further information refer G-form"
    
  ];
  const connection = [
    "4 member per team ",
    "Usage of phone is restricted",
    "Three rounds will be conducted ",
    "For further information refer G-form"
  ];
  const football = [
    "Matches in the qualifying rounds will be played as best of 1.",
    "No extra time or penalties will be applied in qualifying rounds. If the match ends in a draw, it will be considered a tie.",
    "Knockout rounds(if applicable) will be played in best of 3 format, with extra time or penalties applied only if specified.",
    "In the event of a tie in any knockout round, extra time and penalties will be used to determine the winner.",
    "For further information refer G-form"
  ];
  const bee = [
    "The event has three rounds.",
    "Round 1 : Solve 5 easy to medium integration problems.",
    "Round 2 : Medium-level problems.",
    "Final Round: Hardest problems with given answers.",
    "Solve and match the answer; if unsolved, accuracy determines the winner.",
    "For further information refer G-form"
  ];
  const freeFire = [
    "Grenades are strictly prohibited.",
    "Unlimited ammo will be provided.",
    "Emotes are not allowed during the match.",
    "Moderators will spectate matches and should be informed immediately of any issues.",
    "For further information refer G-form"
  ];
  const hunt = [
    "Teams must follow the sequence of QR code clues and cannot skip any.",
    "Only one mobile phone per team is permitted for scanning QR codes.",
    "A volunteer will accompany the team for navigation but will not help in solving clues.",
    "No external assistance (internet searches, asking outsiders) is allowed.",
    "Teams must complete the hunt within the given time limit.",
    "For further information refer G-form"
  ];
  const anime_eventDetails = {
    date: "14.03.2025",
    venue: "L 301",
    duration: "1 HOUR",
    eligibility: "ANYONE",
    prize: "RS.2000/-"
  };

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
        content='Showcase your anime expertise! Form a squad of 2 to 4 members and compete for exciting prizes. Individual participation, known as "Solo Leveling," is also accepted.'
        rules={Anime}
        eventDetails={anime_eventDetails}
      />
      <EventCard
        backgroundImage={img4}
        title="Chess"
        content="Chess Event is an exciting offline tournament that challenges strategic thinking and problem-solving skills. It offers a competitive yet friendly space for players of all levels to showcase talent and connect."
        rules={chess}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img3}
        title="Carrom"
        content="The Offline Carrom Tournament challenges players' precision, strategy, and control in a fair-play environment. Enthusiasts compete in head-to-head matches, following standard carrom rules for an exciting experience."
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img5}
        title="Connection Quiz"
        content="A Connection Event is an interactive activity where participants link ideas, people, or concepts through creativity, teamwork, and problem-solving."
        rules={connection}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img6}
        title="E football"
        content="The eFootball Mobile Tournament offers fast-paced matches with qualification rounds, knockouts, and finals to crown the top player."
        rules={football}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img7}
        title="FreeFire"
        content="The Free Fire Tournament is an intense battle royale competition where players showcase their survival skills, strategy, and teamwork. Compete in thrilling matches to be the last one standing and claim victory!"
        rules={freeFire}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img8}
        title="Integration Bee"
        content="Integration Bee is the event which test the calculus knowledge of an individual specially in integration."
        rules={bee}
        eventDetails={eventDetails}
      />
      <EventCard
        backgroundImage={img9}
        title="Treasure Hunt"
        content="The Treasure Hunt is an adventurous game where participants follow clues, solve puzzles, and navigate challenges to find hidden treasures. It tests teamwork, problem-solving, and quick thinking in a fun and exciting way!"
        rules={hunt}
        eventDetails={eventDetails}
      />
    </div>
  );
};

export default OfflineEvents;