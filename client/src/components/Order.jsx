import React from "react";
import { Link } from "react-router-dom";

export function Order({date, productId, name}) {
    return (
        <div>
            <span>{date}</span>
            <Link to={`/product/${productId}`}>{name}</Link>)
        </div>
    );
}

export default Order;
