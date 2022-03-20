import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { productAmountRest, productAmountSum, productRemove } from "../redux/actions/cartAction"

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    const handleRest = (productAmount) => {
        dispatch(productAmountRest(productAmount))
    }
    const handleSum = (productAmount) => {
        dispatch(productAmountSum(productAmount))
    }
    const handleRemove = (product) => {
        dispatch(productRemove(product))
    }

    const borrarEsto = {
        position: "absolute",
        width: "400px",
        height: "200px",
        overflow: "auto",
        backgroundColor: "lightgray",
        borderRadius: "20px",
        padding: "10px",
        cursor: "default"
    }

    return (
        <>
            <div style={borrarEsto}>
                <h3>Cart</h3>
                {
                    cart.length ? cart.map(product => {
                        return (
                            <div key={product.name}>
                                <img src='#' alt={`${product.name}`} />
                                <h3>{product.name}</h3>
                                <div>
                                    <div>
                                        <button onClick={() => handleRest(product.name)} >-</button>
                                        <p>{product.amount}</p>
                                        <button onClick={() => handleSum(product.name)}>+</button>
                                    </div>
                                    <p>{`$${product.amount * product.price}`}</p>
                                </div>
                                <button onClick={() => handleRemove(product.name)}>Quitar</button>
                            </div>
                        )
                    }) : <h3>El carrito esta vacio</h3>
                }

                <Link to="#" >Checkout</Link>
            </div>
        </>
    )
}

export default ShoppingCart
