import React, { useState } from 'react';
import './App.css';
import CalendarContainer from './CalendarContainer';
import AddEventForm from './AddEventForm';
import MiddleContainer from './MiddleContainer';
import './fonts.css';

function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const getTodayDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1 className='h3'>PlanMate</h1>
        <nav>
          <ul className='h4'>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#create">Create Event</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
      </header>
      <main className="MainContent">
        <section id="create">
          <h2 className='h2'>Create Event</h2>
          <MiddleContainer />
        </section>
        <section id="events">
          <h2 className='h2'>
            <i className="material-icons">chevron_left</i>
            {getTodayDate()}
            <i className="material-icons">chevron_right</i>
          </h2>
          <CalendarContainer events={events} />
        </section>
      </main>
      <footer className="Footer">
        <p>&copy; 2024 PlanMate</p>
      </footer>
    </div>
  );
}

export default App;
