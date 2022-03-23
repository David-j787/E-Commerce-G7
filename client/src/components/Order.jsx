import React from 'react';
import { useSelector } from 'react-redux'

export function Order(){

    const { order, users } = useSelector((state)=> state)
    
    return (

        <div>
            <h2>{ord.product.name}</h2>
            <h4>{order.product.price}</h4>
            <img src={order.product.images}/>
            <h4>{order.product.amount}</h4>
            <h4>{order.product.total}</h4>
            

        </div>
    )
}

export default Order;