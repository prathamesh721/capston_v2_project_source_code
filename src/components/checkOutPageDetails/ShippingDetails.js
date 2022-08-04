import React from "react";
import edit2 from "../../Assets/IconCopy/edit-2.svg";

const ShippingDetails = () => {
  var getShippingMethod = localStorage.getItem("shippingMethod");
  var localShippingMethod = JSON.parse(getShippingMethod);
  var allDetails = localShippingMethod.shippingInfoRadio;

  return (
    <React.Fragment>
      <div className="aem-Grid aem-Grid--12 contactInfoDetailsDiv">
        <div className="aem-Grid aem-Grid--12 shippingInfoTitle">
          <strong>
            <p>Shipping Method</p>
          </strong>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 detailsPara">
          {allDetails}
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12"></div>
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <div className="edit2IconDiv">
            <img className="edit2Icon" src={edit2} alt="edit icon" />
            <span className="edit2IconText">Edit</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShippingDetails;
