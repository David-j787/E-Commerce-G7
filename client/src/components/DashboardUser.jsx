import React from 'react';
import { Link } from 'react-router-dom';

export function DashboardUser(){

    return (
        <div>
            <Link to="/account"><h2>My Account</h2></Link>
            <Link to="/orders"><h2>Orders</h2></Link>
            <h2>Order details</h2>
            <h2>Wishlist</h2>
            <Link to="/"><button>Go back</button></Link>
        </div>
    )
}
export default DashboardUser;