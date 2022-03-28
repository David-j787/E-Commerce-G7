import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'
import { clearReviews, getAllUsers, getReviews } from "../redux/actions";

export default function Reviews({id}) {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);
   
    const users = useSelector((state) => state.allUsers);
 
   
   useEffect(() => {
       dispatch(getAllUsers());
       dispatch(getReviews(id));
       return () => {
           dispatch(clearReviews());
        }
    },[])
 
    return (
        <div className='reviews'>
            <div>
            <p>Reviews :</p> 
            {reviews?.length > 0 ? reviews?.map((review) => {
                const user = users.find(user => user?.id === review?.userId);
                return <p key={review.id}><br/>{user?.name } {user?.last_name} ({user?.username}) Rating: {[...Array(review?.rate)].map(star =>{return <FaStar color="orange" size={15}/>}) }<br/> 
                {review?.comment} </p>}) : <p>No reviews yet</p>}
            </div>
        </div>
    )
}
