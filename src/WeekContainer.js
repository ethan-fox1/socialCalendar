import React from "react";
import "./WeekContainer.css";
import "./fonts.css";
import myImage from "./weeklyCalendar.png";

function WeekContainer() {
  return (
    <div>
        <h2 className='weekText'>
            <i className="material-icons">chevron_left</i>
            My Week
            <i className="material-icons">chevron_right</i>
        </h2>
        <div className="WeekContainer">
            <div className="ImageContainer">
              <img src={myImage} alt="Week" />
            </div>
        </div>
    </div>
  );
}

export default WeekContainer;