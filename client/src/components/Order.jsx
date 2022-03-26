import React from "react";
import { Link } from "react-router-dom";

export function Order({ date, products }) {
  return (
    <div>
      {products.map((e) => {
        return (
          <div key={e.id}>
            <span>Date: {date}</span>
            <br />
            <Link to={`/product/${e.id}`}>{e.name}</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Order;
