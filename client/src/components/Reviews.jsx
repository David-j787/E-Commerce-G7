import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { clearReviews } from "../redux/actions";


export default function Reviews({user}) {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);
   
   const userS = useSelector((state) => state.allUsers);
   userS.sort((a, b) => b.id - a.id);
   
   
   
    console.log( userS)
   
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
                <p key={review.id}><br/>{userS[review.id]?.name } {userS[review.id]?.last_name} ({userS[review.id]?.username}) Rating: {[...Array(review?.rate)].map(star =>{return <FaStar color="orange" size={15}/>}) }<br/> 
                {review?.comment} </p>) : <p>No reviews yet</p>}
            </div>
        </div>
    )
}
