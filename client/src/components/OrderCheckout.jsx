import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";


export function OrderCheckout(){

    const history = useHistory()
    const { cart, user } = useSelector(state => state)

    const [order, setOrder] = useState({
        total: null,
        products: [],
        userId: null
    })

    useEffect(()=>{
        setOrder({
            total: setTotal(),
            products: setProducts(),
            userId: user.id
        })
    }, [cart, user]) //eslint-disable-line

    console.log(order)

    const setTotal = () => {
        let subtotal = [];
        let total = 0
        cart?.map(el => subtotal.push(el.amount * el.price)) 
        subtotal.map(p => total += p )
        return total
    }

    const setProducts = () => {
        let productData = [];
        productData.push(cart?.map(prod => {
            return {
                id: prod.id, 
                amount: prod.amount
            }
        })
        )
        return productData;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/order", order)
        alert('Thanks for your order!')
        history.push("/")
    }

    console.log(cart)

    return (
        <div>
            <h2>Order summary</h2>
            {
                cart?.map(product => {
                   return (
                       <div key={product.id}>
                            <label> Product: </label>
                            <span>{product.name}</span>
                            <img src={product.images} width="200px" height="200px" alt="product ph"/>
                            <label> Amount: </label>
                            <span>{product.amount}</span>
                            <label> Price: </label>
                            <span>{product.price} USD</span>
                       </div>
                   )
                })
            }
            <hr></hr>
            <label> TOTAL: </label>
            <span>{setTotal()}</span>
            <button onClick={(e)=>handleSubmit(e)}>CONFIRM ORDER</button>
        </div>
    )
}

export default OrderCheckout;