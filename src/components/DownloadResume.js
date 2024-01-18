import React from 'react';
import { Button } from 'react-bootstrap';
import resumePath from '../Resume/Shaunak_Wagh_Resume.pdf'


const ResumeButton = () => {
  

  return (
    <a href={resumePath} download="Shaunak_Wagh_Resume">
    <Button variant="primary" >
      Download Resume
    </Button>
    </a>
  );
};

export default ResumeButton;
