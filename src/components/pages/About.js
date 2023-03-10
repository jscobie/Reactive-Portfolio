import React from 'react';
import '../../styles/style.css';
import thumbnail from '../../assets/image.jpg';

export default function About() {
  return (
    <div style={{"padding":"0 20px 60px","color": "white", "fontFamily":"Helvetica"}}>
      <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"960px","marginTop":"20px" }}>
      <h1>About Jacob</h1>
        <p>
          As a long-time member of the IT industry I have sought to learn more about web development to add to my
          arsenal of tools that continue to propel me into further project and challenges. I am currently an IT Manager, 
          heavy on the IT light on the manager; I push my team by being technically knowledgable. Managing people and 
          technologies is only one facet of what a successful IT Manager does in my opinion.
        </p>
        <img className="resume" style={{"border":"5px solid #13293d","borderRadius":"3px","opacity":".8","width":"225px", "margin": "10px 0px"}} id="resume" src={thumbnail} alt="thumbnail of resume"></img>
        <p style={{"marginBottom":"11%"}}>
          I am about to graduate from a Web Development (Full Stack) Bootcamp through Michigan State University. I am planning
          to utilize my new coding skills to improve my employers online presence through a normal website and we have working
          plans on multiple portal projects which require stron front/back end skills for the entire Full Stack programming scheme.
        </p>

      </div>
    </div>
  );
}
