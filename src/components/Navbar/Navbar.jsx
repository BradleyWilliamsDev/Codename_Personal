import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ON TARGET LOGO 2024 (1).png";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Company Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Articles</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
