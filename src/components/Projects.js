import React from 'react';
import { projects } from "../data";
import { Container } from 'react-bootstrap';





function Projects() {
  return (
    <section id="projects" className="position-relative overflow-hidden" style={{ 
        background: 'var(--background)',
        paddingTop: '80px',
        paddingBottom: '60px'
      }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: `linear-gradient(
          135deg,
          var(--gradient-light) 0%,
          var(--gradient-medium) 50%,
          var(--gradient-dark) 100%
        )`,
        zIndex: 0,
        opacity: 0.1
      }}></div>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="text-center mb-5 display-5 fw-bold" style={{ color: 'var(--brand-dark)' }}>Projects/Experience</h2>
        {projects.map((project, idx) => (
          <div className="mb-5 pb-4 border-bottom section-item" style={{ borderColor: 'var(--border)' }} key={idx}>
            <div className="d-flex flex-wrap align-items-center justify-content-between section-item-wrapper mb-2">
              <h2 className="section-item-title h2 text-medium mb-0" style={{ color: 'var(--text)' }}>
                {project.name}
              </h2>
                            {project.date && (
                <span style={{ 
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.5px',
                  color: 'var(--text-muted)',
                  transition: 'color var(--transition-speed) ease'
                }}>{project.date}</span>
              )}
            </div>
            {project.tagline && (
              <h3 className="display-heading text-bold text-decoration-none" style={{ 
                color: 'var(--text)',
                fontSize: '1.1rem',
                marginTop: '0.5rem'
              }}>{project.tagline}</h3>
            )}
            {project.image && project.image !== '' && (
              <div className="mb-3">
                <img src={project.image} alt={project.name} style={{ maxWidth: '100%', borderRadius: '12px', maxHeight: '250px', objectFit: 'cover' }} />
              </div>
            )}
                        <div className="section-item-list body-lg ps-1" style={{ color: 'var(--text)' }}>
              {Array.isArray(project.description) ? (
                <ul className="list-unstyled" style={{ marginBottom: '1rem' }}>
                  {project.description.map((line, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.5rem',
                      paddingLeft: '0.5rem'
                    }}>
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginBottom: '1rem' }}>
                  {project.description}
                </p>
              )}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn rounded-pill px-4 py-2" 
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--brand-medium)',
                  border: '2px solid var(--brand-medium)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-medium)';
                  e.currentTarget.style.color = 'var(--background)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--brand-medium)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Projects;