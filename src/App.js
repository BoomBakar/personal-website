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
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [fadeInClass, setFadeInClass] = useState("");  // State to trigger animation
  const splineRef = useRef();

  const showSection = (id) => {
    setActiveSection(id);
    setFadeInClass("");  // Reset fade-in class to re-trigger animation
  };

  // Example robot interaction
  const handleRobotClick = () => {
    if (splineRef.current) {
      splineRef.current.emitEvent("mouseDown", "Robot");
    }
  };

  useEffect(() => {
    if (activeSection) {
      // Delay adding the 'active' class to allow the section to render first
      setTimeout(() => setFadeInClass("active"), 50); // Slight delay to allow rendering
    }
  }, [activeSection]);  // Run the effect whenever the active section changes

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        {sections.map((section) => (
          <a
            key={section.id}
            onClick={() => showSection(section.id)}
            href="#"
          >
            {section.title}
          </a>
        ))}
      </nav>

      {/* Background Robot */}
      <div className="spline-robot" onClick={handleRobotClick}>
        <Spline
          scene="https://prod.spline.design/BbSa6yQLT2Kh6GeT/scene.splinecode"
          onLoad={(splineApp) => (splineRef.current = splineApp)}
        />
      </div>

      {/* Sections */}
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
