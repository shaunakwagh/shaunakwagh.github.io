import React from 'react';
import { Card,Col,Row,Container} from 'react-bootstrap';
import {  certificates } from "../data";
//import './Certificates.css';
//import 'Certificate_images'

function Certificate () {
    return (
        <section id="certificates" className="position-relative overflow-hidden" style={{ 
          background: 'var(--background)',
          color: 'var(--text)',
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
        <h2 className="text-center mb-5 display-5 fw-bold" style={{ color: 'var(--brand-dark)' }}>My Certificates</h2>
        <Row className="justify-content-center">
          {certificates.map((certificate,index) => (
         
            <Col md={4} key={certificate.id} className="mb-4">
                <Card.Img variant="top" src={certificate.image} alt={`Certificate ${certificate.id}`} />
                <Card style={{ backgroundColor: 'var(--background)', color: 'var(--text)', borderColor: 'var(--border)' }}>
                    <Card.Body>
                        <Card.Title className="text-medium">{certificate.name}</Card.Title>
                        <Card.Text> {certificate.description}
                        </Card.Text>
                        <a 
                          href={certificate.link}
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
                            textDecoration: 'none',
                            display: 'inline-block'
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
                          Show Credential
                        </a>
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