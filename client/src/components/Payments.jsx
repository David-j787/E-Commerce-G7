import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
/* import { useMercadopago } from 'react-sdk-mercadopago'; */

export default function Payments({ url }){
    return(
        <div>
        {url.length && <Link to={url}><button>Pay order</button></Link>}
        </div>
    )
}
