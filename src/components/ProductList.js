import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowProduct from "./ShowProduct";
import LoadingSpinner from "./LoadingSpinner";
import slider from "../Assets/Icons/sliders.svg";
import layers from "../Assets/Icons/layers.svg";

//This component fetches product related data and passes to the ShowProduct component

const ProductPage = ({ sideBarToggleCopy, showSidebar }) => {
  const [products, setProducts] = useState([]);

  //Loading Spinner
  const [isLoading, setIsLoading] = useState(false);

  //Data fetching

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        // console.log("Err: ", err);
      });
    setProducts(response.data);
    console.log(response.data)
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //function for sidebar toggle

  const toggleSidebar = () => {
    sideBarToggleCopy(!showSidebar);
  };

  //Sorting State and function
  const [sort, setSort] = useState()

  const onfilterChange = (filter) => {

    console.log("onfilter", sort);

    if (filter) {

      const result = products.sort((a, b) => a.price - b.price);

      console.log(products);

      return setSort(result);
    }
    
  }

  return (
    <React.Fragment>
      {isLoading ? <LoadingSpinner /> : (
        <>
        <div className="aem-Grid aem-Grid--12 produFilters">
        <div onClick={toggleSidebar} className='desktopHide'>
          <img src={slider} alt='slider icon' />
          <label>Filter Results</label>
        </div>
        <div id="dropbox" >
          <img src={layers} alt='layers icon' className='desktopHide'/>

          <select onChange={onfilterChange}>
            <option>Sort Products</option>
            <option value="category">Sort by Price</option>
            {/* <option value="Sort by list">Sort by latest</option> */}
          </select>
        </div>
      </div>

      <div className="aem-Grid aem-Grid--12 productListing">
        <ShowProduct products={products} />
      </div></>
        
      )}


      
    </React.Fragment>
  );
};

export default ProductPage;
