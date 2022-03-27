import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderDetail } from "../redux/actions";
import { useEffect } from "react";

export default function OrderDetail(props) {
    const dispatch = useDispatch();
    const orderId = props.match.params.id;
    const { orderDetail } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getOrderDetail(orderId));
    }, []); //eslint-disable-line

    console.log(orderDetail);
    return (
        <div className='container'>
                {/* <div className='order'>
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
                                    <span>{product.product_order.amount}</span> - <span>{product.name}</span>                  
                                </li>
                            ))}
                        </ul>
                        <br/>
                    </div>
                </div> */}

                <div className="orderDetails shadow">
                     <div className="orderDetails__item">
                        <div className="item__details">
                        <div className="item__title">
                            Order ID: {orderDetail?.id}
                        </div>
                        <div className="item__description">
                            <ul>
                                <li>
                                    <span>Date: </span>
                                    <span>{orderDetail?.date}</span>
                                </li>
                                <li>
                                    <span>Order status: </span>
                                    <span>{orderDetail?.status}</span>
                                </li>
                                <li>
                                    <span>Notification-Email: </span>
                                    <span>{orderDetail?.notification_email}</span>
                                </li>
                                <li>
                                    <span>Adress: </span>
                                    <span>{orderDetail?.shipping_address}</span>
                                </li>
                                <li>
                                    <span>City: </span>
                                    <span>{orderDetail?.shipping_city}</span>
                                </li>
                                <li>
                                    <span>Zip-Code: </span>
                                    <span>{orderDetail?.shipping_zip_code}</span>
                                </li>
                                <li>
                                    <div className='order__products'>
                                        <span>Items:</span>
                                        <ul>
                                            {orderDetail.products?.map(product=>(
                                                <li key={product.id}>
                                                    <span>{product.product_order.amount}</span> - <span>{product.name}</span>                  
                                                </li>
                                            ))}
                                        </ul>
                                        <br/>
                                    </div>
                                </li>
                            </ul>
                            <div className="total">
                                <span>Total: </span>
                                <span>{orderDetail.total} USD</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}





