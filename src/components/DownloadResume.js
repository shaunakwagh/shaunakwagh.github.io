import React from 'react';

import resumePath from '../Resume/Shaunak_Wagh_Resume.pdf'


const ResumeButton = () => {
  

  return (
    <a 
      href={resumePath} 
      download="Shaunak_Wagh_Resume" 
      className="btn rounded-pill px-4 py-2" 
      style={{ 
        backgroundColor: 'transparent',
        color: 'var(--brand-medium)',
        border: '2px solid var(--brand-medium)',
        fontSize: '0.95rem',
        fontFamily: 'var(--font-display)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '1rem'
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
      Download Resume
    </a>
  );
};

export default ResumeButton;
