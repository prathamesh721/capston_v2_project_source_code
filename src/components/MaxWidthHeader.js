import React from "react";

const MaxWidthHeader = ({ heightFor, widthFor }) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={widthFor}
        height={heightFor}
        viewBox={`0 0 ${widthFor} ${heightFor}`}
      >
        <rect
          id="max-width_header"
          width={widthFor}
          height={heightFor}
          fill="#1363df"
        />
      </svg>
    </React.Fragment>
  );
};

export default MaxWidthHeader;
