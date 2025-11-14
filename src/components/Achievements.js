import React, { useEffect, useRef } from 'react';
import './Achievements.css';
import { FaTrophy, FaCode, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.achievement-card, .stat-card');
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

  const competitions = [
    {
      title: '1st Runners Up',
      event: 'VU Inter University Programming Contest',
      year: '2017',
      icon: <FaTrophy />,
      color: '#FFD700'
    },
    {
      title: '13th Place',
      event: 'CUET National Collegiate Programming Contest',
      year: '2017',
      icon: <FaMedal />,
      color: '#C0C0C0'
    },
    {
      title: 'Divisional Champion',
      event: 'UAP National Collegiate Programming Contest',
      year: '2016',
      icon: <FaTrophy />,
      color: '#FFD700'
    },
    {
      title: '1st Runners Up',
      event: 'Intra RUET Programming Contest',
      year: '2016',
      icon: <FaMedal />,
      color: '#C0C0C0'
    }
  ];

  const codingStats = [
    {
      label: 'Codeforces Rating',
      value: 'Expert (1726)',
      icon: <FaCode />
    },
    {
      label: 'Problems Solved',
      value: '2000+',
      icon: <FaCode />
    }
  ];

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Achievements & Competitions</h2>
        <p className="section-subtitle">
          Recognition for excellence in competitive programming and problem-solving
        </p>
        
        <div className="achievements-content">
          <div className="competitions-grid">
            {competitions.map((comp, index) => (
              <div 
                key={index}
                className="achievement-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon" style={{ color: comp.color }}>
                  {comp.icon}
                </div>
                <h3 className="achievement-title">{comp.title}</h3>
                <p className="achievement-event">{comp.event}</p>
                <span className="achievement-year">{comp.year}</span>
              </div>
            ))}
          </div>

          <div className="coding-stats">
            {codingStats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card"
                style={{ animationDelay: `${competitions.length * 0.1 + index * 0.2}s` }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

