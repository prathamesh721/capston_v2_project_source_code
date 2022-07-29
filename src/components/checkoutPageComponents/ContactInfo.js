import React, { useState } from 'react'

const ContactInfo = ({setDisplayComp}) => {
    const [state, setState] = useState({
        email: '',
        phone: '',
        country: '',
        firsName: '',
        lastName: '',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('shippingInfo', JSON.stringify(state));
        setDisplayComp({contactInfo: false, ShippingMethod: true })
    }
    

   
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <strong>Contact Information</strong>
                <p>We’ll use these details to keep you informed on your delivery.</p>

                <div className='checkoutFlex'>
                    <div>
                        <label>Email</label>
                        <input type="email"  value={state.email} onChange={e => setState({...state, email: e.target.value})} />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="number"  value={state.phone} onChange={e => setState({...state, phone: e.target.value})}/>

                    </div>
                </div>
                <strong><p>1. Shipping Information</p></strong>
                <div>
                    <label>Country</label>
                    <input type="text"  value={state.country} onChange={e => setState({...state, country: e.target.value })}/>
                </div>

                <div className='checkoutFlex'>
                    <div>
                        <label>First Name</label>
                        <input type="text"  value={state.firsName} onChange={e => setState({...state, firsName: e.target.value})}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"  value={state.lastName} onChange={ e => setState({...state, lastName: e.target.value})}/>
                    </div>

                </div>

                <div className='checkoutFlex'>
                    <div>
                        <label>Street Address</label>
                        <input type="text"  value={state.address1} onChange={ e => setState({...state, address1: e.target.value})}/>
                    </div>
                    <div>
                        <label>Street Address 2</label>
                        <input type="text" value={state.address2} onChange={ e => setState({...state, address2: e.target.value})}/>

                    </div>
                </div>

                <div className='checkoutFlex'>
                    <div>
                        <label>City</label>
                        <input type="text"  value={state.city} onChange={ e => setState({...state, city: e.target.value})}/>
                    </div>
                    <div className='' id='stateNzip'>
                        <div className='firstInput'>
                            <label>State</label>
                            <input type='text' id='stateInput'  value={state.state} onChange={ e => setState({...state, state: e.target.value})}/>
                        </div>
                        <div className='secondInput'>
                            <label>ZIP</label>
                            <input type='number' id='zipInput'  value={state.zip} onChange={ e => setState({...state, zip: e.target.value})} />
                        </div>
                    </div>

                </div>

                <div className='shippingMethodClassBtn'>
                    <button className='shippingMethodBtn' ><span className='mobileHide'>Continue to Shipping method</span><span className='desktopHide'>CONTINUE</span></button>
                </div>
            </form>
            <hr></hr>
        </React.Fragment>
    )
}

export default ContactInfo;