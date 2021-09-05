import React from 'react'
import './About.css'
import Pageheader from './Pageheader'

function About() {
    return (
        <div className='aboutme' id='about'>
            <Pageheader title={'About Me'}/>
            <div className='container'>
                <div className = 'text'>
                    <h2>Hello! I am Manu Bharadwaj, a passionate Front-End Developer</h2>
                    <p>
                       'Someone who combines HTML, CSS, JavaScript & React.JS skills might be called a Front-End Developer'.
                       “Writing the first 90 percent of a computer program takes 90 percent of the time.
                       The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time”. 
                       
                    </p>
                </div>
                <div className='photo'>
                    <img className='me' src='./Images/manu bharadwaj.jpg' alt='me' />
                </div>
            </div>
        </div>
    )
}

export default About
