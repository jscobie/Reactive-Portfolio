import React from 'react';
import Project from '../Project';
import '../../styles/style.css';

import profile1 from '../../assets/Project3-Squeezy-800x550.png';
import profile2 from '../../assets/Project2-RescuePets-800x550.png';
import profile3 from '../../assets/MERN-refactor-800x550.png';
import profile4 from '../../assets/TechBlog-HandleBarsSQL-800x550.png';
import profile5 from '../../assets/Project1-OutImagery-800x550.png';
import profile6 from '../../assets/Password-Generator-800x550.png';

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
              imgAlt = "Squeezy Citrus"
              project = "https://squeezy-citrus.herokuapp.com/"
              projectAlt = "Full MERN Stack Webstore"
              projectTitle = "MERN E-Commerce"
              gitHubRepo = "https://github.com/Bootcamp-Buddies/Squeezy"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: MERN, Stripe, React, MondoDB, Express, Node, Apollo, Graphql" />
            <Project
              key = "2"
              img = {profile2}  
              imgAlt = "Rescue Pets - Animal Adoption"
              project = "https://powerful-ravine-90978.herokuapp.com/"
              projectAlt = "RescuePets"
              projectTitle = "Rescue Pets"
              gitHubRepo = "https://github.com/Bootcamp-Buddies/Rescue-Pets"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, handlebars, express-session, Heroku, jawsdb, mysql, MVC" />
          </div> 
          <div className="row">
            <Project
              key = "3"
              img = {profile3}  
              imgAlt = "MERN Stack - Book Search"
              project = "https://hidden-earth-55114.herokuapp.com/"
              projectAlt = "Full Stack GraphQL Book Search"
              projectTitle = "Book Search"
              gitHubRepo = "https://github.com/jscobie/MERN-Book-Search-Engine"
              gitHubAlt = "See app repository on Github"
              description = "Technology used: MERN, GraphQL, Apollo, Heroku, Atlas" />
            <Project
              key = "4"
              img = {profile4}  
              imgAlt = "TechBlog - Twitter's Replacement"
              project = "https://warm-shore-33539.herokuapp.com/"
              projectAlt = "Handlebars and SQL combine"
              projectTitle = "TechBlog - Twitter's Replacement"
              gitHubRepo = "https://github.com/jscobie/TechBlogMVC"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, handlebars, express-session, Heroku, jawsdb, mysql, MVC" />
          </div> 
          <div className="row">
            <Project
              key = "5"
              img = {profile5}  
              imgAlt = "Out of this world Imagery and Quote"
              project = "https://quatrogroup.github.io/quattro-project/"
              projectAlt = "CSS Front End Styling project using APIs"
              projectTitle = "CSS and API"
              gitHubRepo = "https://github.com/QuatroGroup/quattro-project"
              gitHubAlt = "See game repository on GitHub"
              description = "Technology used: HTML, CSS, API" />
            <Project
              key = "6"
              img = {profile6}  
              imgAlt = "Password Generator"
              project = "https://jscobie.github.io/secret-password-builder/"
              projectAlt = "Generates Passwords"
              projectTitle = "Generate Passwords"
              gitHubRepo = "https://github.com/jscobie/secret-password-builder"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: HTML, CSS, Javascript" />
          </div> 
        </div>
      </div>
    </div>
  );
}
