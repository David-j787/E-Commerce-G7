import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { productAmountRest, productAmountSum, productRemove } from "../redux/actions/cartAction"

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    const handleRest = (productId) => {
        const cartProduct = cart.filter(product => product.id === productId)
        if (cartProduct[0].amount <= 1) return
        dispatch(productAmountRest(productId))
    }
    const handleSum = (productId) => {
        const cartProduct = cart.filter(product => product.id === productId)
        if (cartProduct[0].stock <= cartProduct[0].amount) return
        dispatch(productAmountSum(productId))
    }
    const handleRemove = (productId) => {
        dispatch(productRemove(productId))
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
                                <img src={product.images} alt={`${product.name}`} />
                                <h3>{product.name}</h3>
                                <div>
                                    <div>
                                        <button onClick={() => handleRest(product.id)} >-</button>
                                        <p>{product.amount}</p>
                                        <button onClick={() => handleSum(product.id)}>+</button>
                                    </div>
                                    <p>{`$${product.amount * product.price}`}</p>
                                </div>
                                <button onClick={() => handleRemove(product.id)}>Quitar</button>
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
