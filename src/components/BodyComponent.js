import React, { useState, useEffect } from "react";
import ProductPage from "../components/ProductList";
import SideBar from "../components/SideBar";
import HeroBanner from "./HeroBanner";
import axios from "axios";
import slider from "../Assets/Icons/sliders.svg";
import layers from "../Assets/Icons/layers.svg";
const BodyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sidebartoggle, setsidebartoggle] = useState(true);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await axios

      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

    setProducts(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat.category);
    console.log("men's clothing", updatedList);
    setProducts(updatedList);
  };

  const [sort, setSort] = useState();

  const onfilterChange = (filter) => {
    if (filter) {
      const result = products.sort((a, b) => a.price - b.price);

      return setSort(result);
    }
  };

  const sidebarTogglefunc = () => {
    setsidebartoggle(!sidebartoggle);
  };

  return (
    <div className="bodyComponent">
      <HeroBanner />
      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <p className="firstHead">Clothing / Women’s / Outerwear</p>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <div>
            <div id="dropbox">
              <span className="productResults">{products.length} Results</span>
              <div className="produFilters">
                <div onClick={sidebarTogglefunc} className="desktopHide">
                  <img src={slider} alt="slider icon" />
                  <label>Filter Results</label>
                </div>
                <div>
                  <img src={layers} alt="layers icon" className="desktopHide" />
                  <select onChange={onfilterChange}>
                    <option>Sort Products</option>
                    <option value="category">Low to high</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <SideBar
            sidebarTogglecopy={setsidebartoggle}
            showsidebar={sidebartoggle}
            filterProduct={filterProduct}
          />
        </div>

        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
          <ProductPage
            products={products}
            onfilterChange={onfilterChange}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
