import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import useUser from "../Login/hooks/useUser";
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
        <div>
            {!isLogged ? <span>To see your orders you must be Logged. Please Login <Link to= "/login">here</Link></span>
            : <span>You can see your orders <Link to="/user/account/orders">here</Link></span>            }
        </div>
    );
};

export default OrdersBot;   
