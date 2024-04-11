import React from 'react';
import './DailyCalendar.css'; // Import CSS file for styling

// Sample events data
const events = [
  { time: '9:00 AM', title: 'Meeting with client' },
  { time: '10:00 AM', title: 'Team standup' },
  { time: '12:00 PM', title: 'Lunch break' },
  { time: '2:00 PM', title: 'Project presentation' },
  // Add more events as needed
];

// DailyCalendar component
const DailyCalendar = () => {
  return (
    <div className="DailyCalendar">
      <h2>Daily Calendar</h2>
      <div className="calendarContainer">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="time">{event.time}</div>
            <div className="title">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCalendar;
