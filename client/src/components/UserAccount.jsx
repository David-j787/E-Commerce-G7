import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TwoFaActivate from "./TwoFaActivate";

export function UserAccount(){

    const user = useSelector(state=> state?.user)
    
    useEffect(()=>{
        setUserData({
            user: user?.username,
            email: user?.email,
            name: user?.name,
            last_name: user?.last_name,
            country: user?.country,
            city: user?.city,
            zip_code: user?.zip_code,
            address: user?.address,
            birthday: user?.date_of_birth
        })

    }, [user])

    const [userData, setUserData] = useState({})

    return(
        <div className="userAccount">
            <div className="container">
                <div className="userAccount__title">
                    <h3>Account data</h3>
                </div>
                <div className="userAccount__item">
                    <span>Username: </span> 
                    <span name="user" value={userData.user}>{userData.user}</span>
                </div>
                <div className="userAccount__item">
                    <span>E-mail: </span>
                    <span name="email" value={userData.email}>{userData.email}</span>
                </div>

                <div className="userAccount__title">
                    <h3>Personal Information</h3>
                </div>
                <div className="userAccount__item">
                    <span>Full name: </span> 
                    <span name="name" value={userData.name}>{userData.name} </span>
                    <span name="last_name" value={userData.last_name}> {userData.last_name}</span>
                </div>
                
                <div className="userAccount__item">
                    <span>Country: </span>
                    <span name="country" value={userData.country}>{userData.country}</span>
                </div>
                
                <div className="userAccount__item">
                    <span>City: </span>
                    <span name="city" value={userData.city}>{userData.city}</span>
                </div>
                
                <div className="userAccount__item">
                    <span>Zip Code: </span>  
                    <span name="zip_code" value={userData.zip_code}>{userData.zip_code}</span>
                </div>
                
                <div className="userAccount__item">
                    <span>Address: </span>
                    <span name="address" value={userData.address}>{userData.address}</span>
                </div>
                
                <div className="userAccount__item">
                    <span>Birthday: </span>
                    <span name="birthday" value={userData.birthday}>{userData.birthday}</span>
                </div>
                
                    <div className="userAccount__buttons">
                        <Link to='/user/account/edit' className="userAccount__button">EDIT ACCOUNT</Link>
                        <TwoFaActivate/>
                    </div>
              
            </div>
        </div>
    )
}

export default UserAccount;