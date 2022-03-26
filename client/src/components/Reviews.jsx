import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";




export default function Reviews() {
    //const reviews = useSelector((state) => state.details.reviews);
    //const reviews = [{id: 1, name: 'John', rating: 5, comment: 'Good product'}, {id: 2, name: 'Mary', rating: 4, comment: 'Good product'}, {id: 3, name: 'John', rating: 3, comment: 'Good product'}];
 
    const reviews = useSelector((state) => state.reviews);

    return (
        <div  className='reviews'>
            <div>

            </div>
            <p>Reviews :</p> 
           <Link className='updateBtn' to={'/editReview'}><button>Edit review</button></Link>
            {reviews.length > 0 ? reviews.map((review) => <p key={review.id}><br></br>User :{review.name} Detail:{review.comment} Rating:{[...Array(review.rate)].map(star =>{return <FaStar color="orange" size={20}/>}) }</p>) : <p>No reviews yet</p>}
           

</div>
    )
    }
