import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ON TARGET LOGO 2024 COLOUR.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    if (location.hash === "#testimonials") {
      const testimonialsElement = document.getElementById("testimonials");
      if (testimonialsElement) {
        testimonialsElement.scrollIntoView({ behavior: "smooth" });
        navigate("/");
      }
    } else if (location.hash === "#contact") {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
        navigate("/");
      }
    }
  }, [location, navigate]);

  const handleClickHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickMovement = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      navigate("/");
    }
  };

  const handleBurgerMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to={"/"}>
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      <div className="burger-menu" onClick={handleBurgerMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuActive ? "active" : "inactive"}>
        <li>
          <Link to={"/"} onClick={handleClickHome}>
            Home
          </Link>
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
          <Link
            to={{ pathname: "/", hash: "#testimonials" }}
            onClick={() => handleClickMovement("testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "/", hash: "#contact" }}
            onClick={() => handleClickMovement("contact")}
          >
            <button
              className="btn"
              onClick={() => handleClickMovement("contact")}
            >
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
