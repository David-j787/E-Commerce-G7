import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductFav({id, name, images, price, rating, discount, discounted_price}){

    return(
        <div className="">
            <div>
            {id ? (
            <Link to={`/product/${id}`} className="visited__item">
                <figure>
                <img src={images} alt="images" width='250px' height='250px'/>
                </figure>
                <h3>{name.slice(0, 30)}{name.length > 30 && "..."}</h3>
                <span className="price">{discount ? 
                <> 
                    <span className="full-price" >$ {price}</span>
                    <span>$ {discounted_price}</span>
                </>
                : <span>$ {price}</span> }</span>
                <span>{!rating ? <span>No rated yet</span> : [...Array(rating)].map(star =>{return <FaStar color="orange" size={16}/>})}</span>
            </Link>
            ) : (
            <h2>Loading...</h2>
            )}
            </div>
        </div>
    )
}
