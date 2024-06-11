import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/ON TARGET LOGO 2024 (1).png";
import { Link } from "react-router-dom";

function NavBarSolid() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollDirection =
        currentScrollPosition > lastScrollPosition ? "down" : "up";
      setLastScrollPosition(currentScrollPosition);

      if (scrollDirection === "down" && currentScrollPosition > 65) {
        setScrolled(true);
      } else if (scrollDirection === "up") {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);
  return (
    <nav className={`dark-nav container ${scrolled ? "scrolled" : ""}`}>
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
          <Link to={{pathname:"/", hash:"#testimonials"}}>Testimonials</Link>
        </li>
        <li>
          <Link to={{pathname:"/", hash:"#contact"}}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarSolid;
