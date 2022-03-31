import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail, addProduct, productAmountSum, getReviews } from '../redux/actions';
import useUser from './Login/hooks/useUser';
import ReviewAndRating from './ReviewAndRating';
import Reviews from './Reviews';
import axios from 'axios';
import WhatsApp from './WhatsApp';

export function ProductDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const { details, cart, user, reviews } = useSelector((state) => state);
    const alreadyCommented = reviews.find(review => user?.id === review?.userId);

    const { isLogged } = useUser();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, []); //eslint-disable-line

    useEffect(() => {
        dispatch(getReviews(id));
    }, []); //eslint-disable-line

    async function saveVisitedProducts() {
        await axios.post(`/visited`, { userId: user?.id, productId: id });
    }

    useEffect(() => {
        if (isLogged) {
            saveVisitedProducts();
        }
    }, [])

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
        <>
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
                                <p className='rating'><span>Rating:</span> {details.rating?.toString().slice(0, 3)}</p>
                                <button className='addBtn' disabled={buttonDisabled} onClick={() => handleAddCart(details)}>add product</button>
                                {user?.roleId < 3 && <Link className='updateBtn' to={`/product/update/${id}`}><button>Edit product</button></Link>}
                            </div>
                        </div>
                        <div className='wrapper-reviews'>
                            <Reviews id={id} className='reviews' />
                            {isLogged && !alreadyCommented ?
                                <ReviewAndRating productId={details.id} /> :
                                <p style={{ fontStyle: "italic", fontFamily: "roboto", fontSize: ".95rem" }}>You already review this product. Thanks for your feedback</p>}
                        </div>
                    </div>
                    : (<h2>Loading...</h2>)}
            </div>
            <WhatsApp />
        </>
    )
}

export default ProductDetail;
