import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { FaServer, FaDatabase, FaCode } from 'react-icons/fa';

const Projects = () => {
  const sectionRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const projects = [
    {
      title: 'Testrail',
      description: 'A web-based test case management tool used by testers, developers and team leaders to manage, track, and organize software testing efforts.',
      highlights: [
        'Manage and optimize a highly scalable Kubernetes infrastructure, supporting approximately one million active users globally',
        'Integrated Cluster Autoscaler for deployment optimization, leading to a 30% cost reduction in auto scaling groups',
        'Automated repetitive tasks like clone client db, running cassandra repair; using scripting and tools, reducing manual interventions and cutting down developer workload by 20%',
        'Engineered and maintained Infrastructure as Code (IaC) solutions, ensuring consistent and reproducible environments across development and production'
      ],
      tech: ['Kubernetes', 'Docker', 'Cassandra', 'AWS', 'Terraform', 'IaC'],
      icon: <FaServer />,
      gradient: 'gradient-1'
    },
    {
      title: 'ADEx',
      description: 'Adex is a document processing analyzing and reviewing platform using Artificial Intelligence and web technologies.',
      highlights: [
        'Designed and implemented a feature for seamless synchronization of users\' Google Drive, enhancing document processing and user experience',
        'Developed and optimized RESTful APIs, introducing new functionalities and improving system performance',
        'Enhanced API performance by up to 70% through optimization techniques and leveraging Akka actors for efficient parallel processing'
      ],
      tech: ['Spring Framework', 'MongoDB', 'Neo4j', 'Akka', 'REST APIs'],
      icon: <FaDatabase />,
      gradient: 'gradient-2'
    },
    {
      title: 'Practice by Numbers',
      description: 'This application provides dentists to inspect important data and metrics that are required to accelerate the progress of any dental practice.',
      highlights: [
        'Optimized complex SQL queries for critical features, resulting in a 90% improvement in API latency and significantly enhancing application responsiveness',
        'Developed a custom URL shortener service for tracking and analyzing user interactions, enabling data-driven insights',
        'Conducted analysis and estimation of large-scale features, contributing to project planning and execution',
        'Assisted in sprint planning, mentoring junior team members and ensuring alignment with project timelines',
        'Manage deployment using github action'
      ],
      tech: ['Django REST', 'SQLAlchemy', 'React.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Github Actions'],
      icon: <FaCode />,
      gradient: 'gradient-3'
    },
    {
      title: 'InspectCheck',
      description: 'An inspection application designed specifically for multi-family and affordable housing property types.',
      highlights: [
        'Developed and optimized stored procedures for generating detailed reports, ensuring accurate data retrieval and processing',
        'Automated the generation and distribution of PDF reports, streamlining communication with users and reducing manual effort',
        'Conducted independent task analysis and estimation, providing accurate timelines and technical insights for project tasks'
      ],
      tech: ['PHP', 'JavaScript', 'SQL Server', 'jQuery'],
      icon: <FaDatabase />,
      gradient: 'gradient-1'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world solutions that scale and deliver impact
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${isVisible ? 'animate' : ''} ${expandedProject === index ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="project-header">
                <div className={`project-icon ${project.gradient}`}>
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              {expandedProject === index && (
                <div className="project-details">
                  <h4 className="details-title">Key Achievements:</h4>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-footer">
                <span className="expand-indicator">
                  {expandedProject === index ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

