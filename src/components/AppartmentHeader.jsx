import React from 'react'
import "./AppartmentHeader.css"

function AppartmentHeader() {
  return (
    <div className='appartment_header'>
            <div className="appartment_title">
                <h1>Crazy loft on the canal Saint-Martin</h1>
                <h2>Paris, Ile-de-France</h2>
                <div className='appartment_tags'>
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className='appartment_details'>
                <div className='appartment_host'>
                    <h3>Alexandre Dumas</h3>
                    <div className='host'></div>
                </div>
                <div className='rate_stars'>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-regular fa-star fa-lg"></i>
                    <i class="fa-regular fa-star fa-lg"></i>
                </div>
            </div>
        </div>
  )
}

export default AppartmentHeader