import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function DashboardUser(){

    return (
        <nav className='dashboardUser'>
            <div className='container'>
                <li className='dashboardUser__item'>
                    <NavLink to="/user/account/profile"
                        activeClassName='active'
                        className="dashboardUser__link">Profile</NavLink>
                </li>
                <li className='dashboardUser__item'>
                    <NavLink to="/user/account/orders"
                        activeClassName='active' className="dashboardUser__link">View Orders</NavLink>
                </li>
                <li className='dashboardUser__item'>
                    <NavLink to='/user/account/reset-password'
                        activeClassName='active' className="dashboardUser__link">Change Password</NavLink>
                </li>
            </div>
            {/* <h2>My Wishlist</h2> */}
        </nav>
    )
}
export default DashboardUser;