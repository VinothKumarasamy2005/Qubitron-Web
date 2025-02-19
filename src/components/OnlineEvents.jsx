import React, { useState } from 'react';
import img2 from '../images/Melody master.png'; // Replace with actual image paths

import img4 from '../images/Shutter stock.png';
import img5 from '../images/artophobia.png';


import '../css/OnlineEvents.css'; // Import the CSS file

const items = [
  { id: 1, image: img2, title: 'SINGING', content: 'An online event to showcase the singing talent.' },
  { id: 3, image: img5, title: 'ARTOPHOBIA', content: '"Arto Phobia" is an online art contest exclusively for undergraduate and postgraduate students from any institute. Participants are invited to submit photos of their physical artworks, which will be showcased on our official Instagram page. The artwork that garners the highest number of likes will be declared the winner.' },
  { id: 4, image: img5, title: 'DANCE', content: 'Funk Fusion is an online event where students record their dance videos and upload them using the Google Form provided on the symposium website. The videos will then be posted on the Instagram page ‘ @qubitron__2k25 ’ The videos that receive the most likes will be announced as the winners.' },
  { id: 5, image: img4, title: 'SHUTTER STOCK', content: 'Shutter shock is an online event where the photograph of yours will be posted in Instagram and the maximum liked photograph will be announced as the winner.' },
  
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledItems1 = shuffleArray([...items]);
const shuffledItems2 = shuffleArray([...items]);

const duplicatedItems1 = [...shuffledItems1, ...shuffledItems1];
const duplicatedItems2 = [...shuffledItems2, ...shuffledItems2];

const OnlineEvents = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="online-events-container">
      <div className="active-item-container">
        {activeItem ? (
          <>
            <img src={activeItem.image} alt={activeItem.title} className="active-item-image" />
            <h2 className="active-item-title">{activeItem.title}</h2>
            <p className="active-item-content">{activeItem.content}</p>
          </>
        ) : (
          <p className="placeholder-text">Click an image to view details.</p>
        )}
      </div>

      <div className="scroll-container">
        <div className="scroll-column">
          {duplicatedItems1.map((item, index) => (
            <div key={`${item.id}-${index}`} className="scroll-item" onClick={() => handleClick(item)}>
              <img src={item.image} alt={item.title} className="scroll-item-image" />
            </div>
          ))}
        </div>
        <div className="scroll-column">
          {duplicatedItems2.map((item, index) => (
            <div key={`${item.id}-${index}`} className="scroll-item" onClick={() => handleClick(item)}>
              <img src={item.image} alt={item.title} className="scroll-item-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineEvents;
