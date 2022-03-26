import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Payments({ url }){

    return(
        <>
        <Link target='_blank' to={url}>
            <button disabled={!url}>Pay order</button>
        </Link>
        </>
    )
}
