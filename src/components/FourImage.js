import React from 'react'


const FourImage = (props) => {
  const {src, alt, heading, para} = props
  return (
    <div className='fourImgComp'>
        <img src={src} alt={alt}/>
        <div className='fourImgBanner'>
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default FourImage