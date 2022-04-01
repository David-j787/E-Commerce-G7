import React, { useEffect, useState } from "react";
import HeartOne from "../assets/images/png-corazon-.png";
import HeartTwo from "../assets/images/corazon_con_fondo.png";
import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "../redux/actions";

export function AddToWishList({ userId, productId }) {

  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user);
  const  stateWishlist  = useSelector((state)=> state.wishlist)
  const  stateDetail  = useSelector((state)=> state.details)

  const [adding, setAdding] = useState(false);

  const [wishlist, setWishlist] = useState();

  useEffect(()=>{
      setButton()
    }, [])

  const setButton = () => {
    const resultSearch = stateWishlist?.map(el=> el.id).includes(stateDetail.id)
    if(resultSearch) setAdding(true)
    else return setAdding(false)
  }

  useEffect(() => {
    setWishlist({
      userId: userId,
      productId: productId,
    });
  }, [stateWishlist]); // eslint-disable-next-line

  const handleSubmit = async () => {
    setAdding(true);
    const response = await axios.post('/wishlist', wishlist)
    dispatch(getUserWishlist(id))
    if (response.status === 200) {
      swal({
        title: "Added to wishlist!",
        text: " ",
        icon: "success",
        timer: 3000,
        button: null,
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

  const handleRemove = async () => {
    setAdding(false);
    const response = await axios.delete("/wishlist", {data: wishlist});
    dispatch(getUserWishlist(id))
    if (response.status === 200) {
      swal({
        title: "Removed from wishlist!",
        text: " ",
        icon: "success",
        timer: 3000,
        button: null,
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
    <div>
      {adding ? (
        <img
          src={HeartTwo}
          alt="added"
          width="40px"
          heigth="40px"
          onClick={handleRemove}
        />
      ) : (
        <img
          src={HeartOne}
          alt="added"
          width="36px"
          heigth="36px"
          onClick={handleSubmit}
        />
      )}
    </div>
  );
}

export default AddToWishList;
