import React from "react";


export default function Login() {

  return (
    <>
    <form> 
        <input type="text" placeholder="Enter your email" id="txtEmail"/>
        <input type="password" placeholder="Enter your password" id="txtPassword"/>
        <input type="button" value='Enter' id='btnEnter'/>
    </form> 
  </>
  )
}