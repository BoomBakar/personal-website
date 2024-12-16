import React, { useState, useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";

const sections = [
  { id: "home", title: "Home", animation: "fade-in", content: "" },
  { id: "about", title: "About Me", animation: "slide-in-left", content: <Home /> },
  { id: "experience", title: "Experience", animation: "slide-in-right", content: <Experience /> },
  { id: "contact", title: "Contact", animation: "fade-in", content: <Contact /> },
  { id: "resume", title: "Resume", animation: "slide-in-right", content: <a className="resume" href="https://drive.google.com/uc?export=download&id=19wh-8_jtq0RHboAIwfkH4Ucaev3UIDgt">Download my Resume</a> },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [fadeInClass, setFadeInClass] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Toggle burger menu
  const splineRef = useRef();

  const showSection = (id) => {
    setActiveSection(id);
    setFadeInClass("");
    setMenuOpen(false); // Close menu when a section is clicked
  };

  const handleBurgerClick = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    if (activeSection) {
      setTimeout(() => setFadeInClass("active"), 50);
    }
  }, [activeSection]);

  return (
    <div className="app">
      {/* Burger Menu */}
      <div className="burger-menu" onClick={handleBurgerClick}>
        <div className={`burger-icon ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        {sections.map((section) => (
          <button key={section.id} onClick={() => showSection(section.id)}>
            {section.title}
          </button>
        ))}
      </nav>

      {/* Background Robot */}
      <div className="spline-robot">
        <Spline
          scene="https://prod.spline.design/BbSa6yQLT2Kh6GeT/scene.splinecode"
          onLoad={(splineApp) => (splineRef.current = splineApp)}
        />
      </div>

      {/* Content Sections */}
      <div className="content">
        {sections.map(
          (section) =>
            activeSection === section.id && (
              <div
                key={section.id}
                className={`section ${section.animation} ${fadeInClass}`}
              >
                {section.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
