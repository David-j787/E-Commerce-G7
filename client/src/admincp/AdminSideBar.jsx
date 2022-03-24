import React from 'react';

export default function AdminSideBar({showComponent}){
    return(
        <div><div class="area"></div><nav class="main-menu">
        <ul>
            <li onClick={e => showComponent('dashboard')}>
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                    Dashboard
                </span>
            </li>
            <li onClick={e => showComponent('users')} class="has-subnav">
                <i class="fa fa-laptop fa-2x"></i>
                <span class="nav-text">
                    Users
                </span>             
            </li>
            <li onClick={e => showComponent('products')} class="has-subnav">
                   <i class="fa fa-list fa-2x"></i>
                    <span class="nav-text">
                        Products
                    </span>              
            </li>
            <li onClick={e => showComponent('orders')} class="has-subnav">
                   <i class="fa fa-folder-open fa-2x"></i>
                    <span class="nav-text">
                        Orders
                    </span>               
            </li>
            <li>
                    <i class="fa fa-bar-chart-o fa-2x"></i>
                    <span class="nav-text">
                        Graphs and Statistics
                    </span>
            </li>
            <li>
                    <i class="fa fa-font fa-2x"></i>
                    <span class="nav-text">
                       Quotes
                    </span>
            </li>
            <li>
                   <i class="fa fa-table fa-2x"></i>
                    <span class="nav-text">
                        Tables
                    </span>
            </li>
            <li>
                    <i class="fa fa-map-marker fa-2x"></i>
                    <span class="nav-text">
                        Maps
                    </span>
            </li>
            <li>
                   <i class="fa fa-info fa-2x"></i>
                    <span class="nav-text">
                        Documentation
                    </span>
            </li>
        </ul>

        <ul class="logout">
            <li>
                     <i class="fa fa-power-off fa-2x"></i>
                    <span class="nav-text">
                        Logout
                    </span>
            </li>  
        </ul>
    </nav></div>
    )
}