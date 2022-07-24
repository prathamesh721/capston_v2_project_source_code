import React from 'react'
import homeImage from '../Assets/homepage_1.jpg'
import {Link} from 'react-router-dom'
import chevronLeft from '../Assets/Icons/chevron-left.svg'
import FourImage from './FourImage'
import maxHeader from '../Assets/max-width_header.svg'
import standinMan from '../Assets/manStandingOnCliff.JPG'
import shopWomen from '../Assets/shopWomen.jpg'
import shopMen from '../Assets/shopMen.jpg'
import shopJewellery from '../Assets/shopJewellery.jpg'
import shopElectronics from '../Assets/shopElectronics.jpg'
const Home = () => {
  return (
    <section>
      {/* ==============================Home Banner starts=================== */}
      <div className='homeBanner'>
        <span className='homeInnerBanner'>
          {/* <img src={chevronLeft} id='chevronLeft' className='mobileHide2' /> */}
          {/* <div className='homeBannerImg'></div> */}
          <div>
            <h2>Shop the new Signature Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
            <Link to="/ezest_assessment_2_v2/shop"><button>SHOP NOW</button></Link>
          </div>
        </span>
        <img src={homeImage} alt='Men Model wearing suit' />
      </div>

      {/* ==============================Four Image Banner starts=================== */}
      <div className='fourImageOuter container'>
        <div className='fourImageInner'>
          
          <FourImage heading="Shop Women" para = 'Lorem ipsum dolor sit amet' src={shopWomen} alt=""/>
          <FourImage heading="Shop Men" para = 'Lorem ipsum dolor sit amet' src={shopMen} alt=""/>
          <FourImage heading="Jewellery" para = 'Lorem ipsum dolor sit amet' src={shopJewellery} alt=""/>
          <FourImage heading="Electronics" para = 'Lorem ipsum dolor sit amet' src={shopElectronics} alt=""/>
          
        </div>
      </div>

      {/* ==============================Take off Banner starts=================== */}

      <div className='takeoffOuter container'>
        <span className='takeoffInner'>
          {/* <img src={chevronLeft} id='chevronLeft' className='mobileHide2' /> */}
          <div className=''></div>
          <div>
            <h2>Take off in the new Signature Legging</h2>
            <b>Lorem Ipsum Dolor Tempor</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
            <button className='collectionBtn'>SHOP COLLECTION</button>
            <Link to="/ezest_assessment_2_v2/shop"><button>SHOP NOW</button></Link>
            <div>
              <img src={maxHeader} className='maxHeader' />
            </div>
          </div>
        </span>
        <img src={homeImage} alt='Men Model wearing suit' />
      </div>

 {/* ==============================Footer Banner starts=================== */}
      <div className='footerBanner container'>
        <span className='footerBannerInner'>
          <h2>Conquer your next adventure</h2>
          <p>Lorem Ipsum Dolor Tempor</p>
          <Link to="/ezest_assessment_2_v2/shop"><button className='shopDevicesBtn'>SHOP DEVICES</button></Link>
        </span>
        <img src={standinMan} alt='Athlete woman' className='standingMan'/>
      </div>
    </section>
  )
}

export default Home