import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Payments({ url }){

    const mercadopago = useMercadopago.v2('TEST-61750678-c02d-45ad-a0f7-ebacfa49fb06',{
        locale: 'en-US'
    });

    useEffect(()=> {
        if(mercadopago){
            mercadopago.checkout({
                preference: {
                    id: '1095956071-087f2084-e831-4f13-a799-86f07a5b3e69'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay order'
                }
            })
        }
    }, 
    [mercadopago]);
    return(
        <>
        <div className="cho-container"/>
        {/* <Link target='_blank' to={url}>
            <button disabled={!url}>Pay order</button>
        </Link> */}
        </>
    )
}
