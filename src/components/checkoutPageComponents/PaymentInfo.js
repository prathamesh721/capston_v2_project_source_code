import React, { useState, useEffect } from 'react'

const PaymentInfo = ({ setDisplayComp }) => {
    const [state, setState] = useState({
        paymentOption: 'Credit Card',
        nameOnCard: '',
        cardNumber: '',
        expiryDate: '',
        billingAddressCheck: false
    })

    const handleChange = event => {
        // const { name, value } = event.target;

        setState({
            paymentOption: event.target.value

        });
        console.log(state.paymentOption)
    };


    const onSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('paymentInfo', JSON.stringify(state));
        setDisplayComp({ paymentDetails: true, paymentInfo: false, shippingDetails: true, productReview: true })
    }
    return (
        <React.Fragment>
            <strong ><p>3.Payment Information</p></strong> {/*onClick={toggleAccordion}*/}
            <div className='content'> {/* className={hideContent ? 'content' : 'hideContent'}*/}
                <div>
                    <input type='radio' name='paymentOption' value='Credit Card' onChange={handleChange} /><span>Credit Card</span>
                </div>
                <div>
                    <label>Name on Card</label>
                    <input type='text' value={state.nameOnCard} onChange={ e => {setState({...state, nameOnCard: e.target.value})}}/>
                </div>
                <div>
                    <label>Credit Card Number</label>
                    <input type='text' value={state.cardNumber} onChange={e => setState({...state, cardNumber:e.target.value })}/>
                </div>
                <div>
                    <label>Expiration Date</label>
                    <input type='text' value={state.expiryDate} onChange={e => setState({...state, expiryDate: e.target.value} )}/>
                </div>
                <div>
                    <label>CVV</label>
                    <input type='text' />
                </div>
                <div className='py-25'>
                    <input type='checkbox' value={state.billingAddressCheck} onChange={e => setState({...state, billingAddressCheck: true })}/>
                    <span>Billing address same as shipping address</span>
                </div>
                <div className='py-25'>
                    <input type='radio' name='paymentOption' value='PayPal' onChange={handleChange} /><span>PayPal</span>
                </div>
                <div className='shippingMethodClassBtn'>
                    <button className='shippingMethodBtn' onClick={onSubmit}><span className='mobileHide'>CONTINUE TO REVIEW ORDER</span><span className='desktopHide'>CONTINUE</span></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PaymentInfo