import React from "react";
import alphaImg from "../assets/alphadigital.png";
import agriImg from "../assets/agrimarket.png";
import mitraImg from "../assets/creativemitras.jpeg";
import foodImg from "../assets/studentaahar.png";
import "../styles/projects.css";

function Projects() {
  const projectData = [
    {
      title: "ALPHA DIGITAL",
      desc: "Developed a responsive service-based website offering Video Editing, Graphic Design, 3D Animation, and Web Development services.",
      link: "https://alpha-digitalcom.vercel.app/",
      tech: "Next.js, React.js, Vercel",
      img: alphaImg
    },
    {
      title: "AGRIMARKET",
      desc: "AI-based smart marketplace offering features like Crop disease detection, AI chatbot-assistant and real-time marketplace.",
      link: "https://agrimarketplace.vercel.app/",
      tech: "Next.js, Python, OpenCV, Vercel",
      img: agriImg
    },
    {
      title: "CREATIVE MITRAS",
      desc: "A creative agency platform designed to help brands create viral stories with content strategy and design experts.",
      link: "#", 
      tech: "React.js, Tailwind CSS, GSAP",
      img: mitraImg
    },
    {
      title: "STUDENTAAHAR",
      desc: "A budget-friendly food subscription platform for students, featuring Bengali Thali specials and plan management.",
      link: "https://studentahar.vercel.app/",
      tech: "MERN Stack, Redux, Node.js",
      img: foodImg
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">MY LATEST PROJECTS</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">View Live →</a>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="yellow-text">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="tech-stack">
                <strong>Tech:</strong> {project.tech}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;