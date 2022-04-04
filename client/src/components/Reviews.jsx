import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'
import { clearReviews, getAllUsers, getProductDetail, getReviews } from "../redux/actions";
import axios from "axios";
import swal from 'sweetalert';

export default function Reviews({id}) {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);
   
    const users = useSelector((state) => state.allUsers);
    const userLogged = useSelector((state) => state.user);
 
   
   useEffect(() => {
       dispatch(getAllUsers());
       return () => {
           dispatch(clearReviews());
        }
    },[])

    useEffect(()=> {
        dispatch(getReviews(id));
    },[dispatch])

    const deleteReview = async (userId, productId) => {
        const response = await axios.delete('/review', { data: {userId, productId}});
        if(response.status === 200) {
            swal({
                title: 'Review deleted successfully!',
                text: ' ',
                icon: 'success',
                timer: 3000,
                button: null
            })
            dispatch(getReviews(id));
            dispatch(getProductDetail(id));
        }
    }
 
    return (
        <div className='reviews'>
            <p className="reviews__title">Reviews :</p> 
            {reviews?.length > 0 ? reviews?.map((review) => {
                const user = users.find(user => user?.id === review?.userId);
                return <div className="review" key={review.id}>
                            <div className="reviews__name"><span>User: </span> {user?.name} {user?.last_name} ({user?.username}) {review?.userId === userLogged?.id && <button className="reviews__btn" onClick={e => deleteReview(review?.userId, review?.productId)}>Delete</button>}</div>
                            <div><span>Rating: </span> {[...Array(review?.rate)].map(star =>{return <FaStar key={Math.random().toString(16).slice(2)} color="orange" size={15}/>})}</div>
                            <div className="reviews__comment"><span>Comment: </span><span className="comment">{review?.comment}</span></div>
                        </div>}) : <p>No reviews yet</p>}
        </div>
    )
}
