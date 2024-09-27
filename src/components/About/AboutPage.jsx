import React from "react";
import about_image from '../../assets/ASH_8560.jpg';
import NavBarSolid from "../Navbar/NavBarSolid";
import "./About.css";
import Footer from "../ContactSection/Footer";
import ScrollToTop from "../util/ScrollToTop";

function AboutPage() {
  return (
    <div>
      <NavBarSolid />
      <ScrollToTop />
      <section className="about-page">
        <div className="main">
          <img src={about_image} alt="the ceo of the company" />
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
