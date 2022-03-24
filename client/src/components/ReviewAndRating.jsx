import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';

export default function ReviewAndRating({productId}) {
  const [rating, setRating] = useState(0);
  const [input, setInput] = useState('');

  const user = useSelector(state => state.user);

  const handleInput = e => {
    setInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/review', {
      review: input,
      rate: rating,
      userId: user.id,
      productId: productId
    });
    if(response.data) alert('Se agregó el comment')
    else alert('Surgio un error')
  }


  return (
    <div>
      <textarea value={input} onChange={handleInput} cols="30" rows="10"></textarea>
      <button onClick={handleSubmit}>Submit Review</button>
        <Rating
          name="Rating Label"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      {rating}
    </div>
  )
}