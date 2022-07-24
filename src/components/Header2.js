import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../Assets/Logo.PNG";
import search from "../Assets/Icons/search.svg";
import user from "../Assets/Icons/user.svg";
import shoppingBag from "../Assets/Icons/shopping-bag.svg";

import { Link } from "react-router-dom";

const Header = () => {
  // //Cart Related code v2
  //  const cartTotalQuantity = useSelector(state => state.handlecartSlice.cartTotalQuantity)


  //Cart Related Code v1
  const cart = useSelector((state) => {
    return state.handlecartSlice.items;
  });

  const totalcartitem = cart.length;
  // console.log(totalcartitem);

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
          <button aria-label="Toggle Navigation" className="burger" onClick={navSlide}>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
          </button>

          <a href="/ezest_assessment_2_v2">
            {/* <img src={logo} className={displayIn ? "hideLogo" : "logo"} alt='brand logo' /> */}
            <p className={displayIn ? "hideLogo" : "logo"} alt='brand logo'>VENIA</p>
          </a>

          <nav role="navigation">
            <ul className={isActive ? "nav-links nav-active" : "nav-links"}>
              <b>
                <li
                  aria-label="See Shop Categories"
                  className="desktopHide"
                >
                  Shop Categories
                </li>
              </b>
              <li>
                <a href="/" aria-label="Go to Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#" aria-label="See women products">
                  Women
                </a>
              </li>
              <li>
                <a href="#" aria-label="See men products">
                  Men
                </a>
              </li>
              <li>
                <a href="#" aria-label="See electronic products">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" aria-label="See Jewellery">
                  Jewellery
                </a>
              </li>

              <div className="bottomLinks desktopHide">
                <img src={user} alt='User Account' />
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
            {/* <input
              className={displayIn ? "" : "hideInput"}
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="inputSearch"
              role='search'
            />
            <button
              onClick={hideInput}
              aria-label="Click to search products"
              className="btn"
            >
              <img src={search} alt='Search button' />
            </button> */}

            {/* <label for="searchBar" className="mobileHide">
              Search
            </label>
            <img src={user} alt='Sign in' className="mobileHide" />
            <a href="#" aria-label="Go to Sign in" className="mobileHide">
              Sign in
            </a> */}

            <Link to="/ezest_assessment_2_v2/cart" aria-label="Click to see shopping cart">
              <img src={shoppingBag} alt='shopping cart' />
            </Link>
            {/* <span>{cartTotalQuantity}</span> */}
            <span>{totalcartitem}</span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
