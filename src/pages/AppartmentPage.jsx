import React, { useEffect, useState } from 'react'
import "../pages/AppartmentPage.css"
import AppartmentDescription from '../components/AppartmentDescription'
import AppartmentBanner from '../components/AppartmentBanner'
import AppartmentHeader from '../components/AppartmentHeader'
import { useLocation } from 'react-router-dom'

function AppartmentPage() {
  const location = useLocation();
  const [selectedAppart , setselectedAppart] = useState(null);
  useEffect(fetchAppartmentData, []);
  
  function fetchAppartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((apparts) => {
        const appart = apparts.find((appart) => appart.id === location.state.appartId);
        setselectedAppart(appart);
      })
      .catch(console.error);
  }
  if (selectedAppart == null ) return <div>...loading</div>
  return (
    <div className='appartment-page'>
        <AppartmentBanner imageUrl = {selectedAppart.cover} imageArray = {selectedAppart.pictures}/>
        <AppartmentHeader selectedAppart = {selectedAppart} />
        
        <div className='appartment_description-content'>
            <AppartmentDescription title="Description" content = {selectedAppart.description}/>
            <AppartmentDescription title="Équipements" 
            content = {selectedAppart.equipments.map((eq)=> (
              <li>{eq}</li>
              
            ))} />
        </div>
        
    </div>
  )
}

export default AppartmentPage