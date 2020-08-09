import React from 'react'
import './Select.css'
import 'tachyons'
import image from './image1.png';
import image1 from './image2.jpg';

var Select=()=>{
    return(
        <div className='tc'>
            <h1 className='f1'>Life is all about the choices </h1>
            <h2>so choose wisely</h2>
            <div id='division'> 
            <div id='image1' className='tc bg-light-blue dib br3  pa3 ma2 grow bw2 shadow-5 '>
                <img  src={image} alt='tv logo' height='300' />
                <p>Are you also a binge watcher of T.V shows????????????? </p>
            </div>

            <div id='image2' className='tc bg-light-blue dib br3  pa3 ma2 grow bw2 shadow-5 '>
                <img  src={image1} alt='tv-character' height='300' />
                <p>you also crack jokes like chandler in every situation???????  </p>
            </div>
                
            
                
            </div>
        </div>
    )
}
export default Select
