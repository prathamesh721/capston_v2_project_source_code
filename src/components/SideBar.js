import React, { useState, useEffect } from "react";
import crosscircle from "../Assets/Icons/x-circle.svg";

function Sidebar({ showsidebar, sidebarTogglecopy, filterProduct }) {
  const sidebarToggle = () => {
    sidebarTogglecopy(!showsidebar);
  };

  const [isSelected, setisSelected] = useState(false);

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
          {data.map((category) => {
            return (
              <React.Fragment>
                <div className="py05">
                  <input
                    type="checkbox"
                    aria-label="checkbox"
                    onClick={() => {
                      setisSelected(!isSelected);
                      filterProduct({ category });
                    }}
                  />

                  <label>&nbsp;{category}</label>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="borderBottom"></div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
