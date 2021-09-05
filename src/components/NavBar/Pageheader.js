import React from 'react'
import './PageHeader.css'

function Pageheader(props) {
    return (
        <div className='container'>
           <hr /> 
           <h1>{props.title}</h1>
        </div>
    )
}

export default Pageheader
