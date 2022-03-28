import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Order from "./Order";
import { getOrderByUserId } from "../redux/actions";
import { Link } from "react-router-dom";

export function Orders() {
  const orders = useSelector((state) => state.user_order);
  const id = useSelector((state) => state.user?.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderByUserId(id));
  }, [id]);

  return (
    <div className="orders">
      <div className="container">
        <h2 className="orders__title">MY ORDERS</h2>
        <div className="orders__wrapper">
          {orders?.length ?
          orders?.map((order) =>
             
                <Order order={order} key={order.id} />
            
            ) : <div>You don't have orders to show</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Orders;
