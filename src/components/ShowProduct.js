import React, { useState } from "react";
import { Link } from "react-router-dom";
import heart from "../Assets/Icons/heart.svg";
import Pagination from "./Pagination";

// Product component accepts products from Product List component

const ShowProduct = ({ products }) => {
  const [showperpage] = useState(6);

  const [pagination, stePegination] = useState({
    start: 0,

    end: showperpage,
  });

  const onPaginationChange = (start, end) => {
    stePegination({ start: start, end: end });
  };

  const renderList = products
    .slice(pagination.start, pagination.end)
    .map((product) => {
      const { id, title, image, price } = product;
      return (
        <>
          <div
            className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--4 productHover"
            key={id}
          >
            <Link to={`/ezest_assessment_2_v2/product/${id}`}>
              <div className="ui a cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="heartImage">
                      <img src={heart} alt="heart icon" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="page-funtion">
            <Pagination
              showperpage={showperpage}
              onPaginationChange={onPaginationChange}
            />
          </div>
        </>
      );
    });
  return <>{renderList}</>;
};

export default ShowProduct;
