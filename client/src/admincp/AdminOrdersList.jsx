import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux/actions';

export default function AdminOrdersList() {
    const dispatch = useDispatch();
    let orders = useSelector(state => state.orders);
    orders = orders.sort((orderA, orderB) => orderA.id > orderB.id)
    useEffect(()=>{
        dispatch(getAllOrders());
    },[])

    const changeStatus = async (event, orderId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        const response = await axios.put('/order/status', { orderId, status: event.target.value, token });
        alert(`Order status changed: ${orderId} ${response.data}`)
        dispatch(getAllOrders());
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Orders</div>
            <div className='tableHeader'><div>Order ID</div>|<div>Total</div>|<div>Date</div>|<div>Status</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(orders) ? (orders?.map(order => <li className='itemList' key={order.id}>
                        <div>{order.id}</div>
                        <div>US$ {order.total}</div>
                        <div>{order.date}</div>
                        <div>{order.status}</div>
                        <div><button value='pending' onClick={e => changeStatus(e, order.id)} className='adminCP__button'>Pending</button>
                            <button value='processing' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'canceled' || order.status === 'complete'}className='adminCP__button'>Processing</button>
                            <button value='canceled' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'complete'} className='adminCP__button'>Canceled</button>
                            <button value='complete' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'canceled'} className='adminCP__button'>Complete</button>
                        </div>
                        
                        </li>)): <div className='noDataFound'>{orders}</div>}
                </ul>
            </div>
        </div>
    )
}
