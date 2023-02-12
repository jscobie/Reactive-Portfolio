import React from 'react';

export default function Resume() {
  return (
    <div>
    <div>
      <h1>Resume</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p><a href="#" alt="Open PDF Resume" target="_blank" rel="noreferrer"><button className="button" type="submit" value="Submit">Open Jacob's Resume (PDF)</button></a></p>
          </div>
          <div className="col-md-6"><h3>Technical Skills</h3>
          <div className="row">
            <div className="col-md-6">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
            </ul>
            </div>
            <div className="col-md-6">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Progressive Web Applications</li>
              <li>Visual Studio | Git Bash/Terminal</li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
