import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import '../../styles/styles.scss';
import validate from './validateLogin.js'

export default function Login() {
  const [errors, setErrors] = useState({})

  const [user, setUser] = useState({
      email:"",
      password: ""
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
        ...user,
        [e.target.name] : e.target.value
    }))
};

  const responseGoogle = response => {
    console.log(response);
  }

  return (
  <div class="wrapper">
      <form class="form-signin">       
        <h2 class="form-signin-heading">Please login</h2>
        <input value={user.email} type="text" class="form-control" name="email" placeholder="Email Address" onChange={e => handleChange(e)} required="" autofocus="" />
        <div>{errors.email}</div>
        <input value={user.password} type="password" class="form-control" name="password" onChange={e => handleChange(e)} placeholder="Password" required=""/>      
        <div>{errors.password}</div>
        <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
        </label>
        <input type="submit" value="Login"/>
      </form>
    <GoogleLogin
      clientId="827278609523-buiubpo31u43c0snvgsjhukdtces0ijo.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}/>
    </div>
  )
}