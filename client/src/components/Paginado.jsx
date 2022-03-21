import React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Products from '../components/Products';






export function Paginado({products, productsPerPage, paginate, currentPage, setCurrentPage, order, setOrder,}) {
    const dispatch = useDispatch();   
useEffect(() => {
    dispatch(getAllProducts());
    }, [dispatch]);


    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(products/productsPerPage); i++) {
        pageNumbers.push(i)
    }
 
   

    return(
        <nav >
                        

            {
                pageNumbers?.map(number => (
                    <button key={number} onClick={() => paginate(number)} >{number}</button>
                ))
            }
        </nav>
        
    )
}



export default Paginado;