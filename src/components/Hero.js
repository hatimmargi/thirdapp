import React from "react";
import heroImg from "../imgs/Group 77.png";
export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="reactlogo" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
