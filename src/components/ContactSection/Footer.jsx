import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

function Footer() {
  const date = new Date();
  const currentdate = date.getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="col1">
            <a href="/" className="brand">
                On Target Presentation © {currentdate}
            </a>
          </div>
          <div className="col2">
            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/articles">Articles</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>              
            </ul>
          </div>
          <div className="col3">
            <ul className="media-icons">
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    color="#007bff"
                    style={{ marginRight: 10 }}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    color="#007bff"
                    style={{ marginRight: 10 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
