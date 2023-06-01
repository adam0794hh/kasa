import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to={"/"}>
          <div className='navbar_logo'>
              <img src="/Logo.jpg" alt="Logo" />
          </div>
        </NavLink>
        <div>
          <ul className='list_style'>
            <li>
            <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
            <NavLink to={"/about"}>A propos</NavLink>
            </li>
          </ul>
        </div>
        
    </nav>
  )
}

export default Navbar