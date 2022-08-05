import React, { useState, useEffect } from "react";
import crosscircle from "../Assets/Icons/x-circle.svg";

function Sidebar({
  showsidebar,
  sidebarTogglecopy,
  filterProduct,
  categories,
}) {
  const sidebarToggle = () => {
    sidebarTogglecopy(!showsidebar);
  };

  const [data, setData] = useState([]);

  const getCategoryData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    console.log(data);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <React.Fragment>
      <aside
        className={`${
          showsidebar ? " sideBar sideBarToggle" : "sideBar sideBar-active"
        }`}
        role="complementary"
      >
        <div className="filterHead borderBottom">
          <p className="py sideHeading">Filters</p>
          <img
            src={crosscircle}
            onClick={sidebarToggle}
            className="crossHide"
            alt="cross icon"
          />
        </div>
        <p className="sideHeading">Categories</p>

        <div className="py-1">
          <React.Fragment>
            <div className="py05">
              <input
                type="checkbox"
                id="chk2-label"
                name="electronics"
                onChange={filterProduct}
                checked={categories.electronics}
              />
              <label htmlFor=""> Electronics</label>
            </div>
            <div className="py05">
              <input
                type="checkbox"
                id="chk2-label"
                name="jewelery"
                onChange={filterProduct}
                checked={categories.jewelery}
              />
              <label htmlFor=""> Jewelery</label>
            </div>
            <div className="py05">
              <input
                type="checkbox"
                id="chk2-label"
                name="men's clothing"
                onChange={filterProduct}
                checked={categories["men's clothing"]}
              />
              <label htmlFor=""> Men's Clothing</label>
            </div>
            <div className="py05">
              <input
                type="checkbox"
                id="chk2-label"
                name="women's clothing"
                onChange={filterProduct}
                checked={categories["women's clothing"]}
              />
              <label htmlFor=""> Women's Clothing</label>
            </div>
          </React.Fragment>

          {/* })} */}
        </div>

        <div className="borderBottom"></div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
