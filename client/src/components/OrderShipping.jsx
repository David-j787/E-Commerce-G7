import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

export function OrderShipping ({setShipping}){

    const { user } = useSelector(state => state)

    useEffect(()=>{
        setField({
            email: user.email,
            city: user.city,
            address: user.address,
            zip_code: user.zip_code,
        })
    }, [user])
    
    const [field, setField] = useState({})

    const handleChange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setShipping(field)
    }

    return (
        <div className="order_shipping">
            <h4 className="order_shipping__title">Confirm Shipping Address & Email Notification</h4>
            <form onSubmit={handleSubmit} className="order_shipping__form">
                <div>
                    <label>E-mail: </label>
                    <input name='email' value={field.email} onChange={handleChange}/>
                </div>
                <div>
                    <label>City: </label>
                    <input name='city' value={field.city} onChange={handleChange}/>
                </div>
                <div>
                    <label>Address: </label>
                    <input name='address' value={field.address} onChange={handleChange}/>
                </div>
                <div>
                    <label>Zip Code: </label>
                    <input name='zip_code' value={field.zip_code} onChange={handleChange}/>
                </div>
                <button type="submit">Confirm data</button>
            </form>
        </div>
    )
}

export default OrderShipping;