import React, { useState } from 'react'

function AppartmentBanner(props) {
  const imageArray = props.imageArray
  const [currentPicture, setcurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "noshow";
  }

  const moveToNext = () => {
    setcurrentPicture((currentPicture + 1) % imageArray.length);
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setcurrentPicture( imageArray.length - 1);
      return;
    }
    setcurrentPicture(currentPicture - 1);
  }
  return (
    <div className='appartment-banner'>
        {imageArray.map((img , i) => (
        <img key={img} src={img} className={getClassName(i)}>
        </img>
        ))}
        <i onClick={moveToNext} className="fa-solid fa-chevron-right fa-xl"></i> 
        <i onClick={moveToPrevious} className="fa-solid fa-chevron-left fa-xl"></i>
    </div>
  )
}

export default AppartmentBanner