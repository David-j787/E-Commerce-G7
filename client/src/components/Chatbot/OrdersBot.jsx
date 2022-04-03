import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useUser } from "../Login/hooks/useUser";
import { Link } from "react-router-dom";



const OrdersBot = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    const { isLogged } = useUser();
   
    useEffect(() => {
        if (isLogged) 
    return (
        <div className="shop">
        {
        <h2 >Orders</h2>
        }</div>
    );
       
    }, []); //eslint-disable-line
    return (
        <div className="shop">
            {
            <h4 >You must be logged in to see your orders</h4>
}{
            <Link to="/login">Login</Link>
            }
            </div>
            );
        }
    export default OrdersBot;


    
