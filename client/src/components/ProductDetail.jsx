import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from '../redux/actions';

export function ProductDetail(props){
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const productDetails = useSelector((state)=>state.details)

    useEffect(() => {
        dispatch(getProductDetail(id));
      }, []);

    return(
        <div>
            {productDetails ?
            <div>
                <h1>{productDetails.name}</h1>
                <img src={productDetails.images} alt="product"/>
                <h3>{productDetails.stock}</h3>
                <h3>{productDetails.description}</h3>
                <h2>{productDetails.price}</h2>
                <h2>{productDetails.categories}</h2>
                <h2>{productDetails.rating}</h2>
            </div>
        : (<h2>Loading...</h2>)}
        </div>
    )
}

export default ProductDetail