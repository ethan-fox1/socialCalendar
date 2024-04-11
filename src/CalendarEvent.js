import React from 'react';
import './CalendarEvent.css';

function CalendarEvent({ startTime, endTime, title, location, eventType }) {
  // Function to calculate the duration of the event
  const calculateDuration = () => {
    const durationInMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
    return durationInMinutes;
  };

  // Style the event based on its type
  let eventClassName = 'Event';
  switch (eventType) {
    case 'class':
      eventClassName += ' Class';
      break;
    case 'meal':
      eventClassName += ' Meal';
      break;
    case 'athletics':
      eventClassName += ' Athletics';
      break;
    default:
      eventClassName += ' Default';
      break;
  }

  return (
    <div className={eventClassName}>
      <div className="TitleLocation">
        <div className="Title">{title}</div>
        <div className="Location">{location}</div>
      </div>
    </div>
  );
}

export default CalendarEvent;
