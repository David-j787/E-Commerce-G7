import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Payments from "./Payments";
import { useHistory } from "react-router-dom";
import useUser from "./Login/hooks/useUser";
import swal from 'sweetalert';
import { clearCart } from "../redux/actions";
import OrderShipping from "./OrderShipping";


export function OrderCheckout(){
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLogged } = useUser();
    const { cart, user } = useSelector(state => state);
    const [url, setUrl] = useState('');
    let orderId;

    const [order, setOrder] = useState({
        total: null,
        products: null,
        userId: null
    })

    const [notification, setNotification] = useState({});

    const setShipping = (data) => {
        setNotification(data);
    }

    useEffect(() => {
        if(!isLogged){
            swal({
                title: 'You must be logged to proceed Checkout',
                text: 'Please log in to finish your purchase',
                icon: 'error',
                buttons: ['Cancel', 'Ok']
            }).then(proceed => {
                if(proceed) history.push('/login');
                else history.push('/');
            })
        }
    },[])

    useEffect(()=>{
        setOrder({
            total: setTotal(),
            products: setProducts(),
            userId: user?.id
        })
    }, [cart, user]) //eslint-disable-line

    const setTotal = _ => {
        if(cart?.length){
            const subtotal = cart?.map(el => el.amount * el.price)
            const total = subtotal?.reduce((acumulator, current) => acumulator + current);
            return total;
        }
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
        // PARA LA ORDEN DE PAGO (NO BORRAR)
        const products = cart?.map(product => ({
            name: product.name,
            price: product.price,
            amount: product.amount
        }));

        try {
            const response = await axios.post("http://localhost:3001/order", {...order, ...notification});
            if(response.status === 200) {
                orderId = response.data.id;
                swal({
                    title: 'Your order has been confirmed',
                    text: 'Thanks for your purchase',
                    icon: 'success',
                    timer: 3000,
                    button: null
                })
            
                // PARA LA ORDEN DE PAGO(NO BORRAR)
                const res = await axios.post("http://localhost:3001/createPayment", {products, orderId});
                if(res.status === 200) setUrl(res.data.response.sandbox_init_point);

                localStorage.removeItem('cart')
                dispatch(clearCart());
            }
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 3000,
                button: null
            })
        }
    }

    return (
        <div>
            {isLogged ? 
            cart?.length ?
            <div>
            <h2>Order summary</h2>
                {cart?.map(product => 
                       <div key={product.id}>
                            <label> Product: </label>
                            <span>{product.name}</span>
                            <img src={product.images} width="200px" height="200px" alt="product ph"/>
                            <label> Amount: </label>
                            <span>{product.amount}</span>
                            <label> Price: </label>
                            <span>{product.price} USD</span>
                       </div>)}             
            <hr></hr>
            <div>TOTAL: <span>{setTotal()} USD</span>
            <OrderShipping setShipping={setShipping}/>
            <button onClick={(e)=>handleSubmit(e)} disabled={!Object.keys(notification).length}>CONFIRM ORDER</button>
            </div>
            </div> : <><div>Your cart is empty</div> 
            <Payments url={url}/></>
            : <div>Please Login to finish your Purchase</div>}
        </div>
    )
}

export default OrderCheckout;