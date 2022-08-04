import React, { useState } from "react";

const ShippingMethod = ({ setDisplayComp }) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      [name]: value,
    });
  };
// store the selected shipping method inside the local storage
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("shippingMethod", JSON.stringify(state));
    setDisplayComp({
      ShippingMethod: false,
      shippingDetails: true,
      paymentInfo: true,
    });
  };

  return (
    <React.Fragment>
      <form>
        <div className="title">
          <strong>
            <p>2.Shipping Method</p>
          </strong>
        </div>

        <div className="content">
          <div className="py-25">
            <input
              required
              type="radio"
              name="shippingInfoRadio"
              value={`Standard Shipping (4-8 business days via USPS) FREE`}
              onChange={handleChange}
            />
            <span>
              Standard Shipping <span>(4-8 business days via USPS)</span> FREE
            </span>
          </div>
          <div className="py-25">
            <input
              required
              type="radio"
              name="shippingInfoRadio"
              value={`Express Delivery (2-5 business days via USPS) $17.95`}
              onChange={handleChange}
            />
            <span>
              Express Delivery <span>(2-5 business days via USPS)</span> $17.95
            </span>
          </div>
          <div className="py-25">
            <input
              required
              type="radio"
              name="shippingInfoRadio"
              value={`Next Day Delivery (Next business days via FedEx) $53.61`}
              onChange={handleChange}
            />
            <span>
              Next Day Delivery <span>(Next business days via FedEx)</span>{" "}
              $53.61
            </span>
          </div>
          <div className="shippingMethodClassBtn">
            <button
              aria-label="go to payment option"
              className="shippingMethodBtn"
              onClick={onSubmit}
            >
              <span className="mobileHide">CONTINUE TO PAYMENT</span>
              <span className="desktopHide">CONTINUE</span>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ShippingMethod;
