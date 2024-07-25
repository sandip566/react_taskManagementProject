import React from 'react';
import ImageSrc from './Image.png'; 
import Sign from '../Sign-page/Sign'
import './Image.css';


function Image() { 
    return (< div style={{}}>
        <div style={{ float: 'left', width: '40%', height: '100vh', fontSize:'30px' , fontFamily:'Baloo 2'}} >
        <p style={{position:'absolute',margin:'4% '}}>Project management made easy</p>
            <img src={ImageSrc} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
        </div>
        <Sign/>

        </div>
    );
}

export default Image;
