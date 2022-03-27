import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetail, addProduct, productAmountSum, getReviews, userLogin, getAllUsers ,getAllOrders2} from "../redux/actions";
import useUser from "./Login/hooks/useUser";
import { useEffect } from "react";

export default  function OrderClient() {
    const dispatch = useDispatch();
    const { details, cart, user,orders } = useSelector((state) => state);
    const { isLogged } = useUser();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []); //eslint-disable-line
    useEffect(() => {
        dispatch(getAllOrders2());
    }, []); //eslint-disable-line
    console.log(orders)
    return (
        <div className='container'>
            {orders?.filter(el =>el.userId===user?.id).map(el=>(
                <div className='order'>
                    <div className='order__id'>
                        <span>Order ID:</span>
                        <span>{el.id}</span>
                    </div>
                    <div className='order__date'>
                        <span>Date:</span>
                        <span>{el.date}</span>
                    </div>
                    <div className='order__status'>
                        <span>Status:</span>
                        <span>{el.status}</span>
                    </div>
                    <ul>
                    <li>Total :{el.total}</li>
                    <li>Notification-Email :{el.notification_email}</li>
                    <li>Adress :{el.shipping_address}</li>
                    <li>City :{el.shipping_city}</li>
                    <li>Zip-Code : {el.shipping_zip_code}</li>
                    </ul>

                    <div className='order__products'>
                        <span>Products:</span>
                        <ul>
                            {el.products.map(el=>(
                                <li key={el.id}>
                                    <span>{el.name}</span>
                                    <span>{el.amount}</span>
                                </li>
                            ))}
                        </ul>
                        <br/>
                   
                    </div>
                </div>
            ))}
        </div>
    );
}


//
              /*   <div>
                <label>Order ID: {el.id}</label>
                <ul>
                    
                    <li>Date :{el.date}</li>
                    <li>Total :{el.total}</li>
                    <li>Status :{el.status}</li>
                    <li>Notification-Email :{el.notification_email}</li>
                    <li>Adress :{el.shipping_address}</li>
                    <li>City :{el.shipping_city}</li>
                    <li>Zip-Code : {el.shipping_zip_code}</li>
                    </ul>
                    <br/>
                    </div>
            ))}
        </div>
    );
}
 */





