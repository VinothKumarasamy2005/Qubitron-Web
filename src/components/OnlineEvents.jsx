import React, { useState } from 'react';
import img2 from '../images/Melody master.png'; // Replace with actual image paths
import img3 from '../images/Meme_magnus.png';
import img4 from '../images/Shutter stock.png';
import img5 from '../images/artophobia.png';
import img6 from '../images/Funk fusion.png';

import '../css/OnlineEvents.css'; // Import the CSS file

const items = [
  { id: 1, image: img2, title: 'Melody Master', content: 'In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation.' },
  { id: 2, image: img3, title: 'Meme Magnus', content: 'Testing involves rigorous evaluation under various conditions to identify potential issues.' },
  { id: 3, image: img4, title: 'Shutter Stock', content: 'Client satisfaction stands as a pivotal benchmark for the success of any business.' },
  { id: 4, image: img5, title: 'Artophobia', content: 'Providing unparalleled 24x7 support to our clients.' },
  { id: 5, image: img6, title: 'Funk Fusion', content: 'In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation.' },
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
