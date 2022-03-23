import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';

export default function ReviewAndRating() {
    const [rating, setRating] = useState(0)
  
  return (
    <div>
      <textarea cols="30" rows="10"></textarea>
      <button type="submit">Submit Review</button>
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