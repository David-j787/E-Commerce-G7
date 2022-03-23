import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';

export default function AdminProductsList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    useEffect(()=>{
        dispatch(getAllProducts());
    },[])
    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Products List</div>
            <div className='tableHeader'><div>Product name</div>|<div>Price</div>|<div>Stock</div>|<div>Rate</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {products?.map(prod => <li className='itemList' key={prod.id}>
                        <div>{prod.name.slice(0, 35)}{prod.name.length > 35 && '...'}</div>
                        <div>US$ {prod.price}</div>
                        <div>{prod.stock}</div>
                        <div>{prod.rating}</div>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        
                        </li>)}
                </ul>
            </div>
        </div>
    )
}
