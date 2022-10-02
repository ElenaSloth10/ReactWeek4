import React from "react";

export default function WeatherBody() {
  return (
    <div className="row selected-city">
      <div className="col">
        <div>
          <h1>New York</h1>
          <h2>Saturday 11:33</h2>
          <p id="weatherSky">Clear</p>
          <i className="fa-solid fa-sun sun"></i>
          <p>
            18
            <span id="temperatureNow"></span>
            <span id="temperatureSystem">
              <sup>
                <a href="#" className="celsius">
                  °C
                </a>{" "}
                │
                <a href="#" className="fahrenheit">
                  °F
                </a>
              </sup>
            </span>
          </p>
        </div>
      </div>
      <div className="col">
        <p className="precipitation">
          Humidity: 83 %<br />
          Wind: 2 km/h
        </p>
      </div>
    </div>
  );
}
