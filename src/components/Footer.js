import React from 'react';
import githublogo from '../assets/GitHub-Mark-Light-64px.png';
import linkedinlogo from '../assets/In-White-96.png';
import emaillogo from '../assets/email-64.png';


export default function Footer() {
    return (
      <div>
        <div className='d-flex justify-content-center p-2' style={{ "backgroundColor":"#13293d" }}>
        <a href="https://github.com/jscobie" alt="Link to GitHub account"><img style={{ "padding":"15px" }} src={githublogo} alt="Link to GitHub account" width="64"></img></a>
        <a href="https://www.linkedin.com/in/jacobscobie/" alt="Link to LinkedIn"><img style={{ "padding":"15px" }} src={linkedinlogo} alt="LinkedIn account" width="64"></img></a>
        <a href="mailto:jacob.scobie@gmail.com" alt="Link to email"><img style={{ "padding":"15px" }} src={emaillogo} alt="Email Jacob" width="64"></img></a>
        </div>
        <div className='d-flex justify-content-center' style={{ "backgroundColor":"#13293d", "color": "white" }}>
        &copy; 2022 Jacob Scobie - Binaryterror
        </div>
      </div>
    );
  }