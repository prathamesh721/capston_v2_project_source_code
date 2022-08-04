import React from "react";
import { useSelector } from "react-redux";

const ProductReview = () => {
  // Get product quantity and product data from redux
  const cartTotalQuantity = useSelector(
    (state) => state.handlecartSlice.cartTotalQuantity
  );
  const shoppingbagitem = useSelector((state) => state.handlecartSlice.items);
  return (
    <React.Fragment>
      <div className="contactInfoDetailsDiv">
        <div className="aem-Grid aem-Grid--12 shippingInfoTitle ">
          <p className="prodReviewTitleHeading">
            {cartTotalQuantity} items in your order
          </p>
        </div>
        <div className="aem-Grid aem-Grid--12">
          {/* Show products which are added to the cart */}
          {shoppingbagitem.map((item) => {
            return (
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 chekoutProdDiv">
                <img
                  src={item.image}
                  className="chekoutProdImg"
                  alt={item.title}
                />
                <div>
                  <p className="prodReviewTitle">{item.title}</p>
                  <p>Size: Medium</p>
                  <p>Color: Storm</p>
                  <p>Quantity: {item.cartQuantity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductReview;
