import React, { children } from 'react'
import "./Main.css";

function Main({children}) {
      
  return (
    <div className='main'>{...children}</div>
  )
}

export default Main