import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import testimonialData from "./TestimonialData";
import Testimonial from "./Testimonial";

function Testimonials() {
  const slider = useRef();
  let tX = 0;
  const testimonialWidth = 790;

  function slideForward() {
    if (tX > -(testimonialData.length - 1) * testimonialWidth) {
      tX -= testimonialWidth;
      slider.current.style.transform = `translateX(${tX}px)`;
    }
  }

  function slideBackward() {
    if (tX < 0) {
      tX += testimonialWidth;
      slider.current.style.transform = `translateX(${tX}px)`;
    }
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider} style={{ width: `${testimonialData.length * 100}%` }}>
          {testimonialData.map((dataBeingChecked) => {
            return (
              <Testimonial
                name={dataBeingChecked.name}
                position={dataBeingChecked.position}
                content={dataBeingChecked.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
