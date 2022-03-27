import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderDetail } from "../redux/actions";

export default function OrderDetail(props) {
    const dispatch = useDispatch();
    const orderId = props.id || props.match.params.id ;
    const orderDetail = useSelector((state) => state.orderDetail);

    useEffect(() => {
        dispatch(getOrderDetail(orderId));
    }, []); //eslint-disable-line

    return (
        <div className='container'>
                <div className='order'>
                    <div><button onClick={e => props.showComponent('orders')}>Back</button></div>
                    <div className='order__id'>
                        <span>Order ID: </span>
                        <span>{orderDetail?.id}</span>
                    </div>
                    <div className='order__date'>
                        <span>Date: </span>
                        <span>{orderDetail?.date}</span>
                    </div>
                    <div className='order__status'>
                        <span>Order status: </span>
                        <span>{orderDetail?.status}</span>
                    </div>
                    <ul>
                    <li>Total: {orderDetail?.total}</li>
                    <li>Notification-Email: {orderDetail?.notification_email}</li>
                    <li>Adress: {orderDetail?.shipping_address}</li>
                    <li>City: {orderDetail?.shipping_city}</li>
                    <li>Zip-Code: {orderDetail?.shipping_zip_code}</li>
                    </ul>

                    <div className='order__products'>
                        <span>Items:</span>
                        <ul>
                            {orderDetail.products?.map(product=>(
                                <li key={product.id}>
                                    <span>{product.product_order.amount}</span> - <Link to={`/product/detail/${product.id}`}><span>{product.name}</span></Link>                  
                                </li>
                            ))}
                        </ul>
                        <br/>
                   
                    </div>
                </div>
        </div>
    );
}





