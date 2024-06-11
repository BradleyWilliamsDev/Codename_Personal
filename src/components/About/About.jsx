import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt="Founder of the company"
          className="about-img"
        />
      </div>
      <div className="about-right">
        <h3>About On Target</h3>
        <h2>Generate profit through your employees with On Target</h2>
        <p>
          On Target is a full-service development company with an enviable track
          record of employee growth and development. As experts with over 20
          years’ experience in development, we offer world-class solutions,
          guaranteed to take your company to the next level.
        </p>
      </div>
    </div>
  );
}

export default About;
