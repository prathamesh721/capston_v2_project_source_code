import React, { useState } from "react";
import { useSelector } from "react-redux";
import user from "../Assets/Icons/user.svg";
import shoppingBag from "../Assets/IconCopy/shopping-bag.svg";

import { Link } from "react-router-dom";

const Header = () => {
  //Cart Related Code v1
  const cart = useSelector((state) => {
    return state.handlecartSlice.items;
  });

  const totalcartitem = cart.length;

  //For collaspible Navigation
  const [isActive, setActive] = useState(false);

  const navSlide = () => {
    setActive(!isActive);
  };

  //For collaspible Input
  const [displayIn, setdisplayIn] = useState(false);

  const hideInput = () => {
    setdisplayIn(!displayIn);
  };

  return (
    <React.Fragment>
      <header role="banner" id="header">
        <div className="headerOuter">
          <button
            aria-label="Toggle Navigation"
            className="burger"
            onClick={navSlide}
          >
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
          </button>

          
            <Link to="/">
              <p className={displayIn ? "hideLogo" : "logo"} alt="brand logo">
                VENIA
              </p>
            </Link>
          

          <nav role="navigation">
            <ul className={isActive ? "nav-links nav-active" : "nav-links"}>
              <b>
                <li aria-label="See Shop Categories" className="desktopHide">
                  Shop Categories
                </li>
              </b>
              <li>
                <a href="/" aria-label="Go to Home">
                  Home
                </a>
              </li>
              <li>
                <Link className="activeLink" to="/ezest_assessment_2_v2/shop" aria-label="See women products">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/ezest_assessment_2_v2/shop" aria-label="See men products">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/ezest_assessment_2_v2/shop" aria-label="See electronic products">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/ezest_assessment_2_v2/shop" aria-label="See Jewellery">
                  Jewellery
                </Link>
              </li>

              <div className="bottomLinks desktopHide">
                <img src={user} alt="User Account" />
                <a href="#" aria-label="See User Account">
                  Account
                </a>
                <a href="#" aria-label="Go to Sign in">
                  Sign-in
                </a>
              </div>
            </ul>
          </nav>

          <div className="endHeader">
            <Link
              to="/ezest_assessment_2_v2/cart"
              aria-label="Click to see shopping cart"
            >
              <img
                src={shoppingBag}
                alt="shopping cart"
                className="shoppingBagImg"
              />
            </Link>

            <span className="totalcartitems">{totalcartitem}</span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
