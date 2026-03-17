import React, { useEffect, useState } from 'react';

const timeZones = {
  EST: 'America/New_York',
  CST: 'America/Chicago',
  MST: 'America/Denver',
  PST: 'America/Los_Angeles',
};

const DigitalClock = () => {
  const [times, setTimes] = useState({});

  const updateTimes = () => {
    const newTimes = {};
    const currentDate = new Date();

    for (const [zone, timeZone] of Object.entries(timeZones)) {
      newTimes[zone] = currentDate.toLocaleString('en-US', {
        timeZone,
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }

    setTimes(newTimes);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimes, 1000);
    updateTimes(); // Initial call to set time immediately

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-2">Digital Clock</h1>
      <ul>
        {Object.entries(times).map(([zone, time]) => (
          <li key={zone} className="mb-1">
            <span className="font-semibold">{zone}: </span>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DigitalClock;