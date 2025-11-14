import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { 
  FaReact, FaPython, FaGitAlt,
  FaDatabase, FaCode
} from 'react-icons/fa';
import { SiKubernetes, SiGrafana } from 'react-icons/si';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: ['JavaScript', 'React.js', 'CSS', 'Redux', 'Bootstrap'],
      color: '#61dafb'
    },
    {
      title: 'Backend',
      icon: <FaPython />,
      skills: ['Django', 'Django REST Framework', 'Python'],
      color: '#3776ab'
    },
    {
      title: 'DevOps',
      icon: <SiKubernetes />,
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Github Actions', 'AWS Services'],
      color: '#326ce5'
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'MySQL', 'MS SQL Server', 'Redis', 'Neo4j', 'Cassandra'],
      color: '#336791'
    },
    {
      title: 'Languages',
      icon: <FaCode />,
      skills: ['Python', 'JavaScript', 'C/C++', 'PHP', 'Java'],
      color: '#f7df1e'
    },
    {
      title: 'Monitoring',
      icon: <SiGrafana />,
      skills: ['Grafana', 'Kibana', 'Datadog', 'PagerDuty'],
      color: '#f46800'
    },
    {
      title: 'Tools',
      icon: <FaGitAlt />,
      skills: ['Git', 'Agile Methodologies', 'Twilio', 'Sendgrid', 'Stripe'],
      color: '#f05032'
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for building scalable, modern applications
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

