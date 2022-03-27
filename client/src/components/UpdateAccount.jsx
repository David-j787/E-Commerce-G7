import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import swal from 'sweetalert';

export function validate(user, users) {
    const emails = users.map(user => user.email)
    let errors = {};
  
    if (!user.name) {
      errors.name = "Write your name";
    } 
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.name)){
      errors.name = "Invalid name";
    }
    else if (!user.lastName) {
        errors.lastName = "Write your last name";
    } 
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.lastName)){
        errors.lastName = "Invalid last name";
    }
    else if (!user.email){
      errors.email = "Enter your e-mail"
    }
    else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    else if (emails.includes(user.email)){
        errors.email = "Email already in use";
    }
    else if (!user.country){
      errors.country = "Introduce your country name"
    }
    else if (!user.city){
      errors.city = "Introduce your city name"
    }
    else if (!user.address){
      errors.address = "Write your address"
    }
    else if(!user.dateOfBirth) {
        errors.dateOfBirth = "Select your date of birth"
    }
    else if(!user.zip_code) {
        errors.zip_code = "Introduce the zip code"
    }
    else if (!/^-?\d+\.?\d*$/.test(user.zip_code)){
        errors.zip_code = "Only numbers allowed"
    }
  
    return errors;
}


export function UpdateAccount(props){
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);

    const userDetails = useSelector((state) => state?.user)

    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: userDetails?.name,
            lastName: userDetails?.last_name,
            username: userDetails?.username,
            email: userDetails?.email,
            country: userDetails?.country,
            city: userDetails?.city,
            zip_code: userDetails?.zip_code,
            address: userDetails?.address,
            dateOfBirth: userDetails?.dateOfBirth,
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
        }, users))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            swal({
                title: 'Do you want save changes?',
                text: " ",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                    await axios.put("http://localhost:3001/user/update", user);
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
        <div className="container">
        <div className="register">
            <h1 className="register__title">Update Personal Information</h1>
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
                <button className="register__button" type="submit" >Update</button>
            </form>
        </div>
    </div>
    )
}

export default UpdateAccount;