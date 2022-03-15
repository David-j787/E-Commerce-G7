import React, { useState } from "react";

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
    if (!user.email){
      errors.email = "Introduce your e-mail"
    }else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    if (!user.mobileNumber){
      errors.mobileNumber = "Introduce your mobile number"
    }
    if(!user.newPassword) {
      errors.newPassword = "Write a password"
    }
    if(!user.birthday) {
        errors.birthday = "Select the options"
    }
    if(!user.IdNumber) {
        errors.IdNumber = "Write your ID number"
    }
    return errors;
  }


export default function CreateUser(){

    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const months= ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const years= [1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]

    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email:"",
        mobileNumber: "",
        newPassword: "",
        birthday: "",
        IdNumber: "",
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

    const handleSelect = (e) => {
        setUser({
            ...user,
            birthday: e.target.value
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                <label>Name:</label>
                <input name="name" value={user.name} onChange={handleChange}/>
                <div>{errors.name}</div>
                </div>
                <div>
                <label>Last name:</label>
                <input name="lastname" value={user.lastname} onChange={handleChange}/>
                <div>{errors.lastname}</div>
                </div><div>
                <label>E-mail:</label>
                <input name="email" value={user.email} onChange={handleChange}/>
                <div>{errors.email}</div>
                </div><div>
                <label>Mobile number:</label>
                <input name="mobileNumber" value={user.mobileNumber} onChange={handleChange}/>
                <div>{errors.mobileNumber}</div>
                </div><div>
                <label>New password:</label>
                <input name="newPassword" type="password" value={user.newPassword} onChange={handleChange}/>
                <div>{errors.newPassword}</div>
                </div><div>
                <label>Birthday:</label>
                <select aria-label="Month" name="birthday" value={user.birthday} onChange={handleSelect}>{months.map((op, i) =>{
                     return <option value={op} key={i}>{op}</option>
                })}</select>
                <select aria-label="Day" name="birthday" value={user.birthday} onChange={handleSelect}>{days.map((op, i) =>{
                     return <option value={op} key={i}>{op}</option>
                })}</select>
                <select aria-label="Year" name="birthday" value={user.birthday} onChange={handleSelect}>{years.map((op, i) =>{
                     return <option value={op} key={i}>{op}</option>
                })}</select>
                <div>{errors.birthday}</div>
                </div><div>
                <label>ID Number:</label>
                <input name="IdNumber" value={user.IdNumber} onChange={handleChange}/>
                <div>{errors.IdNumber}</div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}