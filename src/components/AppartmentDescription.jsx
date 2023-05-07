import React from 'react'
import "./AppartmentDescription.css"

function AppartmentDescription(props) {
  return (
    <div>
        <div className='appartment_description'>
            <p className='description_title'>
                <span>{props.title}</span>
                <i class="fa-solid fa-chevron-down fa-lg"></i>
            </p>
            
            <div className='description_content'>
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez
                    pique-niquer l'été et à côté de nombreux bars et restaurants.Au cœur de Paris avec 5 lignes de métro et de nombreux
                    bus. Logement parfait pour les voyageurs en solo et les
                    voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7
                    minutes à pied).
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default AppartmentDescription