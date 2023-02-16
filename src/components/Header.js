import React from 'react';
import banner from '../assets/R.jpg';

export default function Header() {
    return (
        <div style={{ "border":"none","margin":"none", "backgroundColor":"#13293d", }} className="text-white">
            <h1 className='d-flex justify-content-center' style={{ fontSize: '60px', fontFamily: 'Helvetica'}}>
              Jacob Scobie
            </h1>
            
            <p className='d-flex justify-content-center' style={{ fontSize: '20px', fontFamily: 'Lucida Console'}}>
              Coder. Troubleshooter. Leader.
            </p>
            <img style={{ "padding": "0 0 0", "height":"80px","width":"100%","backgroundSize":"cover","backgroundPosition":"center" }} src={banner} alt="Link to GitHub" width="25"></img>
        </div>  
    );
}