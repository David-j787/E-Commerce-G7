import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from '../redux/actions';
import axios from 'axios';
import swal from 'sweetalert';

export function validate(input) {
    let errors = {};
  
    if (!input.name) {
      errors.name = "Introduce the product name";
    } 
    else if (input.name.length < 4) {
        errors.name = "Product name is too short.";
    } 
    else if (!input.price) {
        errors.price = "Introduce the product price"
    } 
    else if (!/^-?\d+\.?\d*$/.test(input.price)){
        errors.price = "Only numbers allowed"
    }
    else if(!input.description){
       errors.description = "Write a brief description of your product"
    }
    else if(!input.stock){
        errors.stock = "Stock number"
    } 
    else if (!/^-?\d+\.?\d*$/.test(input.stock)){
        errors.stock = "Only numbers allowed"
    }
    else if(!/^-?\d+\.?\d*$/.test(input.rating)){
        errors.rating = "Only numbers allowed"
    }
    else if(!input.categories.length){
        errors.categories = "Choose the categories"
    }
    return errors;
}


export function AdminEditUser(props){
    const dispatch = useDispatch();

    const id = props.id;

    useEffect(()=>{
        dispatch(getUserDetail(id))
    }, [id])

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
        }))
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
                    await axios.put("http://localhost:3001/user/update", {...user, token});
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
            <h1 className="register__title">Edit User</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}} className="register__form">
                <div className="register__group">
                <label>Name:</label>
                <input name="name" value={user.name} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.name}</div>
                </div>
                <div className="register__group">
                <label>Last name:</label>
                <input name="lastName" value={user.lastName} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.lastName}</div>
                </div>
                <div className="register__group">
                <label>Username:</label>
                <input name="username" value={user.username} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.username}</div>
                </div>
                <div className="register__group">
                <label>Password:</label>
                <input name="password" type="password" value={user.password} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.password}</div>
                </div>
                <div className="register__group">
                <label>E-mail:</label>
                <input name="email" value={user.email} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.email}</div>
                </div>
                <div className="register__group">
                <label>Country:</label>
                <input name="country" value={user.country} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.country}</div>
                </div>
                <div className="register__group">
                <label>City:</label>
                <input name="city" value={user.city} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.city}</div>
                </div>
                <div className="register__group">
                <label>Zip code:</label>
                <input type="number" name="zip_code" value={user.zip_code} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.zip_code}</div>
                </div>
                <div className="register__group">
                <label>Address:</label>
                <input name="address" value={user.address} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.address}</div>
                </div>
                <div className="register__group">
                <label>Birthday:</label>
                <input  type='date' name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} className="form-control"/>
                <div className="register__error">{errors.dateOfBirth}</div>
                </div>
                <button className="register__button" type="submit" >Edit</button>
            </form>
        </div>
    </div>
    )
}

export default AdminEditUser;