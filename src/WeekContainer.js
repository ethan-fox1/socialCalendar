import React from "react";
import "./WeekContainer.css";
import "./fonts.css";

function WeekContainer() {
  return (
    <div>
        <h2 className='weekText'>
            <i className="material-icons">chevron_left</i>
            My Week
            <i className="material-icons">chevron_right</i>
        </h2>
        <div className="WeekContainer">
            <h1>Week Container</h1>
        </div>
    </div>
  );
}

export default WeekContainer;