import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";

function Card(props) {
  const state = {
    appartId: props.id
  }
  return (
    <div className='card'>
        <Link to={"/Appartements"} state = {state}>
          <img src= {props.imageUrl} ></img>
          <div className='card_title'>{props.title}</div>
        </Link>
    </div>
  )
}

export default Card