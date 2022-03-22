import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail, addProduct, productAmountSum } from '../redux/actions';

export function ProductDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const { details, cart } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, []); //eslint-disable-line

    const handleAddCart = (product) => {
        const cartProduct = cart.filter(Product => Product.id === product.id)
        if (cartProduct.length && cartProduct[0].stock > cartProduct[0].amount)
            return dispatch(productAmountSum(product.id))
        if (!cartProduct.length) {
            product.amount = 1
            dispatch(addProduct(product))
        }
    }

    const buttonDisabled = details.stock <= 0 ? true : false

    return (
        <div className='container'>
            {details ?
                <div className='productDetail'>
                    <figure className='productDetail__image'>
                        <img src={details.images} alt="product" width='350px' height='250px' />
                    </figure>
                    <div className='productDetail__description'>
                        <h2 className='name'>{details.name}</h2>
                        <span className='price'>$/.{details.price}</span>
                        <p className='description'>{details.description}</p>
                        {details.stock ? <p className='stock'><span>Stock:</span> {details.stock}</p> : <p className='stock'><span>⚠️This product isn't available for shopping</span></p>}
                        <ul className='categories'>{details.categories?.map(el => <li key={el.id}>{el.name}</li>)}</ul>
                        <p className='rating'><span>Rating:</span> {details.rating}</p>
                        <button className='addBtn' disabled={buttonDisabled} onClick={() => handleAddCart(details)}>add product</button>
                        <Link className='updateBtn' to={`/product/update/${id}`}><button>Edit product</button></Link>
                    </div>
                </div>
                : (<h2>Loading...</h2>)}
        </div>
    )
}

export default ProductDetail;
