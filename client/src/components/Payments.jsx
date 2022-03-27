import React from "react";

export default function Payments({ url, clearCart }){
    return(
        <div>
        <a className="payments__btn" href={url}><button onClick={clearCart} disabled={!url.length}>Pay order</button></a>
        </div>
    )
}
