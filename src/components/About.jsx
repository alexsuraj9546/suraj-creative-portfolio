import React, { useState } from "react";
import aboutImg from "../assets/hero2.png";
// Saare images import karein
import cert1 from "../assets/cert1.jpeg"; 
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";
import nexathon from "../assets/Nexathon.png";
import bharatiya from "../assets/Bharatiya.png";
import gdg from "../assets/GDG.png";

import "../styles/about.css";

function About() {
  const [showModal, setShowModal] = useState(false);

  // Data Array with Description
  const certificates = [
    {
      img: bharatiya,
      title: "Bharatiya Antariksh Hackathon 2025",
      desc: "Recognized by ISRO for innovative ideas in space technology and real-world challenge solving."
    },
    {
      img: gdg,
      title: "GDG Solution Challenge",
      desc: "Participation in Google Developer Groups campus challenge for building impactful community solutions."
    },
    {
      img: nexathon,
      title: "Nexathon 1.0 - Brainware University",
      desc: "Showcased creativity and technical dedication in AI/ML during the department's flagship event."
    },
    {
      img: cert1,
      title: "React & Redux Certification",
      desc: "Certified in building complex state-managed applications using React and Redux toolkits."
    },
    {
      img: cert4,
      title: "JavaScript Certification",
      desc: "Advanced certification covering core JS concepts, ES6+, and asynchronous programming."
    },
    {
      img: cert3,
      title: "Innovate2Educate Challenge",
      desc: "Handheld device design challenge participant, focusing on UX/UI and innovative development."
    },
    {
      img: cert2,
      title: "CSS Basics for Beginners",
      desc: "Foundational certification in modern web styling, responsive design, and layout structures."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-description">
            I am a B.Tech CSE (AI & ML) student at Brainware University. 
            Skilled in Python, Machine Learning, MERN Stack, and building 
            AI-powered scalable applications.
          </p>
          
          <div className="about-btns">
            <button className="btn">
              <span>Learn More</span>
              <div className="btn-icon">→</div>
            </button>

            <button className="btn outline" onClick={() => setShowModal(true)}>
              <span>Certifications</span>
              <div className="btn-icon">★</div>
            </button>
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="about-image-box">
             <img src={aboutImg} alt="Suraj Kumar" />
          </div>
        </div>
      </div>

      {/* FLOATING MODAL WINDOW */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="modal-header">Achievements & Certifications</h3>
            
            <div className="cert-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-img-container">
                    <img src={cert.img} alt={cert.title} />
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;