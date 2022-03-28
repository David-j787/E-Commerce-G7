import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import AdminSearchBar from './AdminSearchBar';
import swal from 'sweetalert';

export default function AdminProductsList({showComponent, getId}) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    const addProduct = () => {
        showComponent('addProduct')
    }

    const editProduct = (productId) => {
        getId(productId);
        showComponent('updateProduct')
    }

    const deleteProduct = async (productId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        try {
            swal({
                title: 'Do you want delete the user?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                    await axios.delete('/product', {data: {token, productId}});
                    swal({
                        title: 'You deleted the product with ID: ' + productId,
                        text: ' ',
                        icon: 'success',
                        timer: 2000,
                        button: null
                    })
                    dispatch(getAllProducts());
                }
            })
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 2000,
                button: null
            })
            console.log(error);
        }
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'>Products Management <button onClick={addProduct} className='componentTitle__button'>Add new Product</button></div>
            <AdminSearchBar search='products' />
            <div className='tableHeader'><div>Product name</div>|<div>Price</div>|<div>Stock</div>|<div>Rate</div>|<div>Action</div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(products) ? products?.map(prod => <li className='prodList' key={prod.id}>
                        <div>{prod.name.slice(0, 35)}{prod.name.length > 35 && '...'}</div>
                        <div>US$ {prod.price}</div>
                        <div>{prod.stock}</div>
                        <div>{prod.rating}</div>
                        <div>
                            <button onClick={e => editProduct(prod.id)} className='adminCP__button'>Edit</button>
                            <button onClick={e => deleteProduct(prod.id)}className='adminCP__button'>Delete</button>
                        </div>
                        
                        </li>) : <div className='noDataFound'>{products}</div>}
                </ul>
            </div>
        </div>
    )
}