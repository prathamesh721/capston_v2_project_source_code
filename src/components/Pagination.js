import React, { useEffect, useState } from "react";
import cleft from "../Assets/Icons/arrow-right-circle.svg";
import cright from "../Assets/Icons/arrow-left-circle.svg";

const Pagination = ({ showperpage, onPaginationChange, total }) => {
  const [counter, steCounter] = useState(1);

  useEffect(() => {
    const value = showperpage * counter;

    onPaginationChange(value - showperpage, value);
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        steCounter(1);
      } else {
        steCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showperpage) === counter) {
        steCounter(counter);
      } else {
        steCounter(counter + 1);
      }
    }
  };

  return (
    <div className="page">
      <ul className="paginationWrapper">
        <li>
          <button
            aria-label="Navigate to previous page"
            onClick={() => onButtonClick("prev")}
          >
            <img src={cright} alt="Previous page" />{" "}
          </button>
        </li>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <button
            aria-label="Navigate to next page"
            onClick={() => onButtonClick("next")}
          >
            <img src={cleft} alt="Next page" />{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
