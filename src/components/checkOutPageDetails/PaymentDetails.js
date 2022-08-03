import React from 'react'
import edit2 from '../../Assets/IconCopy/edit-2.svg'

const PaymentDetails = () => {
  const getPaymentInfo = localStorage.getItem("paymentInfo");
  const localPaymentInfo = JSON.parse(getPaymentInfo)
  return (
    <React.Fragment>
      <div className='contactInfoDetailsDiv'>
        <div className='aem-Grid aem-Grid--12 shippingInfoTitle'><strong ><p>Payment Information</p></strong></div>


        <div className='aem-Grid aem-Grid--12'>
          <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
            <p className='detailsPara'>{localPaymentInfo.paymentOption}</p>
            {localPaymentInfo.paymentOption === 'Credit Card' ? <p className='detailsPara'>Visa ending in 4567</p> : ''}
            
          </div>
          <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>

          </div>
          <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
            <div className='edit2IconDiv'>
              <img className='edit2Icon' src={edit2} alt='edit icon' />
              <span className='edit2IconText'>Edit</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaymentDetails