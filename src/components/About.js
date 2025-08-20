import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeButton from './DownloadResume';
import './About.css';

function About() {
  return (
    <section id="about" className="position-relative overflow-hidden" style={{ 
        paddingTop: '80px',
        paddingBottom: '40px',
        minHeight: '100vh',
        background: 'var(--background)',
        display: 'flex',
        alignItems: 'center'
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
        <Row className="justify-content-center align-items-center">
          <Col md={10} lg={8} className="text-center">
            <img src="/profile_image.jpg" alt="Shaunak Wagh" className="rounded-circle shadow mb-4" style={{ 
              width: 200, 
              height: 200, 
              objectFit: 'cover', 
              border: '4px solid var(--brand-medium)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }} />
            <h2 className="mb-3 fw-bold display-5" style={{ color: 'var(--brand-dark)' }}>Shaunak Wagh</h2>
            <p className="lead mb-4" style={{ color: 'var(--text)' }}>Graduate Student @ CU Boulder and CS Penn State (WE ARE!!!) | Open Source & AI Enthusiast | U.S. Permanent Resident</p>
            <div className="mb-4">
              <span className="badge me-2 mb-2" style={{ backgroundColor: 'var(--brand-medium)', color: 'var(--background)' }}>Python</span>
              <span className="badge me-2 mb-2" style={{ backgroundColor: 'var(--success-medium)', color: 'var(--background)' }}>React</span>
              <span className="badge me-2 mb-2" style={{ backgroundColor: 'var(--warning-medium)', color: 'var(--neutral-dark)' }}>Java</span>
              <span className="badge me-2 mb-2" style={{ backgroundColor: 'var(--process-medium)', color: 'var(--neutral-dark)' }}>C/C++</span>
              <span className="badge me-2 mb-2" style={{ 
                backgroundColor: 'var(--brand-medium)', 
                color: 'var(--background)', 
                border: '1px solid var(--border)'
              }}>AWS</span>
              <span className="badge me-2 mb-2" style={{ backgroundColor: 'var(--brand-dark)', color: 'var(--background)' }}>SQL</span>
            </div>
            <p className="mb-4 fs-5" style={{ color: 'var(--brand-dark)' }}>
              I’m passionate about building impactful products at the intersection of software engineering, AI, and data-driven solutions. My experience spans open source, research, and industry projects, always with a focus on reliability, automation, and user experience.
            </p>
            <ul className="list-unstyled mb-4 fs-6 text-start mx-auto" style={{ maxWidth: 600, color: 'var(--text)' }}>
              <li><b style={{ color: 'var(--text)' }}>Education:</b> MS in CS (CU Boulder), BS in CS (Penn State), MIT MicroMasters Coursework in ML & Data Science</li>
              <li><b style={{ color: 'var(--text)' }}>Certifications:</b> AWS Solutions Architect, IBM AI Fundamentals, JPMC Forage, HackerRank SQL(Advanced)</li>
              <li><b style={{ color: 'var(--text)' }}>Skills:</b> Python, C/C++, Java, JavaScript, React, Node.js, Spring Boot, AWS, SQL, Linux, CI/CD, Agile</li>
            </ul>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a href="https://github.com/shaunakwagh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle p-2 mx-2" style={{ width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-github" style={{ fontSize: 24 }}></i>
              </a>
              <a href="https://www.linkedin.com/in/shaunakwagh/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2 mx-2" style={{ width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-linkedin" style={{ fontSize: 24 }}></i>
              </a>
            </div>
            <ResumeButton />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;