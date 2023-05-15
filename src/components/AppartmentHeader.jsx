import React from 'react'
import "./AppartmentHeader.css"

function AppartmentHeader(props) {
    
    const selectedAppart = props.selectedAppart
  return (
    <div className='appartment_header'>
            <div className="appartment_title">
                <h1>{selectedAppart.title}</h1>
                <h2>{selectedAppart.location} </h2>
                <div className='appartment_tags'>
                    {selectedAppart.tags.map((tag) => (
                        <span key = {tag}>{tag}</span>
                    ))}
            
                </div>
            </div>
            <div className='appartment_details'>
                <div className='appartment_host'>
                    <h3>{selectedAppart.host.name}</h3>
                    <div className='host'>
                        <img src={selectedAppart.host.picture} alt=''></img>
                    </div>
                </div>
                <div className='rate_stars'>
                    {[1, 2, 3, 4, 5].map((num) => {
                        if (selectedAppart.rating >= num ) {
                            return <i key = {num} className="fa-solid fa-star fa-lg"></i>
                        } else {
                            return <i key = {num} className="fa-regular fa-star fa-lg"></i>
                        }
                    })}
                </div>
            </div>
        </div>
  )
}

export default AppartmentHeader