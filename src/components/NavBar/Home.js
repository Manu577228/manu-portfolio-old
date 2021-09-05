import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home' id='home'>
           <div className='container'>
               <h1 className='hello'>Hello,<br /> Welcome to <br />Manu's portfolio</h1> 
           </div>
           <img className='code'src='./Images/brain.webp' alt='code'/>
           <img className='codeearth'src='./Images/codeearth.webp' alt='code'/>

        </div>
    )
}

export default Home
