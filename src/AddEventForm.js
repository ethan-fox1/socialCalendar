import React, { useState } from 'react';
import './AddEventForm.css';

function AddEventForm({ onAddEvent }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventType, setEventType] = useState('default');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title,
      location: location,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      eventType: eventType
    };
    onAddEvent(newEvent);
    setTitle('');
    setLocation('');
    setStartTime('');
    setEndTime('');
    setEventType('default');
    setShowForm(false); // Hide the form after submitting
  };

  return (
    <div>
      <button className="PlusButton" onClick={() => setShowForm(true)}>Add Event</button>
      {showForm && (
        <form onSubmit={handleSubmit} className="AddEventForm">
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Start Time:
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </label>
          <label>
            End Time:
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </label>
          <label>
            Event Type:
            <select
              className='EventTypeSelect'
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              <option value="default" disabled>Select an Event Type</option>
              <option value="class">Class</option>
              <option value="meal">Meal</option>
              <option value="athletics">Athletics</option>
            </select>
          </label>
          <button type="submit">Add Event</button>
        </form>
      )}
    </div>
  );
}

export default AddEventForm;
