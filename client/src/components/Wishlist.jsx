import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "../redux/actions";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export function Wishlist() {
  const dispatch = useDispatch();
  const { user, wishlist } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserWishlist(user?.id));
  }, [user]);

  return (
    <div>
      <div className="container">
        <h2 className="orders__title">MY WISHLIST</h2>
        {
            wishlist[0]?.map((prod) => {
            return (
                <div key={prod.id}>
                <Link to={`/product/${prod.id}`} className="visited__item">
                <figure>
                    <img src={prod.images} alt="images" width='250px' height='250px'/>
                </figure>
                </Link> 
                <span>{prod.price} USD</span>
                <span>
                    <br/>
                    {!prod.rating ? (
                    <span>No rated yet</span>
                    ) : (
                    [...Array(prod.rating)].map((star) => {
                        return <FaStar color="orange" size={16} />;
                    })
                    )}
                </span>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
