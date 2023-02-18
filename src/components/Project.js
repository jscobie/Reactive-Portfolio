import React from 'react';
import '../styles/style.css';
import gitlogo from '../assets/GitHub-Mark-Light-64px.png';

export default function Project(props) {
    return (
        <div className="col-md-6 project-image">
            <a href={props.project} alt={props.projectAlt}><img style={{ "marginBottom":"5px", "border":"5px solid #a8dadc","borderRadius":"3px","opacity":"1","width":"375px", 'height':'150px' }} src={props.img} alt={props.imgAlt}></img></a>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p><a style={{ "fontSize":"1.3rem","fontFamily":"Helvetica" }} href={props.project} alt={props.projectAlt}><b>{props.projectTitle}</b></a></p>
                <p><a href={props.gitHubRepo} title={props.gitHubAlt}><img src={gitlogo} alt="Link to GitHub" width="25"></img></a></p>
            </div>
                 <p className='mb-3' style={{ "fontSize":"0.9rem","fontFamily":"Helvetica" }}>
                    {props.description}
                 </p>
        </div>       
    )
}