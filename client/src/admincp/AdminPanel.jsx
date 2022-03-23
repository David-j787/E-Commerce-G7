import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminOrdersList from './AdminOrdersList';
import AdminProductsList from './AdminProductsList';
import AdminSideBar from './AdminSideBar';
import AdminUsersList from './AdminUsersList';

export default function AdminPanel() {
    const [show, setShow] = useState('dashboard')

    const showComponent = (component) => {
        setShow(component);
    }
    
    return(
        <div>
            <AdminSideBar showComponent={showComponent}/>
            <div className='adminContainer'>
                {show === 'dashboard' && <AdminDashboard />}
                {show === 'users' && <AdminUsersList />}
                {show === 'orders' && <AdminOrdersList />}
                {show === 'products' && <AdminProductsList />}                
            </div>
        </div>
    )
}
