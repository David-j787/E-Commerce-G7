import React from "react";
import { Link } from 'react-router-dom';

export default function Payments({ url }){
    return(
        <div>
        {url.length && <Link to={{pathname: url}}><button>Pay order</button></Link>}
        </div>
    )
}
