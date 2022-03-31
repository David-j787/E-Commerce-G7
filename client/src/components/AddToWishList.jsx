import React, { useEffect, useState } from "react";
import HeartOne from "../assets/images/corazon_sin_fondo.png";
import HeartTwo from "../assets/images/corazon_con_fondo.png";
import axios from "axios";
import swal from "sweetalert";

export function AddToWishList({ userId, productId }) {

  const [adding, setAdding] = useState(false);

  const [wishlist, setWishlist] = useState();

  useEffect(() => {
    setWishlist({
      userId: userId,
      productId: productId,
    });
  }, []); // eslint-disable-next-line

  const handleSubmit = async (e) => {
    setAdding(true)
    e.preventDefault();
    const response = axios.post("/wishlist", wishlist);
    if ((await response).status === 200) {
      swal({
        title: "Added to wishlist!",
        text: " ",
        icon: "success",
        timer: 3000,
        button: null,
      });
      setWishlist({
        userId: "",
        productId: "",
      });
    } else {
      swal({
        title: "Something went wrong",
        text: " ",
        icon: "error",
        timer: 3000,
        button: null,
      });
    }
  };
  return (
    <div >
      {adding ? (
        <button onClick={() => setAdding(false)}
        >
          <img src={HeartTwo} alt="added" width="40px" heigth="40px" />
        </button>
      ) : (
        <button type="submit"
        onClick={handleSubmit}>
          <img src={HeartOne} alt="added" width="40px" heigth="40px" />
        </button>
      )}
    </div>
  );
}

export default AddToWishList;
