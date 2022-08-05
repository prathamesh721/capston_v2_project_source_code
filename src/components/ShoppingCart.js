import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decreaseCart,
  getTotals,
  increaseCart,
} from "../redux/cartSlice";
import arrowLeft from "../Assets/Icons/arrow-left-circle.svg";
import PP_BTN from "../Assets/PP_BTN/PP_BTN.png";
import lock from "../Assets/Icons/lock.svg";
import chevrondown from "../Assets/Icons/chevron-down.svg";
import edit2 from "../Assets/Icons/edit-2.svg";
import trash2 from "../Assets/Icons/trash-2.svg";
import heart from "../Assets/Icons/heart.svg";

function ShoppingCart() {
  const shoppingbagitem = useSelector((state) => state.handlecartSlice.items);

  const cart = useSelector((state) => state.handlecartSlice.cartTotalAmount);

  //Remove product logic

  const dispatch = useDispatch();

  const handleRemoveFromCart = (val) => {
    dispatch(removeFromCart(val));
  };

  //cart totalsum function

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  console.log(cart);
  // Decrease product logic

  const handleDecreaseCart = (val) => {
    dispatch(decreaseCart(val));
  };

  //Increase products logic

  const handleIncreaseCart = (val) => {
    dispatch(increaseCart(val));
  };

  return (
    <section className="shoppingCart customContainer">
      <div className="aem-Grid aem-Grid--12 shop-head">
        <h1>Your Shopping Bag</h1>
        <div className="bottom-line"></div>
      </div>
      {shoppingbagitem.length === 0 ? (
        <div className="cart_empty">
          <p>Sorry! Your cart is empty</p>
          <Link to="/">
            <div className="start_shopping">
              <img src={arrowLeft} />
              <span>Start Shopping</span>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div className="aem-Grid aem-Grid--12 shoppingBagWrapper container">
            {/* ==============8 column inner grid starts==========*/}
            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 leftSideCart">
              {shoppingbagitem.map((val, index) => {
                return (
                  <React.Fragment>
                    <div className="aem-Grid aem-Grid--12 productCartAllItemsDiv" key={index}>
                      <div className="shopping-cart aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <img
                          src={val.image}
                          className="prodImgCart"
                          alt={val.title}
                        />
                      </div>

                      <div className="cart-details aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 productCartDesc">
                        <h1 className="cartProductTitle">{val.title}</h1>
                        <p>Size : Medium</p>
                        <p>Color : Storm</p>
                        <p>
                          $
                          {Number.parseFloat(
                            val.price * val.cartQuantity
                          ).toFixed(2)}
                        </p>
                      </div>

                      <div className="sharingOuter aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 text_center">
                        <div className="py-1 cartBtn">
                          <button onClick={() => handleDecreaseCart(val)}>
                            -
                          </button>
                          <div className="quantityDivCart">
                            {val.cartQuantity}
                          </div>
                          <button onClick={() => handleIncreaseCart(val)}>
                            +
                          </button>
                        </div>

                        <div className="sharingOption">
                          <div className="sharingInner">
                            <img src={edit2} alt="edit icon" />
                            <span> Edit item</span>
                          </div>
                          <button
                            className="sharingInner"
                            onClick={() => handleRemoveFromCart(val)}
                          >
                            <img src={trash2} alt="sharing icon" />
                            <span> Remove</span>
                          </button>
                          <div className="sharingInner">
                            <img src={heart} alt="heart icon" />
                            <span> Save for later</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* ==============8 column inner grid ends==========*/}

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 pricingSummary">
              <div className="cartSummary">
                <div>
                  <h3>Pricing Summary</h3>
                  <ul>
                    <li>Subtotal</li>
                    <li>Coupon</li>
                    <li>Gift Card</li>
                    <li>Estimated tax</li>
                    <li>Estimated shipping</li>
                    <h3>Estimated Total</h3>
                  </ul>
                </div>
                <div>
                  <h3 className="blankHeader">""</h3>
                  <ul>
                    <li></li>
                    <li>$ {Number.parseFloat(cart).toFixed(2)}</li>
                    <li>$ 0</li>
                    <li>$ 0</li>
                    <li>$ 0</li>
                    <li>FREE</li>
                    <h3>$ {Number.parseFloat(cart).toFixed(2)}</h3>
                  </ul>
                </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 check">
                <Link to="/ezest_assessment_2_v2/cart/checkout">
                  <button className="checkOutBtn cartBtns">
                    <img src={lock} alt="lock icon" />
                    CHECKOUT
                  </button>
                </Link>
              </div>
              <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4">
                <img
                  src={PP_BTN}
                  alt="payment gateway"
                  className="cartBtns payPal"
                />
              </div>
            </div>
          </div>

          {/*========================= Bottom Section =============== */}

          <div className="aem-Grid aem-Grid--12 container">
            <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--8 accordianDiv">
              <button class="accordion accoBorder1">
                <p> Estimate your Shipping </p>
                <span>
                  shipping to 91001{" "}
                  <img src={chevrondown} alt="dropdown icon" />{" "}
                </span>
              </button>

              <button class="accordion accoBorder1">
                <p> Enter a Coupon Code</p>
                <span>
                  20%discount applied{" "}
                  <img src={chevrondown} alt="dropdown icon" />
                </span>
              </button>

              <button class="accordion">
                <p>Apply Gift Card </p>
                <img src={chevrondown} alt="dropdown icon" />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ShoppingCart;
