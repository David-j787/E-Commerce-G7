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
        <div>
            <div>Confirm Shipping Address & Email Notification</div>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input name='email' value={field.email} onChange={handleChange}/>
                <label>City</label>
                <input name='city' value={field.city} onChange={handleChange}/>
                <label>Address</label>
                <input name='address' value={field.address} onChange={handleChange}/>
                <label>Zip Code</label>
                <input name='zip_code' value={field.zip_code} onChange={handleChange}/>
                <input type="submit" value="Confirm data"/>
            </form>
        </div>
    )
}

export default OrderShipping;