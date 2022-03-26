import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import Payments from "./Payments";


export function OrderCheckout(){
    const { cart, user } = useSelector(state => state);
    const [url, setUrl] = useState('');

    const [order, setOrder] = useState({
        total: null,
        products: [],
        userId: null
    })

    useEffect(()=>{
        setOrder({
            total: setTotal(),
            products: setProducts(),
            userId: user?.id
        })
    }, [cart, user]) //eslint-disable-line

    console.log(order)

    const setTotal = _ => {
        const subtotal = cart?.map(el => el.amount * el.price)
        const total = subtotal?.reduce((acumulator, current) => acumulator + current);
        return total;
    }

    const setProducts = _ => {
        const productData = cart?.map(prod => {
            return {
                id: prod.id, 
                amount: prod.amount
            }
        })
        return productData;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const products = cart?.map(product => ({
            name: product.name,
            price: product.price,
            amount: product.amount
        }));
        await axios.post("http://localhost:3001/order", order);
        const response = await axios.post("http://localhost:3001/createPayment", {products, orderId: });
        if(response.status === 200) setUrl(response.data.sandbox_init_point);
        alert('Thanks for your order!');
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
            <span>{setTotal()} USD</span>
            <button onClick={(e)=>handleSubmit(e)}>CONFIRM ORDER</button>
            <Payments url={url}/>
        </div>
    )
}

export default OrderCheckout;