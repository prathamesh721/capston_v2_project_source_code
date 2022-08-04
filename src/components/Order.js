import React from "react";
import maxHeader from "../Assets/max-width_header.svg";
import insta from "../Assets/IconCopy/instagram.svg";
import faceBook from "../Assets/IconCopy/facebook.svg";
import twitter from "../Assets/IconCopy/twitter.svg";
import { useSelector } from "react-redux";

const Order = () => {
  var getShippingInfo = localStorage.getItem("shippingInfo");
  var localShippingInfo = JSON.parse(getShippingInfo);
  const { email, phone, firsName, lastName, address1, zip, city, state } =
    localShippingInfo;

  var getShippingMethod = localStorage.getItem("shippingMethod");
  var localShippingMethod = JSON.parse(getShippingMethod);
  var allDetails = localShippingMethod.shippingInfoRadio;

  const getPaymentInfo = localStorage.getItem("paymentInfo");
  const localPaymentInfo = JSON.parse(getPaymentInfo);

  const cartTotalQuantity = useSelector(
    (state) => state.handlecartSlice.cartTotalQuantity
  );
  const shoppingbagitem = useSelector((state) => state.handlecartSlice.items);
  return (
    <section className="OrderDiv">
      <div className="OrderHeading">
        <h2>Order Successful!</h2>
        <img src={maxHeader} width="4%" />
      </div>

      <div className="aem-Grid aem-Grid--12 container">
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <div className="aem-Grid aem-Grid--12">
            <h3 className="orderNumber paddingLeft1em">
              Order Number #1700834
            </h3>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
              <strong className="infoHeading">Shipping Information</strong>
              <p>{email}</p>
              <p>{phone}</p>
              <p>
                {firsName} {lastName} {address1}, {city} {zip} {state}
              </p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
              <strong className="infoHeading">Shipping Method</strong>
              <p>{allDetails}</p>

              <div>
                <strong className="infoHeading">Payment Information</strong>
                <p>
                  {localPaymentInfo.paymentOption}{" "}
                  {localPaymentInfo.paymentOption === "Credit Card"
                    ? "Visa ending in 4567"
                    : ""}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <p className="infoHeading paddingLeft1em">
              {cartTotalQuantity} items in your order
            </p>
            {shoppingbagitem.map((item) => {
              return (
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 productDesc">
                  <img src={item.image} alt="" />
                  <div>
                    <p className="orderTitle infoHeading">{item.title}</p>
                    <p>Size: Medium</p>
                    <p>Color: Storm</p>
                    <p>Quantity: {item.cartQuantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="paddingLeft1em">
            <p>
              You will also receive an email with the details and we will let
              you know when your order has shipped.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. For assistance call Support at
              1-800-867-5309, M - F, 9am - 8pm EST.
            </p>
          </div>
        </div>

        {/* =============================Image Part================================== */}
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 mobileHide">
          <div className="boxDiv">
            <p>Give us a follow to SAVE 20% on your next order.</p>
            <div className="iconDiv">
              <img src={insta} alt="" />
              <img src={faceBook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
