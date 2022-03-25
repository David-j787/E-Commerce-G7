import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoles, getAllUsers} from '../redux/actions';
import AdminSearchBar from './AdminSearchBar';

export default function AdminEditRole({showComponent}) {
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.user)
    const users = useSelector(state => state.allUsers);

    const roles = useSelector(state => state.allRoles);
    useEffect(()=>{
        dispatch(getAllUsers());
        dispatch(getAllRoles());
    },[])

    const [role, setRole] = useState({});

    const editRole = async (userId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        const response = await axios.put('http://localhost:3001/user/role', {userId, role: role[Object.keys(role)[0]], token});
        if(response.data) alert(response.data);
        showComponent('editRole');
    }

    const handleSelect = (e) => {
        setRole({
            [e.target.name]:e.target.value
        });
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Edit Users Permissions</div>
            <AdminSearchBar search='users' />
            <div className='tableHeader'><div>Name</div>|<div>Username</div>|<div>Email</div>|<div>Role</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(users) ? users?.map(user => <li className='itemList' key={user.id}>
                        <div>{user.name} {user.last_name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>
                            <select disabled={loggedUser?.roleId !== 1} name={user.id} onChange={handleSelect} value={role[user.id]}>
                                <option value={user.role.name} hidden>{user.role.name}</option>
                                {roles?.map(role => <option disabled={role.id === 1} key={role.id} value={role.id}>{role.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <button onClick={e => editRole(user.id)} disabled={loggedUser?.roleId !== 1} className='adminCP__button'>Set Role</button>
                        </div>
                        </li>) : <div className='noDataFound'>{users}</div>}
                </ul>
            </div>
        </div>
    )
}
