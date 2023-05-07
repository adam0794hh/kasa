import React from 'react'
import './ErrorPage404.css'
import Main from '../components/Main'
import { Link } from 'react-router-dom'

function ErrorPage404() {
  return (
    <Main>
        
        <h1 className='error-h1'>404</h1>
        <h2 className='error-h2'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className='error' to={"/"}>Retourner sur la page d’accueil</Link>
        
    </Main>
  )
}

export default ErrorPage404