import React from "react";
import "./ContactSection.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import dark_arrow from "../../assets/dark-arrow.png";

function ContactSection() {
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Get in touch! I'd love to hear from you. Whether you have a question,
          need help with a project, or just want to say hello, please don't
          hesitate to reach out. You can contact me through this form, or email
          me directly at carolyn@ontarget.co.za. I look forward to connecting
          with you!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            carolyn@ontarget.co.za
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +27 83 325 1357
          </li>
          <li>
            <img src={location_icon} alt="" />
            46 Kings Road, Bedfordview <br />
            Johannesburg, South Africa
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone number"
            required
          />
          <label>Write Your Message Here: </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
            <img src={dark_arrow} alt="" />
          </button>
        </form>
        <span>Sending...</span>
      </div>
    </div>
  );
}

export default ContactSection;
