import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/actions';

export default function AdminUsersList({getId, showComponent}) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);
    useEffect(()=>{
        dispatch(getAllUsers());
    },[])

    const forceResetPassword = (userId) => {
        alert('Se reseteó la password del usuario');
    }

    const editUser = (userId) => {
        getId(userId);
        showComponent('editUser');
    }

    const deleteUser = async (userId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        const response = await axios.delete('/user', {data: {token, userId}});
        if(response.status === 200) alert(response.data);
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Users</div>
            <div className='tableHeader'><div>Name</div>|<div>Username</div>|<div>Email</div>|<div>Role</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {users?.map(user => <li className='itemList' key={user.id}>
                        <div>{user.name} {user.last_name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.role.name}</div>
                        <div>
                            <button onClick={e => forceResetPassword(user.id)} className='adminCP__button'>Reset Password</button>
                            <button onClick={e => editUser(user.id)} className='adminCP__button'>Edit</button>
                            <button onClick={e => deleteUser(user.id)} className='adminCP__button'>Delete</button>
                        </div>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}
