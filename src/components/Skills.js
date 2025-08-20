// Import React and Bootstrap components
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const skillCategories = [
  {
    title: 'Languages',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'HTML5/CSS']
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MSSQL', 'Oracle 21']
  },
  {
    title: 'Frameworks',
    items: ['LangChain', 'React', 'Gradio', 'Node.js', 'Express', 'Tailwind/Bootstrap', 'SpringBoot']
  },
  {
    title: 'Technologies & Tools',
    items: [
      'AWS (EC2, Lambda, SageMaker, S3)',
      'Shell Scripting',
      'CodeceptJS',
      'Linux/Unix',
      'Git',
      'Github',
      'JIRA',
      'CI/CD',
      'Agile',
      'Microsoft Office',
      'Google Suite',
      'LaTex'
    ]
  }
];

// Skills component
function Skills ()  {
  return (
    <section id="skills" className="position-relative overflow-hidden" style={{ 
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
        <h2 className="text-center mb-5 display-5 fw-bold" style={{ color: 'var(--brand-dark)' }}>Technical Skills</h2>
        <Row className="justify-content-center mb-4">
          {skillCategories.map((cat) => (
            <Col md={6} lg={5} className="mb-4" key={cat.title}>
              <Card className="shadow h-100 border-0 rounded-4" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
                <Card.Body>
                  <Card.Title className="mb-3 h2 text-medium text-center border-bottom pb-2">{cat.title}</Card.Title>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {cat.items.map((item) => (
                      <Badge bg="primary" key={item} className="body-md text-medium px-3 py-2 rounded-pill shadow-sm oled-display" style={{ letterSpacing: '0.1em' }}>{item}</Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
