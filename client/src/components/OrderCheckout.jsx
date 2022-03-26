import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Payments from "./Payments";
import { useHistory } from "react-router-dom";
import useUser from "./Login/hooks/useUser";
import swal from 'sweetalert';
import { clearCart } from "../redux/actions";


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

    console.log(order)

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
            const response = await axios.post("http://localhost:3001/order", order);
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
                console.log(res);

                localStorage.removeItem('cart')
                dispatch(clearCart());
                //history.push('/');
            }
        } catch (error) {
            
        }
    }

    return (
        <div>
            {isLogged ? 
            <div>
            <h2>Order summary</h2>
            {cart?.length ?
                cart?.map(product => 
                       <div key={product.id}>
                            <label> Product: </label>
                            <span>{product.name}</span>
                            <img src={product.images} width="200px" height="200px" alt="product ph"/>
                            <label> Amount: </label>
                            <span>{product.amount}</span>
                            <label> Price: </label>
                            <span>{product.price} USD</span>
                       </div>) : <div>Your cart is empty</div>
            }
            <hr></hr>
            <div>TOTAL: <span>{setTotal()} USD</span>
            <button onClick={(e)=>handleSubmit(e)}>CONFIRM ORDER</button>
            </div>
            {/* // PARA LA ORDEN DE PAGO(NO BORRAR) */}
            <Payments url={url}/>
            </div> : <div>Please Login to finish your Purchase</div>}
        </div>
    )
}

export default OrderCheckout;