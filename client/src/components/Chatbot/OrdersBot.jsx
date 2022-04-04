import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useUser } from "../Login/hooks/useUser";
import { Link } from "react-router-dom";
import Orders from "../Orders";
import chatIcon from "../../assets/images/chatIconOK.png";
import { getOrderByUserId } from "../../redux/actions/index";



const OrdersBot = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    const { isLogged } = useUser();
   
   
    useEffect(() => {
        if (isLogged) {
            dispatch(getOrderByUserId(user?.id));
        }
    }, []); //eslint-disable-line

    return (
        <div className="chatIcon">
            <Link><img  src={chatIcon} alt=""  /></Link>
            <Orders />
        </div>
    );
};

    export default OrdersBot;


    
