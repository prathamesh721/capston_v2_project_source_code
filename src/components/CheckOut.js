import React, { useState } from "react";
import maxHeader from "../Assets/max-width_header.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ContactInfo from "./checkoutPageComponents/ContactInfo";
import ShippingMethod from "./checkoutPageComponents/ShippingMethod";
import PaymentInfo from "./checkoutPageComponents/PaymentInfo";
import ContactInfoDetails from "./checkOutPageDetails/ContactInfoDetails";
import ShippingDetails from "./checkOutPageDetails/ShippingDetails";
import PaymentDetails from "./checkOutPageDetails/PaymentDetails";
import ProductReview from "./checkoutPageComponents/ProductReview";

const CheckOut = () => {
  const [displayComp, setDisplayComp] = useState({
    contactInfo: true,
    contactSummary: false,
  });

  const { shippingState, setShippingState } = useState({ radioValue: "" });

  const cart = useSelector((state) => state.handlecartSlice.cartTotalAmount);

  // var shippingMethod = localStorage.getItem("shippingMethod")
  // var shippingRate = JSON.parse()

  return (
    <React.Fragment>
      {/* =========================== Heading ===================== */}

      <section className="checkout">
        <div className="checkoutHeading">
          <h2>CheckOut</h2>
          <img src={maxHeader} width="4%" alt="horizontal line" />
        </div>

        {/* =========================== Guest Checkout ===================== */}

        <div className="aem-Grid aem-Grid--12 checkoutContainer">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 guestCheckOutcontainer">

            <h3 className="">Guest CheckOut</h3>
            {displayComp.contactInfo ? (
              <ContactInfo setDisplayComp={setDisplayComp} />
            ) : (
              <ContactInfoDetails />
            )}

            {/* =============================Shipping Method======================== */}

            {displayComp.ShippingMethod ? (
              <ShippingMethod
                setDisplayComp={setDisplayComp}
                shippingState={shippingState}
                setShippingState={setShippingState}
              />
            ) : displayComp.shippingDetails ? (
              <ShippingDetails />
            ) : (
              <div>
                <p className="checkOutPadding">2. Shipping Method</p>{" "}
                <hr></hr>
              </div>
            )}

            {displayComp.paymentInfo ? (
              <PaymentInfo setDisplayComp={setDisplayComp} />
            ) : displayComp.paymentDetails ? (
              <PaymentDetails />
            ) : (
              <div>
                <p className="checkOutPadding">3. Payment Information</p>
                <hr></hr>
              </div>
            )}

            {displayComp.paymentDetails ? <ProductReview /> : ""}

          </div>

          {/* =========================== Pricing Summary ===================== */}

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
            {displayComp.contactInfo ? (
              <div className="expressCheckoutDive mobileHide">
                <strong>Sign in for Express Checkout</strong>
                <button aria-label="click to sign in" className="shippingMethodBtn">SIGN IN</button>
              </div>
            ) : (
              ""
            )}
            <div className="pricingSummaryDiv">
              <b className="priceSumTitle">Pricing Summary</b>
              <div className="cartSummaryCheckout">
                <div>
                  <ul>
                    <li>Subtotal</li>
                    <li>Coupon</li>
                    <li>Gift Card</li>
                    <li>Estimated tax</li>
                    <li>Estimated shipping</li>
                    <li><b>Estimated Total</b></li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li></li>
                    <li>$ {Number.parseFloat(cart).toFixed(2)}</li>
                    <li>$ 0</li>
                    <li>$ 0</li>
                    <li>$ 0</li>
                    <li>FREE</li>
                    <li><b>$ {Number.parseFloat(cart).toFixed(2)}</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========================== Place order button ===================== */}
        {displayComp.paymentDetails ? (<div className='aem-Grid aem-Grid--12 checkoutContainer'>
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
            <div className='chekoutProdBtnDiv'>
              <Link aria-label="Place order" to='/ezest_assessment_2_v2/order'><button className='chekoutProdBtn'>Place Order</button></Link>

            </div>
            <p className="checkoutTerms">By clicking confirm order you agree to our <u><a aria-label="Click to read terms and conditions" href="">Terms and Conditions</a></u></p>
          </div>

        </div>) : ''}

      </section>
    </React.Fragment>
  );
};

export default CheckOut;
