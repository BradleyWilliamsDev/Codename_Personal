import React from "react";
import aboutimg from "../../assets/about.png";
import NavBarSolid from "../Navbar/NavBarSolid";
import "./About.css";
import Footer from "../ContactSection/Footer";

function AboutPage() {
  return (
    <div>
      <NavBarSolid />
      <section className="about-page">
        <div className="main">
          <img src={aboutimg} alt="the ceo of the company" />
          <div className="about-txt">
            <h1>About Us</h1>
            <h5>Sales Trainer</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
