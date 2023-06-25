import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Canada</h1>
      <ul>
        <li>Wednesday 17:22</li>
        <li>Few Clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Few Clouds"
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">24</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <li id="humidity">Humidity: 50 %</li>
          <li id="wind">Wind: 5 km/h</li>
        </div>
      </div>
    </div>
  );
}
