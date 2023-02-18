import React from 'react';
import '../../styles/style.css';
import thumbnail from '../../assets/Resume.PNG';

export default function Resume() {
  return (
    <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"960px","marginTop":"20px" }}>
    <div style={{"padding":"0 20px 60px","fontFamily":"Helvetica", "color": "white" }}>
      <h1>Resume</h1>
      <div className="container">
        <div className="row" style={{"marginBottom":"17.5%"}}>
          <div className="col-md-6">
          <img className="resume" style={{"border":"5px solid #13293d","borderRadius":"3px","opacity":".8","width":"225px", "margin": "10px 0px"}} id="resume" src={thumbnail} alt="thumbnail of resume"></img>
            <p><a href="https://www.linkedin.com/in/jacobscobie/" alt="Open PDF Resume" target="_blank" rel="noreferrer"><button style={{ marginTop: '20px', "backgroundColor":"#42c5f5","color":"white","border":"none","borderRadius":"4px","padding":"4px 10px 4px","whiteSpace":"nowrap" }} type="submit" value="Submit">Open Jacob's Resume (PDF)</button></a></p>
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
              <li>Node.js</li>
            </ul>
            </div>
            <div className="col-md-6" style={{"fontFamily":"Helvetica"}}>
            <ul>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Progressive Web Applications</li>
              <li>Visual Studio</li> 
              <li>Git Bash/Terminal</li>
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
