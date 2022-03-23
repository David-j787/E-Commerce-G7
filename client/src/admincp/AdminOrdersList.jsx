import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux/actions';

export default function AdminOrdersList() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    useEffect(()=>{
        dispatch(getAllOrders());
    },[])
    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Orders List</div>
            <div className='tableHeader'><div>Order ID</div>|<div>Total</div>|<div>Date</div>|<div>Status</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(orders) ? (orders?.map(order => <li className='itemList' key={order.id}>
                        <div>{order.id}</div><div>US$ {order.total}</div><div>{order.date}</div><div>{order.status}</div><div>Action</div>
                        
                        </li>)): <div className='noDataFound'>{orders}</div>}
                </ul>
            </div>
        </div>
    )
}
