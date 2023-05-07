import React, { useEffect, useState } from 'react'
import "./Appartments.css"
import Card from "./Card.jsx"


function Appartments() {
  const [appartments, setAppartments] = useState([])
  useEffect(fetchAppartments, []);

  function fetchAppartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setAppartments(res))
      .catch(console.error);
  }
  return (
    <div className='Appartments'>
      {appartments.map((appartment) => (
        <Card title = {appartment.title} imageUrl = {appartment.cover} id = {appartment.id} />
      ))}
      
    </div>
  )
}

export default Appartments