import React from 'react'
import './Skills.css'
import PageHeader from './Pageheader'

function Skills() {

    const listTitleStyle = { fontWeight: 700, color: '#9B1FE8', marginBottom: '4px', fontSize: '1.7rem'}

    const frontendSkills =
    <ul>
        <li style = { listTitleStyle }>Front-End Skills</li><br />
        <li>HTML5</li><br />
        <li>CSS3</li><br />
        <li>Javascript</li><br />
        <li>Rest API</li><br />
        <li>Some concepts of Material-UI</li><br />
        <li>React.JS</li><br />
        <li>React Hooks</li><br />
        <li>Version Control Software: GIT </li><br />
    </ul>
    
   const totalSkills = [ frontendSkills ]

 return (
        <div className='skills' id='skills'>
            <PageHeader title={'What about the Skills?'} />
            <p>
                I enjoy learning newStuff and willingness to get updated!
                so I am a lifelong learner.
                Below are some programming languages, library
                & other concepts that I worked with and
                some of them I control better.
                
            </p>
            <div className='container'>
            <img className='coder' src='./Images/coder.webp' alt='code' />
                {totalSkills.map(skills => {
                    return (
                        <div className='list'>
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
