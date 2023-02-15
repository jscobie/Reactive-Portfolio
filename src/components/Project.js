import React from 'react';
import gitlogo from '../assets/GitHub-Mark-32px.png';

export default function Project(props) {
    return (
        <div className="col-md-6">
            <a href={props.project} alt={props.projectAlt}><img style={{ "marginBottom":"5px", "border":"5px solid #a8dadc","borderRadius":"3px","opacity":"1","width":"350px" }} src={props.img} alt={props.imgAlt}></img></a>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p><a style={{ "fontSize":"1.3rem","fontFamily":"Helvetica" }} href={props.project} alt={props.projectAlt}><b>{props.projectTitle}</b></a></p>
                <p><a href={props.gitHubRepo} title={props.gitHubAlt}><img src={gitlogo} alt="Link to GitHub" width="30"></img></a></p>
            </div>
                 <p className='mb-3' style={{ "fontSize":"0.9rem","fontFamily":"Helvetica" }}>
                    {props.description}
                 </p>
        </div>       
    )
}