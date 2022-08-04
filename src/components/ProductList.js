import React from "react";
import ShowProduct from "./ShowProduct";
import LoadingSpinner from "./LoadingSpinner";

//This component fetches product related data and passes to the ShowProduct component

const ProductPage = ({
  sideBarToggleCopy,
  showSidebar,
  products,
  onfilterChange,
  isLoading,
}) => {
  //function for sidebar toggle

  const toggleSidebar = () => {
    sideBarToggleCopy(!showSidebar);
  };

  const onFilterSelect = (e) => {
    console.log("onFilterSelect", onfilterChange);

    onfilterChange(e.target.value);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="aem-Grid aem-Grid--12 productListing">
            <ShowProduct products={products} />
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ProductPage;
