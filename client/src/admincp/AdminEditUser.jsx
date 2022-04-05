import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUserDetail } from '../redux/actions';
import axios from 'axios';
import swal from 'sweetalert';
import { FormattedMessage } from 'react-intl'

export function validate(user, users, userDetail) {
    const usernames = users?.map(user => user.username);
    const emails = users?.map(user => user.email);
    let errors = {};
  
    if (!user.name) {
        errors.name = "Write a name";
    } 
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.name)){
      errors.name = "Invalid name";
    }
    else if (!user.lastName) {
        errors.lastName = "Write user last name";
    } 
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.lastName)){
        errors.lastName = "Invalid last name";
    }
    else if(!user.username) {
        errors.username = "Introduce a username"
    }
    else if (usernames.includes(user.username) && user.username !== userDetail?.username){
        errors.username = "Username already in use";
    }
    else if (!user.email){
      errors.email = "Enter an e-mail"
    }
    else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    else if (emails.includes(user.email) && user.email !== userDetail?.email){
        errors.email = "Email already in use";
    }
    else if (!user.country){
      errors.country = "Introduce user country name"
    }
    else if (!user.city){
      errors.city = "Introduce user city name"
    }
    else if (!user.address){
      errors.address = "Write user address"
    }
    else if(!user.dateOfBirth) {
        errors.dateOfBirth = "Select user date of birth"
    }
    else if(!user.zip_code) {
        errors.zip_code = "Introduce user zip code"
    }
    else if (!/^-?\d+\.?\d*$/.test(user.zip_code)){
        errors.zip_code = "Only numbers allowed"
    }
    return errors;
}

export function AdminEditUser(props){
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);

    const id = props.id;

    useEffect(()=>{
        dispatch(getUserDetail(id))
    }, [id])

    useEffect(() => {
        dispatch(getAllUsers());
    },[])

    const userDetails = useSelector((state) => state.userDetail)

    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: userDetails.name,
            lastName: userDetails.last_name,
            username: userDetails.username,
            email: userDetails.email,
            country: userDetails.country,
            city: userDetails.city,
            zip_code: userDetails.zip_code,
            address: userDetails.address,
            dateOfBirth: userDetails.dateOfBirth,
        })
    },[userDetails])
        

    const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...user,
            [e.target.name] : e.target.value
        }, users, userDetails))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        try {
            swal({
                title: 'Do you want save changes?',
                text: " ",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                    await axios.put("/user/edit", {...user, token});
                    swal({
                        title: 'User changes saved',
                        text: ' ',
                        icon: 'success',
                        timer: 2000,
                        button: null
                    })
                }
                props.showComponent('users');
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
      };

    return (
        <div className="adminContainer editForms">
        <div className="register">
            <h1 className="register__title"><FormattedMessage id="app.edit-user" defaultMessage="Edit User" /></h1>
            <form onSubmit={(e)=>{handleSubmit(e)}} className="register__form">
                <div className="register__group">
                <label><FormattedMessage id="app.name" defaultMessage="Name:" /></label>
                <input name="name" value={user.name} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.name}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.lastname" defaultMessage="Last name:" /></label>
                <input name="lastName" value={user.lastName} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.lastName}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.user" defaultMessage="Username:" /></label>
                <input name="username" value={user.username} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.username}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.email" defaultMessage="E-mail:" /></label>
                <input name="email" value={user.email} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.email}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.country" defaultMessage="Country:" /></label>
                <input name="country" value={user.country} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.country}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.city" defaultMessage="City:" /></label>
                <input name="city" value={user.city} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.city}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.zip" defaultMessage="Zip code:" /></label>
                <input type="number" name="zip_code" value={user.zip_code} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.zip_code}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.address" defaultMessage="Address:" /></label>
                <input name="address" value={user.address} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.address}</div>
                </div>
                <div className="register__group">
                <label><FormattedMessage id="app.birthday" defaultMessage="Birthday:" /></label>
                <input  type='date' name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.dateOfBirth}</div>
                </div>
                <button className="register__button" type="submit" ><FormattedMessage id="app.btn-edit" defaultMessage="Edit" /></button>
            </form>
        </div>
    </div>
    )
}

export default AdminEditUser;