import React from 'react';
import './CalendarEvent.css';

function CalendarEvent({ startTime, endTime, title, location, eventType, onDelete }) {
  // Function to calculate the duration of the event
  const calculateDuration = () => {
    const durationInMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
    return durationInMinutes;
  };

  // Function to handle the click event, showing a way to delete the event
  const handleClick = () => {
    // placeholder for deleting the event
    console.log(`Event type: ${eventType}`);
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
    <div className={eventClassName} onClick={onDelete}>
      <div className="TitleLocation">
        <div className="Title">{title}</div>
        <div className="Location">{location}</div>
      </div>
      <button className="EditButton">Delete</button>
    </div>
  );
}

export default CalendarEvent;
