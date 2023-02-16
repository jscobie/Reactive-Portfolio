import React from 'react';
import Project from '../Project';

import profile1 from '../../assets/Project1-OutImagery-800x550.png';
import profile2 from '../../assets/Project2-RescuePets-800x550.png';
import profile3 from '../../assets/PWA-JustATextEditor-800x550.png';
import profile4 from '../../assets/TechBlog-HandleBarsSQL-800x550.png';

export default function Portfolio() {
  return (
    <div style={{"padding":"0 20px 60px","fontFamily":"Helvetica"}}>
      <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"800px","marginTop":"20px", "color": "white" }}>
        <h1>Portfolio</h1>
        <div className="container" style={{paddingTop: '10px'}}>
          <div className="row">
            <Project
              key = "1"
              img = {profile1}  
              imgAlt = "Out of this world Imagery and Quote"
              project = "https://quatrogroup.github.io/quattro-project/"
              projectAlt = "CSS Front End Styling project using APIs"
              projectTitle = "CSS and API"
              gitHubRepo = "https://github.com/QuatroGroup/quattro-project"
              gitHubAlt = "See game repository on GitHub"
              description = "Technology used: HTML, CSS, API" />
            <Project
              key = "2"
              img = {profile2}  
              imgAlt = "Rescue Pets - Animal Adoption"
              project = "https://powerful-ravine-90978.herokuapp.com/"
              projectAlt = "RescuePets"
              projectTitle = "Rescue Pets"
              gitHubRepo = "https://github.com/Bootcamp-Buddies/Rescue-Pets"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, handlebars, express-session, Heroku, jawsdb, mysql, model-view-controller, dotenv" />
          </div> 
          <div className="row">
            <Project
              key = "3"
              img = {profile3}  
              imgAlt = "Progressive Web Application - Simple Text Editing App"
              project = "https://stark-depths-09292.herokuapp.com/"
              projectAlt = "PWA Example of a simple text editor application"
              projectTitle = "PWA - J.A.T.E."
              gitHubRepo = "https://github.com/jscobie/TextEditor"
              gitHubAlt = "See app repository on Github"
              description = "Technology used: Express, concurrently, nodemon, webpack, css loader, babel" />
            <Project
              key = "4"
              img = {profile4}  
              imgAlt = "TechBlog - Twitter's Replacement"
              project = "https://warm-shore-33539.herokuapp.com/"
              projectAlt = "Handlebars and SQL combine"
              projectTitle = "TechBlog - Twitter's Replacement"
              gitHubRepo = "https://github.com/jscobie/TechBlogMVC"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, handlebars, express-session, Heroku, jawsdb, mysql, model-view-controller, dotenv" />
          </div> 
        </div>
      </div>
    </div>
  );
}
