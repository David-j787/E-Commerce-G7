import React from 'react';
import Orders from './Orders';

export function DashboardUser(){
    return (
        <div>
            <h2>My Account</h2>
            <h2>Edit Account</h2>
            <h2>Orders</h2>
            <Orders />
            <span>Order details</span>
            <span>Wishlist</span>
        </div>
    )
}
export default DashboardUser;