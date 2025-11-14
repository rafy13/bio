import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">A K M Rabby</h3>
            <p className="footer-description">
              Senior Software Engineer passionate about building scalable systems and innovative solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:rafy.ruet@gmail.com">rafy.ruet@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+8801521479231">+8801521479231</a>
              </li>
              <li>
                <span>📍</span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/rafy13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/rafy13" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:rafy.ruet@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} A K M Rabby. Made with <FaHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

