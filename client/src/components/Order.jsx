import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

export function Order({ order }) {
  return (
    <Link to={`/user/account/order/detail/${order.id}`} className="order">
      <div className="order__item">
        <div><FormattedMessage id="app.number-order" defaultMessage="Order N°: "/><span>{order.id}</span></div>
        <div><FormattedMessage id="app.date" defaultMessage="Date: "/><span>{order.date}</span></div>
        <div><FormattedMessage id="app.status-order" defaultMessage="Order Status: "/><span>{order.status}</span></div>
        <div><FormattedMessage id="app.status-payment" defaultMessage="Payment Status: "/><span>{order.payment_status}</span></div>
        <div>Total: <span>{order.total}</span></div>
      </div>
    </Link>
  );
}

export default Order;
