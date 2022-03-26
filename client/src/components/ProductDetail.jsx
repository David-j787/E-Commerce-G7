import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail, addProduct, productAmountSum, getReviews, userLogin } from '../redux/actions';
import useUser from './Login/hooks/useUser';
import ReviewAndRating from './ReviewAndRating';
import Reviews from './Reviews';

export function ProductDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const { details, cart ,reviews,user} = useSelector((state) => state);

    const { isLogged } = useUser();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, []); //eslint-disable-line

    useEffect(() => {
        dispatch(getReviews(id));
    }, []); //eslint-disable-line
    console.log(details.id);


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
            <div>
                <div className='productDetail'>
                    <figure className='productDetail__image'>
                        <img src={details.images} alt="product" width='350px' height='250px' />
                    </figure>
                    <div className='productDetail__description'>
                        <h2 className='name'>{details.name}</h2>
                        <ul className='categories'>{details.categories?.map(el => <li key={el.id}>{el.name}</li>)}</ul>
                        <span className='price'>US$ {details.price}</span>
                        <p className='description'>{details.description}</p>
                        {details.stock ? <p className='stock'><span>In stock</span> ({details.stock} available)</p> : <p className='stock'><span>⚠️This product isn't available for shopping</span></p>}
                        <p className='rating'><span>Rating:</span> {details.rating}</p>
                        <button className='addBtn' disabled={buttonDisabled} onClick={() => handleAddCart(details)}>add product</button>
                        <Link className='updateBtn' to={`/product/update/${id}`}><button>Edit product</button></Link>
                    </div>
                </div>
                <div>
                    {isLogged && <ReviewAndRating  productId={details.id}/>}
                              </div>
                              <Reviews  className='reviews'/>
                </div>
                : (<h2>Loading...</h2>)}
        </div>
    )
}

export default ProductDetail;
