import React, { useEffect } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import { gsap } from "gsap";
import Tilt from "react-parallax-tilt";
import "../styles/hero.css";

function Hero() {
  useEffect(() => {
    // Initial setup to prevent flickering
    gsap.set([".hero-title", ".hero-text", ".btn", ".image-box"], { opacity: 0, y: 30 });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(".hero-title", { y: 0, opacity: 1, duration: 1, delay: 0.3 })
      .to(".hero-text", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .to(".btn", { scale: 1, opacity: 1, duration: 0.5, y: 0 }, "-=0.4")
      .to(".image-box", { 
        x: 0, 
        y: 0,
        scale: 1, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1 
      }, "-=0.6");
  }, []);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 'id="home"' is essential for Navbar connectivity
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="left">
          <h1 className="hero-title">
            WELCOME TO <br /> 
            <span className="highlight">MY PORTFOLIO</span>
          </h1>

          <p className="hero-text">
            I am a passionate MERN Stack Developer and AI/ML enthusiast dedicated
            to building modern, scalable, and high-performance web applications.
          </p>

          <button className="btn" onClick={scrollToSkills}>
            <span>Learn More</span>
            <div className="btn-icon">→</div>
          </button>
        </div>

        {/* RIGHT IMAGES (TILT EFFECT) */}
        <div className="right">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
            <div className="image-box large">
              <img src={hero1} alt="Work Showcase" />
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
            <div className="image-box small">
              <img src={hero2} alt="Portrait" />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
}

export default Hero;