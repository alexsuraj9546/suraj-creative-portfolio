import React from "react";
import eduImg from "../assets/brainware.png"; // Aap apni pasand ki image use kar sakte hain
import "../styles/education.css";

function Education() {
  const semesters = [
    { sem: "Semester 1", sgpa: "6.67" },
    { sem: "Semester 2", sgpa: "7.40" },
    { sem: "Semester 3", sgpa: "7.80" },
  ];

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">
        
        {/* LEFT: Text & Results */}
        <div className="edu-content">
          <h2 className="edu-title">EDUCATION</h2>
          
          <div className="edu-info">
            <h3 className="yellow-text">Brainware University</h3>
            <p className="degree">B.Tech in Computer Science Engineering (AI & ML)</p>
            <p className="duration">2024 – 2028</p>
          </div>

          <div className="results-table">
            <h4>SEMESTER RESULTS</h4>
            <div className="stats-grid">
              {semesters.map((item, index) => (
                <div key={index} className="stat-card">
                  <span className="sem-label">{item.sem}</span>
                  <span className="sgpa-value">{item.sgpa} SGPA</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="edu-image-box">
          <img src={eduImg} alt="Education" />
        </div>

      </div>
    </section>
  );
}

export default Education;