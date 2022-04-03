import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../Login/hooks/useUser";
import { getVisitedProducts } from "../../redux/actions";

const Register = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    const { isLogged } = useUser();
    const history = useHistory();
    
    useEffect(() => {
        if (isLogged) dispatch(getVisitedProducts(user?.id));
    }, []); //eslint-disable-line
    
    return (
        <div className="shop">
        {

        history.push("/Register")
        }
        {!isLogged ? false : 
            <div>
           
            
            {history.push("/Register")}
     
 </div>}
        </div>
        );
    }
export default Register;