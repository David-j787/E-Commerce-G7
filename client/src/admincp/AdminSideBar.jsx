import React from 'react';

export default function AdminSideBar({showComponent}){
    return(
        <div><div class="area"></div><nav class="main-menu">
        <ul>
            <li>
                <a href="#">
                    <i class="fa fa-home fa-2x"></i>
                    <span onClick={e => showComponent('dashboard')}class="nav-text">
                        Dashboard
                    </span>
                </a>
            </li>
            <li class="has-subnav">
                <a href="#">
                    <i class="fa fa-laptop fa-2x"></i>
                    <span onClick={e => showComponent('users')} class="nav-text">
                        Users
                    </span>
                </a>
                
            </li>
            <li class="has-subnav">
                <a href="#">
                   <i class="fa fa-list fa-2x"></i>
                    <span onClick={e => showComponent('products')} class="nav-text">
                        Products
                    </span>
                </a>
                
            </li>
            <li class="has-subnav">
                <a href="#">
                   <i class="fa fa-folder-open fa-2x"></i>
                    <span onClick={e => showComponent('orders')} class="nav-text">
                        Orders
                    </span>
                </a>
               
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-bar-chart-o fa-2x"></i>
                    <span class="nav-text">
                        Graphs and Statistics
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-font fa-2x"></i>
                    <span class="nav-text">
                       Quotes
                    </span>
                </a>
            </li>
            <li>
               <a href="#">
                   <i class="fa fa-table fa-2x"></i>
                    <span class="nav-text">
                        Tables
                    </span>
                </a>
            </li>
            <li>
               <a href="#">
                    <i class="fa fa-map-marker fa-2x"></i>
                    <span class="nav-text">
                        Maps
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                   <i class="fa fa-info fa-2x"></i>
                    <span class="nav-text">
                        Documentation
                    </span>
                </a>
            </li>
        </ul>

        <ul class="logout">
            <li>
               <a href="#">
                     <i class="fa fa-power-off fa-2x"></i>
                    <span class="nav-text">
                        Logout
                    </span>
                </a>
            </li>  
        </ul>
    </nav></div>
    )
}