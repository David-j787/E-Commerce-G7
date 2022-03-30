import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { useDispatch, useSelector } from "react-redux";
import { verifyTwoFA } from "../redux/actions";

export default function TwoFaVerify() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [code, setCode] = useState('')

  const handleCode = event => {
    setCode(event.target.value)
};

  const handleSubmit = async event => {
    event.preventDefault();
    try{
      const response = await axios.post('/twofa/verify', {userId: user.id, code});
      if(response.status === 200) {
        swal({
          title: "Code Verified!",
          text: "You can proceed to the page",
          icon: "success",
          timer: 3000
        });
        dispatch(verifyTwoFA());
        await axios.post('/twofa/set', {userId: user.id});
      }else {
        swal({
          title: "Wrong code!",
          text: "Please verify your code and try again!",
          icon: "error",
          timer: 3000
        });
      }
    }
    catch (error) {
      console.log(error)
      swal({
        title: "Something went wrong",
        text: "The 2FA code is not valid",
        icon: "error",
        button: "Ok"
      });
    }
  }

  return (
  <div className="resetPassword">
      <form className="resetPassword__form" onSubmit={handleSubmit}>       
        <h2 className="resetPassword__title">2FA Verification</h2>
        <input value={code} type="text" name="2FAcode" placeholder="Introduce your 2FA code" onChange={handleCode}/>
        <button type="submit">Verify</button>
      </form>
    </div>
  )
}