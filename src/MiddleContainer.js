import React from 'react';
import './MiddleContainer.css';
import CalendarContainer from './CalendarContainer';
import AddEventForm from './AddEventForm';
import SocialContainer from './SocialContainer';
import WeekContainer from './WeekContainer';
import ChatContainer from './ChatContainer';
import './fonts.css';

// Basic container that is rectangular and tall for use on the homescreen
function MiddleContainer () {
  return (
    <div className="MiddleContainer">
      <SocialContainer />
      <ChatContainer />
      <WeekContainer />
    </div>
  );
}

export default MiddleContainer;

