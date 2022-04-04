import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { productAmountRest, productAmountSum, productRemove } from "../redux/actions"
import { FormattedMessage } from 'react-intl'

const ShoppingCart = ({cartShow}) => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)
    const cartRef = useRef();

    const total = cart.length && cart.map(a => (a.amount * 100 * a.price)/100).reduce((a, b) => a + b)

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

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
      const handleClickOutside = event => {
        const { current: cart } = cartRef;
        if (cart && !cart.contains(event.target)) {
          cartShow(false);
        }
      };


    return (
        <>
            <div ref={cartRef} className='shoppingCart'>
                <div className='shoppingCart__header'><h3 className='shoppingCart__title'><FormattedMessage id="app.cart" defaultMessage="Cart"/></h3><div onClick={cartShow} className='shoppingCart__close'>X</div></div>
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
                                    <p className='amount'>{`$${(product.amount * 100 * product.price) / 100}`}</p>
                                </div>
                                <button className='delete' onClick={() => handleRemove(product.id)}>🗑️</button>
                            </div>
                        )
                    }) : <h3 className='shoppingCart__empty'><FormattedMessage id="app.empty-cart" defaultMessage="Cart is empty"/></h3>
                }
                {total ? <h3 className='shoppingCart__total'>Total: ${total}</h3> : null}
                <Link to="/checkout" onClick={cartShow} className='shoppingCart__button'><FormattedMessage id="app.checkout" defaultMessage="Checkout"/></Link>
            </div>
        </>
    )
}

export default ShoppingCart
