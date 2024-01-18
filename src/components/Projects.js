import React from 'react';
import { projects } from "../data";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Projects component
function Projects ()  {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;