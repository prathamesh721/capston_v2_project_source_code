import React, { useState } from "react";

// All the payment related input values are stored inside the state

const PaymentInfo = ({ setDisplayComp }) => {
  const [state, setState] = useState({
    paymentOption: "",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    billingAddressCheck: false,
  });
// This function wiil store the latest input values inside state
  const handleChange = (event) => {
    setState({
      paymentOption: event.target.value,
    });

    console.log(state.paymentOption);
  };

  // This function stores collected values to local storage
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentInfo", JSON.stringify(state));
    setDisplayComp({
      paymentDetails: true,
      paymentInfo: false,
      shippingDetails: true,
      productReview: true,
    });
  };
  return (
    <React.Fragment>
      <form>
        <strong>
          <p>3.Payment Information</p>
        </strong>
        <div className="content">
          <div>
            <input
              type="radio"
              name="paymentOption"
              value="Credit Card"
              onChange={handleChange}
              required
            />
            <span>Credit Card</span>
          </div>
          <div>
            <div>
              <label htmlFor="nameOnCard">Name on Card</label>
              <input
                name="nameOnCard"
                type="text"
                value={state.nameOnCard}
                onChange={(e) => {
                  setState({ ...state, nameOnCard: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="cardNumber">Credit Card Number</label>
              <input
                name="cardNumber"
                type="text"
                value={state.cardNumber}
                onChange={(e) =>
                  setState({ ...state, cardNumber: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiration Date</label>
              <input
                name="expiryDate"
                type="text"
                value={state.expiryDate}
                onChange={(e) =>
                  setState({ ...state, expiryDate: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input name="cvv" type="text" />
            </div>
          </div>

          <div className="py-25">
            <input
              htmlFor="shippingAddress"
              type="checkbox"
              value={state.billingAddressCheck}
              onChange={(e) =>
                setState({ ...state, billingAddressCheck: true })
              }
            />
            <span name="shippingAddress">
              Billing address same as shipping address
            </span>
          </div>
          <div className="py-25">
            <input
              type="radio"
              name="paymentOption"
              value="PayPal"
              onChange={handleChange}
            />
            <span>PayPal</span>
          </div>
          <div className="shippingMethodClassBtn">
            <button
              aria-label="Review Order"
              className="shippingMethodBtn"
              onClick={onSubmit}
            >
              <span className="mobileHide">CONTINUE TO REVIEW ORDER</span>
              <span className="desktopHide">CONTINUE</span>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PaymentInfo;
