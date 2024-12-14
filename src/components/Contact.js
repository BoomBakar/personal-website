import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Let's Connect</h2>
        <p>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
