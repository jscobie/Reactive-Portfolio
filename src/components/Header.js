import React from 'react';

export default function Header() {
    return (
        <div style={{ "padding":"2px 0 18px","border":"none","margin":"none", "backgroundColor":"#13293d" }} className="text-white p-4">

            <h1 className='d-flex justify-content-center' style={{ fontSize: '60px', fontFamily: 'Helvetica'}}>
              Jacob Scobie
            </h1>
            <p className='d-flex justify-content-center' style={{ fontSize: '20px', fontFamily: 'Lucida Console'}}>
              Coder. Troubleshooter. Leader.
            </p>
        </div>  
    );
}