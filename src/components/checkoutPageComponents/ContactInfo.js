import React, { useState } from "react";

const ContactInfo = ({ setDisplayComp }) => {
  // We will store form data inside the state
  const [state, setState] = useState({
    email: "",
    phone: "",
    country: "",
    firsName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  // This function will store the state data inside the local storage
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("shippingInfo", JSON.stringify(state));
    setDisplayComp({ contactInfo: false, ShippingMethod: true });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <strong>Contact Information</strong>
        <p>We’ll use these details to keep you informed on your delivery.</p>

        <div className="checkoutFlex">
          <div>
            <label>Email</label>
            <input
              required
              className="emailInput"
              type="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              required
              className="phoneInput"
              type="number"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
            />
          </div>
        </div>
        <strong>
          <p>1. Shipping Information</p>
        </strong>
        <div>
          <label>Country</label>
          <input
            required
            type="text"
            value={state.country}
            onChange={(e) => setState({ ...state, country: e.target.value })}
          />
        </div>

        <div className="checkoutFlex">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              required
              type="text"
              name="firstname"
              value={state.firsName}
              onChange={(e) => setState({ ...state, firsName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              required
              type="text"
              name="lastname"
              value={state.lastName}
              onChange={(e) => setState({ ...state, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="checkoutFlex">
          <div>
            <label htmlFor="address1">Street Address</label>
            <input
              required
              type="text"
              name="address1"
              value={state.address1}
              onChange={(e) => setState({ ...state, address1: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="address2">Street Address 2</label>
            <input
              name="address2"
              type="text"
              value={state.address2}
              onChange={(e) => setState({ ...state, address2: e.target.value })}
            />
          </div>
        </div>

        <div className="checkoutFlex">
          <div>
            <label htmlFor="city">City</label>
            <input
              required
              type="text"
              name="city"
              value={state.city}
              onChange={(e) => setState({ ...state, city: e.target.value })}
            />
          </div>
          <div id="stateNzip">
            <div className="firstInput">
              <label htmlFor="Inputstate">State</label>
              <input
                required
                type="text"
                name="Inputstate"
                id="stateInput"
                value={state.state}
                onChange={(e) => setState({ ...state, state: e.target.value })}
              />
            </div>
            <div className="secondInput">
              <label htmlFor="zipCode">ZIP</label>
              <input
                required
                name="zipCode"
                type="number"
                id="zipInput"
                value={state.zip}
                onChange={(e) => setState({ ...state, zip: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="shippingMethodClassBtn">
          <button
            aria-label="go to shipping method"
            className="shippingMethodBtn"
          >
            <span className="mobileHide">Continue to Shipping method</span>
            <span className="desktopHide">CONTINUE</span>
          </button>
        </div>
      </form>
      <hr></hr>
    </React.Fragment>
  );
};

export default ContactInfo;
