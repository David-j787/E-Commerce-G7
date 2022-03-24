import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';

export default function AdminProductsList({showComponent, getId}) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    const editProduct = (productId) => {
        getId(productId);
        showComponent('updateProduct')
    }

    const deleteProduct = async (productId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        const response = await axios.delete('http://localhost:3001/product', {data: {token, productId}});
        if(response.status === 200){
            dispatch(getAllProducts());
            alert(response.data);
        } 
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Products</div>
            <div className='tableHeader'><div>Product name</div>|<div>Price</div>|<div>Stock</div>|<div>Rate</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {products?.map(prod => <li className='prodList' key={prod.id}>
                        <div>{prod.name.slice(0, 35)}{prod.name.length > 35 && '...'}</div>
                        <div>US$ {prod.price}</div>
                        <div>{prod.stock}</div>
                        <div>{prod.rating}</div>
                        <div>
                            <button onClick={e => editProduct(prod.id)} className='adminCP__button'>Edit</button>
                            <button onClick={e => deleteProduct(prod.id)}className='adminCP__button'>Delete</button>
                        </div>
                        
                        </li>)}
                </ul>
            </div>
        </div>
    )
}
