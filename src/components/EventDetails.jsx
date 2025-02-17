import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/EventDetails.css'; // Import your CSS file

const EventDetails = () => {
  const location = useLocation();
  const { image, title, content, rules, eventDetails } = location.state || {};

  return (
    <div className="event-details-container">
      <div className="max-w-2xl mx-auto">
        {/* Event Image */}
        <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-md border-2 border-gold" />

        {/* Event Title */}
        <h1 className="text-3xl font-bold mt-6 mb-4 text-gold">{title}</h1>

        {/* Event Content */}
        <p className="text-lg text-gray-300">{content}</p>

        {/* Event Details Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-gold">Event Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="event-detail-item">
              <span className="font-semibold text-gold">Date:</span> {eventDetails?.date}
            </div>
            <div className="event-detail-item">
              <span className="font-semibold text-gold">Venue:</span> {eventDetails?.venue}
            </div>
            <div className="event-detail-item">
              <span className="font-semibold text-gold">Duration:</span> {eventDetails?.duration}
            </div>
            <div className="event-detail-item">
              <span className="font-semibold text-gold">Eligibility:</span> {eventDetails?.eligibility}
            </div>
            <div className="event-detail-item">
              <span className="font-semibold text-gold">Prize:</span> {eventDetails?.prize}
            </div>
          </div>
        </div>

        {/* Rules and Regulations Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-gold">Rules and Regulations</h2>
          <ul>
            {rules?.map((rule, index) => (
              <li key={index} style={{ '--accent-color': '#7f1d1d' }}>
                <div className="icon"><i className="fa-solid fa-rule"></i></div>
                <div className="title">Rule {index + 1}</div>
                <div className="descr">{rule}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
