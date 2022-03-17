import React from "react";
import GoogleLogin from 'react-google-login';

export default function Login() {

  const responseGoogle = response => {
    console.log(response);
  }

  return (
    <>
    <form> 
        <input type="text" placeholder="Enter your email" id="txtEmail"/>
        <input type="password" placeholder="Enter your password" id="txtPassword"/>
        <input type="button" value='Enter' id='btnEnter'/>
    </form> 
    <br></br> <br></br>
    <GoogleLogin
      clientId="827278609523-buiubpo31u43c0snvgsjhukdtces0ijo.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}/>
  </>
  )
}