import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductReview = () => {
  const cartTotalQuantity = useSelector(state => state.handlecartSlice.cartTotalQuantity)
  const shoppingbagitem = useSelector((state) => state.handlecartSlice.items);
  return (
    <React.Fragment>
      <div className='contactInfoDetailsDiv'>
        <p className='aem-Grid aem-Grid--12 shippingInfoTitle'>{cartTotalQuantity} items in your order</p>
        <div className='aem-Grid aem-Grid--12'>
          {shoppingbagitem.map(item => {
            return (
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 chekoutProdDiv'>
                <img src={item.image} className='chekoutProdImg' />
                <div>
                  <p className='prodReviewTitle'>{item.title}</p>
                  <p>Size: Medium</p>
                  <p>Color: Storm</p>
                  <p>Quantity: {item.cartQuantity}</p>
                </div>
              </div>
            )
          })}


          {/* <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
          <p>Signature Sports Bra</p>
        </div> */}
        </div>

      </div>
      <div className='aem-Grid aem-Grid--12'>
        <div className='chekoutProdBtnDiv'>
          <Link to='/ezest_assessment_2_v2/order'><button className='chekoutProdBtn'>Place Order</button></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductReview