import React from "react";
import "./Header.css";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Abubakar Dar</h1>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>About Me</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
