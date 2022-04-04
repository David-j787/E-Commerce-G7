import React from 'react';
import { useSelector } from 'react-redux';
import useUser from '../components/Login/hooks/useUser';
import { FormattedMessage } from 'react-intl'

export default function AdminSideBar({showComponent}){
    const user = useSelector(state => state.user);
    const { logout } = useUser();
    return(
        <div><div className="area"></div><nav className="main-menu">
        <ul>
            <li onClick={e => showComponent('dashboard')}>
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.dashboard" defaultMessage="Dashboard"/></span>
            </li>
            <li onClick={e => showComponent('users')} className="has-subnav">
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.users-list" defaultMessage="Users"/></span>             
            </li>
            <li onClick={e => showComponent('products')} className="has-subnav">
                <i className="fa fa-list fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.products" defaultMessage="Products"/></span>              
            </li>
            <li onClick={e => showComponent('orders')} className="has-subnav">
                <i className="fa fa-folder-open fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.orders-list" defaultMessage="Orders"/></span>               
            </li>
            {user?.roleId === 1 && 
            <li onClick={e => showComponent('editRole')}>
                <i className="fa fa-bar-chart-o fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app-edit-roles" defaultMessage="Edit roles"/></span>
            </li>}
            <li onClick={e => showComponent('setDiscounts')}>
                <i className="fa fa-font fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.email-user" defaultMessage="Email"/></span>
            </li>
            <li onClick={e => showComponent('discounts')}>
                <i className="fa fa-table fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.discounts" defaultMessage="Discounts"/></span>
            </li>
            <li onClick={e => showComponent('stores')}>
                <i className="fa fa-map-marker fa-2x"></i>
                <span className="nav-text"><FormattedMessage id="app.physical" defaultMessage="Physical Stores"/></span>
            </li>
            {/*<li>
                <i className="fa fa-info fa-2x"></i>
                <span className="nav-text">Documentation</span>
            </li> */}
        </ul>

        <ul className="logout">
            <li onClick={logout}>
                     <i className="fa fa-power-off fa-2x"></i>
                    <span className="nav-text">
                    <FormattedMessage id="app.log-out" defaultMessage="Logout"/>
                    </span>
            </li>  
        </ul>
    </nav></div>
    )
}