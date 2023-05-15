import React, { useState } from 'react'
import "./AppartmentDescription.css"

function AppartmentDescription(props) {
    const [isContentvisible, setisContentvisible] = useState(false)
    const showContent = () => { 
        setisContentvisible(!isContentvisible)
    }
  return (
    
        <div className='appartment_description'>
            <p className='description_title'>
                <span>{props.title}</span>
                <i className ="fa-solid fa-chevron-down fa-lg" onClick={showContent}></i>
            </p>
            
            <div className='description_content'>
                {isContentvisible && <p> {props.content} {props.text}</p>}
            </div>
        </div>
        
    
  )
}

export default AppartmentDescription