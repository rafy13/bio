import React, { useEffect, useRef } from 'react';
import './Rabby.css';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

const Rabby = () => {
  const rabbyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const content = entry.target.querySelector('.rabby-content');
            const visual = entry.target.querySelector('.rabby-visual');
            if (content) content.classList.add('animate');
            if (visual) visual.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (rabbyRef.current) {
      observer.observe(rabbyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="rabby" ref={rabbyRef}>
      <div className="rabby-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="rabby-container">
        <div className="rabby-content">
          <div className="rabby-greeting">Hello, I'm</div>
          <h1 className="rabby-name">
            <span className="name-first">A K M</span>
            <span className="name-last">Rabby</span>
          </h1>
          <div className="rabby-title">
            <span className="title-text">Senior Software Engineer</span>
            <span className="title-cursor">|</span>
          </div>
          <p className="rabby-description">
            Passionate DevOps Engineer and Full-Stack Developer with expertise in 
            scalable cloud infrastructure, Kubernetes orchestration, and modern web technologies. 
            Building robust systems that power millions of users worldwide.
          </p>
          <div className="rabby-info">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Dhaka, Bangladesh</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:rafy.ruet@gmail.com" className="info-value">rafy.ruet@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+8801521479231" className="info-value">+8801521479231</a>
            </div>
          </div>
          <div className="rabby-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
        <div className="rabby-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span> engineer = {'{'}
              </div>
              <div className="code-line indent">
                name: <span className="code-string">'A K M Rabby'</span>,
              </div>
              <div className="code-line indent">
                role: <span className="code-string">'Senior Software Engineer'</span>,
              </div>
              <div className="code-line indent">
                skills: [<span className="code-string">'DevOps'</span>, <span className="code-string">'Kubernetes'</span>, <span className="code-string">'React'</span>, <span className="code-string">'Django'</span>],
              </div>
              <div className="code-line indent">
                passion: <span className="code-string">'Building Scalable Systems'</span>
              </div>
              <div className="code-line">{'}'};</div>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll down">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Rabby;

