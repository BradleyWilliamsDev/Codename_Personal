import React from "react";
import "./ContactSection.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import dark_arrow from "../../assets/dark-arrow.png";
// import MaliTo from "../util/MaliTo";

function ContactSection() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.WEB3KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log(response);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <form onSubmit={onSubmit}>
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
        <span>{result}</span>
        {/* <MaliTo label="Click here to email me." mailTo="mailto:carolyn@ontarget.co.za" /> */}
      </div>
    </div>
  );
}

export default ContactSection;
