import React from 'react';
import githublogo from '../assets/GitHub-Mark-Light-64px.png';
import linkedinlogo from '../assets/In-White-96.png';
import emaillogo from '../assets/email-64.png';


export default function Footer() {
    return (
      <div style={{ backgroundColor: 'black', opacity: 0.7 }}>
        <a href="https://github.com/jscobie" alt="Link to GitHub account"><img className="icon" src={githublogo} alt="Link to GitHub account" width="64"></img></a>
        <a href="https://www.linkedin.com/in/jacobscobie/" alt="Link to LinkedIn"><img className="icon" src={linkedinlogo} alt="LinkedIn account" width="64"></img></a>
        <a href="mailto:jacob.scobie@gmail.com" alt="Link to email"><img className="icon" src={emaillogo} alt="Email Jacob" width="64"></img></a>
        </div>
    );
  }