import React from "react";
import homeImage from "../Assets/images/homepage_1.png";
import { Link } from "react-router-dom";
import chevronLeft from "../Assets/Icons/chevron-left.svg";
import mapPin from "../Assets/IconCopy/map-pin.svg";
import FourImage from "./FourImage";
import maxHeader from "../Assets/max-width_header.svg";
import standinMan from "../Assets/images/manStandingOnCliff.png";
import manwithGoggles from "../Assets/images/ManWearingShirtGoggles.png";
import shopWomen from "../Assets/shopWomen.jpg";
import shopMen from "../Assets/shopMen.jpg";
import shopJewellery from "../Assets/shopJewellery.jpg";
import shopElectronics from "../Assets/shopElectronics.jpg";
const Home = () => {
  return (
    <section className="containerForDesktop">
      {/* ==============================Home Banner starts=================== */}
      <div className="homeBanner">
        <span className="homeInnerBanner">
          <img
            src={chevronLeft}
            id="chevronLeft"
            className="mobileHide2"
            alt="left slider"
          />

          <div>
            <h2>Shop the new Signature Collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lobortis mattis aliquam faucibus purus.
            </p>
            <div className="collectionBtnDiv">
              <Link to="/ezest_assessment_2_v2/shop">
                <button>SHOP NOW</button>
              </Link>
            </div>
            <div className="ThreeDotsWrapper">
              <div className="ThreeDots ThreeDotsActive"></div>
              <div className="ThreeDots"></div>
              <div className="ThreeDots"></div>
            </div>
          </div>
        </span>
        <img
          className="homeImage"
          src={homeImage}
          alt="Men Model wearing suit"
        />
      </div>

      {/* ==============================Four Image Banner starts=================== */}
      <div className="fourImageOuter container">
        <div className="fourImageInner">
          <FourImage
            heading="Shop Women"
            para="Lorem ipsum dolor sit amet"
            src={shopWomen}
            alt=""
          />
          <FourImage
            heading="Shop Men"
            para="Lorem ipsum dolor sit amet"
            src={shopMen}
            alt=""
          />
          <FourImage
            heading="Jewellery"
            para="Lorem ipsum dolor sit amet"
            src={shopJewellery}
            alt=""
          />
          <FourImage
            heading="Electronics"
            para="Lorem ipsum dolor sit amet"
            src={shopElectronics}
            alt=""
          />
        </div>
      </div>

      {/* ==============================Take off Banner starts=================== */}

      <div className="takeoffOuter container">
        <span className="takeoffInner">
          <div className=""></div>
          <div>
            <h2>Take off in the new Signature Legging</h2>
            <b>Lorem Ipsum Dolor Tempor</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
              magna.
            </p>
            <div>
              <button className="collectionBtn">SHOP COLLECTION</button>
              <Link to="/ezest_assessment_2_v2/shop">
                <button>SHOP NOW</button>
              </Link>
            </div>

            <div>
              <img
                src={maxHeader}
                className="maxHeader"
                alt="Horizontal line for styling"
              />
            </div>
          </div>
        </span>
        <img
          className="manwithGoggles"
          src={manwithGoggles}
          alt="Three men models standing near a wall"
        />
      </div>

      {/* ==============================Footer Banner starts=================== */}
      <div className="footerBanner container">
        <span className="footerBannerInner">
          <h2>Conquer your next adventure</h2>
          <p>Lorem Ipsum Dolor Tempor</p>
          <Link to="/ezest_assessment_2_v2/shop">
            <button className="shopDevicesBtn">SHOP DEVICES</button>
          </Link>
          <span className="mapiconWrapper">
            <img src={mapPin} alt="map pin icon" className="mapPinImg" />
            <img
              src={maxHeader}
              alt="Horizontal line for styling"
              className="mapMaxHeaderImg"
            />
          </span>
        </span>
        <img
          src={standinMan}
          alt="Man standing near mountain cliff"
          className="standingMan"
        />
      </div>
    </section>
  );
};

export default Home;
