import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Add a fade-in/out effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const scrollY = window.scrollY;
  
      // Fade out the about section when scrolled
      if (scrollY > window.innerHeight / 2) {
        aboutSection.style.opacity = "0";
        aboutSection.style.transform = "translateY(-50px)";
        
        // Fade in the experience section
        experienceSection.style.opacity = "1";
        experienceSection.style.transform = "translateY(0)";
      } else {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
  
        // Reset experience section visibility
        experienceSection.style.opacity = "0";
        experienceSection.style.transform = "translateY(50px)";
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="App">
      <Header />
      <section id="about" className="about-section">
        <div className="about-content">
          <h1>Hi, I'm Abubakar Dar</h1>
          <p>
            A passionate developer with expertise in building scalable and
            reliable web solutions. I specialize in ASP.NET (C#), full-stack
            development, and modern web technologies.
          </p>
        </div>
      </section>
      <section id="experience" className="experience-section">
        <Experience />
      </section>
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
