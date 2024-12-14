import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 Abubakar Dar. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/BoomBakar" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abubakar-dar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
