import React from 'react';
import { useSelector } from 'react-redux';


export default function AdminDashboard() {
    const user = useSelector(state => state.user);
    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Dashboard Admin CP</div>
            <div className='adminTable'>
                <div className='adminSubComp__welcome'>
                    <span>Hi, {user?.name}. Welcome!</span>
                    <span>Here you can manage all system function</span>
                </div>
            </div>

        </div>
    )
}
