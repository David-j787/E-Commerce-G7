import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

export default function Visited({id, name, images, price, rating}){

    return(
        <div className="">
            <div>
            {id ? (
            <Link to={`/product/${id}`} className="visited__item">
                <figure>
                <img src={images} alt="images" />
                </figure>
                <h3>{name.slice(0, 30)}{name.length > 30 && "..."}</h3>
                <span>{price} USD</span>
                <span>{!rating ? <span><FormattedMessage id="app.no-rated" defaultMessage="No rated yet"/></span> : [...Array(rating)].map(star =>{return <FaStar color="orange" size={16}/>})}</span>
            </Link>
            ) : (
            <h2>Loading...</h2>
            )}
            </div>
        </div>
    )
}
