import React from "react";
import "../styles/skills.css";

function Skills() {
  const technicalSkills = [
    { category: "Programming", items: "C, Java, Python, JavaScript" },
    { category: "Frameworks", items: "Flask, Django, React.js, Next.js, Express.js" },
    { category: "Databases", items: "MongoDB, MySQL" },
    { category: "AI/ML", items: "Machine Learning, NLP, TensorFlow, Scikit-learn, PyTorch" },
    { category: "Tools & Platforms", items: "Git, AWS, Azure, Vercel" },
    { category: "Concepts", items: "REST APIs, Backend, Deployment, Data Structures" }
  ];

  const softSkills = ["Problem Solving", "Team Management", "Communication Skill"];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">TECHNICAL SKILLS</h2>

      <div className="skills-container">
        {/* Technical Skills Grid */}
        <div className="tech-grid">
          {technicalSkills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <h3 className="yellow-text">{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-wrapper">
          <h3 className="soft-title">CORE STRENGTHS</h3>
          <div className="soft-skills-tags">
            {softSkills.map((skill, index) => (
              <span className="soft-tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;