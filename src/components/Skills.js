// Import React and Bootstrap components
import { skills } from "../data";
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


// Skills component
function Skills ()  {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Technical Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="mb-1">
              <div className="text-center">
                <h4 className="mb-1.5">{skill.name}</h4>
                <ProgressBar animated now={skill.level} label={`${skill.level}%`} visuallyHidden/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
