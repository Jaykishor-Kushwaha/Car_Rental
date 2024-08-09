import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
      <div className="Modern-Slider">
        <div className="item item-1">
          <div className="img-fill">
            <div className="text-content">
              <h6>Drive Your Journey With Us</h6>
              <h4>
                Book a Car Near You and <br /> Drive in Minutes!
              </h4>
              <p>
                Book the selected car effortiessly. pay for driving oniy. Join
                our service Instantly by installine Our app.
              </p>
              <Link to="contact" className="filled-button">
                contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
