import React, {useState} from 'react'

const ShippingMethod = ({setDisplayComp}) => {

    

    

    // const {shippingState, setShippingState} = useState({ selectedOption: ''})

    // const onValueChange = (event) => {
    //     console.log(event.currentTarget.value);
    //     setShippingState({selectedOption: event.currentTarget.value})
    // }

    const [state, setState] = useState({})
    
   const handleChange = e => {
        const { name, value } = e.target;
    
        setState({
          [name]: value
        });
        
      };

    const onSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('shippingMethod', JSON.stringify(state));
        setDisplayComp({ShippingMethod: false, shippingDetails: true, paymentInfo: true})
    }

    
    return (
        <React.Fragment>
            <div className='title' >  {/*onClick={toggleAccordion} */}
                <strong ><p>2.Shipping Method</p></strong>
            </div>
            {/* <div className={hideContent ? 'content' : 'hideContent'}> */}
            <div className='content'>
                <div className='py-25'>
                    <input type='radio' name='shippingInfoRadio' value={`Standard Shipping (4-8 business days via USPS) FREE`} onChange={handleChange}/><span>Standard Shipping <span>(4-8 business days via USPS)</span> FREE</span>
                </div>
                <div className='py-25'>
                    <input type='radio' name='shippingInfoRadio' value={`Express Delivery (2-5 business days via USPS) $17.95`} onChange={handleChange}/><span>Express Delivery <span>(2-5 business days via USPS)</span> $17.95</span>
                </div>
                <div className='py-25'>
                    <input type='radio' name='shippingInfoRadio' value={`Next Day Delivery (Next business days via FedEx) $53.61`}  onChange={handleChange}/><span>Next Day Delivery <span>(Next business days via FedEx)</span> $53.61</span>
                </div>
                <div className='shippingMethodClassBtn'>
                    <button className='shippingMethodBtn' onClick={onSubmit}><span className='mobileHide'>CONTINUE TO PAYMENT</span><span className='desktopHide'>CONTINUE</span></button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ShippingMethod