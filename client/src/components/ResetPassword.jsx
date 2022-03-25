import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { useSelector } from "react-redux";
import useUser from "./Login/hooks/useUser";

export function validate(input) {
  let errors = {};

  if (!input.currentPassword){
    errors.currentPassword = "You must introduce your current password"
  }
  else if(!input.newPassword) {
    errors.newPassword = "Write a new password"
  }
  else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input.newPassword)){
    errors.newPassword = "Password must contain eight characters minimum, at least one uppercase letter, one lowercase letter and one number"
  }
  else if(!input.repeatPassword) {
    errors.repeatPassword = "Repeat your password"
  }
  else if(input.newPassword !== input.repeatPassword) {
    errors.repeatPassword = "Password doesn't match"
  }
  return errors;
}

export default function ResetPassword() {
  const user = useSelector(state => state.user);
  const [errors, setErrors] = useState({})
  const [inputs, setInputs] = useState({
      currentPassword:"",
      newPassword: "",
      repeatPassword: ""
  })

  const { logout } = useUser();

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
        ...inputs,
        [e.target.name] : e.target.value
    }))
};

  const handleSubmit = async event => {
    event.preventDefault();
    try{
      const response = await axios.put('http://localhost:3001/password/set', {userId: user.id, inputs});
      console.log(response)
      if(response.status === 200) {
        swal({
          title: "Password Reset Successfully!",
          text: "Your new password have been set. Please Login again",
          icon: "success",
          timer: 2000
        });
        logout();
      }
    }
    catch (error) {
      console.log(error)
      swal({
        title: "Something went wrong",
        text: "Your current password is not valid",
        icon: "error",
        button: "Ok"
      });
    }
  }

  return (
  <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit}>       
        <h2 className="form-signin-heading">Reset Password</h2>
        <input value={inputs.currentPassword} type="password" className="form-control" name="currentPassword" placeholder="Current Password..." onChange={handleChange}/>
        <span className="error">{errors.currentPassword}</span>
        <input value={inputs.newPassword} type="password" className="form-control" name="newPassword" onChange={handleChange} placeholder="New Password..."/>
        <span className="error">{errors.newPassword}</span>
        <input value={inputs.repeatPassword} type="password" className="form-control" name="repeatPassword" onChange={handleChange} placeholder="Repeat Password..."/>        
        <span className="error">{errors.repeatPassword}</span>
        <input className="btn btn-lg btn-primary btn-block btnColors" type="submit" value='Set New Password'/>
      </form>
    </div>
  )
}