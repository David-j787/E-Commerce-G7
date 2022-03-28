import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/actions';
import AdminSearchBar from './AdminSearchBar';
import swal from 'sweetalert';

export default function AdminUsersList({getId, showComponent}) {
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.user)
    const users = useSelector(state => state.allUsers);
    useEffect(()=>{
        dispatch(getAllUsers());
    },[])

    const forceResetPassword = (userId) => {
        try {
            swal({
                title: 'Do you want reset user password?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                await axios.put('/password/reset', {userId});
                swal({
                        title: 'You forced password reset',
                        text: ' ',
                        icon: 'success',
                        timer: 2000,
                        button: null
                    })
                }
            })
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 2000,
                button: null
            })
            console.log(error);
        }
    }

    const editUser = (userId) => {
        getId(userId);
        showComponent('editUser');
    }

    const deleteUser = async (userId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        try {
            swal({
                title: 'Do you want delete the user?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                    await axios.delete('/user', {data: {token, userId}});
                    swal({
                        title: 'You deleted the user with ID: ' + userId,
                        text: ' ',
                        icon: 'success',
                        timer: 2000,
                        button: null
                    })
                    dispatch(getAllUsers());
                }
            })
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 2000,
                button: null
            })
            console.log(error);
        }
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Users Management</div>
            <AdminSearchBar search='users' />
            <div className='tableHeader'><div>Name</div>|<div>Username</div>|<div>Email</div>|<div>Role</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(users) ? users?.map(user => <li className='itemList' key={user.id}>
                        <div>{user.name} {user.last_name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.role.name}</div>
                        <div>
                            <button onClick={e => forceResetPassword(user.id)} disabled={loggedUser?.roleId === 2 && user.roleId === 1} className='adminCP__button'>Reset Password</button>
                            <button onClick={e => editUser(user.id)} disabled={(loggedUser?.roleId === 2 && user.roleId === 1) || (loggedUser?.roleId === 2 && user.roleId === 2)} className='adminCP__button'>Edit</button>
                            <button onClick={e => deleteUser(user.id)} disabled={(loggedUser?.roleId === 2 && user.roleId === 1) || (loggedUser?.roleId === 2 && user.roleId === 2)} className='adminCP__button'>Delete</button>
                        </div>
                        </li>) : <div className='noDataFound'>{users}</div>}
                </ul>
            </div>
        </div>
    )
}
