import React from 'react'
import './Navbar.css'

function NavBar() {
    return (
        <div className='navbar'>
           <nav>
               <ul>
                   <li>
                       <a href='/'>Home</a>
                   </li>
                   <li>
                        <a href='/#about'>About Me</a>
                   </li>
                   <li>
                        <a href='/#skills'>Skills</a>
                   </li>
                   <li>
                        <a href='/#contact'>Contact</a>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar
