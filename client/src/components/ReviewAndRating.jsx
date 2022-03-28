import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import swal from 'sweetalert';
import { getReviews } from "../redux/actions";

export default function ReviewAndRating({productId}) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [input, setInput] = useState('');

  const user = useSelector(state => state.user);

  const handleInput = e => {
    setInput(e.target.value)
   
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('/review', {
      review: input,
      rate: rating,
      userId: user.id,
      productId: productId
    });
  
    if(response.status === 200) {
      swal({
        title: 'Your review has been saved',
        text: 'Thanks for your feedback',
        icon: 'success',
        timer: 3000,
        button: null
      })
    }
    dispatch(getReviews(productId));
  }


  return (
    <div className="reviewAndRating">
      <textarea value={input} onChange={handleInput} cols="30" rows="10"></textarea>
      <div className="reviewAndRating__rating">

        <Rating
          name="Rating Label"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      <span className="rating-number">{rating}</span>
      </div>
          <button onClick={handleSubmit}>Submit Review</button>
    </div>
  )
}