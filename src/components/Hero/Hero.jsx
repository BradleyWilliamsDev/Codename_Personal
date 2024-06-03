import React from "react";
import "./Hero.css";
import arrowImg from "../../assets/dark-arrow.png";

function Hero() {
  const handleClick = () => {
    const servicesComponent = document.querySelector("#services");
    const rect = servicesComponent.getBoundingClientRect();
    const offsetY = rect.top + rect.height / 6 - window.innerHeight / 6;
    window.scrollTo({
      top: offsetY,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>On Target</h1>
        <p>Shake Up Your Sales Results.</p>
        <button className="btn" onClick={handleClick}>
          Explore More <img src={arrowImg} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
