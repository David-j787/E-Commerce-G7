import React from "react";
import { Link } from "react-router-dom";

const Product = ({id, name, price, discount, discounted_price, images}) => {
    return(
        <>
        {id ? (
          <Link to={`/product/${id}`} className="products__item">
            <figure>
              <img src={images} alt="images" />
            </figure>
            <h3>{name.slice(0, 55)}{name.length > 55 && "..."}</h3>
            <span className="price">{discount ? 
            <> 
              <span className="full-price" >$ {price}</span>
              <span>$ {discounted_price}</span>
            </>
             : <span>$ {price}</span> }</span>
          </Link>
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    )
}

export default Product;