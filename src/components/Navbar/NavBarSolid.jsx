import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ON TARGET LOGO 2024 (1).png";
import { Link } from "react-router-dom";

function NavBarSolid() {
  return (
    <nav className="dark-nav">
      <img src={logo} alt="Company Logo" className="logo" />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/articles"}>Articles</Link>
        </li>
        <li>
          <Link to={"/testimonials"}>Testimonials</Link>
        </li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarSolid;