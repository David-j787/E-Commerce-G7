import React, { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import '../../styles/styles.scss';
import validate from './services/validateLogin.js';
import useUser from "./hooks/useUser";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions";

export default function Login() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
      username:"",
      rememberMe: false,
      password: ""
  })
  const history = useHistory();
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser();
  
  useEffect(()=>{
    if (isLogged) history.push('/')
  }, [isLogged, history])

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
};

  const handleCheckbox = () => {
    if(input.rememberMe) setInput({ ...input, rememberMe: false})
    if(!input.rememberMe) setInput({ ...input, rememberMe: true})
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(input);
  }

  const responseGoogle = response => {
    axios.post('http://localhost:3001/googleLogin', {id_token: response.tokenId})
      .then(res => {
        input.rememberMe ? localStorage.setItem('jwt', res.data.token) : sessionStorage.setItem('jwt', res.data.token) 
        dispatch(userLogin(res.data.user))
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
  <div className="wrapper">
    {isLoginLoading && <span>Checking credentials...</span>}
    {!isLoginLoading &&
      <form className="form-signin" onSubmit={handleSubmit}>       
        <h2 className="form-signin-heading">Please login</h2>
        {hasLoginError && <span>Credentials are invalid</span>}
        <input value={input.username} type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange}/>
        <input value={input.password} type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password"/>      
          <span className="error">{errors.username}</span>
          <span className="error">{errors.password}</span>
        <label className="checkbox">
          <input type="checkbox" onChange={handleCheckbox} id="rememberMe" name="rememberMe"/> Remember me
        </label>
        <input className="btn btn-lg btn-primary btn-block btnColors" type="submit" value='Login'/>
        <GoogleLogin className="button-google"
          clientId="827278609523-buiubpo31u43c0snvgsjhukdtces0ijo.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}/>  
      </form>
    }
    </div>
  )
}