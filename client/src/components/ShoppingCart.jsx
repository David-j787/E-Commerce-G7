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
        if (cart.length === 1) localStorage.removeItem("cart")
        dispatch(productRemove(productId))
    }


    return (
        <>
            <div className='shoppingCart'>
                <h3 className='shoppingCart__title'>Cart</h3>
                <hr />
                {
                    cart.length ? cart.map(product => {
                        return (
                            <div key={product.name} className="shoppingCart__product">
                                <img className='image' src={product.images} alt={`${product.name}`} />
                                <h3 className='name'>{product.name}</h3>
                                <div className='price'>
                                    <div className='buttons'>
                                        <button onClick={() => handleRest(product.id)} >-</button>
                                        <p>{product.amount}</p>
                                        <button onClick={() => handleSum(product.id)}>+</button>
                                    </div>
                                    <p className='amount'>{`$${product.amount * product.price}`}</p>
                                </div>
                                <button className='delete' onClick={() => handleRemove(product.id)}>🗑️</button>
                            </div>
                        )
                    }) : <h3>El carrito esta vacio</h3>
                }

                <Link to="/checkout" className='shoppingCart__button'>Checkout</Link>
            </div>
        </>
    )
}

export default ShoppingCart
