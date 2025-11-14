import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item) => {
              item.classList.add('animate');
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

  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Galt Sudoers',
      period: 'April 2023 - Present',
      location: 'Remote',
      achievements: [
        'Manage and optimize highly scalable Kubernetes infrastructure supporting ~1M active users globally',
        'Integrated Cluster Autoscaler for deployment optimization, achieving 30% cost reduction',
        'Automated repetitive tasks using scripting, reducing manual interventions by 20%',
        'Engineered Infrastructure as Code (IaC) solutions for consistent environments'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'ADEx Document Intelligence',
      period: 'September 2022 - January 2023',
      location: 'Remote',
      achievements: [
        'Designed and implemented Google Drive synchronization feature',
        'Developed and optimized RESTful APIs with new functionalities',
        'Enhanced API performance by up to 70% using optimization techniques and Akka actors'
      ]
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Enosis Solutions',
      period: 'December 2020 - August 2022',
      location: 'Dhaka, Bangladesh',
      achievements: [
        'Led infrastructure improvements and automation initiatives',
        'Managed cloud infrastructure and CI/CD pipelines',
        'Mentored junior team members on DevOps best practices'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Enosis Solutions',
      period: 'December 2018 - November 2020',
      location: 'Dhaka, Bangladesh',
      achievements: [
        'Implemented containerization strategies using Docker',
        'Set up monitoring and logging solutions',
        'Automated deployment processes'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Building scalable systems and leading technical initiatives
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

