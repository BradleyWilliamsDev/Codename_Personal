import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

function Testimonials() {
  const slider = useRef();
  let tX = 0;

  function slideForward() {
    if (tX > -50) {
      tX -= 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`;
  }
  function slideBackward() {
    if (tX < 0) {
      tX += 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`;
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
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userinfo">
                <div>
                  <h3>Bruce Allen </h3>
                  <span>Managing Director – Ipex</span>
                </div>
              </div>
              <p>
                On Target Consulting has been providing HR and Training
                Solutions to Ipex for over 10 years. The process has always been
                seamless and the interaction between our companies and services
                offered by On Target has been great. I recommend the service of
                On Target Consulting for personalized training
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <div>
                  <h3>Gerrit Prinsloo </h3>
                  <span>Gaspet</span>
                </div>
              </div>
              <p>
                Carolyn invested a huge amount of time to understand our
                business, making sure that the training was relevant and on a
                level where it was benefiting everyone. Her examples and case
                studies were spot on! The training added value to our
                experienced sales people, as well as to our new members. We
                decided to bring Carolyn closer to our business and she acts as
                an adviser at this stage and not only a supplier of sales
                training!!!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <div>
                  <h3>Flip Breytenbach </h3>
                  <span>Hitachi</span>
                </div>
              </div>
              <p>
                I refer to our conversation last week regarding the sales
                training provided by Carolyn Williams. She really impressed me
                as a knowledgeable and well-studied instructor, in fact the way
                she presented the course was by involving the whole class and
                she was able to get the very and least experienced working
                together with excellent results.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <div>
                  <h3>Carla Rodrigues Schoeman </h3>
                  <span>MD</span>
                </div>
              </div>
              <p>
                Master Movers had a terrific training experience with Carolyn.
                She was attentive and intuitive and provided frank feedback. She
                was a delight and we truly as a company enjoyed the overall
                experience and learnt alot. We aligned our branches countrywide
                and are applying the needs with customers and each other within
                the office. I would not hesitate to refer and or make use of
                Carolyn from On Target for any of our training requirements in
                the future.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
