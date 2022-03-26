import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { clearReviews } from "../redux/actions";


export default function Reviews({user}) {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);
    
    useEffect(() => {
        return () => {
            dispatch(clearReviews());
        }
    },[])
    
    return (
        <div className='reviews'>
            <div>
            <p>Reviews :</p> 
            {/* <Link className='updateBtn' to={'/editReview'}><button>Edit review</button></Link> */}
            {reviews.length > 0 ? reviews.map((review) =>
                <p key={review.id}><br/>{user?.name} {user?.last_name} ({user?.username}) Rating: {[...Array(review?.rate)].map(star =>{return <FaStar color="orange" size={15}/>}) }<br/> 
                {review?.comment} </p>) : <p>No reviews yet</p>}
            </div>
        </div>
    )
}
