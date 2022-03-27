import React from "react";
import { Link } from 'react-router-dom';

export default function Payments({ url, clearCart }){
    return(
        <div>
        <Link className="payments__btn" to={{pathname: url}}><button onClick={clearCart} disabled={!url.length}>Pay order</button></Link>
        </div>
    )
}
