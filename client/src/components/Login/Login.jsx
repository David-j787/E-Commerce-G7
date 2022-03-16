import React from "react";


export default function Login() {


  return (
    <>
    <form> 
        <input type="text" placeholder="Ingrese su correo electronico" id="txtCorreo"/>
        <input type="password" placeholder="Ingrese su contraseña" id="txtContraseña"/>
        <input type="button" value='Ingresar' id='btnIngresar'/>
    </form> 
  </>
  )
}