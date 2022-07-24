import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProdToCart , increaseCart, decreaseCart} from "../redux/cartSlice";
import LoadingSpinner from "./LoadingSpinner";

import share2 from "../Assets/Icons/share-2.svg";
import heart from "../Assets/Icons/heart.svg";
import minimize2 from "../Assets/Icons/minimize-2.svg";
import feather from "../Assets/Icons/feather.svg";
import maximize2 from "../Assets/Icons/maximize-2.svg";
import refresh from "../Assets/Icons/refresh-ccw.svg";

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
  return (
    <div className="aem-Grid aem-Grid--12">
      {selectedProduct.title ? (
        <div className="aem-Grid aem-Grid--12 prodDetailsMain">
          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsAlign">
            <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>

            {/* Group of 5 images */}

            <div className="imgCarousal">
              <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>
              <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>
              <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>
              <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>
              <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title}/>
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 prodDetailsText">
            <p className="content">Clothing / Women’s / Outerwear</p>
            <h1>{selectedProduct.title}</h1>
            <h2>
              <a className="ui teal tag label">${selectedProduct.price}</a>
            </h2>
            <h3>{selectedProduct.category}</h3>
            <p className="desc py-1">{selectedProduct.description}</p>
            <div className="py-1">
              {/* color options */}
              <label>Color</label>
              <div className="colorSwatches">
                <div className="blue_box"></div>
                <div className="pink_box"></div>
                <div className="black_box"></div>
                <div className="gray_box"></div>
              </div>
            </div>
            <div>
              {/* Size options */}
              <label>Size</label>
              <div className="outerSizeBox">
                <div className="gray_outline_box">XS</div>
                <div className="gray_outline_box">S</div>
                <div className="gray_outline_box">M</div>
                <div className="gray_outline_box">L</div>
                <div className="gray_outline_box">XL</div>
              </div>
            </div>
            <div>
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
                <img src={heart} alt='heart icon'/>
                <img src={share2} alt='sharing icon'/>
              </div>
            </div>
          </div>
          <div className="aem-Grid aem-Grid--12 px-1">
            <h1>{selectedProduct.title}</h1>
          </div>
          <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 ">
              <label className="descLabel">Description</label>
              <p className="desc2">{selectedProduct.description}</p>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
              <label>Details</label>
              <div className="detailsWrapper ">
                <div className="firstColumn">
                  <div className="detailsInner">
                    <img src={minimize2} alt='minimize icon'/>
                    <p>Sweat-wicking</p>
                  </div>
                  <div className="detailsInner">
                    <img src={feather} alt='feather icon'/>
                    <p>Lightweight fabric</p>
                  </div>
                </div>
                <div className="secondColumn mx-1">
                  <div className="detailsInner">
                    <img src={maximize2} alt='maximize icon'/>
                    <p>Breathable</p>
                  </div>

                  <div className="detailsInner">
                    <img src={refresh} alt='refresh icon'/>
                    <p>69% nylon, 31% lycra</p>
                  </div>
                </div>
              </div>
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
