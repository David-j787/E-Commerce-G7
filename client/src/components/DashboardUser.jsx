import React from 'react';
import { Link } from 'react-router-dom';

export function DashboardUser(){

    return (
        <div>
            <Link to="/user/account/profile"><h2>Profile</h2></Link>
            <Link to="/user/account/orders"><h2>View Orders</h2></Link>
            <Link to='/user/account/reset-password'><h2>Change Password</h2></Link>
            <h2>My Wishlist</h2>
        </div>
    )
}
export default DashboardUser;