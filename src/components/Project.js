import React from 'react';
import gitlogo from '../assets/GitHub-Mark-32px.png';

export default function Project(props) {
    return (
        <div className="col-md-6">
            <a href={props.project} alt={props.projectAlt}><img src={props.img} alt={props.imgAlt}></img></a>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p><a className="project-link" href={props.project} alt={props.projectAlt}><b>{props.projectTitle}</b></a></p>
                <p className="space-above"><a href={props.gitHubRepo} title={props.gitHubAlt}><img className="git" src={gitlogo} alt="Link to GitHub" width="30"></img></a></p>
            </div>
                 <p>
                    {props.description}
                 </p>
        </div>       
    )
}