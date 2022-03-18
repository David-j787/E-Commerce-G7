import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import { useUserContext } from "./config/context/userContext";
import '../../styles/styles.scss';
import validate from './validateLogin.js';

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
  const responseGoogle = response => {}

  const { signInWithGithub } = useUserContext();
  const { loading, error } = useUserContext();

  return (
  <div className="wrapper">
      <form className="form-signin">       
        <h2 className="form-signin-heading">Please login</h2>
        <input value={user.email} type="email" className="form-control" name="email" placeholder="Email Address" onChange={e => handleChange(e)}/>
        <input value={user.password} type="password" className="form-control" name="password" onChange={e => handleChange(e)} placeholder="Password"/>      
          <span className="error">{errors.email}</span>
          <span className="error">{errors.password}</span>
        <label className="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
        </label>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value='Login'/>
      </form>

    <GoogleLogin
      clientId="827278609523-buiubpo31u43c0snvgsjhukdtces0ijo.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}/>

    <button onClick={signInWithGithub}>Continue with GitHub</button>
    {error && <p>{error}</p>}
    {loading && <h2>Loading...</h2>}
    <br></br> <br></br>
    </div>
  )
}