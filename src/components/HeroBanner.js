import React from 'react'
import heroBannerImg from '../Assets/heroBanner.PNG'
import GuyWearingJeans from '../Assets/images/GuyWearingJeans.png'

const HeroBanner = () => {
  return (
    <section>
        <div className='heroBanner'>
            <span className='heroInnerBanner'>
                 <h2>Men’s Outerwear</h2>
                 <div></div>
            </span>
           <img src={GuyWearingJeans} alt='Athlete woman'/>
        </div>
    </section>
  )
}

export default HeroBanner