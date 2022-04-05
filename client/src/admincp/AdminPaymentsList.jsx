import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPayments } from '../redux/actions';
import { FormattedMessage } from 'react-intl'

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
            <div className='componentTitle'><FormattedMessage id="app.payment-manage" defaultMessage="Payments Management"/></div>
            <div className='tableHeader'><div><FormattedMessage id="app.pay-mercado" defaultMessage="Payment ID Mercado Pago"/></div>|<div><FormattedMessage id="app.total-pay" defaultMessage="Total Paid"/></div>|<div><FormattedMessage id="app.method" defaultMessage="Method"/></div>|<div><FormattedMessage id="app.type" defaultMessage="Type"/></div>|<div><FormattedMessage id="app.status" defaultMessage="Status"/></div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(payments) ? (payments?.map(payment => 
                    <li className='itemList' key={payment.id}>
                        <div>{payment.id_meli}</div>
                        <div>US$ {payment.total_paid_amount}</div>
                        <div>{payment.payment_type_id?.split('_').join(' ')}</div>
                        <div>{payment.payment_method_id}</div>
                        <div>{payment.status} <button className='adminCP__button' onClick={e => seeOrderDetails(payment.id_meli, payment.orderId)}><FormattedMessage id="app.details" defaultMessage="Details"/></button></div>    
                    </li>)): <div className='noDataFound'>{payments}</div>}
                </ul>
            </div>
        </div>
    )
}
