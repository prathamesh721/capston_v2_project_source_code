import React from "react";
import { Link } from "react-router-dom";
const FourImage = (props) => {
  const { src, alt, heading, para } = props;
  return (
    <div className="fourImgComp">
      <img src={src} alt={alt} />
      <div className="fourImgBanner">
        <Link to="/ezest_assessment_2_v2/shop" aria-label={`Navigate to ${heading}`}><h3>{heading}</h3></Link>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default FourImage;
