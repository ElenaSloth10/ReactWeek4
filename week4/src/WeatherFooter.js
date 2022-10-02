import React from "react";

export default function WeatherFooter() {
  return (
    <div className="row day">
      <div className="col">
        <p>Fri</p>
        <i className="fa-solid fa-sun sun"></i>
        <p>20°</p>
      </div>
      <div className="col">
        <p>Sat</p>
        <i className="fa-solid fa-cloud"></i>
        <p>17°</p>
      </div>
      <div className="col">
        <p>Sun</p>
        <i className="fa-solid fa-cloud"></i>
        <p>17°</p>
      </div>
      <div className="col">
        <p>Mon</p>
        <i className="fa-solid fa-cloud-rain rain"></i>
        <p>15°</p>
      </div>
      <div className="col">
        <p>Tue</p>
        <i className="fa-solid fa-sun sun"></i>
        <p>20°</p>
      </div>
      <div className="col">
        <p>Wed</p>
        <i className="fa-solid fa-sun sun"></i>
        <p>20°</p>
      </div>
      <div>
        <a href="https://github.com/ElenaSloth10/ReactWeek4">github</a>
      </div>
    </div>
  );
}
