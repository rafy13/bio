import React, { useEffect, useRef } from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.education-card');
            cards.forEach((card) => {
              card.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Rajshahi University of Engineering and Technology',
      location: 'Bangladesh',
      period: '2014 - 2018',
      icon: <FaGraduationCap />
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Ananda Mohan College',
      location: 'Bangladesh',
      period: '2012 - 2013',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation for technical excellence
        </p>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-icon">
                {edu.icon}
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <div className="education-meta">
                <span className="education-location">
                  <FaMapMarkerAlt /> {edu.location}
                </span>
                <span className="education-period">
                  <FaCalendarAlt /> {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

