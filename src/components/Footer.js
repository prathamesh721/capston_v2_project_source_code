import React from "react";
import instagram from "../Assets/Icons/instagram.svg";
import facebook from "../Assets/Icons/facebook.svg";
import twitter from "../Assets/Icons/twitter.svg";
import Logo from "../Assets/Logo.PNG";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
          <ul>
            <li>
              <a href="#" aria-label="Go to user account">
                <strong>Account</strong>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Go to user sign in">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" aria-label="Register here">
                Register
              </a>
            </li>
            <li>
              <a href="#" aria-label="Check order status">
                Order Status
              </a>
            </li>
          </ul>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 ">
          <ul>
            <li>
              <a href="#" aria-label="Visit about us page">
                <strong>About Us</strong>
              </a>
            </li>
            <li>
              <a href="#" aria-label="See out story">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" aria-label="Check careers with us">
                Careers
              </a>
            </li>
            <li style={{ visibility: "hidden" }}>hide</li>
          </ul>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
          <ul>
            <li>
              <a href="#" aria-label="Find help from us">
                <strong>Help</strong>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Please contact us">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" aria-label="See your order status">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" aria-label="See all the returns">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
          <ul>
            <li>
              <a href="#" aria-label="Follow us on social media">
                <strong>Follow Us!</strong>
              </a>
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </li>
            <li>
              <a href="#" aria-label="Our instagram link">
                <img
                  src={instagram}
                  alt="Instagram Account"
                  className="footerIcons"
                />
              </a>
              <a href="#" aria-label="Our facebook page">
                <img
                  src={facebook}
                  alt="Facebook page"
                  className="footerIcons"
                />
              </a>
              <a href="#" aria-label="Our Twitter account">
                <img
                  src={twitter}
                  alt="Follow on Twitter"
                  className="footerIcons"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerFooter">
        <Link to="/" aria-label="Footer logo">
          <img src={Logo} alt="Brand logo" />
        </Link>
        <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
        <ul>
          <li>
            <a href="#" aria-label="Terms of use">
              <u>Terms of Use</u>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Privacy policy document">
              <u>Privacy Policy</u>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
