import React from 'react';

export default function Resume() {
  return (
    <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"800px","marginTop":"20px" }}>
    <div style={{"padding":"0 20px 60px","fontFamily":"Helvetica", "color": "white" }}>
      <h1>Resume</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p><a href="#" alt="Open PDF Resume" target="_blank" rel="noreferrer"><button style={{ marginTop: '20px', "backgroundColor":"#42c5f5","color":"white","border":"none","borderRadius":"4px","padding":"2px 20px 2px","whiteSpace":"nowrap" }} type="submit" value="Submit">Open Jacob's Resume (PDF)</button></a></p>
          </div>
          <div className="col-md-6"><h3>Technical Skills</h3>
          <div className="row">
            <div className="col-md-6" style={{"fontFamily":"Helvetica"}}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
            </ul>
            </div>
            <div className="col-md-6" style={{"fontFamily":"Helvetica"}}>
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
