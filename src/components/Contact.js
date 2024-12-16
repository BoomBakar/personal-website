
import "./Contact.css";
import Footer from "./Footer";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_yw37uhu", // Replace with your Service ID
          "template_abma058", // Replace with your Template ID
          form.current,
          "11Cw8eTRW6qkLCeNE" // Replace with your Public Key
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
    };
  return (
    <section id="contact" className="contact-section">
        
      <div className="contact-content">
        <h2>Let's Connect</h2>
        <p>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <form className="contact-form" form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="user_email"
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
      <div className="footerSec">
      <Footer />
      </div>
    </section>
    
  );
};

export default Contact;
