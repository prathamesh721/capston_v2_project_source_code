import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProdToCart } from "../redux/cartSlice";
import LoadingSpinner from "./LoadingSpinner";
import SimpleImageSlider from "react-simple-image-slider";
import share2 from "../Assets/Icons/share-2.svg";
import heart from "../Assets/Icons/heart.svg";
import MaxWidthHeader from "./MaxWidthHeader";

//This component shows individual product

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addProdToCart({ ...product, cartQuantity: 1 }));
  };
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("data   -====  " + JSON.stringify(json));
        setSelectedProduct(json);
      });
  }, []);

  const images = [
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
  ];

  //Read More text logic
  const text = selectedProduct.description;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="aem-Grid aem-Grid--12 container">
      {selectedProduct.title ? (
        <div className="aem-Grid aem-Grid--12 prodDetailsMain">
          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsAlign">
            {/* <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/> */}
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                {/* Group of 5 images */}

                <div className="imgCarousal">
                  <img
                    className="ProdImg"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <img
                    className="ProdImg"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <img
                    className="ProdImg"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <img
                    className="ProdImg"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <img
                    className="ProdImg"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--11 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 ProdImgDivParent">
                <div className="ProdImgDiv">
                  <SimpleImageSlider
                    width={290}
                    height={320}
                    images={images}
                    showBullets={true}
                    showNavs={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsText">
            <p className="content">Clothing / Women’s / Outerwear</p>
            <h1>{selectedProduct.title}</h1>
            <h2>
              <a className="prodDetailsPrice">${selectedProduct.price}</a>
            </h2>
            {/* <h3>{selectedProduct.category}</h3> */}
            {/* <p className="desc py-1">{selectedProduct.description}</p> */}
            <div className="textWrapper">
              <p className="text">
                {isReadMore ? text.slice(0, 90) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? " Read more" : " Read less"}
                </span>
              </p>
            </div>

            <div className="quantityDivParent">
              <label>Quantity</label>
              <div className="quantityWrapper py-1">
                <button>-</button>
                <div className="quantityDiv">1</div>
                <button>+</button>
              </div>
            </div>

            <div className="AddToCartWrapper">
              <button
                className="AddToCart"
                onClick={() => addProduct(selectedProduct)}
              >
                ADD TO CART
              </button>
              <div className="AddToCartWrapperInner">
                <img src={heart} alt="heart icon" />
                <img src={share2} alt="sharing icon" />
              </div>
            </div>
          </div>

          <div className="aem-Grid aem-Grid--12 descDiv">
            <h1 className="descTitle">{selectedProduct.title}</h1>

            <label className="descLabel">Description</label>
            <p className="desc2">{selectedProduct.description}</p>

            <div className="py-1 maxHeaderInProdDetails">
              {/* <img src={maxHeader} alt='horizontal line for styling' className="maxHeaderInProdDetails" /> */}
              <MaxWidthHeader heightFor={"8"} widthFor={"102"} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
