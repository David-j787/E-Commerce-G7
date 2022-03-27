import React from "react";
import { Link } from "react-router-dom";

export function Order({ order }) {
  return (
    <Link to={`/user/account/order/detail/${order.id}`}>
      <div>
        <span>Order N°: {order.id}</span><br />
        <span>Date: {order.date}</span><br />
        <span>Order Status: {order.status}</span><br />
        <span>Total: {order.total}</span><br /><br />
        <hr /><br />
      </div>
    </Link>
  );
}

export default Order;
