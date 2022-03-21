import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../styles/styles.scss'

export function validate(user) {

    let errors = {};
  
    if (!user.name) {
      errors.name = "Write your name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.name)){
      errors.name = "Invalid name";
    }
    if (!user.lastName) {
        errors.lastName = "Write your last name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.lastName)){
        errors.lastName = "Invalid last name";
    }
    if(!user.username) {
        errors.username = "Introduce a username"
    }else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.username)){
        errors.username = "Invalid username";
    }
    if(!user.password) {
        errors.password = "Write a password"
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(user.password)){
        errors.password = "Password must contain eight characters, at least one uppercase letter, one lowercase letter and one number"
    }
    if (!user.email){
      errors.email = "Enter your e-mail"
    }else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    if (!user.country){
      errors.country = "Introduce your country name"
    }
    if (!user.city){
      errors.city = "Introduce your city name"
    }
    if (!user.address){
      errors.address = "Write your address"
    }
    if(!user.dateOfBirth) {
        errors.dateOfBirth = "Select your date of birth"
    }
    if(!user.zip_code) {
        errors.zip_code = "Introduce the zip code"
    }else if (!/^-?\d+\.?\d*$/.test(user.zip_code)){
        errors.zip_code = "Only numbers allowed"
    }
    return errors;
}


export function CreateUser(){
    const history = useHistory();

    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        username: "",
        password: "",
        email:"",
        country: "",
        city: "",
        zip_code:"",
        address: "",
        dateOfBirth: "",
    })

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
        setUser({
            name: "",
            lastName: "",
            username: "",
            password: "",
            email:"",
            country: "",
            city: "",
            zip_code:"",
            address: "",
            dateOfBirth: "",
        })
        await axios.post("http://localhost:3001/user", user)
        alert(`${user.username} was created successfully!`)
        history.push("/home")
      };

    return(
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}} style={{width:'30%'}}>
                <div className="form-group">
                <label className="form-label">Name:</label>
                <input name="name" value={user.name} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.name}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Last name:</label>
                <input name="lastName" value={user.lastName} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.lastName}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Username:</label>
                <input name="username" value={user.username} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.username}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Password:</label>
                <input name="password" type="password" value={user.password} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.password}</div>
                </div>
                <div className="form-group">
                <label className="form-label">E-mail:</label>
                <input name="email" value={user.email} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.email}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Country:</label>
                <input name="country" value={user.country} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.country}</div>
                </div>
                <div className="form-group">
                <label className="form-label">City:</label>
                <input name="city" value={user.city} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.city}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Zip code:</label>
                <input type="number" name="zip_code" value={user.zip_code} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.zip_code}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Address:</label>
                <input name="address" value={user.address} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.address}</div>
                </div>
                <div className="form-group">
                <label className="form-label">Birthday:</label>
                <input  type='date' name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.dateOfBirth}</div>
                </div>
                <button className="btn btn-warning" type="submit" disabled={!user.name || !user.lastName || !user.username || !user.password || !user.email || !user.country || !user.city || !user.address || !user.zip_code || !user.dateOfBirth} >Sign Up</button>
            </form>
        </div>
    )
}

export default CreateUser;