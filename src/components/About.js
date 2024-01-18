import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import './About.css';
import ResumeButton from './DownloadResume'
function About(){
    return(

        <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4 custom-font">About Me</h2>
              <p className="custom-font">
                Welcome to my website! I'm Shaunak Wagh, a passionate developer. I specialize in React, Express, MySQL, MSSQL and enjoy exploring new
                technologies to enhance my skills. I am pursuing Micro Masters in Data Science and Machine learning from MIT.
              </p>
              <p className="custom-font">
                My goal is to create meaningful and impactful digital experiences. Whether it's front-end development,
                back-end programming, or full-stack projects, I'm dedicated to delivering high-quality solutions.
              </p>
              {/* Add more details about yourself as needed */}
              <div className="d-flex justify-content-center align-items-center">
              <SocialIcon href="https://github.com/shaunakwagh" url="www.github.com" style={{ marginRight: '10px' }}/>
              <SocialIcon href="https://www.linkedin.com/in/shaunakwagh/" url="www.linkedin.com" />
            </div>
            <div className="d-flex justify-content-center align-items-center"style={{ marginTop: '20px' }}> 
              <ResumeButton />
            </div>
            
            </Col>
          </Row>
        </Container>
      </section>

        

    );





}
export default About;
// <SocialIcon href="https://www.linkedin.com/in/shaunakwagh/" url="www.linkedin.com" />