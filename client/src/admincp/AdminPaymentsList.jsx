import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPayments } from '../redux/actions';

export default function AdminPaymentsList({getId, showComponent}) {
    const dispatch = useDispatch();
    const payments = useSelector(state => state?.payments);
    useEffect(()=>{
        dispatch(getAllPayments());
    },[])

    const seeOrderDetails = (id, orderId) => {
        const detail = {
            meli_id: id,
            orderId
        };
        getId(detail);
        showComponent('paymentDetail')
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Payments Management</div>
            <div className='tableHeader'><div>Payment ID Mercado Pago</div>|<div>Total Paid</div>|<div>Method</div>|<div>Type</div>|<div>Status</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(payments) ? (payments?.map(payment => 
                    <li className='itemList' key={payment.id}>
                        <div>{payment.id_meli}</div>
                        <div>US$ {payment.total_paid_amount}</div>
                        <div>{payment.payment_type_id?.split('_').join(' ')}</div>
                        <div>{payment.payment_method_id}</div>
                        <div>{payment.status} <button className='adminCP__button' onClick={e => seeOrderDetails(payment.id_meli, payment.orderId)}>Details</button></div>    
                    </li>)): <div className='noDataFound'>{payments}</div>}
                </ul>
            </div>
        </div>
    )
}
