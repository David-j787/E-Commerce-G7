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
    <div>
      <h2>MY ORDERS</h2>
      <br></br>
      {orders?.map((order) => 
          <div key={order.id}>
            <Order order={order} />
          </div>
        )}
    </div>
  );
}

export default Orders;
