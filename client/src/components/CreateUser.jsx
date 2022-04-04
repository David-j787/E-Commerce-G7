import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../styles/styles.scss'
import useUser from "./Login/hooks/useUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";
import swal from 'sweetalert';
import WhatsApp from "./WhatsApp";
import { FormattedMessage } from 'react-intl'

export function validate(user, users) {
    const emails = users?.map(user => user.email)
    const usernames = users?.map(user => user.username)
    let errors = {};

    if (!user.name) {
        errors.name = "Write your name";
    }
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.name)) {
        errors.name = "Invalid name";
    }
    else if (!user.lastName) {
        errors.lastName = "Write your last name";
    }
    else if (!/^[^\W0-9_][a-zA-Z\u00f1\u00d1\s]+$/.test(user.lastName)) {
        errors.lastName = "Invalid last name";
    }
    else if (!user.username) {
        errors.username = "Introduce a username"
    }
    else if (!/^[^\W0-9_][a-zA-Z0-9\u00f1\u00d1\s]+$/.test(user.username)) {
        errors.username = "Invalid username";
    }
    else if (usernames.includes(user.username)) {
        errors.username = "Username already in use";
    }
    else if (!user.password) {
        errors.password = "Write a password"
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(user.password)) {
        errors.password = "Password must contain eight characters, at least one uppercase letter, one lowercase letter and one number"
    }
    else if (!user.password2) {
        errors.password2 = "Repeat your password"
    }
    else if (user.password !== user.password2) {
        errors.password2 = "Password doesn't match"
    }
    else if (!user.email) {
        errors.email = "Enter your e-mail"
    }
    else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = "Invalid e-mail";
    }
    else if (emails.includes(user.email)) {
        errors.email = "Email already in use";
    }
    else if (!user.country) {
        errors.country = "Introduce your country name"
    }
    else if (!user.city) {
        errors.city = "Introduce your city name"
    }
    else if (!user.address) {
        errors.address = "Write your address"
    }
    else if (!user.dateOfBirth) {
        errors.dateOfBirth = "Select your date of birth"
    }
    else if (!user.zip_code) {
        errors.zip_code = "Introduce the zip code"
    }
    else if (!/^-?\d+\.?\d*$/.test(user.zip_code)) {
        errors.zip_code = "Only numbers allowed"
    }
    return errors;
}


export function CreateUser() {
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers);

    const { isLogged } = useUser();

    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        country: "",
        city: "",
        zip_code: "",
        address: "",
        dateOfBirth: "",
    })

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    useEffect(_ => {
        if (isLogged) history.push('/');
    }, [isLogged, history])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...user,
            [e.target.name]: e.target.value
        }, users))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser({
            name: "",
            lastName: "",
            username: "",
            password: "",
            password2: "",
            email: "",
            country: "",
            city: "",
            zip_code: "",
            address: "",
            dateOfBirth: "",
        })
        const response = await axios.post("/user", user)
        if (response.status === 200) {
            swal({
                title: 'User was created successfully',
                text: ' ',
                icon: 'success',
                timer: 3000,
                button: null
            })
            history.push("/")
        } else {
            swal({
                title: 'Something went wrong',
                text: ' ',
                icon: 'error',
                timer: 3000,
                button: null
            })
            history.push("/")
        }

    };

    return (
        <>
            <div className="container">
                <div className="register">
                    <h1 className="register__title"><FormattedMessage id="app.sign-up" defaultMessage="Sign Up"/></h1>
                    <form onSubmit={(e) => { handleSubmit(e) }} className="register__form">
                        <div className="register__group">
                            <label><FormattedMessage id="app.name" defaultMessage="Name:"/></label>
                            <input name="name" value={user.name} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.name}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.lastname" defaultMessage="Last name:"/></label>
                            <input name="lastName" value={user.lastName} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.lastName}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.user" defaultMessage="Username:"/></label>
                            <input name="username" value={user.username} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.username}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.password" defaultMessage="Password:"/></label>
                            <input name="password" type="password" value={user.password} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.password}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.repeat" defaultMessage="Repeat Password:"/></label>
                            <input name="password2" type="password" value={user.password2} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.password2}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.email" defaultMessage="E-mail:"/></label>
                            <input name="email" value={user.email} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.email}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.country" defaultMessage="Country:"/></label>
                            <input name="country" value={user.country} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.country}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.city" defaultMessage="City:"/></label>
                            <input name="city" value={user.city} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.city}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.zip" defaultMessage="Zip code:"/></label>
                            <input type="number" name="zip_code" value={user.zip_code} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.zip_code}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.address" defaultMessage="Address:"/></label>
                            <input name="address" value={user.address} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.address}</div>
                        </div>
                        <div className="register__group">
                            <label><FormattedMessage id="app.birthday" defaultMessage="Birthday:"/></label>
                            <input type='date' name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.dateOfBirth}</div>
                        </div>
                        <button className="register__button" type="submit" disabled={!user.name || !user.lastName || !user.username || !user.password || !user.password || !user.email || !user.country || !user.city || !user.address || !user.zip_code || !user.dateOfBirth || Object.keys(errors).length} ><FormattedMessage id="app.sign-up" defaultMessage="Sign Up"/></button>
                    </form>
                </div>
            </div>
            <WhatsApp />
        </>
    )
}

export default CreateUser;