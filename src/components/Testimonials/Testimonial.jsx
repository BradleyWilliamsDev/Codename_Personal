import React from "react";

function Testimonial(props) {
  return (
    <li>
      <div className="slide">
        <div className="userinfo">
          <div>
            <h3>{props.name}</h3>
            <span>{props.position}</span>
          </div>
        </div>
        <p>{props.content}</p>
      </div>
    </li>
  );
}

export default Testimonial;
