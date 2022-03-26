import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux/actions';
import AdminSearchBar from './AdminSearchBar';
import swal from 'sweetalert';

export default function AdminOrdersList() {
    const dispatch = useDispatch();
    let orders = useSelector(state => state.orders);
    useEffect(()=>{
        dispatch(getAllOrders());
    },[])

    const changeStatus = async (event, orderId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        try {
            await axios.put('http://localhost:3001/order/status', { orderId, status: event.target.value, token });
            swal({
                title: 'Order status changed',
                text: 'The status of order ID: ' + orderId + ' change to: ' + event.target.value,
                icon: 'success',
                timer: 3000,
                button: null
            })
            dispatch(getAllOrders());
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 2000,
                button: null
            })
            console.log(error);
        }
        
        dispatch(getAllOrders());
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Orders Management</div>
            <AdminSearchBar search='orders' />
            <div className='tableHeader'><div>Order ID</div>|<div>Total</div>|<div>Date</div>|<div>Status</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(orders) ? (orders?.map(order => <li className='itemList' key={order.id}>
                        <div>{order.id}</div>
                        <div>US$ {order.total}</div>
                        <div>{order.date}</div>
                        <div>{order.status}</div>
                        <div>
                            <button value='processing' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'canceled' || order.status === 'complete' || order.status === 'processing'}className='adminCP__button'>Processing</button>
                            <button value='canceled' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'complete' || order.status === 'canceled'} className='adminCP__button'>Canceled</button>
                            <button value='complete' onClick={e => changeStatus(e, order.id)} disabled={order.status === 'canceled' || order.status === 'complete'} className='adminCP__button'>Complete</button>
                        </div>
                        
                        </li>)): <div className='noDataFound'>{orders}</div>}
                </ul>
            </div>
        </div>
    )
}
