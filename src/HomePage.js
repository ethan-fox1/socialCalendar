import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase/firebase';
import CalendarContainer from './CalendarContainer';
import MiddleContainer from './MiddleContainer';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  const user = auth.currentUser;

  const getTodaysDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <section id="home">
      <div className="PageContainer">
        <div className="MiddleContainerWrapper">
          <h3 className='h2'>My Socials</h3>
          <MiddleContainer />
        </div>
        <div className="CalendarContainerWrapper">
          <h3 className='h2'>{getTodaysDate()}</h3>
          <CalendarContainer />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
