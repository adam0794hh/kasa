import React from 'react'
import AppartmentDescription from '../components/AppartmentDescription'
import Banner from '../components/Banner'
import './About.css'

function About() {
  return (
    <div className='about_container'>
        <Banner />
        <div className='about_description'>
            <AppartmentDescription title="Fiabilité"/>
            <AppartmentDescription title="Respect" />
            <AppartmentDescription title="Service" />
            <AppartmentDescription title="Sécurité" />
        </div>
        
    </div>
  )
}

export default About