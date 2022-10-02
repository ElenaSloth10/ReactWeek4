import React from "react";

export default function WeatherHead() {
  return (
    <div className="row">
      <div className="col form-section">
        <form action="#" method="post" id="formSearch">
          <button>Current</button>
          <input type="submit" value="Search" />
          <input
            id="formInput"
            type="text"
            placeholder="Enter a city"
            autocomplete="off"
            autofocus="on"
          />
        </form>
      </div>
    </div>
  );
}
