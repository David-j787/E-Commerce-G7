import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../styles/styles.scss'
import swal from 'sweetalert';

export function validate(form) {
    let errors = {};

    if (!form.name) {
        errors.name = "Write your name";
    }
    else if (!form.email) {
        errors.email = "Enter your e-mail"
    }
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = "Invalid e-mail";
    }
    else if (!form.message) {
        errors.message = "Leave a message"
    }
    return errors;
}


export function Contact() {
    const history = useHistory();
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm({
            name: "",
            email: "",
            message: "",
        })
        const response = await axios.post("/contact", form)
        if (response.status === 200) {
            swal({
                title: 'You message was send successfully',
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
        }
    };

    return (
            <div className="container">
                <div className="register">
                    <h1 className="register__title">Contact Us</h1>
                    <form onSubmit={(e) => { handleSubmit(e) }} className="register__form">
                        <div className="register__group">
                            <label>Name:</label>
                            <input name="name" value={form.name} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.name}</div>
                        </div>
                        <div className="register__group">
                            <label>E-mail:</label>
                            <input name="email" value={form.email} onChange={handleChange} className="form-control" />
                            <div className="register__error">{errors.email}</div>
                        </div>
                        <div className="register__group">
                            <label>Message:</label>
                            <textarea name="message" value={form.message} onChange={handleChange} className="form-control"></textarea>
                            <div className="register__error">{errors.message}</div>
                        </div>
                        <button className="register__button" type="submit" disabled={!form.name || !form.email || !form.message || Object.keys(errors).length} >Send</button>
                    </form>
                </div>
            </div>
    )
}

export default Contact;