import React from 'react';
import CalendarEvent from './CalendarEvent';
import './CalendarContainer.css';
import HourLine from './HourLine';
import { useState } from 'react';
import AddEventForm from './AddEventForm';

function CalendarContainer({events}) {

  const initialEvents = [
    {
      startTime: new Date(2024, 3, 27, 9, 0), // Year, Month (0-indexed), Day, Hour, Minute
      endTime: new Date(2024, 3, 27, 10, 30),
      title: 'HCI Class',
      location: 'VAC',
      eventType: 'class'
    },
    {
      startTime: new Date(2024, 3, 27, 12, 0),
      endTime: new Date(2024, 3, 27, 13, 0),
      title: 'Lunch with Friends',
      location: 'Thorne Hall',
      eventType: 'meal'
    },
    {
      startTime: new Date(2024, 3, 27, 14, 0),
      endTime: new Date(2024, 3, 27, 16, 0),
      title: 'Swimming Practice',
      location: 'Farley Swimming Pool',
      eventType: 'athletics'
    }
    // Add more events as needed
  ];

  // State to store daily events
  const [dailyEvents, setDailyEvents] = useState(initialEvents);

  // Add event to dailyEvents array
  const handleAddEvent = (newEvent) => {
    setDailyEvents([...dailyEvents, newEvent]);
  };

  // Function to generate CalendarEvent components based on dailyEvents data
  const renderEvents = () => {
    return dailyEvents.map((event, index) => (
      <div
        key={index}
        className="EventWrapper"
        style={{ top: calculateEventPosition(event.startTime) }}
      >
        <CalendarEvent
          startTime={event.startTime}
          endTime={event.endTime}
          title={event.title}
          location={event.location}
          eventType={event.eventType}
        />
      </div>
    ));
  };

  // Function to generate hour slots between 6:00 AM and 11:00 PM
  const renderHourSlots = () => {
    const hours = [];
    for (let i = 6; i <= 23; i++) {
      hours.push(
        <div key={i} className="HourSlot">
          {i % 2 === 0 ? (
            <div className="HourLabel">
                {i % 12 || 12} {i < 12 ? 'AM' : 'PM'}
                <div className='DashedLine'/>
            </div>
          ) : <div className='HourLine'/> }
        </div>
      );
    }
    return hours;
  };

  // Calculate the position of each event based on its start time
  const calculateEventPosition = (startTime) => {
    const startHour = startTime.getHours();
    console.log(startHour);
    const startMinute = startTime.getMinutes();
    const totalMinutes = startHour * 60 + startMinute - 6 * 60; // Subtract 6 hours to start at 6:00 AM
    return `${((totalMinutes / 60) * 35) + 38}px`; // Convert minutes to pixels
  };

  return (
    <div className="CalendarContainer">
      <div className="HourColumn">
        {/* Render hour slots */}
        {renderHourSlots()}
      </div>
      <div className="EventsColumn">
        {renderEvents()}
      </div>
      <div>
        <AddEventForm onAddEvent={handleAddEvent} />
      </div>
    </div>
  );
}

export default CalendarContainer;