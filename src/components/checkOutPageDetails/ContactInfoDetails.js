import React from 'react'
import edit2 from '../../Assets/IconCopy/edit-2.svg'

const ContactInfoDetails = () => {
  var getShippingInfo = localStorage.getItem('shippingInfo')
  var localShippingInfo = JSON.parse(getShippingInfo)
  const {email, phone, firsName, lastName, address1, zip, city} = localShippingInfo

  return (
    <div className='contactInfoDetailsDiv'>
    
      <strong className='shippingInfoTitle'>Shipping Information</strong>
      <div className='aem-Grid aem-Grid--12'>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
          <p className='detailsPara'>{email}</p>
          <p className='detailsPara'>{phone}</p>

        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
          <p className='detailsPara'>{firsName} {lastName}</p>
          <p className='detailsPara'>{address1} {zip}</p>
          <p className='detailsPara'>{city}</p>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 contactInfoIconWrapper'>
          <div className='edit2IconDiv'>
            <img className='edit2Icon' src={edit2} alt='edit icon' />
            <span className='edit2IconText'>Edit</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactInfoDetails