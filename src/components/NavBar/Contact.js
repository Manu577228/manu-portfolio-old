import React from 'react'
import './Contact.css'
import { FaInstagramSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {

const handleURL = (url) => {
    return () => window.open(url, "_blank")
 }

    return (
        <div className='contact' id='contact'>
            <div className='contacticons'>
          <FaInstagramSquare color='white' size='40px' style={{padding: '1%'}}
          onClick={handleURL('https://www.instagram.com/manu_bharadwaj?r=nametag')} />
            <FaGithub color='white' size='40px' style={{padding: '1%'}}
          onClick={handleURL('https://github.com/Manubharadwaj5772')} />
            <FaLinkedin color='white' size='40px' style={{padding: '1%'}}
          onClick={handleURL('https://www.linkedin.com/in/manu-bharadwaj-3507a345/')} />
            </div>
        </div>
    )
}

export default Contact
