import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const Timer = () => {
  const nodeRef = useRef(null);
  const targetDate = new Date("March 14, 2025 09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeRemaining(target) {
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="fixed bottom-5 right-5 p-3 bg-gray-900 text-white rounded-lg shadow-lg cursor-move border border-gray-600">
       
        <div className="flex space-x-2 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="p-2 bg-gray-800 rounded-md">
              <p className="text-xl font-semibold text-green-300">{value}</p>
              <span className="text-xs uppercase">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default Timer;
