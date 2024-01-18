import React from 'react';
import { Card, Button, Col,Row,Container} from 'react-bootstrap';
import {  certificates } from "../data";
//import './Certificates.css';
//import 'Certificate_images'

function Certificate () {
    return (
        <section id="certificates" className="py-5">
        <Container>
        <h2 className="text-center mb-5">My Certificates</h2>
        <Row className="justify-content-center">
          {certificates.map((certificate,index) => (
         
            <Col md={4} key={certificate.id} className="mb-4">
                <Card.Img variant="top" src={certificate.image} alt={`Certificate ${certificate.id}`} />
                <Card>
                    <Card.Body>
                        <Card.Title>{certificate.name}</Card.Title>
                        <Card.Text> {certificate.description}
                        </Card.Text>
                        <Button variant="primary" href={certificate.link}>Show Credential</Button>
                    </Card.Body>
                 </Card>
                
            </Col>
        
          ))}
        </Row>
      </Container>
      </section>
      );
    
    
};
  
  export default Certificate;

  //<Button variant="primary" href={certificate.link} target="_blank">
  //View Certificate
 //  </Button>