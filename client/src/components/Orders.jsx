import React from 'react';
import { useSelector } from 'react-redux';
import Order from './Order';

export function Orders(){

    const { user, user_order } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderByUserId(user.id));
    }, [user.id]);

    return (
        <div>
        {user_order.products?.map((order) => {
            return (
            <div key={user_order.id}>
                <Order date={user_order.date} productId={order.productId} name={order.name}/>
            </div>
            );
        })}
        </div>
    );
}

export default Order;