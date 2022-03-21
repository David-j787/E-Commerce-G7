import React from "react";
import { Link } from "react-router-dom";

const Product = ({id, name, price, images}) => {
    return(
        <>
        {id ? (
          <Link to={`/product/${id}`} className="products__item">
            <figure>
              <img src={images} alt="images" />
            </figure>
            <h3>{name}</h3>
            <span>{price} USD</span>
          </Link>
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    )
}

export default Product;