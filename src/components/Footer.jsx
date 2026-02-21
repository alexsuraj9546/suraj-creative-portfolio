import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa"; // npm install react-icons
import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>SURAJ <span className="highlight">KUMAR</span></h2>
          <p>MERN Stack Developer | AI & ML Enthusiast</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/alexsuraj9546" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/suraj-kumar-6a2759283/" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/919546860925" target="_blank" rel="noreferrer" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>

        <div className="footer-right">
          <button className="scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;