import React from "react";
import "./Articles.css";

function Articles(props) {
  return (
    <div className="card-container">
        {props.src && <img src={props.src} alt={props.alt} className="card-img" />}
        <h1 className="card-title">{props.title}</h1>
        <p className="card-description">{props.content}</p>
        {props.link && <a href={'/' + props.link} className="card-btn">Read More</a>}
    </div> 
  );
}

export default Articles;
