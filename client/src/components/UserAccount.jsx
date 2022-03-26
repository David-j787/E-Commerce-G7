import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserAccount(){

    const { user } = useSelector(state=> state)
    
    useEffect(()=>{
        setUserData({
            user: user.username,
            email: user.email,
            name: user.name,
            last_name: user.last_name,
            country: user.country,
            city: user.city,
            zip_code: user.zip_code,
            address: user.address,
            birthday: user.date_of_birth
        })

    }, [user])

    const [userData, setUserData] = useState({})

    return(
        <div>
            <h3>Account data</h3>
            <label>User</label><br/>
            <span name="user" value={userData.user}>{userData.user}</span><br/>
            <label>E-mail</label><br/>
            <span name="email" value={userData.email}>{userData.email}</span><br/>
            <br></br>
            <h3>Personal information</h3>
            <label>Full name</label><br/>
            <span name="name" value={userData.name}>{userData.name} </span>
            <span name="last_name" value={userData.last_name}> {userData.last_name}</span><br/>
            <label>Country</label><br/>
            <span name="country" value={userData.country}>{userData.country}</span><br/>
            <label>City</label><br/>
            <span name="city" value={userData.city}>{userData.city}</span><br/>
            <label>Zip Code</label><br/>
            <span name="zip_code" value={userData.zip_code}>{userData.zip_code}</span><br/>
            <label>Address</label><br/>
            <span name="address" value={userData.address}>{userData.address}</span><br/>
            <label>Bithday</label><br/>
            <span name="birthday" value={userData.birthday}>{userData.birthday}</span><br/>
            <br></br>
            <Link to="/user/account"><button>BACK</button></Link>
            <Link to='#'><button>EDIT ACCOUNT</button></Link>
        </div>
    )
}

export default UserAccount;