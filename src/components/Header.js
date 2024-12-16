import React, { useEffect, useRef } from "react";

import Spline from '@splinetool/react-spline';

const Header = () => {
  const robotRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const xRotation = ((clientY - centerY) / centerY) * 10; // Adjust for smoothness
      const yRotation = ((clientX - centerX) / centerX) * 10;

      if (robotRef.current) {
        robotRef.current.style.transform = `rotateX(${-xRotation}deg) rotateY(${yRotation}deg)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const splineRef = useRef();
  return (
    <div
      ref={robotRef}
      style={{
        transition: "transform 0.2s ease-out",
      }}
    >   
      <Spline
          scene="https://prod.spline.design/BbSa6yQLT2Kh6GeT/scene.splinecode"
          onLoad={(splineApp) => (splineRef.current = splineApp)}
        />
      <img src="robot-image.png" alt="robot" />
    </div>
  );
};

export default Header;
