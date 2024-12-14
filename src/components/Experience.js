import React, { useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
  const experienceRef = useRef(null);

  // Add a scroll effect for the experience section
  useEffect(() => {
    const handleScroll = () => {
      const section = experienceRef.current;
      const top = section.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={experienceRef} className="experience-content">
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Software Engineer, Xavor Corp.</strong> (Apr 2023 – Nov 2024)
          <p>Developed and maintained enterprise-level applications using ASP.NET C#.</p>
        </li>
        <li>
          <strong>Freelancing, Upwork</strong> (2021 – 2022)
          <p>Proficient in full-stack web development using .NET and MERN stack.</p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
