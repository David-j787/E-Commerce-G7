import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

export function validate(user) {

    let errors = {};
  
    if (!user.name) {
      errors.name = "Write your name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.name)){
      errors.name = "Invalid name";
    }
    if (!user.lastname) {
        errors.lastname = "Write your last name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.name)){
        errors.lastname = "Invalid lastname";
    }
    if(!user.username) {
        errors.username = "Introduce a username"
    }else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(user.username)){
        errors.name = "Invalid username";
    }
    if(!user.password) {
        errors.password = "Write a password"
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(user.password)){
        errors.password = "Password must contain eight characters, at least one uppercase letter, one lowercase letter and one number"
    }
    if (!user.email){
      errors.email = "Introduce your e-mail"
    }else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    if (!user.country){
      errors.country = "Write your country"
    }
    if (!user.city){
      errors.city = "Write your city"
    }
    if (!user.address){
      errors.address = "Write your address"
    }
    if(!user.dateOfBirth) {
        errors.dateOfBirth = "Select your date of birth"
    }
    if(!user.zip_code) {
        errors.zip_code = "Introduce the zip code"
    }
    return errors;
  }


export default function CreateUser(){
    //const history = useHistory();

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

    // const validateUsername = (name) => {
    //     let validate = stateUsers.map(el => el.name)
    //     return validate.includes(name) 
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(validateUsername(user.username)){
        //   alert(`${user.username} already exists`)
        // }else{
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
        // await axios.post("http://localhost:3001/user/create", user)
        // alert(`${user.username} was created successfully!`)
        // history.push("/home")
        //}
      };

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                <label>Name:</label>
                <input name="name" value={user.name} onChange={handleChange}/>
                <div>{errors.name}</div>
                </div>
                <div>
                <label>Last name:</label>
                <input name="lastName" value={user.lastName} onChange={handleChange}/>
                <div>{errors.lastName}</div>
                </div>
                <div>
                <label>Username:</label>
                <input name="username" value={user.username} onChange={handleChange}/>
                <div>{errors.username}</div>
                </div>
                <div>
                <label>Password:</label>
                <input name="password" type="password" value={user.password} onChange={handleChange}/>
                <div>{errors.password}</div>
                </div>
                <div>
                <label>E-mail:</label>
                <input name="email" value={user.email} onChange={handleChange}/>
                <div>{errors.email}</div>
                </div>
                <div>
                <label>Country:</label>
                <input name="country" value={user.country} onChange={handleChange}/>
                <div>{errors.country}</div>
                </div>
                <div>
                <label>City:</label>
                <input name="city" value={user.city} onChange={handleChange}/>
                <div>{errors.city}</div>
                </div>
                <div>
                <label>Zip code:</label>
                <input name="zip_code" value={user.zip_code} onChange={handleChange}/>
                <div>{errors.zip_code}</div>
                </div>
                <div>
                <label>Address:</label>
                <input name="address" value={user.address} onChange={handleChange}/>
                <div>{errors.address}</div>
                </div>
                <div>
                <label>Birthday:</label>
                <input  type='date' name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange}/>
                <div>{errors.dateOfBirth}</div>
                </div>
                <button type="submit" disabled={!user.name || !user.lastName || !user.username || !user.password || !user.email || !user.country || !user.city || !user.address || !user.zip_code || !user.dateOfBirth} >Sign Up</button>
            </form>
        </div>
    )
}